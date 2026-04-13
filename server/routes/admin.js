import express from 'express';
import jwt from 'jsonwebtoken';
import Booking from '../models/Booking.js';
import Payment from '../models/Payment.js';
import Wallet from '../models/Wallet.js';
import Student from '../models/Student.js';
import Owner from '../models/Owner.js';
import Hostel from '../models/Hostel.js';
import Room from '../models/Room.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// ─── POST /api/admin/login ──────────────────────────────────────────
// @desc    Admin login (env-based credentials)
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@hostelhub.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
    }

    const token = jwt.sign(
      { id: 'admin', role: 'admin', email: adminEmail },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Admin login successful',
      token,
      user: { id: 'admin', email: adminEmail, role: 'admin' }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── GET /api/admin/dashboard ───────────────────────────────────────
// @desc    Get dashboard statistics
// @access  Private (Admin)
router.get('/dashboard', authenticateAdmin, async (req, res) => {
  try {
    const [
      totalBookings,
      pendingConfirmations,
      confirmedBookings,
      refundedBookings,
      totalStudents,
      totalOwners,
      totalHostels,
      payments,
      paidOwners,
    ] = await Promise.all([
      Booking.countDocuments(),
      Booking.countDocuments({ status: 'pending_confirmation' }),
      Booking.countDocuments({ status: 'confirmed' }),
      Booking.countDocuments({ status: 'refunded' }),
      Student.countDocuments(),
      Owner.countDocuments(),
      Hostel.countDocuments(),
      Payment.find({ status: { $in: ['escrow', 'released'] } }),
      Owner.countDocuments({ hasPaid: true }),
    ]);

    const totalRevenue = payments
      .filter(p => p.status === 'released')
      .reduce((sum, p) => sum + p.amount, 0);

    const escrowAmount = payments
      .filter(p => p.status === 'escrow')
      .reduce((sum, p) => sum + p.amount, 0);

    // Commission earnings from released payments
    const commissionRevenue = payments
      .filter(p => p.status === 'released')
      .reduce((sum, p) => sum + (p.adminCommission || 0), 0);

    // One-time listing fee revenue
    const allPaidOwners = await Owner.find({ hasPaid: true }, 'paymentAmount paymentDate');
    const listingFeeRevenue = allPaidOwners.reduce((sum, o) => sum + (o.paymentAmount || 0), 0);

    // Monthly earnings (current month)
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const monthlyCommission = payments
      .filter(p => p.status === 'released' && p.releasedAt && new Date(p.releasedAt) >= startOfMonth)
      .reduce((sum, p) => sum + (p.adminCommission || 0), 0);

    const monthlyListingFees = allPaidOwners
      .filter(o => o.paymentDate && new Date(o.paymentDate) >= startOfMonth)
      .reduce((sum, o) => sum + (o.paymentAmount || 0), 0);

    const refundRequests = await Booking.countDocuments({ refundStatus: 'requested' });

    res.json({
      success: true,
      stats: {
        totalBookings,
        pendingConfirmations,
        confirmedBookings,
        refundedBookings,
        totalRevenue,
        escrowAmount,
        refundRequests,
        totalStudents,
        totalOwners,
        totalHostels,
        // Earnings
        commissionRevenue,
        subscriptionRevenue: listingFeeRevenue,
        totalEarnings: commissionRevenue + listingFeeRevenue,
        monthlyEarnings: monthlyCommission + monthlyListingFees,
        activeSubscriptions: paidOwners,
      }
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).json({ success: false, message: 'Error fetching dashboard stats' });
  }
});

// ─── GET /api/admin/payments ────────────────────────────────────────
// @desc    Get all payments with optional status filter
// @access  Private (Admin)
router.get('/payments', authenticateAdmin, async (req, res) => {
  try {
    const { status, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (status && ['pending', 'escrow', 'released', 'refunded', 'failed'].includes(status)) {
      filter.status = status;
    }

    const payments = await Payment.find(filter)
      .populate('booking', 'roomType roomNumber status verificationCode')
      .populate('student', 'name email phone')
      .populate('hostel', 'name city')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Payment.countDocuments(filter);

    res.json({ success: true, payments, total, page: Number(page), totalPages: Math.ceil(total / limit) });
  } catch (error) {
    console.error('Admin payments error:', error);
    res.status(500).json({ success: false, message: 'Error fetching payments' });
  }
});

// ─── PUT /api/admin/payments/:id/release ────────────────────────────
// @desc    Manually release an escrow payment
// @access  Private (Admin)
router.put('/payments/:id/release', authenticateAdmin, async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ success: false, message: 'Payment not found' });

    if (payment.status !== 'escrow') {
      return res.status(400).json({ success: false, message: `Cannot release payment with status: ${payment.status}` });
    }

    payment.status = 'released';
    payment.releasedAt = new Date();
    payment.releasedBy = 'admin';
    payment.adminNotes = req.body.notes || 'Manually released by admin';
    await payment.save();

    // Update booking
    await Booking.findByIdAndUpdate(payment.booking, {
      status: 'confirmed',
      $unset: { verificationCode: 1, verificationCodeExpiry: 1 }
    });

    console.log(`🔓 Admin released payment ${payment.transactionId}: ₹${payment.amount}`);

    res.json({ success: true, message: 'Payment released', payment });
  } catch (error) {
    console.error('Admin release payment error:', error);
    res.status(500).json({ success: false, message: 'Error releasing payment' });
  }
});

