import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  rent: {
    type: Number
  },
  status: {
    type: String,
    enum: ['available', 'occupied', 'reserved', 'maintenance', 'pending'],
    default: 'available'
  },
  occupants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }],
  currentBookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  }],
  hostelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel',
    required: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
RoomSchema.index({ hostelId: 1, type: 1, status: 1 });

export default mongoose.model('Room', RoomSchema);
