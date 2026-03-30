import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import OwnerNavbar from '../components/OwnerNavbar'

export default function OwnerHostels() {
  const navigate = useNavigate()
  const [hostels, setHostels] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme === 'dark')
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }

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
    fetchHostels()

    return () => {
      window.removeEventListener('themeChange', handleThemeChange)
    }
  }, [])

  const fetchHostels = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:5000/api/hostels/owner/my', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const data = await response.json()

      if (response.ok && data.success) {
        setHostels(data.hostels || [])
        setError('')
      } else {
        setHostels([])
        setError('')
      }
    } catch (err) {
      console.error('Fetch hostel error:', err)
      setError('Failed to load hostel')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = () => {
    if (hostel) {
      navigate(`/owner/hostels/${hostel._id}/edit`)
    }
  }

  const handleDelete = async (hostelId) => {
    if (!window.confirm('Are you sure you want to delete this hostel?')) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:5000/api/hostels/${hostelId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (response.ok) {
        alert('Hostel deleted successfully')
        fetchHostels()
      } else {
        setError('Failed to delete hostel')
      }
    } catch (err) {
      setError('Failed to delete hostel')
    }
  }

  return (
    <div className={`hostels-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <OwnerNavbar />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .hostels-wrapper {
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

        .hostels-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.025em;
        }

        .dark-theme .page-title {
          color: #f1f5f9;
        }

        .page-subtitle {
          font-size: 0.9375rem;
          color: #6b7280;
          margin-top: 0.25rem;
        }

        .dark-theme .page-subtitle {
          color: #94a3b8;
        }

        .add-btn {
          padding: 0.625rem 1.25rem;
          background: #111827;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .add-btn:hover {
          background: #1f2937;
          transform: translateY(-1px);
        }

        .dark-theme .add-btn {
          background: #3b82f6;
        }

        .dark-theme .add-btn:hover {
          background: #2563eb;
        }

        .hostels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .error-msg {
          background: #fef2f2;
          color: #dc2626;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          border-left: 3px solid #dc2626;
          font-size: 0.875rem;
        }

        .dark-theme .error-msg {
          background: rgba(239, 68, 68, 0.1);
          color: #fca5a5;
          border-left-color: #ef4444;
        }

        .hostel-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #e2e8f0;
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

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
        }

        .dark-theme .info-label {
          color: #94a3b8;
        }

        .info-value {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #111827;
        }

        .dark-theme .info-value {
          color: #f1f5f9;
        }

        .amenities-section {
          margin-bottom: 1.25rem;
        }

        .section-title {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
          margin-bottom: 0.625rem;
        }

        .dark-theme .section-title {
          color: #94a3b8;
        }

        .amenities-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .amenity-tag {
          padding: 0.25rem 0.625rem;
          background: #f1f5f9;
          color: #475569;
          border-radius: 0.25rem;
          font-size: 0.75rem;
        }

        .dark-theme .amenity-tag {
          background: #334155;
          color: #94a3b8;
        }

        .rooms-section {
          margin-bottom: 1.25rem;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .room-type-card {
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
        }

        .dark-theme .room-type-card {
          background: #0f172a;
          border-color: #334155;
        }

        .room-type-name {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
          margin-bottom: 0.25rem;
          text-transform: capitalize;
        }

        .dark-theme .room-type-name {
          color: #94a3b8;
        }

        .room-type-count {
          font-size: 1.125rem;
          font-weight: 700;
          color: #111827;
        }

        .dark-theme .room-type-count {
          color: #f1f5f9;
        }

        .room-type-rent {
          font-size: 0.75rem;
          color: #059669;
          font-weight: 500;
          margin-top: 0.125rem;
        }

        .dark-theme .room-type-rent {
          color: #10b981;
        }

        .actions {
          display: flex;
          gap: 0.625rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          background: #f8fafc;
        }

        .dark-theme .actions {
          border-top-color: #334155;
          background: #0f172a;
        }

        .btn {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8125rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .btn-manage {
          background: #3b82f6;
          color: white;
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
          opacity: 0.5;
        }

        .empty-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .dark-theme .empty-title {
          color: #f1f5f9;
        }

        .empty-text {
          color: #6b7280;
          margin-bottom: 1.5rem;
          font-size: 0.9375rem;
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
          .hostels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hostels-container {
            padding: 1.5rem 1rem;
          }
          .page-title {
            font-size: 1.5rem;
          }
          .hostels-grid {
            grid-template-columns: 1fr;
          }
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .add-btn {
            width: 100%;
            justify-content: center;
          }
          .rooms-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
          .actions {
            flex-direction: column;
          }
        }

        .view-rooms-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 0.75rem;
        }

        .view-rooms-btn:hover {
          background: #4338ca;
        }
      `}</style>

      <div className="hostels-container">
        <div className="page-header">
          <div>
            <h1 className="page-title">🏠 My Hostels</h1>
            <p className="page-subtitle">Manage your hostel properties</p>
          </div>
          <Link to="/owner/hostels/add" className="add-btn">
            ➕ Add Hostel
          </Link>
        </div>

        {error && <div className="error-msg">{error}</div>}

        {loading ? (
          <div className="loading"><div className="spinner"></div></div>
        ) : hostels.length > 0 ? (
          <div className="hostels-grid">
            {hostels.map((hostel) => (
              <div key={hostel._id} className="hostel-card">
                <div className="hostel-header">
                  <h2 className="hostel-name">{hostel.name}</h2>
                  <div className="hostel-location">
                    📍 {hostel.city}, {hostel.state}
                  </div>
                </div>

                <div className="hostel-body">
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Contact</span>
                      <span className="info-value">{hostel.contactPhone}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Gender</span>
                      <span className="info-value">{hostel.gender}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Address</span>
                      <span className="info-value">{hostel.address}</span>
                    </div>
                  </div>

                  {hostel.amenities && hostel.amenities.length > 0 && (
                    <div className="amenities-section">
                      <h3 className="section-title">Amenities</h3>
                      <div className="amenities-list">
                        {hostel.amenities.slice(0, 3).map((amenity, idx) => (
                          <span key={idx} className="amenity-tag">✓ {amenity}</span>
                        ))}
                        {hostel.amenities.length > 3 && (
                          <span className="amenity-tag">+{hostel.amenities.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="rooms-section">
                    <h3 className="section-title">Rooms</h3>
                    <div className="rooms-grid">
                      {hostel.roomConfig?.single?.count > 0 && (
                        <div className="room-type-card">
                          <div className="room-type-name">🛏️ Single</div>
                          <div className="room-type-count">{hostel.roomConfig.single.count}</div>
                          <div className="room-type-rent">₹{hostel.roomConfig.single.rent}/mo</div>
                        </div>
                      )}
                      {hostel.roomConfig?.double?.count > 0 && (
                        <div className="room-type-card">
                          <div className="room-type-name">👥 Double</div>
                          <div className="room-type-count">{hostel.roomConfig.double.count}</div>
                          <div className="room-type-rent">₹{hostel.roomConfig.double.rent}/mo</div>
                        </div>
                      )}
                      {hostel.roomConfig?.triple?.count > 0 && (
                        <div className="room-type-card">
                          <div className="room-type-name">👨‍👨‍👦 Triple</div>
                          <div className="room-type-count">{hostel.roomConfig.triple.count}</div>
                          <div className="room-type-rent">₹{hostel.roomConfig.triple.rent}/mo</div>
                        </div>
                      )}
                      {hostel.roomConfig?.four?.count > 0 && (
                        <div className="room-type-card">
                          <div className="room-type-name">👨‍👩‍👧‍👦 Four</div>
                          <div className="room-type-count">{hostel.roomConfig.four.count}</div>
                          <div className="room-type-rent">₹{hostel.roomConfig.four.rent}/mo</div>
                        </div>
                      )}
                    </div>
                    <button 
                      className="view-rooms-btn"
                      onClick={() => navigate('/owner/rooms')}
                    >
                      👁️ View Room Details
                    </button>
                  </div>

                  <div className="actions">
                    <button className="btn btn-edit" onClick={() => handleEdit(hostel._id)}>
                      ✏️ Edit
                    </button>
                    <button className="btn btn-delete" onClick={() => handleDelete(hostel._id)}>
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🏠</div>
            <h2 className="empty-title">No Hostel Yet</h2>
            <p className="empty-text">Create your first hostel to get started</p>
            <Link to="/owner/hostels/add" className="add-btn">
              ➕ Add Hostel
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
