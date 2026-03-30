import express from 'express';
import Booking from '../models/Booking.js';
import Room from '../models/Room.js';
import Hostel from '../models/Hostel.js';
import Student from '../models/Student.js';
import { authenticateStudent, authenticateOwner } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/bookings/request
// @desc    Create a booking request
// @access  Private (Student only)
router.post('/request', authenticateStudent, async (req, res) => {
  try {
    const { hostelId, roomType, studentNotes } = req.body;
    const studentId = req.user.id;

    // Get student info (email verification disabled for now)
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    // Check if student already has an active booking
    const existingBooking = await Booking.findOne({
      student: studentId,
      status: { $in: ['pending', 'approved', 'active'] }
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: 'You already have an active booking request. Please cancel it first.'
      });
    }

    // Find hostel
    const hostel = await Hostel.findById(hostelId);
    if (!hostel || !hostel.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Hostel not found or inactive'
      });
    }

    // Validate room type
    if (!['single', 'double', 'triple', 'four'].includes(roomType)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid room type'
      });
    }

    // Get capacity for room type
    const capacityMap = { single: 1, double: 2, triple: 3, four: 4 };
    const capacity = capacityMap[roomType];

    // Find a room of the requested type with available beds
    // A room has available beds if occupants.length < capacity
    const rooms = await Room.find({ hostelId, type: roomType }).sort({ number: 1 });
    
    // Also check for pending bookings - don't assign same room to multiple pending requests
    let availableRoom = null;
    for (const room of rooms) {
      const occupantCount = room.occupants?.length || 0;
      const pendingBookingsCount = room.currentBookings?.length || 0;
      // Total people assigned or pending = occupants + pending bookings
      const totalAssigned = occupantCount + pendingBookingsCount;
      
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

    // Get rent from room or hostel config
    const rent = availableRoom.rent || hostel.roomConfig[roomType]?.rent || 0;

    // Create booking
    const booking = await Booking.create({
      student: studentId,
      hostel: hostelId,
      room: availableRoom._id,
      roomType,
      roomNumber: availableRoom.number,
      rent,
      status: 'pending',
      studentNotes: studentNotes || ''
    });

    // Add booking to room's current bookings (don't change status yet - owner will approve)
    availableRoom.currentBookings.push(booking._id);
    await availableRoom.save();

    // Populate and return
    await booking.populate(['hostel', 'room']);

    res.status(201).json({
      success: true,
      message: 'Booking request submitted successfully',
      booking
    });

  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking request',
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

    // Can only cancel pending or approved bookings
    if (!['pending', 'approved'].includes(booking.status)) {
      return res.status(400).json({
        success: false,
        message: 'Can only cancel pending or approved bookings'
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
      status: { $in: ['approved', 'active'] }
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
// @desc    Reject a booking request
// @access  Private (Owner only)
router.put('/:id/reject', authenticateOwner, async (req, res) => {
  try {
    const { ownerNotes } = req.body;

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
        message: 'Not authorized to reject this booking'
      });
    }

    // Can only reject pending bookings
    if (booking.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'Can only reject pending bookings'
      });
    }

    // Update booking
    booking.status = 'rejected';
    booking.ownerNotes = ownerNotes || 'Booking request rejected';
    await booking.save();

    // Free up the room
    await Room.findByIdAndUpdate(booking.room, {
      status: 'available',
      $pull: { currentBookings: booking._id }
    });

    res.json({
      success: true,
      message: 'Booking rejected',
      booking
    });

  } catch (error) {
    console.error('Reject booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error rejecting booking',
      error: error.message
    });
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
    if (!['active', 'approved'].includes(booking.status)) {
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

export default router;
