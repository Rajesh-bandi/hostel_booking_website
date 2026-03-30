import express from 'express';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import Owner from '../models/Owner.js';
import Student from '../models/Student.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Configure email transporter
let emailTransporter;
if (process.env.EMAIL_SERVICE) {
  emailTransporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
}

// Helper function to send verification email
async function sendVerificationEmail(email, token) {
  if (!emailTransporter) {
    console.log('Email service not configured. Verification token:', token);
    return;
  }

  const verifyLink = `${process.env.CLIENT_URL || 'http://localhost:5173'}/verify-email/${token}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'HostelHub <noreply@hostelhub.com>',
    to: email,
    subject: 'Verify Your Email - HostelHub',
    html: `
      <h2>Welcome to HostelHub!</h2>
      <p>Please verify your email address by clicking the link below:</p>
      <p><a href="${verifyLink}" style="padding: 10px 20px; background-color: #667eea; color: white; text-decoration: none; border-radius: 5px;">Verify Email</a></p>
      <p>Or copy this link: ${verifyLink}</p>
      <p>This link will expire in 24 hours.</p>
    `
  };

  try {
    await emailTransporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// @route   POST /api/auth/owner/register
// @desc    Register a new owner
// @access  Public
router.post('/owner/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if owner already exists
    const existingOwner = await Owner.findOne({ $or: [{ email }, { username }] });
    if (existingOwner) {
      return res.status(400).json({
        success: false,
        message: 'Owner with this email or username already exists'
      });
    }

    // Create new owner
    const owner = await Owner.create({
      username,
      email,
      password,
      role: 'owner'
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: owner._id, role: 'owner', email: owner.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      token,
      user: {
        id: owner._id,
        username: owner.username,
        email: owner.email,
        role: 'owner'
      }
    });

  } catch (error) {
    console.error('Owner registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: error.message
    });
  }
});

// @route   POST /api/auth/owner/login
// @desc    Login owner
// @access  Public
router.post('/owner/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide username and password'
      });
    }

    // Find owner
    const owner = await Owner.findOne({ username });
    if (!owner) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if owner is active
    if (!owner.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated'
      });
    }

    // Verify password
    const isMatch = await owner.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: owner._id, role: 'owner', email: owner.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: owner._id,
        username: owner.username,
        email: owner.email,
        role: 'owner',
        hostel: owner.hostel
      }
    });

  } catch (error) {
    console.error('Owner login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: error.message
    });
  }
});

// @route   POST /api/auth/student/register
// @desc    Register a new student
// @access  Public
router.post('/student/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Validate input
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Check if student already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: 'Student with this email already exists'
      });
    }

    // Create new student
    const student = await Student.create({
      name,
      email,
      password,
      phone,
      role: 'student',
      isEmailVerified: false
    });

    // Generate verification token
    const verificationToken = jwt.sign(
      { id: student._id, email: student.email, type: 'email-verification' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    // Generate auth token (but user can't book until verified)
    const token = jwt.sign(
      { id: student._id, role: 'student', email: student.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.status(201).json({
      success: true,
      message: 'Registration successful. Please check your email to verify your account.',
      token,
      user: {
        id: student._id,
        name: student.name,
        email: student.email,
        role: 'student',
        isEmailVerified: false
      }
    });

  } catch (error) {
    console.error('Student registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: error.message
    });
  }
});

// @route   POST /api/auth/student/login
// @desc    Login student
// @access  Public
router.post('/student/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Find student
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if student is active
    if (!student.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated'
      });
    }

    // Verify password
    const isMatch = await student.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: student._id, role: 'student', email: student.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: student._id,
        name: student.name,
        email: student.email,
        role: 'student',
        isEmailVerified: student.isEmailVerified
      }
    });

  } catch (error) {
    console.error('Student login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: error.message
    });
  }
});

// @route   GET /api/auth/student/verify-email/:token
// @desc    Verify student email
// @access  Public
router.get('/student/verify-email/:token', async (req, res) => {
  try {
    const { token } = req.params;

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.type !== 'email-verification') {
      return res.status(400).json({
        success: false,
        message: 'Invalid verification token'
      });
    }

    // Find and update student
    const student = await Student.findById(decoded.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    if (student.isEmailVerified) {
      return res.status(200).json({
        success: true,
        message: 'Email already verified'
      });
    }

    student.isEmailVerified = true;
    await student.save();

    res.json({
      success: true,
      message: 'Email verified successfully. You can now book hostels!'
    });

  } catch (error) {
    console.error('Email verification error:', error);
    res.status(400).json({
      success: false,
      message: 'Invalid or expired verification token'
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get current logged in user
// @access  Private (both student and owner)
router.get('/me', authenticate, async (req, res) => {
  try {
    const { id, role } = req.user;

    let user;
    if (role === 'owner') {
      user = await Owner.findById(id).select('-password').populate('hostel');
    } else if (role === 'student') {
      user = await Student.findById(id).select('-password');
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      user: {
        ...user.toObject(),
        role
      }
    });

  } catch (error) {
    console.error('Get user error:', error);
    res.status(401).json({
      success: false,
      message: 'Authentication error'
    });
  }
});

export default router;
