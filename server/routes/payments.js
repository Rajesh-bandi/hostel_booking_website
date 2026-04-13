import express from 'express';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import Payment from '../models/Payment.js';
import Booking from '../models/Booking.js';
import Wallet from '../models/Wallet.js';
import Hostel from '../models/Hostel.js';
import { authenticateStudent } from '../middleware/auth.js';

const router = express.Router();

// ─── Razorpay Instance (TEST MODE) ──────────────────────────────────
let razorpay = null;
function getRazorpay() {
  if (razorpay) return razorpay;
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (keyId && keySecret && keyId !== 'rzp_test_XXXXXXXXXXXX') {
    razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
    console.log('💳 Razorpay initialized (TEST MODE)');
    return razorpay;
  }
  console.log('💳 Razorpay NOT configured — using simulated payments');
  return null;
}

// ─── Helper: Generate 6-digit verification code ─────────────────────
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ─── GET /api/payments/razorpay-key ─────────────────────────────────
// @desc    Return Razorpay public key for frontend checkout
// @access  Public
router.get('/razorpay-key', (req, res) => {
  res.json({
    success: true,
    keyId: process.env.RAZORPAY_KEY_ID || '',
    testMode: true
  });
});

// ─── POST /api/payments/create-order ────────────────────────────────
// @desc    Create a Razorpay order for a booking
// @access  Private (Student)
router.post('/create-order', authenticateStudent, async (req, res) => {
  try {
    const { bookingId } = req.body;
    const studentId = req.user.id;

    if (!bookingId) {
      return res.status(400).json({ success: false, message: 'Booking ID is required' });
    }

    // Find the booking
    const booking = await Booking.findById(bookingId).populate('hostel');
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // Verify student owns this booking
    if (booking.student.toString() !== studentId.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    // Must be in approved or pending_confirmation status
    if (!['approved', 'pending_confirmation'].includes(booking.status)) {
      return res.status(400).json({
        success: false,
        message: `Booking must be approved before payment. Current status: ${booking.status}`
      });
    }

    // Check if already paid
    if (booking.isPaid) {
      return res.status(400).json({ success: false, message: 'Booking is already paid' });
    }

    const amount = booking.totalPrice || booking.rent;
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid booking amount' });
    }

    // Check wallet balance — deduct if available
    let walletDeduction = 0;
    let amountToPay = amount;
    const wallet = await Wallet.findOne({ user: studentId });
    if (wallet && wallet.balance > 0) {
      walletDeduction = Math.min(wallet.balance, amount);
      amountToPay = amount - walletDeduction;
    }

    // If wallet covers full amount, skip Razorpay
    if (amountToPay <= 0) {
      // Full wallet payment
      const verificationCode = generateVerificationCode();

      // Deduct from wallet
      wallet.balance -= walletDeduction;
      wallet.transactions.push({
        type: 'debit',
        amount: walletDeduction,
        description: `Payment for booking at ${booking.hostel?.name || 'hostel'}`,
        relatedBooking: booking._id,
        balanceAfter: wallet.balance
      });
      await wallet.save();

      // Create payment record
      const payment = await Payment.create({
        booking: booking._id,
        student: studentId,
        owner: booking.hostel?.owner,
        hostel: booking.hostel._id || booking.hostel,
        amount: amount,
        status: 'escrow',
        escrowAt: new Date(),
        razorpayOrderId: 'WALLET_PAYMENT',
        razorpayPaymentId: 'WALLET_' + Date.now(),
      });

      // Update booking
      booking.status = 'pending_confirmation';
      booking.isPaid = true;
      booking.verificationCode = verificationCode;
      booking.verificationCodeExpiry = new Date(Date.now() + 72 * 60 * 60 * 1000); // 72 hours
      await booking.save();

      console.log(`💰 Full wallet payment for booking ${booking._id}: ₹${amount}`);
      console.log(`🔑 Verification code: ${verificationCode}`);

      return res.json({
        success: true,
        walletPayment: true,
        verificationCode,
        payment: { transactionId: payment.transactionId, amount, status: 'escrow' },
        message: 'Payment completed from wallet! Share the verification code with the hostel owner.'
      });
    }

    // Create Razorpay order
    const rzp = getRazorpay();
    let order;

    if (rzp) {
      order = await rzp.orders.create({
        amount: Math.round(amountToPay * 100), // Razorpay uses paise
        currency: 'INR',
        receipt: `booking_${booking._id}`,
        notes: {
          bookingId: booking._id.toString(),
          studentId: studentId.toString(),
          hostelName: booking.hostel?.name || '',
          testMode: 'true'
        }
      });
    } else {
      // Simulated order (no Razorpay configured)
      order = {
        id: 'order_SIM_' + Date.now(),
        amount: Math.round(amountToPay * 100),
        currency: 'INR',
        receipt: `booking_${booking._id}`,
        status: 'created'
      };
    }

    // Create pending payment record
    await Payment.create({
      booking: booking._id,
      student: studentId,
      owner: booking.hostel?.owner,
      hostel: booking.hostel._id || booking.hostel,
      amount: amount,
      razorpayOrderId: order.id,
      status: 'pending',
    });

    res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
      walletDeduction,
      amountToPay,
      totalAmount: amount,
      bookingId: booking._id,
      hostelName: booking.hostel?.name || '',
      simulated: !rzp // frontend knows to auto-verify if simulated
    });

  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ success: false, message: 'Error creating payment order' });
  }
});

