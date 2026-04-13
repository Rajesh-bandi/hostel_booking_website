import express from 'express';
import Booking from '../models/Booking.js';
import Room from '../models/Room.js';
import Hostel from '../models/Hostel.js';
import Student from '../models/Student.js';
import Payment from '../models/Payment.js';
import Wallet from '../models/Wallet.js';
import { authenticateStudent, authenticateOwner } from '../middleware/auth.js';

const router = express.Router();

// Price calculation helper
function calculatePrice(monthlyRent, durationType, durationValue) {
  if (!monthlyRent || monthlyRent <= 0 || !durationValue || durationValue <= 0) {
    return { perUnit: 0, total: 0 };
  }
  let perUnit;
  switch (durationType) {
    case 'day':
      perUnit = Math.round(monthlyRent / 30);
      break;
    case 'week':
      perUnit = Math.round((monthlyRent / 30) * 7);
      break;
    case 'month':
    default:
      perUnit = monthlyRent;
      break;
  }
  return { perUnit, total: perUnit * durationValue };
}

// @route   POST /api/bookings/calculate
// @desc    Calculate price for a flexible booking duration
// @access  Public
router.post('/calculate', async (req, res) => {
  try {
    const { hostelId, roomType, durationType, durationValue } = req.body;

    if (!hostelId || !roomType) {
      return res.status(400).json({ success: false, message: 'hostelId and roomType are required' });
    }
    if (!['day', 'week', 'month'].includes(durationType)) {
      return res.status(400).json({ success: false, message: 'durationType must be day, week, or month' });
    }
    if (!durationValue || durationValue <= 0 || !Number.isFinite(durationValue)) {
      return res.status(400).json({ success: false, message: 'durationValue must be a positive number' });
    }

    const hostel = await Hostel.findById(hostelId);
    if (!hostel) {
      return res.status(404).json({ success: false, message: 'Hostel not found' });
    }

    // Get rent from hostel config
    const monthlyRent = hostel.roomConfig?.[roomType]?.rent || 0;
    if (monthlyRent <= 0) {
      return res.status(400).json({ success: false, message: 'Room type not configured or has no price' });
    }

    const { perUnit, total } = calculatePrice(monthlyRent, durationType, durationValue);
    const unitLabel = durationType === 'day' ? 'day' : durationType === 'week' ? 'week' : 'month';

    res.json({
      success: true,
      breakdown: {
        monthlyRent,
        perUnit,
        durationType,
        durationValue,
        total,
        label: `Rs.${perUnit.toLocaleString()} x ${durationValue} ${unitLabel}${durationValue !== 1 ? 's' : ''}`
      }
    });
  } catch (error) {
    console.error('Calculate price error:', error);
    res.status(500).json({ success: false, message: 'Error calculating price' });
  }
});

