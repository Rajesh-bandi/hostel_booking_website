import express from 'express';
import jwt from 'jsonwebtoken';
import StudentComplaint from '../models/StudentComplaint.js';
import Booking from '../models/Booking.js';
import Student from '../models/Student.js';
import Owner from '../models/Owner.js';
import Hostel from '../models/Hostel.js';

const router = express.Router();

// Auth middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// ==================== STUDENT ROUTES ====================

// @route   POST /api/complaints
// @desc    Create a new complaint (Student only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ success: false, message: 'Only students can create complaints' });
    }

    const { hostelId, category, priority, subject, description, attachments } = req.body;

    // Verify student has an active booking at this hostel
    const activeBooking = await Booking.findOne({
      student: req.userId,
      hostel: hostelId,
      status: { $in: ['approved', 'active', 'checked_in', 'confirmed', 'pending_confirmation'] }
    }).populate('hostel', 'owner');

    if (!activeBooking) {
      return res.status(403).json({ 
        success: false, 
        message: 'You can only raise complaints for hostels where you have an active booking' 
      });
    }

    const complaint = new StudentComplaint({
      student: req.userId,
      hostel: hostelId,
      owner: activeBooking.hostel.owner,
      booking: activeBooking._id,
      room: activeBooking.room,
      category,
      priority: priority || 'medium',
      subject,
      description,
      attachments: attachments || []
    });

    await complaint.save();

    res.status(201).json({
      success: true,
      message: 'Complaint submitted successfully',
      complaint
    });
  } catch (error) {
    console.error('Create complaint error:', error);
    res.status(500).json({ success: false, message: 'Failed to create complaint' });
  }
});

// @route   GET /api/complaints/my
// @desc    Get student's complaints
router.get('/my', auth, async (req, res) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    const { status } = req.query;
    const filter = { student: req.userId };
    if (status && status !== 'all') {
      filter.status = status;
    }

    const complaints = await StudentComplaint.find(filter)
      .populate('hostel', 'name')
      .populate('room', 'roomNumber')
      .sort({ createdAt: -1 });

    res.json({ success: true, complaints });
  } catch (error) {
    console.error('Get student complaints error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch complaints' });
  }
});

// @route   GET /api/complaints/:id
// @desc    Get single complaint details
router.get('/:id', auth, async (req, res) => {
  try {
    const complaint = await StudentComplaint.findById(req.params.id)
      .populate('student', 'name email phone')
      .populate('hostel', 'name address')
      .populate('room', 'roomNumber type')
      .populate('owner', 'name');

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    // Check access - student who created or owner who received
    const isStudent = req.userRole === 'student' && complaint.student._id.toString() === req.userId;
    const isOwner = req.userRole === 'owner' && complaint.owner._id.toString() === req.userId;

    if (!isStudent && !isOwner) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    res.json({ success: true, complaint });
  } catch (error) {
    console.error('Get complaint error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch complaint' });
  }
});

// @route   PUT /api/complaints/:id/feedback
// @desc    Student gives feedback after resolution
router.put('/:id/feedback', auth, async (req, res) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ success: false, message: 'Only students can give feedback' });
    }

    const { rating, feedback } = req.body;

    const complaint = await StudentComplaint.findOne({
      _id: req.params.id,
      student: req.userId,
      status: 'resolved'
    });

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found or not resolved yet' });
    }

    complaint.studentRating = rating;
    complaint.studentFeedback = feedback;
    complaint.status = 'closed';
    await complaint.save();

    res.json({ success: true, message: 'Feedback submitted', complaint });
  } catch (error) {
    console.error('Submit feedback error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit feedback' });
  }
});

// @route   PUT /api/complaints/:id/reopen
// @desc    Student reopens a resolved complaint
router.put('/:id/reopen', auth, async (req, res) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ success: false, message: 'Only students can reopen complaints' });
    }

    const { reason } = req.body;

    const complaint = await StudentComplaint.findOne({
      _id: req.params.id,
      student: req.userId,
      status: { $in: ['resolved', 'closed'] }
    });

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    complaint.status = 'reopened';
    complaint.description += `\n\n--- Reopened ---\n${reason}`;
    complaint.resolution = null;
    complaint.resolvedAt = null;
    await complaint.save();

    res.json({ success: true, message: 'Complaint reopened', complaint });
  } catch (error) {
    console.error('Reopen complaint error:', error);
    res.status(500).json({ success: false, message: 'Failed to reopen complaint' });
  }
});

