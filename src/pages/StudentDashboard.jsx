import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI, bookingsAPI, hostelsAPI, reviewsAPI } from '../services/api';
import StudentComplaints from '../components/StudentComplaints';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [myReviews, setMyReviews] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchCity, setSearchCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme');
      setIsDark(newTheme === 'dark');
      if (newTheme === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    };

    window.addEventListener('themeChange', handleThemeChange);
    fetchDashboardData();
    getUserLocation();

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location not available:', error.message);
        },
        { timeout: 5000 }
      );
    }
  }

  async function fetchDashboardData() {
    setIsLoading(true);

    const [userResult, bookingsResult, reviewsResult] = await Promise.all([
      authAPI.getMe(),
      bookingsAPI.getMyBookings(),
      reviewsAPI.getMyReviews()
    ]);

    if (userResult.success) {
      setUser(userResult.user);
    } else {
      navigate('/login');
      return;
    }

    if (bookingsResult.success) {
      setBookings(bookingsResult.bookings);
    }

    if (reviewsResult.success) {
      setMyReviews(reviewsResult.reviews || []);
    }

    setIsLoading(false);
  }

  function handleLogout() {
    authAPI.logout();
    navigate('/');
  }

  async function handleCancelBooking(bookingId) {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;
    
    const result = await bookingsAPI.cancel(bookingId);
    if (result.success) {
      fetchDashboardData();
    } else {
      alert(result.message || 'Failed to cancel booking');
    }
  }

  async function handleSearch(e) {
    e?.preventDefault();
    if (!searchCity.trim()) return;
    setSearching(true);
    try {
      const params = { city: searchCity.trim() };
      if (userLocation) {
        params.userLat = userLocation.lat;
        params.userLng = userLocation.lng;
      }
      const result = await hostelsAPI.search(params);
      if (result.success) {
        setSearchResults(result.hostels || []);
      }
    } catch (err) {
      console.error('Search error:', err);
    }
    setSearching(false);
  }

  function formatDistance(km) {
    if (km === null || km === undefined) return null;
    if (km < 1) return `${Math.round(km * 1000)} m`;
    return `${km} km`;
  }

  function formatRating(hostel) {
    const rating = hostel.rating?.average || 0;
    const count = hostel.rating?.count || 0;
    if (rating === 0 && count === 0) return 'No ratings yet';
    return `⭐ ${rating.toFixed(1)} (${count})`;
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
      alert('Review submitted successfully!');
      fetchDashboardData();
    } else {
      alert(result.message || 'Failed to submit review');
    }
  }

  function goToHostelDetails(hostelId) {
    navigate(`/hostel/${hostelId}`);
  }

  function navigateToSearch() {
    navigate('/search');
  }

  const activeBooking = bookings.find(b => b.status === 'active' || b.status === 'approved');
  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const pastBookings = bookings.filter(b => ['rejected', 'cancelled', 'completed'].includes(b.status));

  if (isLoading) {
    return (
      <div className={`student-dashboard ${isDark ? 'dark' : 'light'}`}>
        <style>{getStyles()}</style>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: isDark ? '#0a0a0a' : '#ffffff'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div className="loader"></div>
            <div style={{ fontSize: '0.9375rem', color: isDark ? '#a3a3a3' : '#525252', marginTop: '1rem' }}>
              Loading your dashboard...
            </div>
          </div>
        </div>
      </div>
    );
  }

  function getStyles() {
    return `
      * { margin: 0; padding: 0; box-sizing: border-box; }

      :root {
        --primary: #4f46e5;
        --primary-dark: #4338ca;
        --accent: #06b6d4;
        --bg: #ffffff;
        --bg-secondary: #fafafa;
        --bg-tertiary: #f5f5f5;
        --text: #0a0a0a;
        --text-secondary: #525252;
        --text-tertiary: #737373;
        --border: #e5e5e5;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
        --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
      }

      .dark {
        --bg: #0a0a0a;
        --bg-secondary: #171717;
        --bg-tertiary: #262626;
        --text: #fafafa;
        --text-secondary: #a3a3a3;
        --text-tertiary: #737373;
        --border: #262626;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
      }

      .student-dashboard {
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
        background: var(--bg);
        color: var(--text);
        -webkit-font-smoothing: antialiased;
      }

      .loader {
        width: 40px;
        height: 40px;
        border: 3px solid var(--border);
        border-top-color: var(--primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .header {
        background: var(--bg);
        border-bottom: 1px solid var(--border);
        position: sticky;
        top: 0;
        z-index: 100;
        backdrop-filter: blur(20px);
      }

      .header-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--primary);
        text-decoration: none;
      }

      .user-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: var(--text-secondary);
      }

      .user-name {
        font-weight: 600;
        color: var(--text);
      }

      .nav-links {
        display: flex;
        gap: 0.5rem;
      }

      .nav-link {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-secondary);
        text-decoration: none;
        border-radius: 0.5rem;
        transition: all 0.2s;
      }

      .nav-link:hover {
        color: var(--text);
        background: var(--bg-tertiary);
      }

      .btn-logout {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #dc2626;
        background: transparent;
        border: 1px solid #fecaca;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .dark .btn-logout {
        border-color: rgba(220, 38, 38, 0.3);
      }

      .btn-logout:hover {
        background: #fef2f2;
      }

      .dark .btn-logout:hover {
        background: rgba(220, 38, 38, 0.1);
      }

      .main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .welcome-section {
        margin-bottom: 2rem;
      }

      .welcome-title {
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        margin-bottom: 0.5rem;
      }

      .welcome-subtitle {
        color: var(--text-secondary);
        font-size: 0.9375rem;
      }

      .grid {
        display: grid;
        gap: 1.5rem;
      }

      .grid-2 {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      .card {
        background: var(--bg-secondary);
        border: 1px solid var(--border);
        border-radius: 1rem;
        overflow: hidden;
        transition: all 0.2s;
      }

      .card:hover {
        box-shadow: var(--shadow-lg);
      }

      .card-header {
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .card-title {
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .card-body {
        padding: 1.5rem;
      }

      .booking-active {
        border-color: var(--primary);
        border-width: 2px;
      }

      .booking-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      @media (max-width: 500px) {
        .booking-grid {
          grid-template-columns: 1fr;
        }
      }

      .booking-field {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .booking-label {
        font-size: 0.75rem;
        color: var(--text-tertiary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 500;
      }

      .booking-value {
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--text);
      }

      .booking-value.rent {
        color: #059669;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.625rem 1.25rem;
        font-size: 0.875rem;
        font-weight: 500;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
        border: none;
      }

      .btn-primary {
        background: var(--primary);
        color: white;
      }

      .btn-primary:hover {
        background: var(--primary-dark);
      }

      .btn-danger {
        background: #fee2e2;
        color: #dc2626;
        border: 1px solid #fecaca;
      }

      .dark .btn-danger {
        background: rgba(220, 38, 38, 0.15);
        border-color: rgba(220, 38, 38, 0.3);
      }

      .btn-danger:hover {
        background: #fecaca;
      }

      .dark .btn-danger:hover {
        background: rgba(220, 38, 38, 0.25);
      }

      .btn-outline {
        background: transparent;
        color: var(--text);
        border: 1px solid var(--border);
      }

      .btn-outline:hover {
        background: var(--bg-tertiary);
      }

      .status-badge {
        display: inline-flex;
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        border-radius: 6rem;
      }

      .status-pending {
        background: #fef3c7;
        color: #92400e;
      }

      .dark .status-pending {
        background: rgba(251, 191, 36, 0.15);
        color: #fbbf24;
      }

      .status-approved, .status-active {
        background: #dcfce7;
        color: #166534;
      }

      .dark .status-approved, .dark .status-active {
        background: rgba(34, 197, 94, 0.15);
        color: #4ade80;
      }

      .status-rejected {
        background: #fee2e2;
        color: #991b1b;
      }

      .dark .status-rejected {
        background: rgba(239, 68, 68, 0.15);
        color: #f87171;
      }

      .status-cancelled {
        background: var(--bg-tertiary);
        color: var(--text-secondary);
      }

      .status-completed {
        background: #d1fae5;
        color: #065f46;
      }

      .dark .status-completed {
        background: rgba(16, 185, 129, 0.15);
        color: #34d399;
      }

      .booking-item {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .booking-item:last-child {
        border-bottom: none;
      }

      .booking-item-info h4 {
        font-size: 0.9375rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      .booking-item-meta {
        font-size: 0.8125rem;
        color: var(--text-secondary);
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .booking-item-actions {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .empty-state {
        text-align: center;
        padding: 3rem 2rem;
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
      }

      .empty-text {
        color: var(--text-secondary);
        font-size: 0.9375rem;
        margin-bottom: 1.5rem;
      }

      .search-section {
        background: var(--bg-secondary);
        border: 1px solid var(--border);
        border-radius: 1rem;
        padding: 2rem;
        margin-bottom: 2rem;
      }

      .search-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text);
      }

      .search-subtitle {
        color: var(--text-secondary);
        font-size: 0.9375rem;
        margin-bottom: 1.25rem;
      }

      .search-form {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .search-input {
        flex: 1;
        min-width: 200px;
        padding: 0.75rem 1rem;
        font-size: 0.9375rem;
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        background: var(--bg);
        color: var(--text);
      }

      .search-input::placeholder {
        color: var(--text-tertiary);
      }

      .search-input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
      }

      .search-btn {
        padding: 0.75rem 1.5rem;
        background: var(--primary);
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .search-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-1px);
      }

      .search-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      .search-results {
        margin-top: 1.5rem;
      }

      .search-results-title {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-secondary);
        margin-bottom: 0.75rem;
      }

      .hostel-card {
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: 0.75rem;
        overflow: hidden;
        margin-bottom: 0.75rem;
        display: flex;
        gap: 0;
        cursor: pointer;
        transition: all 0.2s;
      }

      .hostel-card:hover {
        border-color: var(--primary);
        box-shadow: var(--shadow);
        transform: translateY(-2px);
      }

      .hostel-card-image {
        width: 140px;
        height: 120px;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--primary), #7c3aed);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .hostel-card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .hostel-card-image-placeholder {
        font-size: 2.5rem;
        color: rgba(255, 255, 255, 0.9);
      }

      .hostel-card-content {
        flex: 1;
        padding: 1rem 1.25rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
      }

      .hostel-card h4 {
        font-size: 0.9375rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--text);
      }

      .hostel-card-meta {
        font-size: 0.8125rem;
        color: var(--text-secondary);
        margin-bottom: 0.375rem;
      }

      .hostel-card-rating {
        font-size: 0.75rem;
        color: var(--text-secondary);
      }

      .hostel-card-distance {
        font-size: 0.75rem;
        color: var(--primary);
        font-weight: 500;
        margin-top: 0.25rem;
      }

      .hostel-card-price {
        font-weight: 700;
        color: #059669;
        text-align: right;
        white-space: nowrap;
      }

      .no-results {
        text-align: center;
        padding: 1.5rem;
        background: var(--bg-tertiary);
        border-radius: 0.5rem;
        font-size: 0.9375rem;
        color: var(--text-secondary);
      }

      @media (max-width: 768px) {
        .header-inner {
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
        }
        .main {
          padding: 1rem;
        }
        .welcome-title {
          font-size: 1.5rem;
        }
        .search-section {
          padding: 1.5rem;
        }
        .hostel-card {
          flex-direction: column;
        }
        .hostel-card-image {
          width: 100%;
          height: 160px;
        }
        .hostel-card-content {
          flex-direction: column;
          gap: 0.75rem;
        }
        .hostel-card-price {
          text-align: left;
        }
      }
    `;
  }

  return (
    <div className={`student-dashboard ${isDark ? 'dark' : 'light'}`}>
      <style>{getStyles()}</style>

      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">🏠 HostelHub</Link>
          <div className="user-info">
            <span>Welcome,</span>
            <span className="user-name">{user?.name || 'Student'}</span>
          </div>
          <div className="nav-links">
            <Link to="/student/profile" className="nav-link">Profile</Link>
            <Link to="/" className="nav-link">Home</Link>
            <button onClick={handleLogout} className="btn-logout">Logout</button>
          </div>
        </div>
      </header>

      <main className="main">
        {/* Search Section */}
        <section className="search-section">
          <h2 className="search-title">🔍 Find Your Perfect Hostel</h2>
          <p className="search-subtitle">Search for hostels by city name</p>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Enter city name (e.g., Hyderabad, Bangalore...)"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <button type="submit" className="search-btn" disabled={searching}>
              {searching ? 'Searching...' : 'Search'}
            </button>
          </form>

          {searchResults.length > 0 && (
            <div className="search-results">
              <div className="search-results-title">
                Found {searchResults.length} hostel(s) 
                <span style={{ fontWeight: 400, fontSize: '0.8125rem', marginLeft: '0.5rem' }}>
                  (sorted by rating)
                </span>
              </div>
              {searchResults.map(hostel => (
                <div key={hostel._id} className="hostel-card" onClick={() => goToHostelDetails(hostel._id)}>
                  <div className="hostel-card-image">
                    {(hostel.mainImage || hostel.images?.[0] || hostel.logo) ? (
                      <img 
                        src={hostel.mainImage || hostel.images?.[0] || hostel.logo} 
                        alt={hostel.name}
                      />
                    ) : (
                      <span className="hostel-card-image-placeholder">🏨</span>
                    )}
                  </div>
                  <div className="hostel-card-content">
                    <div style={{ flex: 1 }}>
                      <h4>{hostel.name}</h4>
                      <div className="hostel-card-meta">{hostel.city} • {hostel.gender} hostel</div>
                      <div className="hostel-card-rating">{formatRating(hostel)}</div>
                      {hostel.distance !== null && hostel.distance !== undefined && (
                        <div className="hostel-card-distance">📍 {formatDistance(hostel.distance)} away</div>
                      )}
                    </div>
                    <div className="hostel-card-price">
                      From ₹{Math.min(
                        hostel.roomConfig?.single?.rent || 99999,
                        hostel.roomConfig?.double?.rent || 99999,
                        hostel.roomConfig?.triple?.rent || 99999,
                        hostel.roomConfig?.four?.rent || 99999
                      ).toLocaleString()}/mo
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {searchCity && !searching && searchResults.length === 0 && (
            <div className="search-results">
              <div className="no-results">
                No hostels found in "{searchCity}". Try another city.
              </div>
            </div>
          )}
        </section>

        {/* Active Booking */}
        {activeBooking && (
          <div className="card booking-active" style={{ marginBottom: '1.5rem' }}>
            <div className="card-header">
              <div className="card-title">🏠 Your Current Stay</div>
              <span className={`status-badge status-${activeBooking.status}`}>
                {activeBooking.status}
              </span>
            </div>
            <div className="card-body">
              <div className="booking-grid">
                <div className="booking-field">
                  <span className="booking-label">Hostel</span>
                  <span className="booking-value">{activeBooking.hostel?.name || 'N/A'}</span>
                </div>
                <div className="booking-field">
                  <span className="booking-label">Location</span>
                  <span className="booking-value">{activeBooking.hostel?.city || 'N/A'}</span>
                </div>
                <div className="booking-field">
                  <span className="booking-label">Room Type</span>
                  <span className="booking-value" style={{ textTransform: 'capitalize' }}>
                    {activeBooking.roomType} Sharing
                  </span>
                </div>
                <div className="booking-field">
                  <span className="booking-label">Room Number</span>
                  <span className="booking-value">#{activeBooking.roomNumber || 'TBD'}</span>
                </div>
                <div className="booking-field">
                  <span className="booking-label">Monthly Rent</span>
                  <span className="booking-value rent">₹{activeBooking.rent?.toLocaleString() || 'N/A'}</span>
                </div>
                <div className="booking-field">
                  <span className="booking-label">Check-in</span>
                  <span className="booking-value">
                    {activeBooking.checkInDate 
                      ? new Date(activeBooking.checkInDate).toLocaleDateString() 
                      : 'Pending'}
                  </span>
                </div>
              </div>
              <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button onClick={() => handleCancelBooking(activeBooking._id)} className="btn btn-danger">
                  Cancel Booking
                </button>
              </div>

              {/* Review Section - Only show for approved/active bookings */}
              {(activeBooking.status === 'approved' || activeBooking.status === 'active') && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                  {hasReviewedBooking(activeBooking._id) ? (
                    <div style={{ 
                      background: 'var(--bg-tertiary)', 
                      padding: '1rem', 
                      borderRadius: '0.5rem',
                      textAlign: 'center'
                    }}>
                      <span style={{ color: '#059669', fontWeight: 500 }}>✓ You've already reviewed this stay</span>
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
        )}

        <div className="grid grid-2">
          {/* Pending Bookings */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">⏳ Pending Requests</div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {pendingBookings.length}
              </span>
            </div>
            {pendingBookings.length === 0 ? (
              <div className="card-body" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                No pending requests
              </div>
            ) : (
              <div>
                {pendingBookings.map(booking => (
                  <div key={booking._id} className="booking-item">
                    <div className="booking-item-info">
                      <h4>{booking.hostel?.name || 'Hostel'}</h4>
                      <div className="booking-item-meta">
                        <span style={{ textTransform: 'capitalize' }}>{booking.roomType} Sharing</span>
                        <span>•</span>
                        <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="booking-item-actions">
                      <span className="status-badge status-pending">Pending</span>
                      <button onClick={() => handleCancelBooking(booking._id)} className="btn btn-danger" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Booking History */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">📋 History</div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {pastBookings.length}
              </span>
            </div>
            {pastBookings.length === 0 ? (
              <div className="card-body" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                No booking history
              </div>
            ) : (
              <div>
                {pastBookings.slice(0, 5).map(booking => (
                  <div key={booking._id} className="booking-item">
                    <div className="booking-item-info">
                      <h4>{booking.hostel?.name || 'Hostel'}</h4>
                      <div className="booking-item-meta">
                        <span style={{ textTransform: 'capitalize' }}>{booking.roomType} Sharing</span>
                        <span>•</span>
                        <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className={`status-badge status-${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Empty State - No bookings at all */}
        {!activeBooking && pendingBookings.length === 0 && pastBookings.length === 0 && (
          <div className="card" style={{ marginTop: '1.5rem' }}>
            <div className="empty-state">
              <div className="empty-icon">🏨</div>
              <div className="empty-title">No Bookings Yet</div>
              <div className="empty-text">
                Use the search above to find your perfect hostel
              </div>
              <button onClick={navigateToSearch} className="btn btn-primary">
                Browse All Hostels
              </button>
            </div>
          </div>
        )}

        {/* Student Complaints Section */}
        <StudentComplaints activeBooking={activeBooking} />
      </main>
    </div>
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
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    setSubmitting(true);
    await onSubmit(rating, comment, isComplaint);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9375rem' }}>
          Rate Your Experience
        </label>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
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
          <span style={{ marginLeft: '0.5rem', alignSelf: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {rating > 0 ? `${rating}/5` : 'Select rating'}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9375rem' }}>
          Your Review (Optional)
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience, feedback, or suggestions..."
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid var(--border)',
            background: 'var(--bg)',
            color: 'var(--text)',
            fontSize: '0.9375rem',
            resize: 'vertical'
          }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          cursor: 'pointer',
          fontSize: '0.875rem'
        }}>
          <input
            type="checkbox"
            checked={isComplaint}
            onChange={(e) => setIsComplaint(e.target.checked)}
            style={{ width: '1rem', height: '1rem' }}
          />
          <span>Mark as a complaint (owner will be notified)</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting || rating === 0}
        style={{
          padding: '0.75rem 1.5rem',
          background: rating === 0 ? 'var(--text-secondary)' : 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: 500,
          cursor: rating === 0 ? 'not-allowed' : 'pointer',
          opacity: submitting ? 0.7 : 1
        }}
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}
