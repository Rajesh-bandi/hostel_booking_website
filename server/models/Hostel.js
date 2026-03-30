import mongoose from 'mongoose';

const HostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Hostel name is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  logo: {
    type: String,
    default: ''
  },

  // Location data for search
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
    index: true
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    trim: true
  },
  pincode: {
    type: String,
    trim: true
  },
  coordinates: {
    lat: {
      type: Number,
      required: [true, 'Latitude is required']
    },
    lng: {
      type: Number,
      required: [true, 'Longitude is required']
    }
  },

  // Hostel details
  roomConfig: {
    single: {
      count: { type: Number, default: 0 },
      startRoom: { type: Number, default: 101 },
      rent: { type: Number, default: 10000 }
    },
    double: {
      count: { type: Number, default: 0 },
      startRoom: { type: Number, default: 201 },
      rent: { type: Number, default: 8000 }
    },
    triple: {
      count: { type: Number, default: 0 },
      startRoom: { type: Number, default: 301 },
      rent: { type: Number, default: 6500 }
    },
    four: {
      count: { type: Number, default: 0 },
      startRoom: { type: Number, default: 401 },
      rent: { type: Number, default: 5000 }
    }
  },

  // Features and amenities
  amenities: [{
    type: String
  }],
  gender: {
    type: String,
    enum: ['male', 'female', 'coed'],
    required: [true, 'Gender preference is required']
  },
  images: [{
    type: String
  }],
  mainImage: {
    type: String,
    default: ''
  },

  // Contact information
  contactPhone: {
    type: String,
    trim: true
  },
  contactEmail: {
    type: String,
    trim: true,
    lowercase: true
  },

  // Owner reference
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: [true, 'Owner reference is required']
  },

  // Visibility
  isActive: {
    type: Boolean,
    default: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },

  // Rating (calculated from reviews)
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

// Indexes for efficient search
HostelSchema.index({ city: 1, isActive: 1, isVerified: 1 });
HostelSchema.index({ coordinates: '2dsphere' }); // For geospatial queries
HostelSchema.index({ 'rating.average': -1, 'rating.count': -1 }); // For sorting by rating

export default mongoose.model('Hostel', HostelSchema);
