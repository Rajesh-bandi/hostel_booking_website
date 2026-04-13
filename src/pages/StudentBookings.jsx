import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authAPI, bookingsAPI, reviewsAPI, paymentsAPI } from '../services/api';
import DashboardLayout from '../components/DashboardLayout';
import ConfirmModal from '../components/ConfirmModal';
import {
  HomeIcon, ClipboardIcon, HourglassIcon, CheckCircleIcon,
  XCircleIcon, BuildingIcon, SearchIcon
} from '../components/Icons';

export default function StudentBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [myReviews, setMyReviews] = useState([]);
  const [activeTab, setActiveTab] = useState('active');
  const [walletBalance, setWalletBalance] = useState(0);
  const [payingBookingId, setPayingBookingId] = useState(null);
  const [showRefundModal, setShowRefundModal] = useState(null);
  const [refundReason, setRefundReason] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    const [userResult, bookingsResult, reviewsResult, walletResult] = await Promise.all([
      authAPI.getMe(),
      bookingsAPI.getMyBookings(),
      reviewsAPI.getMyReviews(),
      paymentsAPI.getWallet()
    ]);

    if (!userResult.success) {
      navigate('/login');
      return;
    }
    if (bookingsResult.success) setBookings(bookingsResult.bookings);
    if (reviewsResult.success) setMyReviews(reviewsResult.reviews || []);
    if (walletResult.success) setWalletBalance(walletResult.wallet?.balance || 0);
    setIsLoading(false);
  }

  const [confirmAction, setConfirmAction] = useState(null);

  async function handleCancelBooking(bookingId) {
    setConfirmAction({
      title: 'Cancel Booking',
      message: 'Are you sure you want to cancel this booking?',
      confirmText: 'Cancel Booking',
      confirmColor: '#ef4444',
      onConfirm: async () => {
        setConfirmAction(null);
        const result = await bookingsAPI.cancel(bookingId);
        if (result.success) { toast.success('Booking cancelled'); fetchData(); }
        else toast.error(result.message || 'Failed to cancel booking');
      }
    });
  }

  function hasReviewedBooking(bookingId) {
    return myReviews.some(r => r.booking === bookingId || r.booking?._id === bookingId);
  }

  async function submitReview(booking, rating, comment, isComplaint) {
    const result = await reviewsAPI.create({
      hostelId: booking.hostel._id || booking.hostel,
      bookingId: booking._id,
      rating,
      comment,
      isComplaint
    });
    if (result.success) {
      toast.success('Review submitted successfully!');
      fetchData();
    } else {
      toast.error(result.message || 'Failed to submit review');
    }
  }

  // ── Payment Flow ────────────────────────────────────────────
  async function handlePayBooking(bookingId) {
    setPayingBookingId(bookingId);
    try {
      const orderResult = await paymentsAPI.createOrder(bookingId);
      if (!orderResult.success) {
        toast.error(orderResult.message || 'Failed to create payment order');
        setPayingBookingId(null);
        return;
      }

      // If simulated mode (no Razorpay keys configured), auto-verify
      if (orderResult.simulated) {
        const verifyResult = await paymentsAPI.verifyPayment({
          razorpay_order_id: orderResult.order.id,
          razorpay_payment_id: 'SIM_PAY_' + Date.now(),
          razorpay_signature: 'SIMULATED',
          bookingId,
        });
        setPayingBookingId(null);
        if (verifyResult.success) {
          toast.success(`Payment successful! Your verification code: ${verifyResult.verificationCode}`, { duration: 8000 });
          fetchData();
        } else {
          toast.error(verifyResult.message || 'Payment verification failed');
        }
        return;
      }

      // Wallet-only payment
      if (orderResult.walletPayment) {
        toast.success(`Wallet payment successful! Code: ${orderResult.verificationCode}`, { duration: 8000 });
        setPayingBookingId(null);
        fetchData();
        return;
      }

      // Load Razorpay checkout
      const keyResult = await paymentsAPI.getRazorpayKey();
      const options = {
        key: keyResult.keyId,
        amount: orderResult.order.amount,
        currency: orderResult.order.currency,
        name: 'HostelHub',
        description: `Booking at ${orderResult.hostelName}`,
        order_id: orderResult.order.id,
        handler: async function (response) {
          const verifyResult = await paymentsAPI.verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            bookingId,
          });
          setPayingBookingId(null);
          if (verifyResult.success) {
            toast.success(`Payment successful! Your verification code: ${verifyResult.verificationCode}`, { duration: 8000 });
            fetchData();
          } else {
            toast.error(verifyResult.message || 'Payment verification failed');
          }
        },
        modal: { ondismiss: () => setPayingBookingId(null) },
        theme: { color: '#4f46e5' },
      };

      // Load Razorpay script dynamically
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => { new window.Razorpay(options).open(); };
        document.body.appendChild(script);
      } else {
        new window.Razorpay(options).open();
      }
    } catch (err) {
      console.error('Payment error:', err);
      toast.error('Payment failed. Please try again.');
      setPayingBookingId(null);
    }
  }

  async function handleRefund(bookingId) {
    if (!refundReason || refundReason.trim().length < 5) {
      toast.error('Please provide a reason (minimum 5 characters)');
      return;
    }
    const result = await bookingsAPI.refund(bookingId, refundReason);
    if (result.success) {
      toast.success(`Refund processed! New wallet balance: ₹${result.walletBalance}`);
      setShowRefundModal(null);
      setRefundReason('');
      fetchData();
    } else {
      toast.error(result.message || 'Refund failed');
    }
  }

  const activeBooking = bookings.find(b => ['active', 'approved', 'pending_confirmation', 'confirmed'].includes(b.status));
  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const pastBookings = bookings.filter(b => ['rejected', 'cancelled', 'completed', 'refunded', 'switched'].includes(b.status));

  const tabs = [
    { id: 'active', label: 'Current Stay', count: activeBooking ? 1 : 0, icon: HomeIcon },
    { id: 'pending', label: 'Pending', count: pendingBookings.length, icon: HourglassIcon },
    { id: 'history', label: 'History', count: pastBookings.length, icon: ClipboardIcon },
  ];

  if (isLoading) {
    return (
      <DashboardLayout role="student">
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="spinner spinner-lg" />
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Loading bookings...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="student">
      <style>{`
        .bookings-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: var(--space-8) var(--space-6);
        }
        .bookings-header {
          margin-bottom: var(--space-8);
        }
        .bookings-title {
          font-size: var(--text-3xl);
          font-weight: 700;
          letter-spacing: var(--tracking-tighter);
          margin-bottom: var(--space-2);
        }
        .bookings-subtitle {
          color: var(--text-secondary);
          font-size: var(--text-base);
        }
        .tabs {
          display: flex;
          gap: var(--space-1);
          margin-bottom: var(--space-6);
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: var(--space-1);
        }
        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--duration-fast) var(--ease-default);
        }
        .tab-btn:hover {
          color: var(--text);
          background: var(--bg-tertiary);
        }
        .tab-btn.active {
          color: white;
          background: var(--primary);
          box-shadow: var(--shadow-sm);
        }
        .tab-count {
          background: rgba(255,255,255,0.2);
          padding: 0.125rem 0.5rem;
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
        }
        .tab-btn:not(.active) .tab-count {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
        }
        .booking-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin-bottom: var(--space-4);
          transition: all var(--duration-fast) var(--ease-default);
        }
        .booking-card:hover {
          box-shadow: var(--shadow-md);
        }
        .booking-card-active {
          border-color: var(--primary);
          border-width: 2px;
        }
        .booking-card-header {
          padding: var(--space-5) var(--space-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-light);
        }
        .booking-card-title {
          font-size: var(--text-lg);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        .booking-card-body {
          padding: var(--space-6);
        }
        .booking-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: var(--space-5);
        }
        .booking-field label {
          display: block;
          font-size: var(--text-xs);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          font-weight: 500;
          margin-bottom: var(--space-1);
        }
        .booking-field-value {
          font-size: var(--text-base);
          font-weight: 600;
        }
        .booking-field-value.rent {
          color: var(--success);
        }
        .booking-actions {
          display: flex;
          gap: var(--space-3);
          margin-top: var(--space-5);
          padding-top: var(--space-5);
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
        }
        .empty-tab {
          text-align: center;
          padding: var(--space-16) var(--space-8);
        }
        .empty-tab-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto var(--space-5);
          border-radius: var(--radius-xl);
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
        }
        .empty-tab-title {
          font-size: var(--text-xl);
          font-weight: 600;
          margin-bottom: var(--space-2);
        }
        .empty-tab-text {
          color: var(--text-secondary);
          font-size: var(--text-sm);
          max-width: 360px;
          margin: 0 auto var(--space-5);
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: var(--space-1-5);
          padding: 0.375rem 0.875rem;
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .status-active, .status-approved {
          background: var(--success-light);
          color: var(--success-dark);
        }
        body.dark-mode .status-active, body.dark-mode .status-approved {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
        }
        .status-pending {
          background: rgba(251, 191, 36, 0.12);
          color: #b45309;
        }
        body.dark-mode .status-pending {
          background: rgba(251, 191, 36, 0.15);
          color: #fbbf24;
        }
        .status-rejected {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }
        body.dark-mode .status-rejected {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }
        .status-cancelled, .status-switched {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
        }
        .status-completed, .status-confirmed {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        body.dark-mode .status-completed, body.dark-mode .status-confirmed {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }
        .status-pending_confirmation {
          background: rgba(139, 92, 246, 0.1);
          color: #7c3aed;
        }
        body.dark-mode .status-pending_confirmation {
          background: rgba(139, 92, 246, 0.15);
          color: #a78bfa;
        }
        .status-refunded {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }
        body.dark-mode .status-refunded {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }
        .verification-code-box {
          background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(139,92,246,0.06));
          border: 2px dashed rgba(79,70,229,0.3);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          margin-top: var(--space-5);
          text-align: center;
        }
        .verification-code {
          font-family: 'SFMono-Regular', Consolas, monospace;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          color: var(--primary);
          margin: var(--space-3) 0;
        }
        .wallet-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.2);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
          color: #16a34a;
        }
        body.dark-mode .wallet-badge {
          color: #4ade80;
          background: rgba(34,197,94,0.15);
        }
        .refund-modal-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          padding: var(--space-4);
        }
        .refund-modal {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          max-width: 480px;
          width: 100%;
          box-shadow: var(--shadow-xl);
        }
        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-5) var(--space-6);
          border-bottom: 1px solid var(--border-light);
          gap: var(--space-4);
          flex-wrap: wrap;
          transition: background var(--duration-fast);
        }
        .history-item:last-child { border-bottom: none; }
        .history-item:hover { background: var(--bg-tertiary); }
        .history-item-info h4 {
          font-size: var(--text-base);
          font-weight: 600;
          margin-bottom: var(--space-1);
        }
        .history-item-meta {
          display: flex;
          gap: var(--space-3);
          font-size: var(--text-sm);
          color: var(--text-secondary);
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .bookings-container { padding: var(--space-5) var(--space-4); }
          .bookings-title { font-size: var(--text-2xl); }
          .tabs { flex-direction: column; }
          .booking-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="bookings-container">
        <div className="bookings-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <div>
              <h1 className="bookings-title">My Bookings</h1>
              <p className="bookings-subtitle">Manage your hostel bookings and requests</p>
            </div>
            <div className="wallet-badge">
              💰 Wallet: ₹{walletBalance.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={16} />
              {tab.label}
              <span className="tab-count">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Active Tab */}
        {activeTab === 'active' && (
          activeBooking ? (
            <div className="booking-card booking-card-active">
              <div className="booking-card-header">
                <div className="booking-card-title">
                  <HomeIcon size={20} />
                  Your Current Stay
                </div>
                <span className={`status-pill status-${activeBooking.status}`}>
                  {activeBooking.status}
                </span>
              </div>
              <div className="booking-card-body">
                <div className="booking-grid">
                  <div className="booking-field">
                    <label>Hostel</label>
                    <div className="booking-field-value">{activeBooking.hostel?.name || 'N/A'}</div>
                  </div>
                  <div className="booking-field">
                    <label>Location</label>
                    <div className="booking-field-value">{activeBooking.hostel?.city || 'N/A'}</div>
                  </div>
                  <div className="booking-field">
                    <label>Room Type</label>
                    <div className="booking-field-value" style={{ textTransform: 'capitalize' }}>{activeBooking.roomType} Sharing</div>
                  </div>
                  <div className="booking-field">
                    <label>Room Number</label>
                    <div className="booking-field-value">#{activeBooking.roomNumber || 'TBD'}</div>
                  </div>
                  <div className="booking-field">
                    <label>Monthly Rent</label>
                    <div className="booking-field-value rent">₹{activeBooking.rent?.toLocaleString() || 'N/A'}</div>
                  </div>
                  {activeBooking.durationType && activeBooking.durationType !== 'month' || activeBooking.durationValue > 1 ? (
                    <>
                      <div className="booking-field">
                        <label>Duration</label>
                        <div className="booking-field-value">
                          {activeBooking.durationValue || 1} {activeBooking.durationType === 'day' ? 'Day' : activeBooking.durationType === 'week' ? 'Week' : 'Month'}{(activeBooking.durationValue || 1) !== 1 ? 's' : ''}
                        </div>
                      </div>
                      <div className="booking-field">
                        <label>Total Price</label>
                        <div className="booking-field-value rent">₹{activeBooking.totalPrice?.toLocaleString() || 'N/A'}</div>
                      </div>
                    </>
                  ) : null}
                  <div className="booking-field">
                    <label>Check-in</label>
                    <div className="booking-field-value">
                      {activeBooking.checkInDate
                        ? new Date(activeBooking.checkInDate).toLocaleDateString()
                        : 'Pending'}
                    </div>
                  </div>
                </div>
                {/* Verification Code Display */}
                {activeBooking.status === 'pending_confirmation' && activeBooking.verificationCode && (
                  <div className="verification-code-box">
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      🔑 Verification Code
                    </div>
                    <div className="verification-code">{activeBooking.verificationCode}</div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', maxWidth: 360, margin: '0 auto' }}>
                      Share this code with the hostel owner after inspecting the hostel to confirm your stay.
                    </p>
                    <button
                      style={{ marginTop: 'var(--space-3)', cursor: 'pointer' }}
                      className="btn btn-outline btn-sm"
                      onClick={() => { navigator.clipboard.writeText(activeBooking.verificationCode); toast.success('Code copied!'); }}
                    >
                      📋 Copy Code
                    </button>
                  </div>
                )}

                {activeBooking.status === 'confirmed' && (
                  <div style={{
                    background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                    borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', marginTop: 'var(--space-5)',
                    textAlign: 'center', color: '#059669'
                  }}>
                    ✅ Booking confirmed! Payment has been released to the hostel owner.
                  </div>
                )}

                <div className="booking-actions">
                  {activeBooking.status === 'approved' && (
                    <button
                      onClick={() => handlePayBooking(activeBooking._id)}
                      className="btn btn-primary btn-sm"
                      disabled={payingBookingId === activeBooking._id}
                    >
                      {payingBookingId === activeBooking._id ? '⏳ Processing...' : '💳 Pay & Book'}
                    </button>
                  )}
                  {activeBooking.status === 'pending_confirmation' && (
                    <button onClick={() => setShowRefundModal(activeBooking._id)} className="btn btn-danger btn-sm">
                      🔄 Request Refund
                    </button>
                  )}
                  {['pending', 'approved'].includes(activeBooking.status) && (
                    <button onClick={() => handleCancelBooking(activeBooking._id)} className="btn btn-danger btn-sm">
                      Cancel Booking
                    </button>
                  )}
                  <Link to={`/hostel/${activeBooking.hostel?._id || activeBooking.hostel}`} className="btn btn-outline btn-sm">
                    View Hostel
                  </Link>
                </div>

                {/* Review Section */}
                {['approved', 'active', 'confirmed', 'pending_confirmation'].includes(activeBooking.status) && (
                  <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-light)' }}>
                    {hasReviewedBooking(activeBooking._id) ? (
                      <div style={{
                        background: 'var(--bg-tertiary)',
                        padding: 'var(--space-4)',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'center'
                      }}>
                        <span style={{ color: 'var(--success)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 'var(--space-2)', justifyContent: 'center' }}>
                          <CheckCircleIcon size={16} /> You've already reviewed this stay
                        </span>
                      </div>
                    ) : (
                      <ReviewForm
                        onSubmit={(rating, comment, isComplaint) => submitReview(activeBooking, rating, comment, isComplaint)}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="booking-card">
              <div className="empty-tab">
                <div className="empty-tab-icon"><HomeIcon size={28} /></div>
                <div className="empty-tab-title">No Active Booking</div>
                <p className="empty-tab-text">You don't have an active stay right now. Browse hostels to find your next home.</p>
                <Link to="/search" className="btn btn-primary">
                  <SearchIcon size={16} /> Browse Hostels
                </Link>
              </div>
            </div>
          )
        )}

        {/* Pending Tab */}
        {activeTab === 'pending' && (
          pendingBookings.length > 0 ? (
            <div className="booking-card">
              {pendingBookings.map(booking => (
                <div key={booking._id} className="history-item">
                  <div className="history-item-info">
                    <h4>{booking.hostel?.name || 'Hostel'}</h4>
                    <div className="history-item-meta">
                      <span style={{ textTransform: 'capitalize' }}>{booking.roomType} Sharing</span>
                      <span>•</span>
                      <span>
                        {booking.durationValue || 1} {booking.durationType === 'day' ? 'Day' : booking.durationType === 'week' ? 'Week' : 'Month'}{(booking.durationValue || 1) !== 1 ? 's' : ''}
                        {booking.totalPrice ? ` · ₹${booking.totalPrice.toLocaleString()}` : ''}
                      </span>
                      <span>•</span>
                      <span>Applied {new Date(booking.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                    <span className="status-pill status-pending">Pending</span>
                    <button onClick={() => handleCancelBooking(booking._id)} className="btn btn-danger btn-sm">
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="booking-card">
              <div className="empty-tab">
                <div className="empty-tab-icon"><HourglassIcon size={28} /></div>
                <div className="empty-tab-title">No Pending Requests</div>
                <p className="empty-tab-text">All your booking requests have been processed.</p>
              </div>
            </div>
          )
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          pastBookings.length > 0 ? (
            <div className="booking-card">
              {pastBookings.map(booking => (
                <div key={booking._id} className="history-item">
                  <div className="history-item-info">
                    <h4>{booking.hostel?.name || 'Hostel'}</h4>
                    <div className="history-item-meta">
                      <span style={{ textTransform: 'capitalize' }}>{booking.roomType} Sharing</span>
                      <span>•</span>
                      <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className={`status-pill status-${booking.status}`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="booking-card">
              <div className="empty-tab">
                <div className="empty-tab-icon"><ClipboardIcon size={28} /></div>
                <div className="empty-tab-title">No Booking History</div>
                <p className="empty-tab-text">Your past bookings will appear here.</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Refund Modal */}
      {showRefundModal && (
        <div className="refund-modal-backdrop" onClick={() => setShowRefundModal(null)}>
          <div className="refund-modal" onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
              🔄 Request Refund
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-5)' }}>
              Your payment will be refunded to your wallet. Please provide a reason.
            </p>
            <textarea
              className="form-input"
              placeholder="Why do you want a refund? (minimum 5 characters)"
              value={refundReason}
              onChange={e => setRefundReason(e.target.value)}
              style={{ width: '100%', minHeight: 100, resize: 'vertical', marginBottom: 'var(--space-4)' }}
            />
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
              <button className="btn btn-outline btn-sm" onClick={() => { setShowRefundModal(null); setRefundReason(''); }}>
                Cancel
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleRefund(showRefundModal)}>
                Confirm Refund
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

// Review Form Component
function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isComplaint, setIsComplaint] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (rating === 0) { toast.error('Please select a rating'); return; }
    setSubmitting(true);
    await onSubmit(rating, comment, isComplaint);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <label style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500, fontSize: 'var(--text-sm)' }}>
          Rate Your Experience
        </label>
        <div style={{ display: 'flex', gap: 'var(--space-1)', alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.75rem',
                cursor: 'pointer',
                color: star <= (hoverRating || rating) ? '#fbbf24' : 'var(--border)',
                transition: 'transform 0.1s, color 0.2s',
                transform: star <= (hoverRating || rating) ? 'scale(1.1)' : 'scale(1)',
                padding: '0.25rem'
              }}
            >
              ★
            </button>
          ))}
          <span style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            {rating > 0 ? `${rating}/5` : 'Select rating'}
          </span>
        </div>
      </div>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <label style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500, fontSize: 'var(--text-sm)' }}>
          Your Review (Optional)
        </label>
        <textarea
          className="form-input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
          style={{ width: '100%', minHeight: 100, resize: 'vertical' }}
        />
      </div>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
          <input type="checkbox" checked={isComplaint} onChange={(e) => setIsComplaint(e.target.checked)} style={{ width: '1rem', height: '1rem' }} />
          Mark as a complaint (owner will be notified)
        </label>
      </div>
      <button type="submit" disabled={submitting || rating === 0} className="btn btn-primary btn-sm">
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}
