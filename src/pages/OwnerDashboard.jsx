import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import OwnerNavbar from '../components/OwnerNavbar'

export default function OwnerDashboard() {
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(false)
  const [stats, setStats] = useState({
    totalHostels: 0,
    totalRooms: 0,
    activeBookings: 0,
    pendingRequests: 0,
    openComplaints: 0
  })
  const [hostels, setHostels] = useState([])
  const [loading, setLoading] = useState(true)

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
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        
        // Fetch hostels and complaint stats in parallel
        const [hostelResponse, complaintResponse] = await Promise.all([
          fetch('http://localhost:5000/api/hostels/owner/my', {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch('http://localhost:5000/api/complaints/owner/stats', {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ])

        const data = await hostelResponse.json()
        const complaintData = await complaintResponse.json()

        let openComplaints = 0
        if (complaintData.success && complaintData.stats) {
          openComplaints = (complaintData.stats.open || 0) + (complaintData.stats.in_progress || 0)
        }

        if (hostelResponse.ok && data.success) {
          const hostels = data.hostels || []

          if (hostels.length > 0) {
            setHostels(hostels)

            // Calculate stats from all hostels
            const totalRooms = hostels.reduce((sum, hostel) => {
              return sum + (
                (hostel.roomConfig?.single?.count || 0) +
                (hostel.roomConfig?.double?.count || 0) +
                (hostel.roomConfig?.triple?.count || 0) +
                (hostel.roomConfig?.four?.count || 0)
              )
            }, 0)

            setStats({
              totalHostels: hostels.length,
              totalRooms,
              activeBookings: 0,
              pendingRequests: 0,
              openComplaints
            })
          } else {
            setStats(prev => ({ ...prev, openComplaints }))
          }
        }
      } catch (err) {
        console.error('Error fetching hostels:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={`owner-dashboard-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <OwnerNavbar />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .owner-dashboard-wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .light-theme {
          background: #ffffff;
          color: #111827;
        }

        .dark-theme {
          background: #0f172a;
          color: #f1f5f9;
        }

        .owner-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .dashboard-header {
          margin-bottom: 2.5rem;
        }

        .dashboard-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.375rem;
          letter-spacing: -0.025em;
        }

        .dark-theme .dashboard-title {
          color: #f1f5f9;
        }

        .dashboard-subtitle {
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .dashboard-subtitle {
          color: #94a3b8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4f46e5, #06b6d4);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .stat-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        .stat-card:hover::after {
          transform: scaleX(1);
        }

        .dark-theme .stat-card {
          background: #1e293b;
          border-color: #334155;
        }

        .dark-theme .stat-card:hover {
          border-color: #475569;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(6, 182, 212, 0.1));
          border-radius: 0.625rem;
        }

        .stat-number {
          font-size: 2.25rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.25rem;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .dark-theme .stat-number {
          color: #f1f5f9;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }

        .dark-theme .stat-label {
          color: #94a3b8;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
        }

        .dark-theme .section-title {
          color: #f1f5f9;
        }

        .btn-add {
          background: #111827;
          color: white;
          border: none;
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-add:hover {
          background: #1f2937;
          transform: translateY(-1px);
        }

        .dark-theme .btn-add {
          background: #3b82f6;
        }

        .dark-theme .btn-add:hover {
          background: #2563eb;
        }

        .hostels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .hostel-card {
          background: #ffffff;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .hostel-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .dark-theme .hostel-card {
          background: #1e293b;
          border-color: #334155;
        }

        .dark-theme .hostel-card:hover {
          border-color: #475569;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .hostel-header {
          background: #111827;
          padding: 1.25rem 1.5rem;
          color: white;
        }

        .dark-theme .hostel-header {
          background: #0f172a;
        }

        .hostel-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.375rem;
        }

        .hostel-location {
          font-size: 0.8125rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .hostel-body {
          padding: 1.25rem 1.5rem;
        }

        .hostel-stat-row {
          display: flex;
          justify-content: space-between;
          padding: 0.625rem 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.875rem;
        }

        .dark-theme .hostel-stat-row {
          border-bottom-color: #334155;
        }

        .hostel-stat-row:last-child {
          border-bottom: none;
        }

        .hostel-stat-label {
          color: #6b7280;
        }

        .dark-theme .hostel-stat-label {
          color: #94a3b8;
        }

        .hostel-stat-value {
          color: #111827;
          font-weight: 600;
        }

        .dark-theme .hostel-stat-value {
          color: #f1f5f9;
        }

        .hostel-actions {
          display: flex;
          gap: 0.625rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          background: #f8fafc;
        }

        .dark-theme .hostel-actions {
          border-top-color: #334155;
          background: #0f172a;
        }

        .btn-action {
          flex: 1;
          padding: 0.625rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.8125rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .btn-manage {
          background: #3b82f6;
          color: white;
          border: none;
        }

        .btn-manage:hover {
          background: #2563eb;
        }

        .btn-edit {
          background: transparent;
          color: #6b7280;
          border: 1px solid #e2e8f0;
        }

        .btn-edit:hover {
          background: #f1f5f9;
          color: #111827;
          border-color: #cbd5e1;
        }

        .dark-theme .btn-edit {
          color: #94a3b8;
          border-color: #475569;
        }

        .dark-theme .btn-edit:hover {
          background: #334155;
          color: #f1f5f9;
        }

        .btn-delete {
          background: transparent;
          color: #ef4444;
          border: 1px solid #fecaca;
        }

        .btn-delete:hover {
          background: #fef2f2;
          border-color: #f87171;
        }

        .dark-theme .btn-delete {
          border-color: #7f1d1d;
        }

        .dark-theme .btn-delete:hover {
          background: #7f1d1d;
          color: #fecaca;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px dashed #e2e8f0;
        }

        .dark-theme .empty-state {
          background: #1e293b;
          border-color: #334155;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .empty-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .dark-theme .empty-title {
          color: #f1f5f9;
        }

        .empty-text {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .dark-theme .empty-text {
          color: #94a3b8;
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem;
        }

        .spinner {
          width: 2.5rem;
          height: 2.5rem;
          border: 3px solid #e2e8f0;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .dark-theme .spinner {
          border-color: #334155;
          border-top-color: #3b82f6;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hostels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .owner-container {
            padding: 1.5rem 1rem;
          }
          .dashboard-title {
            font-size: 1.5rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .hostels-grid {
            grid-template-columns: 1fr;
          }
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .btn-add {
            width: 100%;
            justify-content: center;
          }
          .hostel-actions {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="owner-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">📊 Owner Dashboard</h1>
          <p className="dashboard-subtitle">Manage your hostels, rooms, and bookings</p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🏢</div>
            <div className="stat-number">{stats.totalHostels}</div>
            <div className="stat-label">Total Hostels</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🛏️</div>
            <div className="stat-number">{stats.totalRooms}</div>
            <div className="stat-label">Total Rooms</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div className="stat-number">{stats.activeBookings}</div>
            <div className="stat-label">Active Bookings</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-number">{stats.pendingRequests}</div>
            <div className="stat-label">Pending Requests</div>
          </div>
          <div 
            className="stat-card" 
            onClick={() => navigate('/owner/complaints')} 
            style={{ cursor: 'pointer' }}
          >
            <div className="stat-icon">🎫</div>
            <div className="stat-number" style={{ color: stats.openComplaints > 0 ? '#f59e0b' : 'inherit' }}>
              {stats.openComplaints}
            </div>
            <div className="stat-label">Open Complaints</div>
          </div>
        </div>

        {/* Hostels Section */}
        <div className="section-header">
          <h2 className="section-title">Your Hostels</h2>
          <button onClick={() => navigate('/owner/hostels/add')} className="btn-add">
            ➕ Add Hostel
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading your hostels...</div>
        ) : hostels.length > 0 ? (
          <div className="hostels-grid">
            {hostels.map(hostel => (
              <div key={hostel._id} className="hostel-card">
                <div className="hostel-header">
                  <div className="hostel-name">{hostel.name}</div>
                  <div className="hostel-location">📍 {hostel.address}, {hostel.city}</div>
                </div>
                <div className="hostel-body">
                  <div className="hostel-stat-row">
                    <span className="hostel-stat-label">Single Rooms</span>
                    <span className="hostel-stat-value">{hostel.roomConfig?.single?.count || 0}</span>
                  </div>
                  <div className="hostel-stat-row">
                    <span className="hostel-stat-label">Double Rooms</span>
                    <span className="hostel-stat-value">{hostel.roomConfig?.double?.count || 0}</span>
                  </div>
                  <div className="hostel-stat-row">
                    <span className="hostel-stat-label">Triple Rooms</span>
                    <span className="hostel-stat-value">{hostel.roomConfig?.triple?.count || 0}</span>
                  </div>
                  <div className="hostel-stat-row">
                    <span className="hostel-stat-label">Four-Person Rooms</span>
                    <span className="hostel-stat-value">{hostel.roomConfig?.four?.count || 0}</span>
                  </div>
                </div>
                <div className="hostel-actions">
                  <button className="action-btn" onClick={() => navigate(`/owner/hostels/${hostel._id}/edit`)}>
                    ✏️ Edit
                  </button>
                  <button className="action-btn" onClick={() => navigate('/owner/rooms')}>
                    🛏️ Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🏠</div>
            <div className="empty-title">No Hostels Yet</div>
            <p className="empty-text">Start by adding your first hostel property</p>
            <button onClick={() => navigate('/owner/hostels/add')} className="btn-primary">
              ➕ Add Your First Hostel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
