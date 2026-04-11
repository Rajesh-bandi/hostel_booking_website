import express from 'express';
import jwt from 'jsonwebtoken';
import Student from '../models/Student.js';
import Booking from '../models/Booking.js';
import Hostel from '../models/Hostel.js';
import Room from '../models/Room.js';

const router = express.Router();

// Optional auth - get user if logged in
const optionalAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      req.userId = decoded.id;
      req.userRole = decoded.role;
    }
  } catch (error) {
    // Token invalid, continue without auth
  }
  next();
};

// @route   POST /api/chatbot/query
// @desc    Handle chatbot queries with database access
router.post('/query', optionalAuth, async (req, res) => {
  try {
    const { intent, query } = req.body;
    const userId = req.userId;
    const userRole = req.userRole;

    let response = { success: true, data: null, message: '' };

    switch (intent) {
      // ==================== USER SPECIFIC QUERIES ====================
      
      case 'my_bookings':
        if (!userId || userRole !== 'student') {
          response.message = 'Please login as a student to view your bookings.';
        } else {
          const bookings = await Booking.find({ student: userId })
            .populate('hostel', 'name city address')
            .populate('room', 'roomNumber type price')
            .sort({ createdAt: -1 })
            .limit(5);
          
          if (bookings.length === 0) {
            response.message = "You don't have any bookings yet. Search for hostels and book a room to get started!";
          } else {
            response.data = bookings.map(b => ({
              hostel: b.hostel?.name,
              room: b.room?.roomNumber,
              type: b.room?.type,
              status: b.status,
              price: b.room?.price,
              date: b.createdAt
            }));
            response.message = `You have ${bookings.length} booking(s). Here are your recent bookings:`;
          }
        }
        break;

      case 'my_booking_status':
        if (!userId || userRole !== 'student') {
          response.message = 'Please login to check your booking status.';
        } else {
          const latestBooking = await Booking.findOne({ student: userId })
            .populate('hostel', 'name')
            .sort({ createdAt: -1 });
          
          if (!latestBooking) {
            response.message = "You don't have any bookings yet.";
          } else {
            const statusMessages = {
              pending: `Your booking at "${latestBooking.hostel?.name}" is pending approval. The owner will review it soon.`,
              approved: `Great news! Your booking at "${latestBooking.hostel?.name}" has been approved! Contact the owner to arrange check-in.`,
              rejected: `Unfortunately, your booking at "${latestBooking.hostel?.name}" was not approved. You can try booking another room.`,
              cancelled: `Your booking at "${latestBooking.hostel?.name}" was cancelled.`,
              checked_in: `You are currently checked in at "${latestBooking.hostel?.name}".`,
              checked_out: `You have checked out from "${latestBooking.hostel?.name}".`
            };
            response.message = statusMessages[latestBooking.status] || `Your latest booking status is: ${latestBooking.status}`;
            response.data = { status: latestBooking.status, hostel: latestBooking.hostel?.name };
          }
        }
        break;

      case 'my_dues':
        if (!userId || userRole !== 'student') {
          response.message = 'Please login to check your payment dues.';
        } else {
          const activeBooking = await Booking.findOne({ 
            student: userId, 
            status: { $in: ['approved', 'checked_in'] }
          }).populate('room', 'price');
          
          if (!activeBooking) {
            response.message = "You don't have any active bookings with pending dues.";
          } else {
            const monthlyRent = activeBooking.room?.price || 0;
            response.message = `Your monthly rent is ₹${monthlyRent.toLocaleString()}. Contact your hostel owner for payment details and due dates.`;
            response.data = { monthlyRent };
          }
        }
        break;

      // ==================== HOSTEL QUERIES ====================

      case 'hostel_count':
        const hostelCount = await Hostel.countDocuments({ isActive: true });
        response.message = `We currently have ${hostelCount} hostels listed on our platform across various cities.`;
        response.data = { count: hostelCount };
        break;

      case 'hostels_in_city':
        const city = query?.city?.toLowerCase();
        if (!city) {
          const cities = await Hostel.distinct('city');
          response.message = `We have hostels in: ${cities.filter(c => c).slice(0, 10).join(', ')}. Which city are you looking for?`;
          response.data = { cities: cities.filter(c => c) };
        } else {
          const cityHostels = await Hostel.find({ 
            city: new RegExp(city, 'i'), 
            isActive: true 
          }).select('name city priceRange rating').limit(5);
          
          if (cityHostels.length === 0) {
            response.message = `No hostels found in "${city}". Try searching for nearby areas or check our full hostel list.`;
          } else {
            response.message = `Found ${cityHostels.length} hostel(s) in ${city}:`;
            response.data = cityHostels.map(h => ({
              name: h.name,
              city: h.city,
              priceRange: h.priceRange,
              rating: h.rating
            }));
          }
        }
        break;

      case 'cheapest_hostels':
        const cheapHostels = await Hostel.find({ isActive: true })
          .sort({ 'priceRange.min': 1 })
          .limit(5)
          .select('name city priceRange');
        
        response.message = 'Here are the most affordable hostels:';
        response.data = cheapHostels.map(h => ({
          name: h.name,
          city: h.city,
          startingFrom: h.priceRange?.min || 'N/A'
        }));
        break;

      case 'top_rated_hostels':
        const topHostels = await Hostel.find({ isActive: true, rating: { $gt: 0 } })
          .sort({ rating: -1 })
          .limit(5)
          .select('name city rating reviewCount');
        
        if (topHostels.length === 0) {
          response.message = 'No rated hostels yet. Be the first to leave a review!';
        } else {
          response.message = 'Here are our top-rated hostels:';
          response.data = topHostels.map(h => ({
            name: h.name,
            city: h.city,
            rating: h.rating?.toFixed(1),
            reviews: h.reviewCount || 0
          }));
        }
        break;

      case 'hostel_info':
        const hostelName = query?.hostelName;
        if (!hostelName) {
          response.message = 'Which hostel would you like to know about?';
        } else {
          const hostel = await Hostel.findOne({ 
            name: new RegExp(hostelName, 'i'),
            isActive: true 
          });
          
          if (!hostel) {
            response.message = `Couldn't find a hostel named "${hostelName}". Try searching on our search page for more options.`;
          } else {
            response.message = `Here's information about ${hostel.name}:`;
            response.data = {
              name: hostel.name,
              city: hostel.city,
              address: hostel.address,
              priceRange: `₹${hostel.priceRange?.min || 'N/A'} - ₹${hostel.priceRange?.max || 'N/A'}`,
              amenities: hostel.amenities?.slice(0, 5) || [],
              rating: hostel.rating?.toFixed(1) || 'Not rated',
              type: hostel.type
            };
          }
        }
        break;

      // ==================== ROOM QUERIES ====================

      case 'room_types':
        response.message = 'We offer various room types:\n\n• **Single Room** - Private room for 1 person (most expensive)\n• **Double Sharing** - Room shared by 2 people\n• **Triple Sharing** - Room shared by 3 people\n• **Four Sharing** - Room shared by 4+ people (most affordable)\n\nPrices decrease with more sharing. What type interests you?';
        break;

      case 'available_rooms':
        const availableRooms = await Room.aggregate([
          { $match: { isActive: true } },
          { $addFields: { available: { $subtract: ['$capacity', '$currentOccupancy'] } } },
          { $match: { available: { $gt: 0 } } },
          { $group: { _id: '$type', count: { $sum: 1 }, avgPrice: { $avg: '$price' } } }
        ]);
        
        if (availableRooms.length === 0) {
          response.message = 'Checking room availability... Please search specific hostels for accurate availability.';
        } else {
          response.message = 'Here\'s the current availability across all hostels:';
          response.data = availableRooms.map(r => ({
            type: r._id,
            availableRooms: r.count,
            avgPrice: Math.round(r.avgPrice)
          }));
        }
        break;

      // ==================== STATISTICS ====================

      case 'platform_stats':
        const [totalHostels, totalStudents, totalBookings] = await Promise.all([
          Hostel.countDocuments({ isActive: true }),
          Student.countDocuments(),
          Booking.countDocuments()
        ]);
        
        response.message = `📊 Platform Statistics:\n• ${totalHostels} active hostels\n• ${totalStudents} registered students\n• ${totalBookings} total bookings made`;
        response.data = { hostels: totalHostels, students: totalStudents, bookings: totalBookings };
        break;

      default:
        response.message = "I can help you with booking info, hostel search, room availability, and payment queries. What would you like to know?";
    }

    res.json(response);
  } catch (error) {
    console.error('Chatbot query error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, I encountered an error. Please try again or contact support.' 
    });
  }
});

export default router;