// ==================== OWNER ROUTES ====================

// @route   GET /api/complaints/owner/all
// @desc    Get all complaints for owner's hostels
router.get('/owner/all', auth, async (req, res) => {
  try {
    if (req.userRole !== 'owner') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    const { status, hostelId, priority } = req.query;
    const filter = { owner: req.userId };
    
    if (status && status !== 'all') {
      filter.status = status;
    }
    if (hostelId) {
      filter.hostel = hostelId;
    }
    if (priority && priority !== 'all') {
      filter.priority = priority;
    }

    const complaints = await StudentComplaint.find(filter)
      .populate('student', 'name email phone')
      .populate('hostel', 'name')
      .populate('room', 'roomNumber type')
      .sort({ 
        // Sort by priority (urgent first) then by date
        priority: -1,
        createdAt: -1 
      });

    // Get counts by status
    const statusCounts = await StudentComplaint.aggregate([
      { $match: { owner: req.userId } },
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    const counts = {
      all: complaints.length,
      open: 0,
      in_progress: 0,
      resolved: 0,
      closed: 0,
      reopened: 0
    };
    statusCounts.forEach(s => { counts[s._id] = s.count; });

    res.json({ success: true, complaints, counts });
  } catch (error) {
    console.error('Get owner complaints error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch complaints' });
  }
});

// @route   PUT /api/complaints/owner/:id/respond
// @desc    Owner responds to a complaint
router.put('/owner/:id/respond', auth, async (req, res) => {
  try {
    if (req.userRole !== 'owner') {
      return res.status(403).json({ success: false, message: 'Only owners can respond to complaints' });
    }

    const { response, status } = req.body;

    const complaint = await StudentComplaint.findOne({
      _id: req.params.id,
      owner: req.userId
    });

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    complaint.ownerResponse = response;
    if (status) {
      complaint.status = status;
    } else if (complaint.status === 'open') {
      complaint.status = 'in_progress';
    }
    await complaint.save();

    res.json({ success: true, message: 'Response added', complaint });
  } catch (error) {
    console.error('Respond to complaint error:', error);
    res.status(500).json({ success: false, message: 'Failed to respond' });
  }
});

// @route   PUT /api/complaints/owner/:id/resolve
// @desc    Owner resolves a complaint
router.put('/owner/:id/resolve', auth, async (req, res) => {
  try {
    if (req.userRole !== 'owner') {
      return res.status(403).json({ success: false, message: 'Only owners can resolve complaints' });
    }

    const { resolution } = req.body;

    const complaint = await StudentComplaint.findOne({
      _id: req.params.id,
      owner: req.userId
    });

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    complaint.resolution = resolution;
    complaint.status = 'resolved';
    complaint.resolvedAt = new Date();
    await complaint.save();

    res.json({ success: true, message: 'Complaint resolved', complaint });
  } catch (error) {
    console.error('Resolve complaint error:', error);
    res.status(500).json({ success: false, message: 'Failed to resolve complaint' });
  }
});

// @route   GET /api/complaints/owner/stats
// @desc    Get complaint statistics for owner
router.get('/owner/stats', auth, async (req, res) => {
  try {
    if (req.userRole !== 'owner') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    const stats = await StudentComplaint.aggregate([
      { $match: { owner: req.userId } },
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          open: { $sum: { $cond: [{ $eq: ['$status', 'open'] }, 1, 0] } },
          in_progress: { $sum: { $cond: [{ $eq: ['$status', 'in_progress'] }, 1, 0] } },
          resolved: { $sum: { $cond: [{ $eq: ['$status', 'resolved'] }, 1, 0] } },
          closed: { $sum: { $cond: [{ $eq: ['$status', 'closed'] }, 1, 0] } },
          reopened: { $sum: { $cond: [{ $eq: ['$status', 'reopened'] }, 1, 0] } },
          avgRating: { $avg: '$studentRating' }
        }
      }
    ]);

    const categoryStats = await StudentComplaint.aggregate([
      { $match: { owner: req.userId } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.json({
      success: true,
      stats: stats[0] || { total: 0, open: 0, in_progress: 0, resolved: 0, closed: 0, reopened: 0, avgRating: null },
      topCategories: categoryStats
    });
  } catch (error) {
    console.error('Get complaint stats error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch stats' });
  }
});

export default router;