// ─── GET /api/admin/bookings ────────────────────────────────────────
// @desc    Get all bookings with filters
// @access  Private (Admin)
router.get('/bookings', authenticateAdmin, async (req, res) => {
  try {
    const { status, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const bookings = await Booking.find(filter)
      .populate('student', 'name email phone')
      .populate('hostel', 'name city owner')
      .populate('room', 'number type')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Booking.countDocuments(filter);

    res.json({ success: true, bookings, total, page: Number(page), totalPages: Math.ceil(total / limit) });
  } catch (error) {
    console.error('Admin bookings error:', error);
    res.status(500).json({ success: false, message: 'Error fetching bookings' });
  }
});

// ─── GET /api/admin/refunds ─────────────────────────────────────────
// @desc    Get refund requests
// @access  Private (Admin)
router.get('/refunds', authenticateAdmin, async (req, res) => {
  try {
    const payments = await Payment.find({ status: 'refunded' })
      .populate('booking', 'roomType roomNumber status refundReason refundStatus')
      .populate('student', 'name email phone')
      .populate('hostel', 'name city')
      .sort({ refundedAt: -1 });

    res.json({ success: true, refunds: payments });
  } catch (error) {
    console.error('Admin refunds error:', error);
    res.status(500).json({ success: false, message: 'Error fetching refunds' });
  }
});

// ─── GET /api/admin/users/students ──────────────────────────────────
// @desc    Get all students
// @access  Private (Admin)
router.get('/users/students', authenticateAdmin, async (req, res) => {
  try {
    const students = await Student.find()
      .select('-password')
      .sort({ createdAt: -1 });

    res.json({ success: true, students });
  } catch (error) {
    console.error('Admin students error:', error);
    res.status(500).json({ success: false, message: 'Error fetching students' });
  }
});

// ─── GET /api/admin/users/owners ────────────────────────────────────
// @desc    Get all owners
// @access  Private (Admin)
router.get('/users/owners', authenticateAdmin, async (req, res) => {
  try {
    const owners = await Owner.find()
      .select('-password')
      .populate('hostels', 'name city isActive')
      .sort({ createdAt: -1 });

    res.json({ success: true, owners });
  } catch (error) {
    console.error('Admin owners error:', error);
    res.status(500).json({ success: false, message: 'Error fetching owners' });
  }
});

// ─── PUT /api/admin/users/:id/block ─────────────────────────────────
// @desc    Block/unblock a user
// @access  Private (Admin)
router.put('/users/:id/block', authenticateAdmin, async (req, res) => {
  try {
    const { role, block } = req.body;

    if (!role || !['student', 'owner'].includes(role)) {
      return res.status(400).json({ success: false, message: 'Valid role (student/owner) required' });
    }

    const Model = role === 'student' ? Student : Owner;
    const user = await Model.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    user.isActive = !block;
    await user.save();

    console.log(`🚫 Admin ${block ? 'blocked' : 'unblocked'} ${role}: ${user.email}`);

    res.json({
      success: true,
      message: `User ${block ? 'blocked' : 'unblocked'} successfully`,
      user: { id: user._id, email: user.email, isActive: user.isActive }
    });
  } catch (error) {
    console.error('Admin block user error:', error);
    res.status(500).json({ success: false, message: 'Error updating user' });
  }
});

// ─── GET /api/admin/hostels ─────────────────────────────────────────
// @desc    Get all hostels
// @access  Private (Admin)
router.get('/hostels', authenticateAdmin, async (req, res) => {
  try {
    const hostels = await Hostel.find()
      .populate('owner', 'username email')
      .sort({ createdAt: -1 });

    res.json({ success: true, hostels });
  } catch (error) {
    console.error('Admin hostels error:', error);
    res.status(500).json({ success: false, message: 'Error fetching hostels' });
  }
});

// ─── PUT /api/admin/hostels/:id/toggle ──────────────────────────────
// @desc    Approve/deactivate a hostel
// @access  Private (Admin)
router.put('/hostels/:id/toggle', authenticateAdmin, async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).json({ success: false, message: 'Hostel not found' });

    hostel.isActive = !hostel.isActive;
    await hostel.save();

    console.log(`🏢 Admin ${hostel.isActive ? 'activated' : 'deactivated'} hostel: ${hostel.name}`);

    res.json({
      success: true,
      message: `Hostel ${hostel.isActive ? 'activated' : 'deactivated'}`,
      hostel: { _id: hostel._id, name: hostel.name, isActive: hostel.isActive }
    });
  } catch (error) {
    console.error('Admin hostel toggle error:', error);
    res.status(500).json({ success: false, message: 'Error updating hostel' });
  }
});

// ─── GET /api/admin/transactions ────────────────────────────────────
// @desc    Full transaction/audit log
// @access  Private (Admin)
router.get('/transactions', authenticateAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 100 } = req.query;

    const payments = await Payment.find()
      .populate('student', 'name email')
      .populate('hostel', 'name')
      .populate('booking', 'roomType roomNumber')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Payment.countDocuments();

    res.json({
      success: true,
      transactions: payments,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Admin transactions error:', error);
    res.status(500).json({ success: false, message: 'Error fetching transactions' });
  }
});

export default router;