// @route   POST /api/bookings/request
// @desc    Create a booking with instant payment (Pay & Book flow)
// @access  Private (Student only)
router.post('/request', authenticateStudent, async (req, res) => {
  try {
    const { hostelId, roomType, studentNotes, durationType = 'month', durationValue = 1 } = req.body;
    const studentId = req.user.id;

    // Get student info
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    // Validate duration
    if (!['day', 'week', 'month'].includes(durationType)) {
      return res.status(400).json({ success: false, message: 'Invalid duration type' });
    }
    if (!durationValue || durationValue <= 0 || durationValue > 365) {
      return res.status(400).json({ success: false, message: 'Duration value must be between 1 and 365' });
    }

    // Check if student already has an active booking
    const existingBooking = await Booking.findOne({
      student: studentId,
      status: { $in: ['pending_confirmation', 'confirmed', 'active', 'approved'] }
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: 'You already have an active booking. Please cancel or complete it first.'
      });
    }

    // Find hostel
    const hostel = await Hostel.findById(hostelId);
    if (!hostel || !hostel.isActive) {
      return res.status(404).json({ success: false, message: 'Hostel not found or inactive' });
    }

    // Validate room type
    if (!['single', 'double', 'triple', 'four'].includes(roomType)) {
      return res.status(400).json({ success: false, message: 'Invalid room type' });
    }

    // Find available room
    const rooms = await Room.find({ hostelId, type: roomType }).sort({ number: 1 });
    let availableRoom = null;
    for (const room of rooms) {
      const totalAssigned = (room.occupants?.length || 0) + (room.currentBookings?.length || 0);
      if (totalAssigned < room.capacity) {
        availableRoom = room;
        break;
      }
    }

    if (!availableRoom) {
      return res.status(400).json({
        success: false,
        message: `No beds available in ${roomType} sharing rooms at this hostel`
      });
    }

    // Get rent and calculate total price
    const rent = availableRoom.rent || hostel.roomConfig[roomType]?.rent || 0;
    const { total: totalPrice } = calculatePrice(rent, durationType, durationValue);

    // Generate verification code
    const verificationCode = Math.random().toString().slice(2, 8);
    const verificationCodeExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    // Simulated instant payment
    const paymentId = `PAY_${Date.now()}_${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    // Check wallet balance first
    let wallet = await Wallet.findOne({ user: studentId });
    let usedWallet = false;
    if (wallet && wallet.balance >= totalPrice) {
      // Pay from wallet
      wallet.balance -= totalPrice;
      wallet.transactions.push({
        type: 'debit',
        amount: totalPrice,
        description: `Booking payment at ${hostel.name}`,
        balanceAfter: wallet.balance
      });
      await wallet.save();
      usedWallet = true;
    }

    // Create booking with PAID status immediately
    const booking = await Booking.create({
      student: studentId,
      hostel: hostelId,
      room: availableRoom._id,
      roomType,
      roomNumber: availableRoom.number,
      rent,
      durationType,
      durationValue,
      totalPrice,
      status: 'pending_confirmation',
      isPaid: true,
      verificationCode,
      verificationCodeExpiry,
      studentNotes: studentNotes || '',
      approvedDate: new Date(),
      checkInDate: new Date(),
    });

    // Add booking to room's current bookings and occupy
    availableRoom.currentBookings.push(booking._id);
    availableRoom.occupants.push(studentId);
    if (availableRoom.occupants.length >= availableRoom.capacity) {
      availableRoom.status = 'occupied';
    }
    await availableRoom.save();

    // Create payment record in escrow
    await Payment.create({
      booking: booking._id,
      student: studentId,
      hostel: hostelId,
      amount: totalPrice,
      status: 'escrow',
      method: usedWallet ? 'wallet' : 'simulated',
      transactionId: paymentId,
    });

    // Populate and return
    await booking.populate(['hostel', 'room']);

    console.log(`📋 Booking PAID: ${student.name} → ${hostel.name} (₹${totalPrice}) Code: ${verificationCode}`);

    res.status(201).json({
      success: true,
      message: 'Payment successful! Booking created.',
      booking,
      verificationCode,
      paymentId,
      walletPayment: usedWallet,
    });

  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
});

// @route   GET /api/bookings/my
// @desc    Get student's bookings
// @access  Private (Student only)
router.get('/my', authenticateStudent, async (req, res) => {
  try {
    const bookings = await Booking.find({ student: req.user.id })
      .populate('hostel', 'name city address contactPhone')
      .populate('room', 'number type')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings
    });

  } catch (error) {
    console.error('Get student bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message
    });
  }
});

// @route   PUT /api/bookings/:id/cancel
// @desc    Cancel a booking request
// @access  Private (Student only)
router.put('/:id/cancel', authenticateStudent, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Verify ownership - compare as strings
    if (booking.student.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to cancel this booking'
      });
    }

    // Can cancel pending, approved, or pending_confirmation bookings
    if (!['pending', 'approved', 'pending_confirmation'].includes(booking.status)) {
      return res.status(400).json({
        success: false,
        message: 'Can only cancel pending or active bookings. Use refund for paid bookings.'
      });
    }

    const wasApproved = booking.status === 'approved';
    
    // Update booking status
    booking.status = 'cancelled';
    await booking.save();

    // Update room - remove booking and occupant if was approved
    const room = await Room.findById(booking.room);
    if (room) {
      room.currentBookings = room.currentBookings.filter(
        b => b.toString() !== booking._id.toString()
      );
      
      // If booking was approved, remove student from occupants
      if (wasApproved) {
        room.occupants = room.occupants.filter(
          o => o.toString() !== booking.student.toString()
        );
      }
      
      // Update status based on occupancy
      if (room.occupants.length === 0) {
        room.status = 'available';
      }
      
      await room.save();
    }

    res.json({
      success: true,
      message: 'Booking cancelled successfully',
      booking
    });

  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error cancelling booking',
      error: error.message
    });
  }
});

// @route   GET /api/bookings/owner/all
// @desc    Get all bookings across all owner's hostels
// @access  Private (Owner only)
// NOTE: This route must be defined BEFORE /hostel/:hostelId/* routes to avoid conflicts
router.get('/owner/all', authenticateOwner, async (req, res) => {
  try {
    // Get all hostels owned by this owner
    const hostels = await Hostel.find({ owner: req.user.id }).select('_id name');
    const hostelIds = hostels.map(h => h._id);

    if (hostelIds.length === 0) {
      return res.json({
        success: true,
        bookings: [],
        summary: { pending: 0, approved: 0, active: 0, rejected: 0, cancelled: 0 }
      });
    }

    // Get all bookings for these hostels
    const bookings = await Booking.find({
      hostel: { $in: hostelIds }
    })
      .populate('student', 'name email phone course year photo')
      .populate('hostel', 'name city')
      .populate('room', 'number type')
      .sort({ createdAt: -1 });

    // Calculate summary by status
    const summary = {
      pending: bookings.filter(b => b.status === 'pending').length,
      approved: bookings.filter(b => b.status === 'approved').length,
      active: bookings.filter(b => b.status === 'active').length,
      rejected: bookings.filter(b => b.status === 'rejected').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length
    };

    res.json({
      success: true,
      bookings,
      summary
    });

  } catch (error) {
    console.error('Get all owner bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message
    });
  }
});

// @route   GET /api/bookings/hostel/:hostelId/pending
// @desc    Get pending booking requests for a hostel
// @access  Private (Owner only)
router.get('/hostel/:hostelId/pending', authenticateOwner, async (req, res) => {
  try {
    const { hostelId } = req.params;

    // Verify hostel ownership
    const hostel = await Hostel.findById(hostelId);
    if (!hostel) {
      return res.status(404).json({
        success: false,
        message: 'Hostel not found'
      });
    }

    if (hostel.owner.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view bookings for this hostel'
      });
    }

    // Get pending bookings
    const bookings = await Booking.find({
      hostel: hostelId,
      status: 'pending'
    })
      .populate('student', 'name email phone course year photo')
      .populate('room', 'number type')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings
    });

  } catch (error) {
    console.error('Get pending bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching pending bookings',
      error: error.message
    });
  }
});

// @route   GET /api/bookings/hostel/:hostelId/active
// @desc    Get active bookings for a hostel
// @access  Private (Owner only)
router.get('/hostel/:hostelId/active', authenticateOwner, async (req, res) => {
  try {
    const { hostelId } = req.params;

    // Verify hostel ownership
    const hostel = await Hostel.findById(hostelId);
    if (!hostel) {
      return res.status(404).json({
        success: false,
        message: 'Hostel not found'
      });
    }

    if (hostel.owner.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view bookings for this hostel'
      });
    }

    // Get active bookings
    const bookings = await Booking.find({
      hostel: hostelId,
      status: { $in: ['approved', 'active', 'confirmed', 'pending_confirmation'] }
    })
      .populate('student', 'name email phone course year photo address emergencyContact')
      .populate('room', 'number type capacity')
      .sort({ checkInDate: -1 });

    res.json({
      success: true,
      bookings
    });

  } catch (error) {
    console.error('Get active bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching active bookings',
      error: error.message
    });
  }
});

// @route   PUT /api/bookings/:id/approve
// @desc    Approve a booking request
// @access  Private (Owner only)
router.put('/:id/approve', authenticateOwner, async (req, res) => {
  try {
    const { ownerNotes, checkInDate } = req.body;

    const booking = await Booking.findById(req.params.id).populate('hostel');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Verify ownership - compare as strings to handle ObjectId vs string
    const hostelOwnerId = booking.hostel.owner.toString();
    const currentUserId = req.user.id.toString();
    
    if (hostelOwnerId !== currentUserId) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to approve this booking'
      });
    }

    // Can only approve pending bookings
    if (booking.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'Can only approve pending bookings'
      });
    }

    // Update booking
    booking.status = 'approved';
    booking.approvedDate = Date.now();
    booking.checkInDate = checkInDate || Date.now();
    booking.ownerNotes = ownerNotes || '';
    await booking.save();

    // Update room - add student to occupants and remove from pending bookings
    const room = await Room.findById(booking.room);
    if (room) {
      // Remove from currentBookings (pending list)
      room.currentBookings = room.currentBookings.filter(
        b => b.toString() !== booking._id.toString()
      );
      // Add to occupants
      room.occupants.push(booking.student);
      // Only mark as occupied if room is at full capacity
      if (room.occupants.length >= room.capacity) {
        room.status = 'occupied';
      } else {
        room.status = 'available'; // Still has beds available
      }
      await room.save();
    }

    // Populate for response
    await booking.populate('student', 'name email phone');

    res.json({
      success: true,
      message: 'Booking approved successfully',
      booking
    });

  } catch (error) {
    console.error('Approve booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error approving booking',
      error: error.message
    });
  }
});

// @route   PUT /api/bookings/:id/reject
// @desc    Reject a booking (auto-refund if paid)
// @access  Private (Owner only)
router.put('/:id/reject', authenticateOwner, async (req, res) => {
  try {
    const { ownerNotes } = req.body;

    const booking = await Booking.findById(req.params.id).populate('hostel');

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // Verify ownership
    if (booking.hostel.owner.toString() !== req.user.id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized to reject this booking' });
    }

    // Can reject pending or pending_confirmation bookings
    if (!['pending', 'pending_confirmation'].includes(booking.status)) {
      return res.status(400).json({ success: false, message: 'Can only reject pending bookings' });
    }

    // If booking was paid, auto-refund to wallet
    let refundAmount = 0;
    if (booking.isPaid) {
      const payment = await Payment.findOne({ booking: booking._id, status: 'escrow' });
      if (payment) {
        refundAmount = payment.amount;

        // Refund to student wallet
        let wallet = await Wallet.findOne({ user: booking.student });
        if (!wallet) wallet = await Wallet.create({ user: booking.student, balance: 0, transactions: [] });

        wallet.balance += payment.amount;
        wallet.transactions.push({
          type: 'credit',
          amount: payment.amount,
          description: `Refund: Booking rejected by owner — ${booking.hostel.name}`,
          relatedBooking: booking._id,
          relatedPayment: payment._id,
          balanceAfter: wallet.balance
        });
        await wallet.save();

        payment.status = 'refunded';
        payment.refundedAt = new Date();
        payment.refundReason = 'Owner rejected booking';
        payment.refundAmount = payment.amount;
        await payment.save();

        booking.isPaid = false;
        console.log(`🔄 Auto-refund ₹${refundAmount} for rejected booking ${booking._id}`);
      }
    }

    // Update booking
    booking.status = 'rejected';
    booking.ownerNotes = ownerNotes || 'Booking request rejected';
    booking.verificationCode = undefined;
    booking.verificationCodeExpiry = undefined;
    await booking.save();

    // Free up the room
    const room = await Room.findById(booking.room);
    if (room) {
      room.currentBookings = room.currentBookings.filter(b => b.toString() !== booking._id.toString());
      room.occupants = room.occupants.filter(o => o.toString() !== booking.student.toString());
      if (room.occupants.length === 0) room.status = 'available';
      await room.save();
    }

    res.json({
      success: true,
      message: refundAmount > 0
        ? `Booking rejected. ₹${refundAmount} refunded to student wallet.`
        : 'Booking rejected',
      booking,
      refundAmount
    });

  } catch (error) {
    console.error('Reject booking error:', error);
    res.status(500).json({ success: false, message: 'Error rejecting booking', error: error.message });
  }
});

// @route   PUT /api/bookings/:id/checkout
// @desc    Check out a booking (complete the stay)
// @access  Private (Owner only)
router.put('/:id/checkout', authenticateOwner, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('hostel');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Verify ownership - compare as strings
    const hostelOwnerId = booking.hostel.owner.toString();
    const currentUserId = req.user.id.toString();
    
    if (hostelOwnerId !== currentUserId) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized'
      });
    }

    // Can only checkout active/approved bookings
    if (!['active', 'approved', 'confirmed'].includes(booking.status)) {
      return res.status(400).json({
        success: false,
        message: 'Can only checkout active bookings'
      });
    }

    // Update booking
    booking.status = 'completed';
    booking.checkOutDate = new Date();
    await booking.save();

    // Free up room - remove student from occupants
    const room = await Room.findById(booking.room);
    if (room) {
      room.currentBookings = room.currentBookings.filter(
        b => b.toString() !== booking._id.toString()
      );
      room.occupants = room.occupants.filter(
        o => o.toString() !== booking.student.toString()
      );
      
      // Update status if room is now empty
      if (room.occupants.length === 0) {
        room.status = 'available';
      }
      
      await room.save();
    }

    res.json({
      success: true,
      message: 'Checkout completed successfully',
      booking
    });

  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing checkout',
      error: error.message
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════
// ESCROW ENDPOINTS
// ═══════════════════════════════════════════════════════════════════════

// @route   POST /api/bookings/confirm-code
// @desc    Owner enters verification code → release escrow payment
// @access  Private (Owner only)
router.post('/confirm-code', authenticateOwner, async (req, res) => {
  try {
    const { code } = req.body;

    if (!code || code.length !== 6) {
      return res.status(400).json({ success: false, message: 'A valid 6-digit code is required' });
    }

    // Find booking by verification code
    const booking = await Booking.findOne({
      verificationCode: code.trim(),
      status: 'pending_confirmation'
    }).populate('hostel').populate('student', 'name email');

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Invalid code or booking not in pending confirmation state' });
    }

    // Verify owner owns the hostel
    if (booking.hostel.owner.toString() !== req.user.id.toString()) {
      return res.status(403).json({ success: false, message: 'This code belongs to a booking at a different hostel' });
    }

    // Check code expiry
    if (booking.verificationCodeExpiry && booking.verificationCodeExpiry < new Date()) {
      return res.status(400).json({ success: false, message: 'Verification code has expired. Student needs to contact support.' });
    }

    // Release the escrow payment with commission
    const payment = await Payment.findOne({ booking: booking._id, status: 'escrow' });
    let adminCommission = 0;
    let ownerAmount = 0;
    if (payment) {
      // Calculate 10% admin commission
      const commissionRate = 10;
      adminCommission = Math.round(payment.amount * commissionRate / 100);
      ownerAmount = payment.amount - adminCommission;

      payment.status = 'released';
      payment.releasedAt = new Date();
      payment.releasedBy = 'system';
      payment.adminCommission = adminCommission;
      payment.ownerAmount = ownerAmount;
      payment.commissionRate = commissionRate;
      await payment.save();
      console.log(`💸 Payment RELEASED for booking ${booking._id}: ₹${payment.amount} (Admin: ₹${adminCommission}, Owner: ₹${ownerAmount})`);
    }

    // Update booking status
    booking.status = 'confirmed';
    booking.verificationCode = undefined; // Clear the code
    booking.verificationCodeExpiry = undefined;
    await booking.save();

    res.json({
      success: true,
      message: `Booking confirmed! ₹${ownerAmount} released to your account (₹${adminCommission} platform fee).`,
      booking: {
        _id: booking._id,
        student: booking.student,
        roomType: booking.roomType,
        roomNumber: booking.roomNumber,
        totalAmount: payment?.amount || booking.totalPrice,
        adminCommission,
        ownerAmount,
        status: 'confirmed'
      }
    });

  } catch (error) {
    console.error('Confirm code error:', error);
    res.status(500).json({ success: false, message: 'Error confirming booking' });
  }
});

// @route   POST /api/bookings/:id/refund
// @desc    Student requests a refund (escrow → wallet)
// @access  Private (Student only)
router.post('/:id/refund', authenticateStudent, async (req, res) => {
  try {
    const { reason } = req.body;
    const studentId = req.user.id;

    if (!reason || reason.trim().length < 5) {
      return res.status(400).json({ success: false, message: 'Please provide a reason for the refund (minimum 5 characters)' });
    }

    const booking = await Booking.findById(req.params.id).populate('hostel');
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    if (booking.student.toString() !== studentId.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    // Only pending_confirmation bookings can be refunded
    if (booking.status !== 'pending_confirmation') {
      return res.status(400).json({
        success: false,
        message: `Refund is only available for bookings pending confirmation. Current status: ${booking.status}`
      });
    }

    // Find escrow payment
    const payment = await Payment.findOne({ booking: booking._id, status: 'escrow' });
    if (!payment) {
      return res.status(400).json({ success: false, message: 'No escrow payment found for this booking' });
    }

    // Refund to wallet
    let wallet = await Wallet.findOne({ user: studentId });
    if (!wallet) {
      wallet = await Wallet.create({ user: studentId, balance: 0, transactions: [] });
    }

    wallet.balance += payment.amount;
    wallet.transactions.push({
      type: 'credit',
      amount: payment.amount,
      description: `Refund for booking at ${booking.hostel?.name || 'hostel'} — ${reason}`,
      relatedBooking: booking._id,
      relatedPayment: payment._id,
      balanceAfter: wallet.balance
    });
    await wallet.save();

    // Update payment
    payment.status = 'refunded';
    payment.refundedAt = new Date();
    payment.refundReason = reason;
    payment.refundAmount = payment.amount;
    await payment.save();

    // Update booking
    booking.status = 'refunded';
    booking.refundReason = reason;
    booking.refundStatus = 'approved'; // auto-approved for now
    booking.isPaid = false;
    booking.verificationCode = undefined;
    booking.verificationCodeExpiry = undefined;
    await booking.save();

    // Free up the room
    const room = await Room.findById(booking.room);
    if (room) {
      room.currentBookings = room.currentBookings.filter(b => b.toString() !== booking._id.toString());
      room.occupants = room.occupants.filter(o => o.toString() !== studentId.toString());
      if (room.occupants.length === 0) room.status = 'available';
      await room.save();
    }

    console.log(`🔄 Refund processed for booking ${booking._id}: ₹${payment.amount} → wallet`);

    res.json({
      success: true,
      message: `Refund of ₹${payment.amount} has been credited to your wallet.`,
      walletBalance: wallet.balance
    });

  } catch (error) {
    console.error('Refund error:', error);
    res.status(500).json({ success: false, message: 'Error processing refund' });
  }
});

// @route   POST /api/bookings/:id/switch
// @desc    Switch to a different hostel (handles price diff)
// @access  Private (Student only)
router.post('/:id/switch', authenticateStudent, async (req, res) => {
  try {
    const { newHostelId, newRoomType, durationType, durationValue } = req.body;
    const studentId = req.user.id;

    if (!newHostelId || !newRoomType) {
      return res.status(400).json({ success: false, message: 'New hostel and room type are required' });
    }

    // Find current booking
    const oldBooking = await Booking.findById(req.params.id).populate('hostel');
    if (!oldBooking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    if (oldBooking.student.toString() !== studentId.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    if (oldBooking.status !== 'pending_confirmation') {
      return res.status(400).json({ success: false, message: 'Can only switch bookings pending confirmation' });
    }

    // Find old payment
    const oldPayment = await Payment.findOne({ booking: oldBooking._id, status: 'escrow' });
    if (!oldPayment) {
      return res.status(400).json({ success: false, message: 'No escrow payment found' });
    }

    // Find new hostel
    const newHostel = await Hostel.findById(newHostelId);
    if (!newHostel || !newHostel.isActive) {
      return res.status(404).json({ success: false, message: 'New hostel not found or inactive' });
    }

    // Find available room in new hostel
    const rooms = await Room.find({ hostelId: newHostelId, type: newRoomType }).sort({ number: 1 });
    let availableRoom = null;
    for (const room of rooms) {
      const totalAssigned = (room.occupants?.length || 0) + (room.currentBookings?.length || 0);
      if (totalAssigned < room.capacity) {
        availableRoom = room;
        break;
      }
    }

    if (!availableRoom) {
      return res.status(400).json({ success: false, message: `No beds available in ${newRoomType} sharing at the new hostel` });
    }

    // Calculate new price
    const newRent = availableRoom.rent || newHostel.roomConfig?.[newRoomType]?.rent || 0;
    const dt = durationType || oldBooking.durationType || 'month';
    const dv = durationValue || oldBooking.durationValue || 1;
    let newTotal;
    if (dt === 'day') newTotal = Math.round(newRent / 30) * dv;
    else if (dt === 'week') newTotal = Math.round((newRent / 30) * 7) * dv;
    else newTotal = newRent * dv;

    const oldAmount = oldPayment.amount;
    const priceDiff = newTotal - oldAmount;

    // Free old room
    const oldRoom = await Room.findById(oldBooking.room);
    if (oldRoom) {
      oldRoom.currentBookings = oldRoom.currentBookings.filter(b => b.toString() !== oldBooking._id.toString());
      oldRoom.occupants = oldRoom.occupants.filter(o => o.toString() !== studentId.toString());
      if (oldRoom.occupants.length === 0) oldRoom.status = 'available';
      await oldRoom.save();
    }

    // Mark old booking as switched
    oldBooking.status = 'switched';
    oldBooking.verificationCode = undefined;
    oldBooking.verificationCodeExpiry = undefined;

    // Create new booking
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const newBooking = await Booking.create({
      student: studentId,
      hostel: newHostelId,
      room: availableRoom._id,
      roomType: newRoomType,
      roomNumber: availableRoom.number,
      rent: newRent,
      durationType: dt,
      durationValue: dv,
      totalPrice: newTotal,
      status: 'pending_confirmation',
      isPaid: true,
      verificationCode,
      verificationCodeExpiry: new Date(Date.now() + 72 * 60 * 60 * 1000),
      switchedFrom: oldBooking._id
    });

    oldBooking.switchedTo = newBooking._id;
    await oldBooking.save();

    // Add new booking to new room
    availableRoom.currentBookings.push(newBooking._id);
    await availableRoom.save();

    // Handle wallet for price difference
    let wallet = await Wallet.findOne({ user: studentId });
    if (!wallet) wallet = await Wallet.create({ user: studentId, balance: 0, transactions: [] });

    let extraPaymentNeeded = 0;

    if (priceDiff < 0) {
      // New hostel cheaper → refund difference to wallet
      const refundAmount = Math.abs(priceDiff);
      wallet.balance += refundAmount;
      wallet.transactions.push({
        type: 'credit',
        amount: refundAmount,
        description: `Price difference refund (switched from ${oldBooking.hostel?.name} to ${newHostel.name})`,
        relatedBooking: newBooking._id,
        balanceAfter: wallet.balance
      });
      await wallet.save();
    } else if (priceDiff > 0) {
      // New hostel more expensive → deduct from wallet or ask for extra
      if (wallet.balance >= priceDiff) {
        wallet.balance -= priceDiff;
        wallet.transactions.push({
          type: 'debit',
          amount: priceDiff,
          description: `Extra payment for switching to ${newHostel.name}`,
          relatedBooking: newBooking._id,
          balanceAfter: wallet.balance
        });
        await wallet.save();
      } else {
        extraPaymentNeeded = priceDiff - wallet.balance;
        if (wallet.balance > 0) {
          wallet.transactions.push({
            type: 'debit',
            amount: wallet.balance,
            description: `Partial payment for switching to ${newHostel.name}`,
            relatedBooking: newBooking._id,
            balanceAfter: 0
          });
          wallet.balance = 0;
          await wallet.save();
        }
      }
    }

    // Update old payment and create new one
    oldPayment.status = 'refunded';
    oldPayment.refundedAt = new Date();
    oldPayment.refundReason = 'Switched to different hostel';
    await oldPayment.save();

    await Payment.create({
      booking: newBooking._id,
      student: studentId,
      owner: newHostel.owner,
      hostel: newHostelId,
      amount: newTotal,
      status: 'escrow',
      escrowAt: new Date(),
      razorpayOrderId: 'SWITCH_' + Date.now(),
      razorpayPaymentId: 'SWITCH_PAY_' + Date.now(),
    });

    console.log(`🔄 Booking switched: ${oldBooking._id} → ${newBooking._id}, diff: ₹${priceDiff}`);

    res.json({
      success: true,
      message: priceDiff < 0
        ? `Switched! ₹${Math.abs(priceDiff)} refunded to your wallet.`
        : priceDiff > 0 && extraPaymentNeeded > 0
        ? `Switched! You need to pay ₹${extraPaymentNeeded} extra.`
        : `Switched successfully!`,
      newBooking: {
        _id: newBooking._id,
        hostelName: newHostel.name,
        roomType: newRoomType,
        totalPrice: newTotal,
        verificationCode,
        status: 'pending_confirmation'
      },
      priceDiff,
      extraPaymentNeeded,
      walletBalance: wallet.balance
    });

  } catch (error) {
    console.error('Switch booking error:', error);
    res.status(500).json({ success: false, message: 'Error switching booking' });
  }
});

export default router;
