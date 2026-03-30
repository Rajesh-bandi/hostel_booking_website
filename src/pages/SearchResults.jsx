import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { hostelsAPI } from '../services/api';
import HostelCard from '../components/HostelCard';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [hostels, setHostels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');

  const city = searchParams.get('city') || '';
  const name = searchParams.get('name') || '';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    
    // Get user location then fetch
    getUserLocation();
  }, []);

  useEffect(() => {
    // Fetch hostels when city/name changes or location is ready
    fetchHostels();
  }, [city, name, userLocation]);

  function getUserLocation() {
    if (!navigator.geolocation) {
      setLocationStatus('error');
      return;
    }

    setLocationStatus('requesting');
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLocationStatus('granted');
      },
      (error) => {
        console.log('Location error:', error.message);
        setLocationStatus('denied');
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  }

  async function fetchHostels() {
    setIsLoading(true);
    setError('');

    const params = {};
    if (city) params.city = city;
    if (name) params.name = name;
    
    // Add user coordinates if available
    if (userLocation) {
      params.userLat = userLocation.lat;
      params.userLng = userLocation.lng;
    }

    const result = await hostelsAPI.search(params);
    setIsLoading(false);

    if (result.success) {
      setHostels(result.hostels);
    } else {
      setError(result.message || 'Failed to search hostels');
    }
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

        .page-header {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          padding: 2.5rem 2.5rem 3rem;
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }

        .header-container {
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 1.75rem;
          font-size: 0.9375rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .back-link:hover {
          color: white;
          gap: 0.75rem;
        }

        .page-title {
          font-size: 2.75rem;
          font-weight: 700;
          color: white;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .search-info {
          font-size: 1.0625rem;
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          gap: 0.875rem;
          flex-wrap: wrap;
        }

        .search-tag {
          background: rgba(255, 255, 255, 0.15);
          padding: 0.4375rem 1rem;
          border-radius: 6.25rem;
          backdrop-filter: blur(12px) saturate(180%);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          letter-spacing: -0.01em;
        }

        .results-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 2.5rem 5rem;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .results-count {
          font-size: 1.0625rem;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .results-count strong {
          color: var(--primary);
          font-weight: 700;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
        }

        .loading-state {
          text-align: center;
          padding: 7rem 2.5rem;
        }

        .loading-icon {
          font-size: 3rem;
          margin-bottom: 1.25rem;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .loading-text {
          font-size: 1.1875rem;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
        }

        .error-message {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 1.375rem 1.75rem;
          border-radius: 1rem;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 1.125rem;
          font-weight: 500;
          font-size: 0.9375rem;
          box-shadow: 0 8px 20px rgba(239, 68, 68, 0.25);
        }

        .empty-state {
          text-align: center;
          padding: 7rem 2.5rem;
        }

        .empty-icon {
          font-size: 5.5rem;
          margin-bottom: 1.75rem;
          opacity: 0.4;
        }

        .empty-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 0.875rem;
          letter-spacing: -0.03em;
        }

        .empty-text {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin: 0 0 2.25rem;
          line-height: 1.6;
          letter-spacing: -0.01em;
        }

        .empty-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          text-decoration: none;
          border-radius: 0.875rem;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .empty-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        @media (max-width: 768px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
          .page-header {
            padding: 2rem 1.5rem 2.5rem;
          }
          .page-title {
            font-size: 2rem;
          }
          .results-container {
            padding: 0 1.5rem 3.5rem;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 1.75rem;
          }
          .empty-title {
            font-size: 1.625rem;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)' }}>
        <div className="page-header">
          <div className="header-container">
            <Link to="/" className="back-link">
              <span>←</span>
              <span>Back to Home</span>
            </Link>

            <h1 className="page-title">Search Results</h1>

            <div className="search-info">
              {city && <span className="search-tag">📍 {city}</span>}
              {name && <span className="search-tag">🏨 {name}</span>}
            </div>
          </div>
        </div>

        <div className="results-container">
          {error && (
            <div className="error-message">
              <span style={{ fontSize: '1.5rem' }}>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {isLoading ? (
            <div className="loading-state">
              <div className="loading-icon">🔄</div>
              <div className="loading-text">
                {locationStatus === 'requesting' ? 'Getting your location...' : 'Searching for hostels...'}
              </div>
            </div>
          ) : hostels.length > 0 ? (
            <>
              <div className="results-header">
                <div className="results-count">
                  Found <strong>{hostels.length}</strong> hostel{hostels.length !== 1 ? 's' : ''} 
                  <span style={{ marginLeft: '0.5rem', fontWeight: 400, fontSize: '0.9rem' }}>
                    (sorted by rating)
                  </span>
                </div>
                {userLocation && (
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    📍 Showing distance from your location
                  </div>
                )}
              </div>

              <div className="results-grid">
                {hostels.map(hostel => (
                  <HostelCard key={hostel._id} hostel={hostel} />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h2 className="empty-title">No Hostels Found</h2>
              <p className="empty-text">
                We couldn't find any hostels matching your search criteria.
                <br />
                Try searching in a different city or with different keywords.
              </p>
              <Link to="/" className="empty-button">
                ← Try New Search
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
