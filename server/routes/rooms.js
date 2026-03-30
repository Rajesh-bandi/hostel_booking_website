import express from 'express';
import Room from '../models/Room.js';
import Hostel from '../models/Hostel.js';
import { authenticate, authenticateOwner } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/rooms/hostel/:hostelId
// @desc    Get all rooms for a specific hostel (owner only)
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

    const rooms = await Room.find({ hostelId: req.params.hostelId })
      .populate('occupants', 'name email phone')
      .populate({
        path: 'currentBookings',
        populate: { path: 'student', select: 'name email phone' }
      })
      .sort({ type: 1, number: 1 });
      
    res.json({ success: true, rooms, hostel });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/rooms/hostel/:hostelId/:type
// @desc    Get rooms by type for a specific hostel
// @access  Private (Owner)
router.get('/hostel/:hostelId/:type', authenticateOwner, async (req, res) => {
  try {
    const hostel = await Hostel.findOne({ 
      _id: req.params.hostelId, 
      owner: req.user.id 
    });
    
    if (!hostel) {
      return res.status(404).json({ success: false, message: 'Hostel not found or access denied' });
    }

    const rooms = await Room.find({ 
      hostelId: req.params.hostelId, 
      type: req.params.type 
    })
      .populate('occupants', 'name email phone')
      .sort({ number: 1 });
      
    res.json({ success: true, rooms });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/rooms/:id/status
// @desc    Update room status (owner only)
// @access  Private (Owner)
router.put('/:id/status', authenticateOwner, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate('hostelId');
    
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    // Verify owner owns the hostel this room belongs to
    if (room.hostelId.owner.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    room.status = req.body.status;
    await room.save();

    res.json({ success: true, room });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/rooms/:id/checkout
// @desc    Check out occupant from room (owner only)
// @access  Private (Owner)
router.put('/:id/checkout', authenticateOwner, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate('hostelId');
    
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    // Verify owner owns the hostel
    if (room.hostelId.owner.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    // Clear occupants and set to available
    room.occupants = [];
    room.currentBookings = [];
    room.status = 'available';
    await room.save();

    res.json({ success: true, room, message: 'Room checked out successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/rooms/:id
// @desc    Get single room details
// @access  Public (for viewing) / Private (for management)
router.get('/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id)
      .populate('hostelId', 'name city owner')
      .populate('occupants', 'name email phone')
      .populate({
        path: 'currentBookings',
        populate: { path: 'student', select: 'name email phone' }
      });
      
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    res.json({ success: true, room });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

export default router;