// ─── POST /api/payments/verify ──────────────────────────────────────
// @desc    Verify Razorpay payment and move to escrow
// @access  Private (Student)
router.post('/verify', authenticateStudent, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;
    const studentId = req.user.id;

    if (!bookingId) {
      return res.status(400).json({ success: false, message: 'Booking ID is required' });
    }

    // Find payment
    const payment = await Payment.findOne({
      booking: bookingId,
      student: studentId,
      status: 'pending'
    });

    if (!payment) {
      return res.status(404).json({ success: false, message: 'Payment not found' });
    }

    // Verify Razorpay signature (if real Razorpay keys configured)
    const rzp = getRazorpay();
    if (rzp && razorpay_signature) {
      const body = razorpay_order_id + '|' + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body)
        .digest('hex');

      if (expectedSignature !== razorpay_signature) {
        payment.status = 'failed';
        await payment.save();
        return res.status(400).json({ success: false, message: 'Payment verification failed — invalid signature' });
      }
    }

    // Generate verification code
    const verificationCode = generateVerificationCode();

    // Find booking and get wallet info for deduction
    const booking = await Booking.findById(bookingId).populate('hostel');
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // Apply wallet deduction if applicable
    const wallet = await Wallet.findOne({ user: studentId });
    const totalAmount = payment.amount;
    const razorpayAmount = (payment.razorpayOrderId && !payment.razorpayOrderId.startsWith('order_SIM'))
      ? totalAmount
      : totalAmount;

    if (wallet && wallet.balance > 0) {
      const walletDeduction = Math.min(wallet.balance, totalAmount);
      if (walletDeduction > 0) {
        wallet.balance -= walletDeduction;
        wallet.transactions.push({
          type: 'debit',
          amount: walletDeduction,
          description: `Partial payment for booking at ${booking.hostel?.name || 'hostel'}`,
          relatedBooking: booking._id,
          relatedPayment: payment._id,
          balanceAfter: wallet.balance
        });
        await wallet.save();
      }
    }

    // Update payment → ESCROW
    payment.status = 'escrow';
    payment.escrowAt = new Date();
    payment.razorpayPaymentId = razorpay_payment_id || `SIM_PAY_${Date.now()}`;
    payment.razorpaySignature = razorpay_signature || 'SIMULATED';
    await payment.save();

    // Update booking
    booking.status = 'pending_confirmation';
    booking.isPaid = true;
    booking.verificationCode = verificationCode;
    booking.verificationCodeExpiry = new Date(Date.now() + 72 * 60 * 60 * 1000); // 72 hours
    await booking.save();

    console.log(`💰 Payment verified for booking ${bookingId}: ₹${totalAmount} → ESCROW`);
    console.log(`🔑 Verification code for ${booking.hostel?.name}: ${verificationCode}`);

    res.json({
      success: true,
      message: 'Payment successful! Money held in escrow. Share the verification code with the hostel owner after inspecting the hostel.',
      verificationCode,
      payment: {
        transactionId: payment.transactionId,
        amount: totalAmount,
        status: 'escrow'
      }
    });

  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({ success: false, message: 'Payment verification failed' });
  }
});

// ─── GET /api/payments/status/:bookingId ────────────────────────────
// @desc    Get payment status for a booking
// @access  Private (Student)
router.get('/status/:bookingId', authenticateStudent, async (req, res) => {
  try {
    const payment = await Payment.findOne({
      booking: req.params.bookingId,
      student: req.user.id
    }).sort({ createdAt: -1 });

    if (!payment) {
      return res.json({ success: true, payment: null });
    }

    res.json({
      success: true,
      payment: {
        transactionId: payment.transactionId,
        amount: payment.amount,
        status: payment.status,
        escrowAt: payment.escrowAt,
        releasedAt: payment.releasedAt,
        refundedAt: payment.refundedAt,
      }
    });
  } catch (error) {
    console.error('Payment status error:', error);
    res.status(500).json({ success: false, message: 'Error fetching payment status' });
  }
});

// ─── GET /api/payments/wallet ───────────────────────────────────────
// @desc    Get student wallet balance and transactions
// @access  Private (Student)
router.get('/wallet', authenticateStudent, async (req, res) => {
  try {
    let wallet = await Wallet.findOne({ user: req.user.id });

    if (!wallet) {
      wallet = await Wallet.create({ user: req.user.id, balance: 0, transactions: [] });
    }

    res.json({
      success: true,
      wallet: {
        balance: wallet.balance,
        transactions: wallet.transactions.sort((a, b) => b.createdAt - a.createdAt).slice(0, 50)
      }
    });
  } catch (error) {
    console.error('Wallet error:', error);
    res.status(500).json({ success: false, message: 'Error fetching wallet' });
  }
});

export default router;
