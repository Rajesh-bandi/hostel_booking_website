import express from 'express';
import Review from '../models/Review.js';
import Hostel from '../models/Hostel.js';
import Booking from '../models/Booking.js';
import { authenticateStudent, authenticateOwner } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/reviews
// @desc    Create a review (student only, must have approved booking)
// @access  Private (Student)
router.post('/', authenticateStudent, async (req, res) => {
  try {
    const { hostelId, bookingId, rating, comment, isComplaint } = req.body;

    // Validate rating
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: 'Rating must be between 1 and 5' });
    }

    // Check if booking exists and belongs to student
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    if (booking.student.toString() !== req.user.id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    // Check booking status - must be approved or active
    if (!['approved', 'active', 'completed'].includes(booking.status)) {
      return res.status(400).json({ 
        success: false, 
        message: 'You can only review after your booking is approved' 
      });
    }

    // Check if review already exists for this booking
    const existingReview = await Review.findOne({ booking: bookingId });
    if (existingReview) {
      return res.status(400).json({ success: false, message: 'You have already reviewed this booking' });
    }

    // Create review
    const review = await Review.create({
      hostel: hostelId,
      student: req.user.id,
      booking: bookingId,
      rating,
      comment: comment || '',
      isComplaint: isComplaint || false
    });

    // Update hostel rating
    await updateHostelRating(hostelId);

    // Populate and return
    const populatedReview = await Review.findById(review._id)
      .populate('student', 'name')
      .populate('hostel', 'name');

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully',
      review: populatedReview
    });

  } catch (error) {
    console.error('Create review error:', error);
    res.status(500).json({ success: false, message: 'Error creating review', error: error.message });
  }
});

// @route   GET /api/reviews/hostel/:hostelId
// @desc    Get all reviews for a hostel (public)
// @access  Public
router.get('/hostel/:hostelId', async (req, res) => {
  try {
    const reviews = await Review.find({ hostel: req.params.hostelId })
      .populate('student', 'name')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      reviews,
      count: reviews.length
    });

  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({ success: false, message: 'Error fetching reviews' });
  }
});

// @route   GET /api/reviews/my
// @desc    Get student's reviews
// @access  Private (Student)
router.get('/my', authenticateStudent, async (req, res) => {
  try {
    const reviews = await Review.find({ student: req.user.id })
      .populate('hostel', 'name city')
      .sort({ createdAt: -1 });

    res.json({ success: true, reviews });

  } catch (error) {
    console.error('Get my reviews error:', error);
    res.status(500).json({ success: false, message: 'Error fetching reviews' });
  }
});

// @route   PUT /api/reviews/:id
// @desc    Update a review (student can update their own)
// @access  Private (Student)
router.put('/:id', authenticateStudent, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }

    if (review.student.toString() !== req.user.id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    const { rating, comment, isComplaint } = req.body;

    if (rating) review.rating = rating;
    if (comment !== undefined) review.comment = comment;
    if (isComplaint !== undefined) review.isComplaint = isComplaint;

    await review.save();

    // Update hostel rating
    await updateHostelRating(review.hostel);

    res.json({ success: true, message: 'Review updated', review });

  } catch (error) {
    console.error('Update review error:', error);
    res.status(500).json({ success: false, message: 'Error updating review' });
  }
});

// @route   POST /api/reviews/:id/respond
// @desc    Owner responds to a review/complaint
// @access  Private (Owner)
router.post('/:id/respond', authenticateOwner, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('hostel');

    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }

    // Check if owner owns the hostel
    if (review.hostel.owner.toString() !== req.user.id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    const { response, complaintStatus } = req.body;

    if (response) review.ownerResponse = response;
    if (complaintStatus && review.isComplaint) {
      review.complaintStatus = complaintStatus;
    }

    await review.save();

    res.json({ success: true, message: 'Response added', review });

  } catch (error) {
    console.error('Respond to review error:', error);
    res.status(500).json({ success: false, message: 'Error responding to review' });
  }
});

// @route   GET /api/reviews/owner/complaints
// @desc    Get complaints for owner's hostels
// @access  Private (Owner)
router.get('/owner/complaints', authenticateOwner, async (req, res) => {
  try {
    // Get owner's hostels
    const hostels = await Hostel.find({ owner: req.user.id }).select('_id');
    const hostelIds = hostels.map(h => h._id);

    const complaints = await Review.find({
      hostel: { $in: hostelIds },
      isComplaint: true
    })
      .populate('student', 'name email')
      .populate('hostel', 'name')
      .sort({ createdAt: -1 });

    res.json({ success: true, complaints });

  } catch (error) {
    console.error('Get complaints error:', error);
    res.status(500).json({ success: false, message: 'Error fetching complaints' });
  }
});

// Helper function to update hostel rating
async function updateHostelRating(hostelId) {
  const reviews = await Review.find({ hostel: hostelId });
  
  if (reviews.length === 0) {
    await Hostel.findByIdAndUpdate(hostelId, {
      'rating.average': 0,
      'rating.count': 0
    });
    return;
  }

  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = Math.round((totalRating / reviews.length) * 10) / 10;

  await Hostel.findByIdAndUpdate(hostelId, {
    'rating.average': averageRating,
    'rating.count': reviews.length
  });
}

export default router;
