import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { hostelsAPI, bookingsAPI } from '../services/api';

export default function HostelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hostel, setHostel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingRoomType, setBookingRoomType] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    fetchHostelDetails();
  }, [id]);

  async function fetchHostelDetails() {
    setIsLoading(true);
    const result = await hostelsAPI.getById(id);
    setIsLoading(false);

    if (result.success) {
      setHostel(result.hostel);
    } else {
      setError(result.message || 'Failed to load hostel details');
    }
  }

  async function handleBookRoom(roomType) {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    if (!token) {
      if (window.confirm('Please login as a student to book a room. Go to login page?')) {
        navigate('/login');
      }
      return;
    }

    if (userRole !== 'student') {
      toast.error('Only students can book rooms');
      return;
    }

    // Book directly without modal
    setBookingRoomType(roomType);
    setIsBooking(true);
    
    const result = await bookingsAPI.create({
      hostelId: id,
      roomType: roomType,
      studentNotes: ''
    });
    
    setIsBooking(false);
    setBookingRoomType('');

    if (result.success) {
      toast.success('Payment successful! Booking confirmed.');
      navigate('/student/dashboard');
    } else {
      toast.error(result.message || 'Payment failed. Please try again.');
    }
  }

  if (isLoading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'var(--bg, #fafafa)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            border: '3px solid #e5e5e5', 
            borderTopColor: '#111', 
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <div style={{ fontSize: '1rem', color: '#737373' }}>Loading hostel details...</div>
        </div>
      </div>
    );
  }

  if (error || !hostel) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'var(--bg, #fafafa)',
        flexDirection: 'column', 
        gap: '1.5rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif'
      }}>
        <div style={{ fontSize: '3rem' }}>😕</div>
        <div style={{ fontSize: '1.25rem', color: '#737373' }}>{error || 'Hostel not found'}</div>
        <Link to="/" style={{ 
          padding: '0.75rem 1.5rem', 
          background: '#111', 
          color: 'white', 
          borderRadius: '0.5rem', 
          textDecoration: 'none', 
          fontWeight: '500' 
        }}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  const isDark = document.body.classList.contains('dark-mode');

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --bg: #fafafa;
          --bg-card: #ffffff;
          --text: #0a0a0a;
          --text-secondary: #525252;
          --text-muted: #737373;
          --border: #e5e5e5;
          --primary: #0a0a0a;
          --primary-hover: #262626;
          --accent: #059669;
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-card: #171717;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --text-muted: #737373;
          --border: #262626;
          --primary: #fafafa;
          --primary-hover: #e5e5e5;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
        }

        .page-header {
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
          padding: 1.5rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }

        .back-btn:hover {
          background: var(--border);
          color: var(--text);
        }

        .hero {
          background: var(--bg-card);
          padding: 3rem 2rem;
          border-bottom: 1px solid var(--border);
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hostel-name {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
        }

        .hostel-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 1.125rem;
        }

        .content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 2rem;
        }

        .card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .description {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.9375rem;
        }

        .amenities-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .amenity {
          padding: 0.5rem 1rem;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 2rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border);
          font-size: 0.9375rem;
        }

        .contact-item:last-child {
          border-bottom: none;
        }

        .rooms-card {
          position: sticky;
          top: 100px;
        }

        .room-option {
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          margin-bottom: 1rem;
          transition: all 0.2s;
        }

        .room-option:hover {
          border-color: var(--text-muted);
        }

        .room-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .room-type {
          font-size: 1rem;
          font-weight: 600;
        }

        .room-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--accent);
        }

        .room-availability {
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .book-btn {
          width: 100%;
          padding: 0.875rem;
          background: var(--primary);
          color: var(--bg);
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .book-btn:hover:not(:disabled) {
          background: var(--primary-hover);
        }

        .book-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 900px) {
          .content {
            grid-template-columns: 1fr;
          }
          .rooms-card {
            position: static;
          }
          .hostel-name {
            font-size: 2rem;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 2rem 1rem;
          }
          .content {
            padding: 1rem;
          }
          .hostel-name {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        <header className="page-header">
          <div className="header-inner">
            <Link to="/search" className="back-btn">
              ← Back to Search
            </Link>
          </div>
        </header>

        <section className="hero">
          <div className="hero-inner">
            <h1 className="hostel-name">{hostel.name}</h1>
            <div className="hostel-location">
              <span>📍</span>
              <span>{hostel.city}, {hostel.state}</span>
            </div>
          </div>
        </section>

        <main className="content">
          <div>
            <div className="card">
              <h2 className="card-title">About This Hostel</h2>
              <p className="description">
                {hostel.description || 'A comfortable and affordable hostel for students with all essential amenities and a great living environment.'}
              </p>
            </div>

            {hostel.amenities && hostel.amenities.length > 0 && (
              <div className="card">
                <h2 className="card-title">Amenities</h2>
                <div className="amenities-grid">
                  {hostel.amenities.map((amenity, i) => (
                    <span key={i} className="amenity">{amenity}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="card">
              <h2 className="card-title">Contact Information</h2>
              {hostel.contactPhone && (
                <div className="contact-item">
                  <span>📞</span>
                  <span>{hostel.contactPhone}</span>
                </div>
              )}
              {hostel.contactEmail && (
                <div className="contact-item">
                  <span>✉️</span>
                  <span>{hostel.contactEmail}</span>
                </div>
              )}
              <div className="contact-item">
                <span>📍</span>
                <span>{hostel.address}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="card rooms-card">
              <h2 className="card-title">Available Rooms</h2>

              {hostel.roomConfig?.single?.count > 0 && (
                <div className="room-option">
                  <div className="room-header">
                    <span className="room-type">🛏️ Single Room</span>
                    <span className="room-price">₹{hostel.roomConfig.single.rent}/mo</span>
                  </div>
                  <div className="room-availability">
                    {hostel.roomAvailability?.single?.available || 0} of {hostel.roomConfig.single.count} available
                  </div>
                  <button 
                    className="book-btn" 
                    onClick={() => handleBookRoom('single')}
                    disabled={isBooking && bookingRoomType === 'single'}
                  >
                    {isBooking && bookingRoomType === 'single' ? 'Processing...' : 'Pay & Book'}
                  </button>
                </div>
              )}

              {hostel.roomConfig?.double?.count > 0 && (
                <div className="room-option">
                  <div className="room-header">
                    <span className="room-type">🛏️ Double Sharing</span>
                    <span className="room-price">₹{hostel.roomConfig.double.rent}/mo</span>
                  </div>
                  <div className="room-availability">
                    {hostel.roomAvailability?.double?.available || 0} of {hostel.roomConfig.double.count} available
                  </div>
                  <button 
                    className="book-btn" 
                    onClick={() => handleBookRoom('double')}
                    disabled={isBooking && bookingRoomType === 'double'}
                  >
                    {isBooking && bookingRoomType === 'double' ? 'Processing...' : 'Pay & Book'}
                  </button>
                </div>
              )}

              {hostel.roomConfig?.triple?.count > 0 && (
                <div className="room-option">
                  <div className="room-header">
                    <span className="room-type">🛏️ Triple Sharing</span>
                    <span className="room-price">₹{hostel.roomConfig.triple.rent}/mo</span>
                  </div>
                  <div className="room-availability">
                    {hostel.roomAvailability?.triple?.available || 0} of {hostel.roomConfig.triple.count} available
                  </div>
                  <button 
                    className="book-btn" 
                    onClick={() => handleBookRoom('triple')}
                    disabled={isBooking && bookingRoomType === 'triple'}
                  >
                    {isBooking && bookingRoomType === 'triple' ? 'Processing...' : 'Pay & Book'}
                  </button>
                </div>
              )}

              {hostel.roomConfig?.four?.count > 0 && (
                <div className="room-option">
                  <div className="room-header">
                    <span className="room-type">🛏️ Four Sharing</span>
                    <span className="room-price">₹{hostel.roomConfig.four.rent}/mo</span>
                  </div>
                  <div className="room-availability">
                    {hostel.roomAvailability?.four?.available || 0} of {hostel.roomConfig.four.count} available
                  </div>
                  <button 
                    className="book-btn" 
                    onClick={() => handleBookRoom('four')}
                    disabled={isBooking && bookingRoomType === 'four'}
                  >
                    {isBooking && bookingRoomType === 'four' ? 'Processing...' : 'Pay & Book'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
