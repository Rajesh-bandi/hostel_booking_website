import express from 'express';
import Booking from '../models/Booking.js';
import Hostel from '../models/Hostel.js';
import { authenticateOwner, authenticateStudent } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/fees/payment/:bookingId
// @desc    Add payment for a booking (owner records payment)
// @access  Private (Owner)
router.post('/payment/:bookingId', authenticateOwner, async (req, res) => {
  try {
    const { amount, method, reference } = req.body;
    
    const booking = await Booking.findById(req.params.bookingId)
      .populate('hostel', 'owner');

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // Verify owner owns the hostel
    if (booking.hostel.owner.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    // Add payment to history
    booking.paymentHistory.push({
      amount: parseFloat(amount),
      date: new Date(),
      method: method || 'cash',
      reference: reference || ''
    });

    booking.totalPaid = (booking.totalPaid || 0) + parseFloat(amount);
    await booking.save();

    res.json({ 
      success: true, 
      booking,
      message: `Payment of ₹${amount} recorded successfully`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/fees/booking/:bookingId
// @desc    Get payment history for a booking
// @access  Private (Owner or Student who owns booking)
router.get('/booking/:bookingId', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId)
      .populate('student', 'name email')
      .populate('hostel', 'name');

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    res.json({ 
      success: true, 
      paymentHistory: booking.paymentHistory || [],
      totalPaid: booking.totalPaid || 0,
      monthlyFee: booking.rent,
      student: booking.student,
      hostel: booking.hostel
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/fees/hostel/:hostelId
// @desc    Get all payments for a hostel (owner only)
// @access  Private (Owner)
router.get('/hostel/:hostelId', authenticateOwner, async (req, res) => {
  try {
    // Verify owner owns this hostel
    const hostel = await Hostel.findOne({ 
      _id: req.params.hostelId, 
      owner: req.user.id 
    });
    
    if (!hostel) {
      return res.status(404).json({ success: false, message: 'Hostel not found or access denied' });
    }

    // Get all active bookings with payment info
    const bookings = await Booking.find({
      hostel: req.params.hostelId,
      status: { $in: ['active', 'approved', 'confirmed', 'pending_confirmation'] }
    })
    .populate('student', 'name email phone')
    .select('student roomNumber roomType rent totalPaid paymentHistory');

    // Calculate summary
    const totalCollected = bookings.reduce((sum, b) => sum + (b.totalPaid || 0), 0);
    const totalDue = bookings.reduce((sum, b) => sum + (b.rent - (b.totalPaid || 0)), 0);

    res.json({ 
      success: true, 
      bookings,
      summary: {
        totalStudents: bookings.length,
        totalCollected,
        totalDue,
        hostelName: hostel.name
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/fees/my
// @desc    Get student's own payment history
// @access  Private (Student)
router.get('/my', authenticateStudent, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      student: req.user.id,
      status: { $in: ['active', 'approved', 'confirmed', 'pending_confirmation'] }
    })
    .populate('hostel', 'name');

    if (!booking) {
      return res.json({ 
        success: true, 
        message: 'No active booking found',
        paymentHistory: [],
        totalPaid: 0
      });
    }

    res.json({ 
      success: true, 
      paymentHistory: booking.paymentHistory || [],
      totalPaid: booking.totalPaid || 0,
      monthlyFee: booking.rent,
      hostel: booking.hostel
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

export default router;
