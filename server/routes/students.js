import express from 'express';
import Student from '../models/Student.js';
import Room from '../models/Room.js';
import Booking from '../models/Booking.js';
import Hostel from '../models/Hostel.js';
import { authenticateOwner, authenticateStudent } from '../middleware/auth.js';

const router = express.Router();

// ==========================================================================
// IMPORTANT: Specific routes must come BEFORE generic /:id route!
// ==========================================================================

// @route   PUT /api/students/profile
// @desc    Update student's own profile
// @access  Private (Student)
router.put('/profile', authenticateStudent, async (req, res) => {
  try {
    const allowedFields = [
      'name', 'phone', 'address', 'course', 'year', 
      'gender', 'dob', 'emergencyContact', 'notes', 'photo'
    ];

    const updates = {};
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    // Check if profile is complete
    const student = await Student.findById(req.user.id);
    if (updates.name && updates.phone && updates.address) {
      updates.profileComplete = true;
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true }
    ).select('-password');

    res.json({ success: true, student: updatedStudent });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/students/booking/current
// @desc    Get student's current booking details
// @access  Private (Student)
router.get('/booking/current', authenticateStudent, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      student: req.user.id,
      status: { $in: ['active', 'approved', 'confirmed', 'pending_confirmation'] }
    })
    .populate('hostel', 'name city address contactPhone contactEmail amenities')
    .populate('room', 'number type rent');

    if (!booking) {
      return res.json({ success: true, booking: null, message: 'No active booking found' });
    }

    res.json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/students/hostel/:hostelId
// @desc    Get all students with active bookings in a hostel (owner only)
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

    // Find all active/approved bookings for this hostel
    const bookings = await Booking.find({ 
      hostel: req.params.hostelId,
      status: { $in: ['active', 'approved', 'confirmed', 'pending_confirmation'] }
    })
    .populate('student', 'name email phone studentId course year gender photo address emergencyContact')
    .populate('room', 'number type rent')
    .sort({ checkInDate: -1 });

    // Extract student data with booking info
    const students = bookings.map(booking => ({
      _id: booking.student._id,
      name: booking.student.name,
      email: booking.student.email,
      phone: booking.student.phone,
      studentId: booking.student.studentId,
      course: booking.student.course,
      year: booking.student.year,
      gender: booking.student.gender,
      photo: booking.student.photo,
      address: booking.student.address,
      emergencyContact: booking.student.emergencyContact,
      booking: {
        _id: booking._id,
        roomNumber: booking.roomNumber,
        roomType: booking.roomType,
        rent: booking.rent,
        status: booking.status,
        checkInDate: booking.checkInDate,
        totalPaid: booking.totalPaid
      }
    }));

    res.json({ success: true, students, hostel: { name: hostel.name, _id: hostel._id } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/students/:id
// @desc    Get single student details (owner of their hostel or the student themselves)
// @access  Private
// NOTE: This generic route must come AFTER all specific routes!
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .select('-password');
      
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    // Get active booking for this student
    const activeBooking = await Booking.findOne({
      student: req.params.id,
      status: { $in: ['active', 'approved', 'pending', 'confirmed', 'pending_confirmation'] }
    })
    .populate('hostel', 'name city')
    .populate('room', 'number type');

    res.json({ 
      success: true, 
      student,
      activeBooking
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

export default router;
