import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: [true, 'Booking reference is required']
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Student reference is required']
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
  },
  hostel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel',
    required: [true, 'Hostel reference is required']
  },

  // Amount
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: 0
  },

  // Razorpay fields
  razorpayOrderId: {
    type: String,
  },
  razorpayPaymentId: {
    type: String,
  },
  razorpaySignature: {
    type: String,
  },

  // Escrow status
  status: {
    type: String,
    enum: ['pending', 'escrow', 'released', 'refunded', 'failed'],
    default: 'pending'
  },

  // Internal tracking
  transactionId: {
    type: String,
    unique: true,
    required: true
  },

  // Timestamps for status changes
  escrowAt: { type: Date },
  releasedAt: { type: Date },
  refundedAt: { type: Date },

  // Admin controls
  adminNotes: { type: String, trim: true },
  releasedBy: { type: String, enum: ['system', 'admin', 'auto'], default: 'system' },

  // Refund tracking
  refundReason: { type: String, trim: true },
  refundAmount: { type: Number, default: 0 },

  // Commission tracking
  adminCommission: { type: Number, default: 0 },
  ownerAmount: { type: Number, default: 0 },
  commissionRate: { type: Number, default: 10 }, // percentage

  // Payment type
  paymentType: {
    type: String,
    enum: ['booking', 'subscription'],
    default: 'booking'
  },
}, {
  timestamps: true
});

// Generate unique transaction ID
PaymentSchema.pre('validate', function(next) {
  if (!this.transactionId) {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.transactionId = `TXN-${timestamp}-${random}`;
  }
  next();
});

// Indexes
PaymentSchema.index({ booking: 1 });
PaymentSchema.index({ student: 1 });
PaymentSchema.index({ status: 1 });

export default mongoose.model('Payment', PaymentSchema);
