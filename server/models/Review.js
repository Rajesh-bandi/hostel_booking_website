import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  hostel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  // For complaints that need owner attention
  isComplaint: {
    type: Boolean,
    default: false
  },
  complaintStatus: {
    type: String,
    enum: ['pending', 'acknowledged', 'resolved'],
    default: 'pending'
  },
  ownerResponse: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Ensure one review per booking
ReviewSchema.index({ booking: 1 }, { unique: true });
// Index for fetching hostel reviews
ReviewSchema.index({ hostel: 1, createdAt: -1 });

export default mongoose.model('Review', ReviewSchema);
