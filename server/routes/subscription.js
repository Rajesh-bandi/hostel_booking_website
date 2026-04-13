import express from 'express';
import Owner from '../models/Owner.js';
import { authenticateOwner } from '../middleware/auth.js';

const router = express.Router();

// One-Time Listing Fee
const LISTING_FEE = 9999;

// ─── GET /api/subscription/plans ────────────────────────────────────
// @desc    Get the one-time listing plan info
// @access  Public
router.get('/plans', (req, res) => {
  res.json({
    success: true,
    plan: {
      name: 'Hostel Listing Access',
      price: LISTING_FEE,
      type: 'one-time',
      features: [
        'List your hostel on the platform',
        'Receive student bookings',
        'Access booking management dashboard',
        'No monthly fees or renewals',
        'Lifetime access once paid',
      ]
    }
  });
});

// ─── GET /api/subscription/status ───────────────────────────────────
// @desc    Check owner's payment status
// @access  Private (Owner)
router.get('/status', authenticateOwner, async (req, res) => {
  try {
    const owner = await Owner.findById(req.user.id).select(
      'hasPaid paymentAmount paymentDate paymentId'
    );

    if (!owner) {
      return res.status(404).json({ success: false, message: 'Owner not found' });
    }

    res.json({
      success: true,
      payment: {
        hasPaid: owner.hasPaid,
        amount: owner.paymentAmount,
        date: owner.paymentDate,
        paymentId: owner.paymentId,
      },
      listingFee: LISTING_FEE,
    });
  } catch (error) {
    console.error('Payment status error:', error);
    res.status(500).json({ success: false, message: 'Error checking payment status' });
  }
});

// ─── POST /api/subscription/pay ─────────────────────────────────────
// @desc    Process one-time listing payment (simulated test mode)
// @access  Private (Owner)
router.post('/pay', authenticateOwner, async (req, res) => {
  try {
    const owner = await Owner.findById(req.user.id);
    if (!owner) {
      return res.status(404).json({ success: false, message: 'Owner not found' });
    }

    // Already paid — no double charge
    if (owner.hasPaid) {
      return res.status(400).json({
        success: false,
        message: 'You have already completed the one-time payment. No further payment needed.'
      });
    }

    // Simulated payment
    const paymentId = `OTP_${Date.now()}_${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    owner.hasPaid = true;
    owner.paymentAmount = LISTING_FEE;
    owner.paymentDate = new Date();
    owner.paymentId = paymentId;
    await owner.save();

    console.log(`💰 One-time payment: ${owner.username} paid ₹${LISTING_FEE} (${paymentId})`);

    res.json({
      success: true,
      message: `Payment of ₹${LISTING_FEE} successful! You can now list your hostel.`,
      payment: {
        hasPaid: true,
        amount: LISTING_FEE,
        date: owner.paymentDate,
        paymentId,
      }
    });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ success: false, message: 'Error processing payment' });
  }
});

export default router;
