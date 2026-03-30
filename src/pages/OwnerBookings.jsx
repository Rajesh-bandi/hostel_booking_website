import React, { useState, useEffect } from 'react'
import OwnerNavbar from '../components/OwnerNavbar'

export default function OwnerBookings() {
  const [isDark, setIsDark] = useState(false)
  const [bookings, setBookings] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme === 'dark')
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }

    // Listen for theme changes
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme')
      setIsDark(newTheme === 'dark')
      if (newTheme === 'dark') {
        document.body.classList.add('dark-theme')
      } else {
        document.body.classList.remove('dark-theme')
      }
    }

    window.addEventListener('themeChange', handleThemeChange)
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange)
    }
  }, [])

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:5000/api/bookings/owner/all', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const data = await response.json()
      if (response.ok && data.success) {
        setBookings(data.bookings || [])
      } else {
        setError(data.message || 'Failed to load bookings')
      }
    } catch (err) {
      setError('Failed to load bookings')
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (bookingId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/approve`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.ok) {
        fetchBookings()
      } else {
        const data = await response.json()
        setError(data.message || 'Failed to approve booking')
      }
    } catch (err) {
      setError('Failed to approve booking')
    }
  }

  const handleReject = async (bookingId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/reject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ownerNotes: 'Booking rejected' })
      })
      if (response.ok) {
        fetchBookings()
      } else {
        const data = await response.json()
        setError(data.message || 'Failed to reject booking')
      }
    } catch (err) {
      setError('Failed to reject booking')
    }
  }

  const handleCheckout = async (bookingId) => {
    if (!window.confirm('Are you sure you want to checkout this student?')) return
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/checkout`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (response.ok) {
        fetchBookings()
      } else {
        const data = await response.json()
        setError(data.message || 'Failed to checkout')
      }
    } catch (err) {
      setError('Failed to checkout')
    }
  }

  const filteredBookings = filter === 'all'
    ? bookings
    : bookings.filter(b => b.status === filter)

  const statusColors = {
    pending: { bg: '#fef3c7', text: '#92400e', icon: '⏳' },
    approved: { bg: '#dcfce7', text: '#166534', icon: '✅' },
    active: { bg: '#dbeafe', text: '#1e40af', icon: '🏠' },
    rejected: { bg: '#fee2e2', text: '#991b1b', icon: '❌' },
    cancelled: { bg: '#f3f4f6', text: '#6b7280', icon: '🚫' },
    completed: { bg: '#d1fae5', text: '#065f46', icon: '🎉' }
  }

  return (
    <div className={`owner-bookings-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <OwnerNavbar />

      <style>{`
        .owner-bookings-wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          transition: all 0.2s ease;
        }

        .light-theme {
          background: #ffffff;
          color: #111827;
        }

        .dark-theme {
          background: #0f172a;
          color: #f1f5f9;
        }

        .bookings-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.375rem;
          letter-spacing: -0.025em;
        }

        .dark-theme .page-title {
          color: #f1f5f9;
        }

        .page-subtitle {
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .page-subtitle {
          color: #94a3b8;
        }

        .filters {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          color: #6b7280;
        }

        .dark-theme .filter-btn {
          background: #1e293b;
          border-color: #334155;
          color: #94a3b8;
        }

        .filter-btn.active {
          background: #111827;
          border-color: #111827;
          color: white;
        }

        .dark-theme .filter-btn.active {
          background: #3b82f6;
          border-color: #3b82f6;
        }

        .filter-btn:hover:not(.active) {
          border-color: #cbd5e1;
          background: #f8fafc;
        }

        .dark-theme .filter-btn:hover:not(.active) {
          border-color: #475569;
          background: #334155;
        }

        .error-message {
          background: #fef2f2;
          color: #991b1b;
          padding: 0.875rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          border-left: 3px solid #dc2626;
          font-size: 0.875rem;
        }

        .dark-theme .error-message {
          background: rgba(153, 27, 27, 0.15);
          color: #fca5a5;
        }

        .bookings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .booking-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1.25rem;
          padding: 1.25rem;
        }

        .dark-theme .booking-card {
          background: #1e293b;
          border-color: #334155;
        }

        .booking-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .dark-theme .booking-card:hover {
          border-color: #475569;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .booking-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .status-badge {
          font-size: 1.5rem;
          width: 48px;
          height: 48px;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .status-text {
          font-weight: 500;
          font-size: 0.75rem;
          text-transform: capitalize;
        }

        .booking-info {
          display: grid;
          gap: 0.75rem;
        }

        .booking-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.375rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .dark-theme .booking-header {
          border-bottom-color: #334155;
        }

        .booking-title {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
        }

        .dark-theme .booking-title {
          color: #f1f5f9;
        }

        .booking-dates {
          font-size: 0.8125rem;
          color: #6b7280;
        }

        .dark-theme .booking-dates {
          color: #94a3b8;
        }

        .booking-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 0.75rem;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .detail-label {
          font-size: 0.6875rem;
          color: #6b7280;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dark-theme .detail-label {
          color: #94a3b8;
        }

        .detail-value {
          font-size: 0.875rem;
          font-weight: 500;
          color: #111827;
        }

        .dark-theme .detail-value {
          color: #f1f5f9;
        }

        .booking-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          justify-content: flex-start;
        }

        .action-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.8125rem;
          white-space: nowrap;
        }

        .btn-approve {
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
        }

        .btn-approve:hover {
          background: #d1fae5;
        }

        .dark-theme .btn-approve {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .dark-theme .btn-approve:hover {
          background: rgba(16, 185, 129, 0.25);
        }

        .btn-reject {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        .btn-reject:hover {
          background: #fee2e2;
        }

        .dark-theme .btn-reject {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .dark-theme .btn-reject:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        .btn-view {
          background: #eff6ff;
          color: #3b82f6;
          border: 1px solid #dbeafe;
        }

        .btn-view:hover {
          background: #dbeafe;
        }

        .dark-theme .btn-view {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .dark-theme .btn-view:hover {
          background: rgba(59, 130, 246, 0.25);
        }

        .btn-checkout {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fcd34d;
        }

        .btn-checkout:hover {
          background: #fde68a;
        }

        .dark-theme .btn-checkout {
          background: rgba(251, 191, 36, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(251, 191, 36, 0.25);
        }

        .dark-theme .btn-checkout:hover {
          background: rgba(251, 191, 36, 0.25);
        }

        .empty-state {
          text-align: center;
          padding: 3rem 2rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px dashed #e2e8f0;
        }

        .dark-theme .empty-state {
          background: #1e293b;
          border-color: #334155;
        }

        .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-title {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.375rem;
        }

        .dark-theme .empty-title {
          color: #f1f5f9;
        }

        .empty-subtitle {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .dark-theme .empty-subtitle {
          color: #94a3b8;
        }

        .loading {
          text-align: center;
          padding: 2rem;
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .loading {
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .bookings-container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.5rem;
          }

          .booking-card {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .booking-actions {
            flex-direction: row;
          }

          .action-btn {
            flex: 1;
          }

          .booking-details {
            grid-template-columns: repeat(2, 1fr);
          }

          .booking-header {
            flex-direction: column;
            gap: 0.375rem;
          }
        }
      `}</style>

      <div className="bookings-container">
        <div className="page-header">
          <h1 className="page-title">📋 Booking Requests</h1>
          <p className="page-subtitle">Manage and track all student booking requests</p>
        </div>

        <div className="filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            📊 All ({bookings.length})
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            ⏳ Pending ({bookings.filter(b => b.status === 'pending').length})
          </button>
          <button
            className={`filter-btn ${filter === 'approved' ? 'active' : ''}`}
            onClick={() => setFilter('approved')}
          >
            ✅ Approved ({bookings.filter(b => b.status === 'approved' || b.status === 'active').length})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            🎉 Completed ({bookings.filter(b => b.status === 'completed').length})
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading bookings...</div>
        ) : filteredBookings.length > 0 ? (
          <div className="bookings-list">
            {filteredBookings.map(booking => {
              const color = statusColors[booking.status] || statusColors.pending
              const studentName = booking.student?.name || 'Unknown Student'
              const studentEmail = booking.student?.email || 'N/A'
              const studentPhone = booking.student?.phone || 'N/A'
              const hostelName = booking.hostel?.name || 'Unknown Hostel'
              const roomNumber = booking.room?.number || 'N/A'
              const roomType = booking.room?.type || booking.roomType || 'N/A'
              return (
                <div key={booking._id} className="booking-card">
                  <div className="booking-status">
                    <div
                      className="status-badge"
                      style={{
                        background: color.bg,
                        color: color.text
                      }}
                    >
                      {color.icon}
                    </div>
                    <div className="status-text" style={{ color: color.text }}>
                      {booking.status}
                    </div>
                  </div>

                  <div className="booking-info">
                    <div className="booking-header">
                      <div>
                        <div className="booking-title">
                          {studentName} • Room {roomNumber}
                        </div>
                        <div className="booking-dates">
                          Requested: {new Date(booking.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="booking-details">
                      <div className="detail-item">
                        <div className="detail-label">Hostel</div>
                        <div className="detail-value">{hostelName}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Room Type</div>
                        <div className="detail-value">{roomType.toUpperCase()}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Email</div>
                        <div className="detail-value">{studentEmail}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Phone</div>
                        <div className="detail-value">{studentPhone}</div>
                      </div>
                    </div>
                  </div>

                  <div className="booking-actions">
                    {booking.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(booking._id)}
                          className="action-btn btn-approve"
                        >
                          ✅ Approve
                        </button>
                        <button
                          onClick={() => handleReject(booking._id)}
                          className="action-btn btn-reject"
                        >
                          ❌ Reject
                        </button>
                      </>
                    )}
                    {(booking.status === 'approved' || booking.status === 'active') && (
                      <button
                        onClick={() => handleCheckout(booking._id)}
                        className="action-btn btn-checkout"
                      >
                        🚪 Checkout
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h3 className="empty-title">
              {filter === 'all' ? 'No Bookings Yet' : `No ${filter} bookings`}
            </h3>
            <p className="empty-subtitle">
              {filter === 'all'
                ? 'Bookings from students will appear here'
                : `No bookings with status "${filter}"`}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
