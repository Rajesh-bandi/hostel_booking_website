import { Link } from 'react-router-dom';

export default function HostelCard({ hostel }) {
  const getMinRent = () => {
    const rents = [
      hostel.roomConfig?.single?.rent,
      hostel.roomConfig?.double?.rent,
      hostel.roomConfig?.triple?.rent,
      hostel.roomConfig?.four?.rent
    ].filter(r => r > 0);
    return rents.length > 0 ? Math.min(...rents) : 0;
  };

  // Format rating display
  const rating = hostel.rating?.average || 0;
  const reviewCount = hostel.rating?.count || 0;
  
  // Format distance display
  const formatDistance = (km) => {
    if (km === null || km === undefined) return null;
    if (km < 1) return `${Math.round(km * 1000)} m`;
    return `${km} km`;
  };

  return (
    <>
      <style>{`
        .hostel-card {
          background: var(--bg, #fff);
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid var(--border, #e5e5e5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .hostel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
          border-color: var(--primary, #4f46e5);
        }

        .hostel-image-container {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--primary, #4f46e5) 0%, #7c3aed 100%);
        }

        .hostel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .hostel-card:hover .hostel-image {
          transform: scale(1.05);
        }

        .hostel-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .hostel-badges {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          right: 0.75rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .badge {
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .badge-gender {
          background: rgba(255, 255, 255, 0.95);
          color: var(--primary, #4f46e5);
        }

        .badge-verified {
          background: #10b981;
          color: white;
        }

        .badge-rating {
          background: #fbbf24;
          color: #78350f;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .hostel-content {
          padding: 1.25rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .hostel-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text, #0a0a0a);
          margin: 0 0 0.375rem;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .hostel-meta {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          margin-bottom: 0.875rem;
        }

        .hostel-location {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: var(--text-secondary, #525252);
          font-size: 0.8125rem;
        }

        .hostel-distance {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: var(--primary, #4f46e5);
          font-size: 0.8125rem;
          font-weight: 500;
        }

        .hostel-rating {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8125rem;
        }

        .rating-stars {
          color: #fbbf24;
          font-size: 0.875rem;
        }

        .rating-value {
          font-weight: 600;
          color: var(--text, #0a0a0a);
        }

        .rating-count {
          color: var(--text-secondary, #525252);
        }

        .hostel-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin-bottom: 1rem;
        }

        .amenity-tag {
          padding: 0.25rem 0.625rem;
          background: var(--bg-secondary, #f5f5f5);
          color: var(--text-secondary, #525252);
          border-radius: 4px;
          font-size: 0.6875rem;
          font-weight: 500;
        }

        .hostel-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          margin-top: auto;
          border-top: 1px solid var(--border, #e5e5e5);
        }

        .rent-box {
          display: flex;
          flex-direction: column;
        }

        .rent-label {
          font-size: 0.6875rem;
          color: var(--text-secondary, #525252);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .rent-amount {
          font-size: 1.375rem;
          font-weight: 700;
          color: #059669;
          line-height: 1.2;
        }

        .rent-period {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary, #525252);
        }

        .view-button {
          padding: 0.625rem 1rem;
          background: var(--primary, #4f46e5);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.8125rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
        }

        .view-button:hover {
          background: #4338ca;
          transform: translateX(2px);
        }

        @media (max-width: 480px) {
          .hostel-content {
            padding: 1rem;
          }
          .hostel-name {
            font-size: 1rem;
          }
          .rent-amount {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <Link to={`/hostel/${hostel._id}`} style={{ textDecoration: 'none', height: '100%' }}>
        <div className="hostel-card">
          <div className="hostel-image-container">
            {(hostel.mainImage || hostel.images?.[0] || hostel.logo) ? (
              <img 
                src={hostel.mainImage || hostel.images?.[0] || hostel.logo} 
                alt={hostel.name} 
                className="hostel-image" 
              />
            ) : (
              <div className="hostel-placeholder">🏨</div>
            )}

            <div className="hostel-badges">
              <div style={{ display: 'flex', gap: '0.375rem' }}>
                {hostel.gender && (
                  <span className="badge badge-gender">
                    {hostel.gender === 'male' ? '♂ Male' : hostel.gender === 'female' ? '♀ Female' : '⚥ Co-ed'}
                  </span>
                )}
                {hostel.isVerified && (
                  <span className="badge badge-verified">✓ Verified</span>
                )}
              </div>
              {rating > 0 && (
                <span className="badge badge-rating">
                  ⭐ {rating.toFixed(1)}
                </span>
              )}
            </div>
          </div>

          <div className="hostel-content">
            <h3 className="hostel-name">{hostel.name}</h3>

            <div className="hostel-meta">
              <div className="hostel-location">
                <span>📍</span>
                <span>{hostel.city}, {hostel.state}</span>
              </div>
              
              {hostel.distance !== null && hostel.distance !== undefined && (
                <div className="hostel-distance">
                  <span>🚗</span>
                  <span>{formatDistance(hostel.distance)} away</span>
                </div>
              )}

              <div className="hostel-rating">
                {rating > 0 ? (
                  <>
                    <span className="rating-stars">{'★'.repeat(Math.round(rating))}</span>
                    <span className="rating-value">{rating.toFixed(1)}</span>
                    <span className="rating-count">({reviewCount} reviews)</span>
                  </>
                ) : (
                  <span className="rating-count" style={{ fontStyle: 'italic' }}>No ratings yet</span>
                )}
              </div>
            </div>

            {hostel.amenities && hostel.amenities.length > 0 && (
              <div className="hostel-amenities">
                {hostel.amenities.slice(0, 4).map((amenity, index) => (
                  <span key={index} className="amenity-tag">{amenity}</span>
                ))}
                {hostel.amenities.length > 4 && (
                  <span className="amenity-tag">+{hostel.amenities.length - 4}</span>
                )}
              </div>
            )}

            <div className="hostel-footer">
              <div className="rent-box">
                <span className="rent-label">Starting from</span>
                <span className="rent-amount">
                  ₹{getMinRent().toLocaleString()}
                  <span className="rent-period">/mo</span>
                </span>
              </div>

              <span className="view-button">
                View Details →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
