import React, { useState, useEffect } from 'react'
import OwnerNavbar from '../components/OwnerNavbar'

export default function ManageRooms() {
  const [hostels, setHostels] = useState([])
  const [selectedHostel, setSelectedHostel] = useState(null)
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editingRoom, setEditingRoom] = useState(null)
  const [isDark, setIsDark] = useState(false)
  const [formData, setFormData] = useState({
    roomType: 'double',
    rent: '',
    roomNumber: ''
  })

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme === 'dark')
    
    // Apply theme to body
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
    fetchHostel()

    return () => {
      window.removeEventListener('themeChange', handleThemeChange)
    }
  }, [])

  const fetchHostel = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:5000/api/hostels/owner/my', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const data = await response.json()

      if (response.ok && data.success && data.hostels && data.hostels.length > 0) {
        setHostels(data.hostels)
        // Select first hostel by default
        setSelectedHostel(data.hostels[0])
        // Fetch actual rooms from DB
        fetchRoomsForHostel(data.hostels[0]._id)
        setError('')
      } else if (data.hostels && data.hostels.length === 0) {
        setError('No hostels found. Please add a hostel first.')
      } else {
        setError('Failed to load hostels')
      }
    } catch (err) {
      console.error('Fetch hostel error:', err)
      setError('Failed to load hostels')
    } finally {
      setLoading(false)
    }
  }

  const handleHostelChange = (hostelId) => {
    const hostel = hostels.find(h => h._id === hostelId)
    if (hostel) {
      setSelectedHostel(hostel)
      fetchRoomsForHostel(hostelId)
    }
  }

  // Fetch actual rooms from the database with occupants
  const fetchRoomsForHostel = async (hostelId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:5000/api/rooms/hostel/${hostelId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const data = await response.json()
      
      if (data.success && data.rooms) {
        setRooms(data.rooms)
      } else {
        // Fallback to generating from config if no rooms exist
        const hostel = hostels.find(h => h._id === hostelId)
        if (hostel) {
          generateRoomsFromConfig(hostel.roomConfig)
        }
      }
    } catch (err) {
      console.error('Error fetching rooms:', err)
      // Fallback to config-based generation
      const hostel = hostels.find(h => h._id === hostelId)
      if (hostel) {
        generateRoomsFromConfig(hostel.roomConfig)
      }
    }
  }

  const generateRoomsFromConfig = (roomConfig) => {
    const roomsList = []

    const parseRoomNumbers = (input) => {
      if (!input) return []
      const numbers = []
      const parts = input.split(',').map(s => s.trim())

      parts.forEach(part => {
        if (part.includes('-')) {
          const [start, end] = part.split('-').map(Number)
          for (let i = start; i <= end; i++) {
            numbers.push(i)
          }
        } else {
          const num = Number(part)
          if (!isNaN(num)) numbers.push(num)
        }
      })
      return numbers
    }

    Object.entries(roomConfig || {}).forEach(([type, config]) => {
      if (!config || config.count === 0) return

      const roomNumbers = parseRoomNumbers(config.roomNumbers)

      if (roomNumbers.length === 0) {
        const startNum = type === 'single' ? 101 : type === 'double' ? 201 : type === 'triple' ? 301 : 401
        for (let i = 0; i < config.count; i++) {
          roomNumbers.push(startNum + i)
        }
      }

      roomNumbers.slice(0, config.count).forEach((num) => {
        roomsList.push({
          _id: `${type}-${num}`,
          number: num,
          type: type,
          rent: config.rent,
          capacity: type === 'single' ? 1 : type === 'double' ? 2 : type === 'triple' ? 3 : 4,
          status: 'available',
          occupants: [],
          currentBookings: []
        })
      })
    })

    setRooms(roomsList)
  }

  const handleEditRoom = (room) => {
    setEditingRoom(room._id)
    setFormData({
      roomType: room.type,
      rent: room.rent,
      roomNumber: room.roomNumber
    })
  }

  const handleSaveRoom = async () => {
    if (!editingRoom) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:5000/api/hostels/${hostel._id}/rooms/${editingRoom}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setEditingRoom(null)
        fetchHostel()
      } else {
        setError('Failed to update room')
      }
    } catch (err) {
      setError('Failed to update room')
    }
  }

  const handleDeleteRoom = async (roomId) => {
    if (!window.confirm('Are you sure you want to delete this room?')) return
    if (!selectedHostel) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:5000/api/hostels/${selectedHostel._id}/rooms/${roomId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (response.ok) {
        fetchHostel()
      } else {
        setError('Failed to delete room')
      }
    } catch (err) {
      setError('Failed to delete room')
    }
  }

  const handleCancelEdit = () => {
    setEditingRoom(null)
    setFormData({ roomType: 'double', rent: '', roomNumber: '' })
  }

  return (
    <div className={`manage-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <OwnerNavbar />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .manage-wrapper {
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

        .manage-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .page-header-left {
          flex: 1;
          min-width: 200px;
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

        .error-msg {
          background: #fef2f2;
          color: #991b1b;
          padding: 0.875rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          border-left: 3px solid #dc2626;
          font-size: 0.875rem;
        }

        .dark-theme .error-msg {
          background: rgba(153, 27, 27, 0.15);
          color: #fca5a5;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .room-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .dark-theme .room-card {
          background: #1e293b;
          border-color: #334155;
        }

        .room-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .dark-theme .room-card:hover {
          border-color: #475569;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .room-header {
          background: #111827;
          padding: 1.25rem 1.5rem;
          color: white;
        }

        .dark-theme .room-header {
          background: #0f172a;
        }

        .room-num {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .room-type {
          font-size: 0.8125rem;
          font-weight: 500;
          opacity: 0.8;
        }

        .room-body {
          padding: 1.25rem 1.5rem;
        }

        .room-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.625rem 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .dark-theme .room-info {
          border-bottom-color: #334155;
        }

        .room-info:last-child {
          border-bottom: none;
        }

        .room-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dark-theme .room-label {
          color: #94a3b8;
        }

        .room-val {
          font-weight: 500;
          color: #111827;
          font-size: 0.875rem;
        }

        .dark-theme .room-val {
          color: #f1f5f9;
        }

        .price {
          color: #059669;
          font-size: 1rem;
          font-weight: 600;
        }

        .dark-theme .price {
          color: #10b981;
        }

        .badge {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .badge-available {
          background: #ecfdf5;
          color: #059669;
        }

        .badge-occupied {
          background: #fee2e2;
          color: #dc2626;
        }

        .badge-pending {
          background: #fef3c7;
          color: #d97706;
        }

        .dark-theme .badge-available {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }

        .dark-theme .badge-occupied {
          background: rgba(220, 38, 38, 0.15);
          color: #f87171;
        }

        .dark-theme .badge-pending {
          background: rgba(217, 119, 6, 0.15);
          color: #fbbf24;
        }

        /* Occupants Section */
        .occupants-section {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .dark-theme .occupants-section {
          border-top-color: #374151;
        }

        .occupants-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dark-theme .occupants-title {
          color: #9ca3af;
        }

        .occupant-item {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .dark-theme .occupant-item {
          background: #1f2937;
          border-color: #374151;
        }

        .occupant-item.pending {
          border-color: #fbbf24;
          background: #fffbeb;
        }

        .dark-theme .occupant-item.pending {
          background: rgba(251, 191, 36, 0.1);
          border-color: #d97706;
        }

        .occupant-name {
          font-weight: 600;
          font-size: 0.875rem;
          color: #111827;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dark-theme .occupant-name {
          color: #f3f4f6;
        }

        .occupant-details {
          font-size: 0.75rem;
          color: #6b7280;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .dark-theme .occupant-details {
          color: #9ca3af;
        }

        .pending-tag {
          background: #fbbf24;
          color: #78350f;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.625rem;
          font-weight: 600;
        }

        .dark-theme .pending-tag {
          background: #d97706;
          color: #fffbeb;
        }

        .no-occupants {
          margin-top: 0.75rem;
          padding: 0.75rem;
          background: #f9fafb;
          border-radius: 0.5rem;
          font-size: 0.8125rem;
          color: #9ca3af;
          text-align: center;
          font-style: italic;
        }

        .dark-theme .no-occupants {
          background: #1f2937;
          color: #6b7280;
        }

        .room-footer {
          display: flex;
          gap: 0.75rem;
          padding: 1.25rem 1.5rem;
          padding-top: 0;
        }

        .btn-small {
          flex: 1;
          padding: 0.5rem 0.75rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8125rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .btn-edit {
          color: #3b82f6;
          background: #eff6ff;
          border: 1px solid #dbeafe;
        }

        .btn-edit:hover {
          background: #dbeafe;
        }

        .btn-del {
          color: #dc2626;
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .btn-del:hover {
          background: #fee2e2;
        }

        .dark-theme .btn-edit {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .dark-theme .btn-edit:hover {
          background: rgba(59, 130, 246, 0.25);
        }

        .dark-theme .btn-del {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .dark-theme .btn-del:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        .empty {
          text-align: center;
          padding: 3rem 2rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px dashed #e2e8f0;
        }

        .dark-theme .empty {
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
          margin-bottom: 0.375rem;
          color: #111827;
        }

        .dark-theme .empty-title {
          color: #f1f5f9;
        }

        .empty-text {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .dark-theme .empty-text {
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

        .modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal.open {
          display: flex;
        }

        .modal-content {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 1rem;
          max-width: 400px;
          width: 100%;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .dark-theme .modal-content {
          background: #1e293b;
          border-color: #334155;
        }

        .modal-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.25rem;
        }

        .dark-theme .modal-title {
          color: #f1f5f9;
        }

        .modal-desc {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .dark-theme .modal-desc {
          color: #94a3b8;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .dark-theme .form-label {
          color: #e2e8f0;
        }

        .form-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: #ffffff;
          color: #111827;
          transition: all 0.2s ease;
        }

        .dark-theme .form-input {
          background: #0f172a;
          border-color: #334155;
          color: #f1f5f9;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }

        .btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .btn-save {
          background: #111827;
          color: white;
        }

        .btn-save:hover {
          background: #1f2937;
        }

        .dark-theme .btn-save {
          background: #3b82f6;
        }

        .dark-theme .btn-save:hover {
          background: #2563eb;
        }

        .btn-cancel {
          background: #f8fafc;
          color: #374151;
          border: 1px solid #e2e8f0;
        }

        .btn-cancel:hover {
          background: #f1f5f9;
        }

        .dark-theme .btn-cancel {
          background: #334155;
          color: #f1f5f9;
          border-color: #475569;
        }

        .dark-theme .btn-cancel:hover {
          background: #475569;
        }

        .hostel-selector {
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hostel-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
        }

        .dark-theme .hostel-label {
          color: #e2e8f0;
        }

        .hostel-select {
          padding: 0.5rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: #ffffff;
          color: #111827;
          cursor: pointer;
          min-width: 200px;
        }

        .dark-theme .hostel-select {
          background: #1e293b;
          border-color: #334155;
          color: #f1f5f9;
        }

        .hostel-select:focus {
          outline: none;
          border-color: #3b82f6;
        }

        @media (max-width: 768px) {
          .manage-container {
            padding: 1.5rem 1rem;
          }

          .page-header {
            flex-direction: column;
          }

          .page-title {
            font-size: 1.5rem;
          }

          .rooms-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .modal-content {
            padding: 1.25rem;
          }
        }
      `}</style>

      <div className="manage-container">
        <div className="page-header">
          <div className="page-header-left">
            <h1 className="page-title">🛏️ Manage Rooms</h1>
            <p className="page-subtitle">View, edit and manage your hostel rooms</p>
          </div>
        </div>

        {hostels.length > 1 && (
          <div className="hostel-selector">
            <label className="hostel-label">Select Hostel:</label>
            <select
              className="hostel-select"
              value={selectedHostel?._id || ''}
              onChange={(e) => handleHostelChange(e.target.value)}
            >
              {hostels.map(h => (
                <option key={h._id} value={h._id}>{h.name}</option>
              ))}
            </select>
          </div>
        )}

        {selectedHostel && (
          <div className="page-subtitle" style={{ marginBottom: '1.5rem', fontWeight: 500 }}>
            {selectedHostel.name} - {selectedHostel.city}
          </div>
        )}

        {error && <div className="error-msg">{error}</div>}

        {loading ? (
          <div className="loading">Loading rooms...</div>
        ) : rooms.length > 0 ? (
          <div className="rooms-grid">
            {rooms.map(room => {
              const occupantCount = room.occupants?.length || 0
              const pendingCount = room.currentBookings?.length || 0
              const roomNumber = room.number || room.roomNumber
              const roomStatus = occupantCount >= room.capacity ? 'occupied' 
                               : pendingCount > 0 ? 'pending' 
                               : 'available'
              
              return (
                <div key={room._id} className="room-card">
                  <div className="room-header">
                    <div className="room-num">#{roomNumber}</div>
                    <div className="room-type">
                      {room.type === 'single' && '🛏️ Single'}
                      {room.type === 'double' && '👥 Double'}
                      {room.type === 'triple' && '👨‍👨‍👦 Triple'}
                      {room.type === 'four' && '👨‍👩‍👧‍👦 Four-Person'}
                    </div>
                  </div>
                  <div className="room-body">
                    <div className="room-info">
                      <span className="room-label">Capacity</span>
                      <span className="room-val">{room.capacity} persons</span>
                    </div>
                    <div className="room-info">
                      <span className="room-label">Occupied</span>
                      <span className="room-val">{occupantCount} / {room.capacity}</span>
                    </div>
                    <div className="room-info">
                      <span className="room-label">Fee/Month</span>
                      <span className="price">₹{room.rent}</span>
                    </div>
                    <div className="room-info">
                      <span className="room-label">Status</span>
                      <span className={`badge badge-${roomStatus}`}>
                        {roomStatus === 'occupied' && '🔴 Full'}
                        {roomStatus === 'pending' && '🟡 Pending'}
                        {roomStatus === 'available' && '🟢 Available'}
                      </span>
                    </div>
                    
                    {/* Occupants Section */}
                    {(occupantCount > 0 || pendingCount > 0) && (
                      <div className="occupants-section">
                        <div className="occupants-title">
                          👥 Occupants ({occupantCount + pendingCount})
                        </div>
                        {room.occupants?.map((occupant) => (
                          <div key={occupant._id} className="occupant-item">
                            <div className="occupant-name">👤 {occupant.name}</div>
                            <div className="occupant-details">
                              <span>📧 {occupant.email}</span>
                              {occupant.phone && <span>📞 {occupant.phone}</span>}
                            </div>
                          </div>
                        ))}
                        {room.currentBookings?.map((booking) => (
                          <div key={booking._id} className="occupant-item pending">
                            <div className="occupant-name">
                              👤 {booking.student?.name || 'Unknown'}
                              <span className="pending-tag">PENDING</span>
                            </div>
                            <div className="occupant-details">
                              <span>📧 {booking.student?.email || 'N/A'}</span>
                              {booking.student?.phone && <span>📞 {booking.student.phone}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {occupantCount === 0 && pendingCount === 0 && (
                      <div className="no-occupants">No occupants yet</div>
                    )}
                  </div>
                  <div className="room-footer">
                    <button className="btn-small btn-edit" onClick={() => handleEditRoom(room)}>
                      ✏️ Edit
                    </button>
                    <button className="btn-small btn-del" onClick={() => handleDeleteRoom(room._id)}>
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="empty">
            <div className="empty-icon">🛏️</div>
            <div className="empty-title">No Rooms Found</div>
            <p className="empty-text">Create a hostel to get started</p>
          </div>
        )}

        {editingRoom && (
          <div className={`modal ${editingRoom ? 'open' : ''}`}>
            <div className="modal-content">
              <h2 className="modal-title">Edit Room #{formData.roomNumber}</h2>
              <p className="modal-desc">Update the monthly rent for this room</p>

              <div className="form-group">
                <label className="form-label">Monthly Rent (₹)</label>
                <input
                  type="number"
                  className="form-input"
                  value={formData.rent}
                  onChange={(e) => setFormData({ ...formData, rent: e.target.value })}
                  min="0"
                  placeholder="Enter amount"
                />
              </div>

              <div className="modal-actions">
                <button onClick={handleCancelEdit} className="btn btn-cancel">
                  Cancel
                </button>
                <button onClick={handleSaveRoom} className="btn btn-save">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
