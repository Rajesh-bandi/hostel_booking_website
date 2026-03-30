import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { hostelsAPI, bookingsAPI, reviewsAPI } from '../services/api';

export default function HostelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hostel, setHostel] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    fetchHostelDetails();
    fetchReviews();
  }, [id]);

  async function fetchReviews() {
    const result = await reviewsAPI.getByHostel(id);
    if (result.success) {
      setReviews(result.reviews || []);
    }
  }

  async function fetchHostelDetails() {
    setIsLoading(true);
    const result = await hostelsAPI.getById(id);

    if (result.success) {
      const hostelData = result.hostel;
      
      // Check if hostel has roomConfig but no Room documents (legacy data)
      // If availability shows 0 for all types but roomConfig exists, try to sync rooms
      const availability = hostelData.availability || {};
      const roomConfig = hostelData.roomConfig || {};
      
      const hasRoomConfig = Object.values(roomConfig).some(config => config && config.count > 0);
      const hasRoomDocuments = Object.values(availability).some(avail => avail && avail.totalRooms > 0);
      
      if (hasRoomConfig && !hasRoomDocuments) {
        // Try to sync rooms for this hostel
        console.log('Hostel has roomConfig but no Room documents, attempting sync...');
        try {
          const token = localStorage.getItem('token');
          const response = await fetch(`http://localhost:5000/api/hostels/${id}/sync-rooms`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          const syncResult = await response.json();
          console.log('Sync result:', syncResult);
          
          if (syncResult.success && syncResult.roomsCreated > 0) {
            // Refetch hostel data to get updated availability
            const refreshedResult = await hostelsAPI.getById(id);
            if (refreshedResult.success) {
              setHostel(refreshedResult.hostel);
              setIsLoading(false);
              return;
            }
          }
        } catch (err) {
          console.log('Could not sync rooms (user may not be owner):', err.message);
        }
      }
      
      setHostel(hostelData);
    } else {
      setError(result.message || 'Failed to load hostel details');
    }
    setIsLoading(false);
  }

  async function handleBookRoom(roomType) {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    if (!token) {
      if (confirm('Please login as a student to book a room. Go to login page?')) {
        navigate('/login');
      }
      return;
    }

    if (userRole !== 'student') {
      alert('Only students can book rooms');
      return;
    }

    // Directly submit booking without modal
    setSelectedRoomType(roomType);
    setIsBooking(true);
    
    const result = await bookingsAPI.create({
      hostelId: id,
      roomType: roomType,
      studentNotes: ''
    });
    
    setIsBooking(false);

    if (result.success) {
      alert('Booking request submitted successfully! The hostel owner will review your request.');
      navigate('/student/dashboard');
    } else {
      alert(result.message || 'Failed to submit booking request');
    }
  }

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary, #f8fafc)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔄</div>
          <div style={{ fontSize: '1.25rem', color: 'var(--text-secondary, #64748b)' }}>Loading hostel details...</div>
        </div>
      </div>
    );
  }

  if (error || !hostel) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary, #f8fafc)', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ fontSize: '5rem' }}>❌</div>
        <div style={{ fontSize: '1.5rem', color: 'var(--text-secondary, #64748b)' }}>{error || 'Hostel not found'}</div>
        <Link to="/" style={{ padding: '1rem 2rem', background: '#4f46e5', color: 'white', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: '600' }}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --primary: #4f46e5;
          --accent: #06b6d4;
          --bg: #ffffff;
          --bg-secondary: #fafafa;
          --bg-tertiary: #f5f5f5;
          --text: #0a0a0a;
          --text-secondary: #525252;
          --text-tertiary: #737373;
          --border: #e5e5e5;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-secondary: #171717;
          --bg-tertiary: #262626;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --text-tertiary: #737373;
          --border: #262626;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
          background: var(--bg-secondary);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .hero-banner {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
          padding: 3.5rem 2.5rem;
          margin-bottom: 2.5rem;
        }

        .hero-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .breadcrumb {
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          font-size: 0.875rem;
          letter-spacing: -0.01em;
        }

        .breadcrumb a {
          color: var(--primary);
          text-decoration: none;
          transition: color 0.3s;
        }

        .breadcrumb a:hover {
          color: var(--primary-dark);
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 0.875rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .hero-location {
          font-size: 1.1875rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: -0.01em;
        }

        .content-wrapper {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 2.5rem 5rem;
        }

        .columns {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2.5rem;
        }

        .card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1.125rem;
          padding: 2.25rem;
          margin-bottom: 2.25rem;
          box-shadow: var(--shadow);
        }

        .card-title {
          font-size: 1.625rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 1.5rem;
          letter-spacing: -0.03em;
        }

        .description {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1rem;
          letter-spacing: -0.01em;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .amenity-item {
          background: var(--bg-tertiary);
          padding: 0.875rem 1.125rem;
          border-radius: 0.75rem;
          text-align: center;
          font-weight: 500;
          color: var(--text);
          font-size: 0.875rem;
          border: 1px solid var(--border);
          letter-spacing: 0.01em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .amenity-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        .contact-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.75rem;
          margin-top: 1.75rem;
        }

        .contact-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 1.125rem;
          letter-spacing: -0.02em;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          margin: 0.875rem 0;
          color: var(--text-secondary);
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        .rooms-section {
          position: sticky;
          top: 2rem;
        }

        .room-card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1rem;
          padding: 1.75rem;
          margin-bottom: 1.125rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .room-card:hover {
          border-color: rgba(79, 70, 229, 0.3);
          box-shadow: var(--shadow-lg);
        }

        .room-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.125rem;
        }

        .room-name {
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.02em;
        }

        .room-price {
          font-size: 1.625rem;
          font-weight: 700;
          color: #059669;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .room-availability {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1.125rem;
          letter-spacing: -0.01em;
        }

        .book-btn {
          width: 100%;
          padding: 1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 0.875rem;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .book-btn:hover {
          background: var(--primary-dark, #4338ca);
          transform: translateY(-1px);
        }

        .image-gallery {
          margin-bottom: 2rem;
        }

        .main-image-container {
          width: 100%;
          height: 400px;
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 1rem;
          background: var(--bg-tertiary);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          color: var(--text-tertiary);
        }

        .thumbnail-strip {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .thumbnail {
          width: 80px;
          height: 60px;
          border-radius: 0.5rem;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .thumbnail.active {
          border-color: var(--primary);
        }

        .thumbnail:hover {
          border-color: var(--primary);
          opacity: 0.9;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 968px) {
          .columns { grid-template-columns: 1fr; }
          .rooms-section { position: static; }
          .hero-title { font-size: 2.25rem; }
          .content-wrapper { padding: 0 1.5rem 3.5rem; }
          .hero-banner { padding: 2.5rem 1.5rem; }
          .main-image-container { height: 280px; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 1.875rem; }
          .main-image-container { height: 200px; }
          .thumbnail { width: 60px; height: 45px; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)' }}>
        <div className="hero-banner">
          <div className="hero-container">
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/search">Search</Link> / {hostel.name}
            </div>
            <h1 className="hero-title">{hostel.name}</h1>
            <div className="hero-location">
              <span>📍</span>
              <span>{hostel.city}, {hostel.state}</span>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          {/* Image Gallery */}
          {(hostel.images?.length > 0 || hostel.mainImage || hostel.logo) && (
            <div className="image-gallery">
              <div className="main-image-container">
                {(() => {
                  const images = hostel.images?.length > 0 ? hostel.images : 
                                hostel.mainImage ? [hostel.mainImage] :
                                hostel.logo ? [hostel.logo] : [];
                  
                  return images.length > 0 ? (
                    <img 
                      src={images[selectedImage] || images[0]} 
                      alt={hostel.name} 
                      className="main-image" 
                    />
                  ) : (
                    <div className="image-placeholder">🏨</div>
                  );
                })()}
              </div>
              {hostel.images?.length > 1 && (
                <div className="thumbnail-strip">
                  {hostel.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                      onClick={() => setSelectedImage(idx)}
                    >
                      <img src={img} alt={`${hostel.name} ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="columns">
            <div>
              <div className="card">
                <h2 className="card-title">About This Hostel</h2>
                <p className="description">
                  {hostel.description || 'A comfortable and affordable hostel for students with all essential amenities and a great living environment.'}
                </p>
              </div>

              <div className="card">
                <h2 className="card-title">Amenities</h2>
                {hostel.amenities && hostel.amenities.length > 0 ? (
                  <div className="amenities-grid">
                    {hostel.amenities.map((amenity, index) => (
                      <div key={index} className="amenity-item">{amenity}</div>
                    ))}
                  </div>
                ) : (
                  <p className="description">No amenities listed</p>
                )}
              </div>

              <div className="card">
                <div className="contact-card">
                  <h3 className="contact-title">Contact Information</h3>
                  {hostel.contactPhone && (
                    <div className="contact-item">
                      <span style={{ fontSize: '1.25rem' }}>📞</span>
                      <span>{hostel.contactPhone}</span>
                    </div>
                  )}
                  {hostel.contactEmail && (
                    <div className="contact-item">
                      <span style={{ fontSize: '1.25rem' }}>✉️</span>
                      <span>{hostel.contactEmail}</span>
                    </div>
                  )}
                  <div className="contact-item">
                    <span style={{ fontSize: '1.25rem' }}>📍</span>
                    <span>{hostel.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rooms-section">
              <div className="card">
                <h2 className="card-title">Available Rooms</h2>

                {/* Single Rooms */}
                {hostel.roomConfig?.single?.count > 0 && (
                  <RoomTypeCard
                    type="single"
                    name="Single Room"
                    rent={hostel.roomConfig.single.rent}
                    availability={hostel.roomAvailability?.single}
                    totalRooms={hostel.roomConfig.single.count}
                    onBook={handleBookRoom}
                    isBooking={isBooking && selectedRoomType === 'single'}
                  />
                )}

                {/* Double Sharing */}
                {hostel.roomConfig?.double?.count > 0 && (
                  <RoomTypeCard
                    type="double"
                    name="Double Sharing"
                    rent={hostel.roomConfig.double.rent}
                    availability={hostel.roomAvailability?.double}
                    totalRooms={hostel.roomConfig.double.count}
                    onBook={handleBookRoom}
                    isBooking={isBooking && selectedRoomType === 'double'}
                  />
                )}

                {/* Triple Sharing */}
                {hostel.roomConfig?.triple?.count > 0 && (
                  <RoomTypeCard
                    type="triple"
                    name="Triple Sharing"
                    rent={hostel.roomConfig.triple.rent}
                    availability={hostel.roomAvailability?.triple}
                    totalRooms={hostel.roomConfig.triple.count}
                    onBook={handleBookRoom}
                    isBooking={isBooking && selectedRoomType === 'triple'}
                  />
                )}

                {/* Four Sharing */}
                {hostel.roomConfig?.four?.count > 0 && (
                  <RoomTypeCard
                    type="four"
                    name="Four Sharing"
                    rent={hostel.roomConfig.four.rent}
                    availability={hostel.roomAvailability?.four}
                    totalRooms={hostel.roomConfig.four.count}
                    onBook={handleBookRoom}
                    isBooking={isBooking && selectedRoomType === 'four'}
                  />
                )}

                {/* No rooms available */}
                {!hostel.roomConfig?.single?.count && 
                 !hostel.roomConfig?.double?.count && 
                 !hostel.roomConfig?.triple?.count && 
                 !hostel.roomConfig?.four?.count && (
                  <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                    No rooms configured for this hostel yet.
                  </div>
                )}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="reviews-section" style={{ 
              background: 'var(--bg, #fff)', 
              borderRadius: '1rem', 
              padding: '1.5rem',
              marginTop: '1.5rem',
              border: '1px solid var(--border, #e5e5e5)'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 600, 
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                ⭐ Reviews & Ratings
                <span style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: 400, 
                  color: 'var(--text-secondary)' 
                }}>
                  ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
                </span>
              </h3>

              {reviews.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '2rem', 
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-secondary)',
                  borderRadius: '0.5rem'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
                  No reviews yet. Be the first to review this hostel!
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {reviews.map((review) => (
                    <div 
                      key={review._id} 
                      style={{ 
                        padding: '1rem', 
                        background: 'var(--bg-secondary)', 
                        borderRadius: '0.75rem',
                        border: review.isComplaint ? '1px solid #ef4444' : '1px solid var(--border)'
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem'
                      }}>
                        <div>
                          <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                            {review.student?.name || 'Anonymous'}
                            {review.isComplaint && (
                              <span style={{ 
                                marginLeft: '0.5rem', 
                                fontSize: '0.6875rem',
                                background: '#fef2f2',
                                color: '#dc2626',
                                padding: '0.125rem 0.5rem',
                                borderRadius: '1rem',
                                fontWeight: 500
                              }}>
                                Complaint
                              </span>
                            )}
                          </div>
                          <div style={{ 
                            color: '#fbbf24', 
                            fontSize: '0.875rem'
                          }}>
                            {'★'.repeat(review.rating)}
                            {'☆'.repeat(5 - review.rating)}
                          </div>
                        </div>
                        <div style={{ 
                          fontSize: '0.75rem', 
                          color: 'var(--text-secondary)' 
                        }}>
                          {new Date(review.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      {review.comment && (
                        <p style={{ 
                          margin: 0, 
                          fontSize: '0.9375rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6
                        }}>
                          {review.comment}
                        </p>
                      )}

                      {review.ownerResponse && (
                        <div style={{ 
                          marginTop: '0.75rem',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid var(--border)',
                          paddingLeft: '1rem',
                          borderLeft: '3px solid var(--primary)'
                        }}>
                          <div style={{ 
                            fontSize: '0.75rem', 
                            fontWeight: 600, 
                            color: 'var(--primary)',
                            marginBottom: '0.25rem'
                          }}>
                            Owner Response:
                          </div>
                          <p style={{ 
                            margin: 0, 
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)'
                          }}>
                            {review.ownerResponse}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Room Type Card Component
function RoomTypeCard({ type, name, rent, availability, totalRooms, onBook, isBooking }) {
  // If availability data exists from Room documents, use it
  // Otherwise, fall back to roomConfig data (all rooms available)
  const hasRoomDocuments = availability && availability.totalRooms > 0;
  
  function getCapacity(roomType) {
    switch(roomType) {
      case 'single': return 1;
      case 'double': return 2;
      case 'triple': return 3;
      case 'four': return 4;
      default: return 1;
    }
  }
  
  // Calculate availability
  let availableBeds, totalBeds, availableRooms;
  
  if (hasRoomDocuments) {
    // Use actual room data
    availableBeds = availability.availableBeds || 0;
    totalBeds = availability.totalBeds || 0;
    availableRooms = availability.rooms || [];
  } else {
    // Fallback: assume all rooms are available (for hostels created before fix)
    const capacity = getCapacity(type);
    availableBeds = totalRooms * capacity;
    totalBeds = totalRooms * capacity;
    availableRooms = [];
  }
  
  const hasAvailability = availableBeds > 0;

  return (
    <div className="room-card" style={{ opacity: hasAvailability ? 1 : 0.6 }}>
      <div className="room-header">
        <div className="room-name">🛏️ {name}</div>
        <div className="room-price">₹{rent}/month</div>
      </div>
      
      <div className="room-availability">
        <strong>{availableBeds}</strong> beds available in <strong>{availableRooms.length || totalRooms}</strong> rooms
      </div>
      
      {/* Show individual room details */}
      {availableRooms.length > 0 && (
        <div style={{ 
          marginBottom: '1rem', 
          padding: '0.75rem', 
          background: 'var(--bg-secondary)', 
          borderRadius: '0.5rem',
          fontSize: '0.8125rem'
        }}>
          <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
            Available Rooms:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {availableRooms.slice(0, 6).map(room => (
              <span 
                key={room.id} 
                style={{ 
                  padding: '0.25rem 0.75rem', 
                  background: 'var(--bg)', 
                  border: '1px solid var(--border)',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem'
                }}
              >
                Room {room.number} ({room.availableBeds}/{room.capacity} beds)
              </span>
            ))}
            {availableRooms.length > 6 && (
              <span style={{ 
                padding: '0.25rem 0.75rem', 
                color: 'var(--text-secondary)',
                fontSize: '0.75rem'
              }}>
                +{availableRooms.length - 6} more
              </span>
            )}
          </div>
        </div>
      )}
      
      <button 
        className="book-btn" 
        onClick={() => onBook(type)}
        disabled={!hasAvailability || isBooking}
        style={{ opacity: hasAvailability ? 1 : 0.5 }}
      >
        {isBooking ? 'Booking...' : hasAvailability ? 'Book Now' : 'No Beds Available'}
      </button>
    </div>
  );
}
