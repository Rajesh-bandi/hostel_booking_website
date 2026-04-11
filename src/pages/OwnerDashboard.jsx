import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  BuildingIcon, BedIcon, ClipboardIcon, ClockIcon, TicketIcon,
  PlusIcon, EditIcon, MapPinIcon, TrendingUpIcon
} from '../components/Icons'

export default function OwnerDashboard() {
  const navigate = useNavigate()
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

  const statCards = [
    { icon: BuildingIcon, label: 'Total Hostels', value: stats.totalHostels, color: 'var(--primary)' },
    { icon: BedIcon, label: 'Total Rooms', value: stats.totalRooms, color: 'var(--accent)' },
    { icon: ClipboardIcon, label: 'Active Bookings', value: stats.activeBookings, color: 'var(--success)' },
    { icon: ClockIcon, label: 'Pending Requests', value: stats.pendingRequests, color: 'var(--warning)' },
    { icon: TicketIcon, label: 'Open Complaints', value: stats.openComplaints, color: stats.openComplaints > 0 ? 'var(--warning)' : 'var(--text-secondary)', onClick: () => navigate('/owner/complaints') },
  ]

  return (
    <div style={{ minHeight: 'calc(100vh - var(--header-height))', background: 'var(--bg-body)' }}>
      <style>{`
        .od-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: var(--space-8) var(--space-6);
          animation: fadeInUp 0.4s ease both;
        }

        .od-header {
          margin-bottom: var(--space-8);
        }

        .od-title {
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--text);
          margin-bottom: var(--space-1);
          letter-spacing: var(--tracking-tighter);
        }

        .od-subtitle {
          font-size: var(--text-base);
          color: var(--text-secondary);
        }

        .od-stats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-8);
        }

        .od-stat {
          background: var(--bg);
          padding: var(--space-5);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          transition: all var(--duration-normal) var(--ease-default);
          cursor: default;
        }

        .od-stat:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .od-stat-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-3);
        }

        .od-stat-value {
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--text);
          letter-spacing: var(--tracking-tighter);
          line-height: 1;
          margin-bottom: var(--space-1);
        }

        .od-stat-label {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          font-weight: 500;
        }

        .od-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-5);
        }

        .od-section-title {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--text);
        }

        .od-hostels {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .od-hostel {
          background: var(--bg);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: all var(--duration-normal) var(--ease-default);
        }

        .od-hostel:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-3px);
        }

        .od-hostel-top {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 100%);
          padding: var(--space-5) var(--space-5);
          color: white;
        }

        .od-hostel-name {
          font-size: var(--text-lg);
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .od-hostel-location {
          font-size: var(--text-sm);
          opacity: 0.85;
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .od-hostel-body {
          padding: var(--space-4) var(--space-5);
        }

        .od-hostel-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--border-light);
          font-size: var(--text-sm);
        }

        .od-hostel-row:last-child {
          border-bottom: none;
        }

        .od-hostel-row-label {
          color: var(--text-secondary);
        }

        .od-hostel-row-value {
          font-weight: 600;
          color: var(--text);
        }

        .od-hostel-actions {
          display: flex;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-5) var(--space-5);
        }

        .od-hostel-actions .btn {
          flex: 1;
          justify-content: center;
        }

        .od-empty {
          text-align: center;
          padding: var(--space-16) var(--space-8);
          background: var(--bg);
          border-radius: var(--radius-xl);
          border: 2px dashed var(--border);
        }

        .od-empty-icon {
          width: 64px;
          height: 64px;
          background: var(--primary-50);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-4);
          color: var(--primary);
        }

        body.dark-mode .od-empty-icon,
        body.dark-theme .od-empty-icon {
          background: rgba(99, 102, 241, 0.12);
        }

        .od-empty-title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text);
          margin-bottom: var(--space-2);
        }

        .od-empty-text {
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
          font-size: var(--text-sm);
        }

        .od-loading {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--space-16);
        }

        @media (max-width: 1024px) {
          .od-stats { grid-template-columns: repeat(3, 1fr); }
          .od-hostels { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .od-container { padding: var(--space-5) var(--space-4); }
          .od-stats { grid-template-columns: repeat(2, 1fr); }
          .od-hostels { grid-template-columns: 1fr; }
          .od-section-header { flex-direction: column; align-items: flex-start; gap: var(--space-3); }
          .od-hostel-actions { flex-direction: column; }
        }
      `}</style>

      <div className="od-container">
        <div className="od-header">
          <h1 className="od-title">Dashboard</h1>
          <p className="od-subtitle">Manage your hostels, rooms, and bookings</p>
        </div>

        {/* Stats */}
        <div className="od-stats animate-stagger">
          {statCards.map((stat, i) => (
            <div
              key={i}
              className="od-stat"
              onClick={stat.onClick}
              style={stat.onClick ? { cursor: 'pointer' } : {}}
            >
              <div className="od-stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
                <stat.icon size={20} />
              </div>
              <div className="od-stat-value" style={{ color: stat.color }}>{stat.value}</div>
              <div className="od-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hostels Section */}
        <div className="od-section-header">
          <h2 className="od-section-title">Your Hostels</h2>
          <button onClick={() => navigate('/owner/hostels/add')} className="btn btn-primary">
            <PlusIcon size={16} />
            Add Hostel
          </button>
        </div>

        {loading ? (
          <div className="od-loading">
            <div className="spinner spinner-lg"></div>
          </div>
        ) : hostels.length > 0 ? (
          <div className="od-hostels animate-stagger">
            {hostels.map(hostel => (
              <div key={hostel._id} className="od-hostel">
                <div className="od-hostel-top">
                  <div className="od-hostel-name">{hostel.name}</div>
                  <div className="od-hostel-location">
                    <MapPinIcon size={14} />
                    {hostel.address}, {hostel.city}
                  </div>
                </div>
                <div className="od-hostel-body">
                  <div className="od-hostel-row">
                    <span className="od-hostel-row-label">Single Rooms</span>
                    <span className="od-hostel-row-value">{hostel.roomConfig?.single?.count || 0}</span>
                  </div>
                  <div className="od-hostel-row">
                    <span className="od-hostel-row-label">Double Rooms</span>
                    <span className="od-hostel-row-value">{hostel.roomConfig?.double?.count || 0}</span>
                  </div>
                  <div className="od-hostel-row">
                    <span className="od-hostel-row-label">Triple Rooms</span>
                    <span className="od-hostel-row-value">{hostel.roomConfig?.triple?.count || 0}</span>
                  </div>
                  <div className="od-hostel-row">
                    <span className="od-hostel-row-label">Four-Person Rooms</span>
                    <span className="od-hostel-row-value">{hostel.roomConfig?.four?.count || 0}</span>
                  </div>
                </div>
                <div className="od-hostel-actions">
                  <button className="btn btn-outline btn-sm" onClick={() => navigate(`/owner/hostels/${hostel._id}/edit`)}>
                    <EditIcon size={14} />
                    Edit
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={() => navigate('/owner/rooms')}>
                    <BedIcon size={14} />
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="od-empty">
            <div className="od-empty-icon">
              <BuildingIcon size={28} />
            </div>
            <div className="od-empty-title">No Hostels Yet</div>
            <p className="od-empty-text">Start by adding your first hostel property</p>
            <button onClick={() => navigate('/owner/hostels/add')} className="btn btn-primary">
              <PlusIcon size={16} />
              Add Your First Hostel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
