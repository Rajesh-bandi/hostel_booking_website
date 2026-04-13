import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import SearchAutocomplete from '../components/SearchAutocomplete';
import {
  SearchIcon, CheckCircleIcon, HomeIcon, ShieldCheckIcon,
  StarIcon, ZapIcon, ArrowRightIcon, BuildingIcon, UsersIcon
} from '../components/Icons';

/* ── Animated wrapper for scroll-reveal sections ── */
function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);

  function handleSearch(query) {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  }

  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Verified Hostels',
      desc: 'Every hostel is vetted for safety, cleanliness, and quality — so you move in with complete confidence.',
      color: '#6C63FF',
    },
    {
      icon: ZapIcon,
      title: 'Instant Booking',
      desc: 'No waiting for approvals. Pay instantly and secure your room in seconds with our streamlined flow.',
      color: '#4FACFE',
    },
    {
      icon: StarIcon,
      title: 'Affordable Prices',
      desc: 'Compare transparent pricing across hundreds of hostels. Find the perfect match for your budget.',
      color: '#F59E0B',
    },
  ];

  const stats = [
    { value: '500+', label: 'Verified Hostels', icon: BuildingIcon },
    { value: '10K+', label: 'Happy Students', icon: UsersIcon },
    { value: '50+', label: 'Cities Covered', icon: SearchIcon },
    { value: '4.8★', label: 'Average Rating', icon: StarIcon },
  ];

  const howItWorks = [
    { step: '01', title: 'Search', desc: 'Browse hostels by city, price, or amenities' },
    { step: '02', title: 'Pay & Book', desc: 'Secure your room with instant payment' },
    { step: '03', title: 'Move In', desc: 'Show your code at the hostel and settle in' },
  ];

  return (
    <main className="landing-page">
      <style>{`
        /* ═══════════════════════════════════════════════════ */
        /*  LANDING PAGE — PREMIUM ANIMATED REDESIGN          */
        /* ═══════════════════════════════════════════════════ */

        .landing-page {
          --hero-purple: #6C63FF;
          --hero-blue: #4FACFE;
          --hero-glow: rgba(108, 99, 255, 0.15);
          overflow-x: hidden;
        }

        /* ─── HERO ─── */
        .lp-hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #f8f9ff 0%, #eef1ff 35%, #f0f7ff 70%, #fafbff 100%);
        }

        body.dark-mode .lp-hero {
          background: linear-gradient(160deg, #0a0a1a 0%, #0f0e2a 35%, #0a1628 70%, #0d0d1f 100%);
        }

        .lp-hero::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 50%;
          height: 120%;
          background: radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 65%);
          animation: heroFloat 20s ease-in-out infinite;
          pointer-events: none;
        }

        .lp-hero::after {
          content: '';
          position: absolute;
          bottom: -30%;
          right: -5%;
          width: 45%;
          height: 100%;
          background: radial-gradient(circle, rgba(79,172,254,0.06) 0%, transparent 65%);
          animation: heroFloat 25s ease-in-out infinite reverse;
          pointer-events: none;
        }

        @keyframes heroFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.05); }
        }

        .lp-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem var(--space-6);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-10);
          align-items: center;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* ─── HERO LEFT (Text + Search) ─── */
        .lp-hero-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .lp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: rgba(108, 99, 255, 0.08);
          border: 1px solid rgba(108, 99, 255, 0.15);
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--hero-purple);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        body.dark-mode .lp-hero-badge {
          background: rgba(108, 99, 255, 0.12);
          border-color: rgba(108, 99, 255, 0.25);
          color: #a5a0ff;
        }

        .lp-hero-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: var(--text);
          margin: 0 0 1.25rem;
        }

        .lp-hero-title-gradient {
          background: linear-gradient(135deg, #6C63FF 0%, #4FACFE 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 12px rgba(108,99,255,0.25));
        }

        .lp-hero-sub {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 2rem;
        }

        /* ─── SEARCH BAR ─── */
        .lp-search-wrap {
          position: relative;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .lp-search-wrap:hover {
          transform: scale(1.01);
        }

        .lp-search-wrap.focused {
          transform: scale(1.02);
        }

        .lp-search-wrap.focused::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 19px;
          background: linear-gradient(135deg, #6C63FF, #4FACFE);
          z-index: -1;
          opacity: 0.5;
          filter: blur(8px);
          animation: searchGlow 2s ease-in-out infinite alternate;
        }

        @keyframes searchGlow {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }

        .lp-search-inner {
          display: flex;
          align-items: center;
          gap: 0;
          background: var(--bg);
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 4px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .lp-search-wrap.focused .lp-search-inner {
          border-color: var(--hero-purple);
          box-shadow: 0 8px 32px rgba(108,99,255,0.12);
        }

        .lp-search-inner .sa-wrapper { flex: 1; }
        .lp-search-inner .sa-input {
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
          height: 48px;
          font-size: 0.95rem;
          padding-left: 2.75rem;
        }
        .lp-search-inner .sa-input:focus {
          box-shadow: none !important;
        }

        .lp-search-btn {
          padding: 12px 28px;
          background: linear-gradient(135deg, #6C63FF, #4FACFE);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .lp-search-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(108,99,255,0.35);
        }

        .lp-search-btn:active {
          transform: scale(0.95);
        }

        /* ─── HERO RIGHT (Image) ─── */
        .lp-hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lp-hero-img-wrap {
          position: relative;
          width: 100%;
          max-width: 520px;
        }

        .lp-hero-img {
          width: 100%;
          height: auto;
          border-radius: 24px;
          animation: imgFloat 6s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(108,99,255,0.15));
        }

        @keyframes imgFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .lp-hero-img-overlay {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: linear-gradient(90deg, rgba(248,249,255,0.25) 0%, transparent 40%);
          pointer-events: none;
        }

        body.dark-mode .lp-hero-img-overlay {
          background: linear-gradient(90deg, rgba(10,10,26,0.35) 0%, transparent 40%);
        }

        /* Floating stat badges on image */
        .lp-float-badge {
          position: absolute;
          padding: 10px 18px;
          background: var(--bg);
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          z-index: 2;
          border: 1px solid var(--border);
        }

        .lp-float-badge-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lp-float-badge.top-left {
          top: 8%;
          left: -5%;
          animation: badgeFloat1 4s ease-in-out infinite;
        }

        .lp-float-badge.bottom-right {
          bottom: 12%;
          right: -8%;
          animation: badgeFloat2 5s ease-in-out infinite;
        }

        @keyframes badgeFloat1 {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        @keyframes badgeFloat2 {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
        }

        /* ─── STATS BAR ─── */
        .lp-stats {
          padding: 4rem 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .lp-stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }

        .lp-stat {
          text-align: center;
          padding: var(--space-4);
        }

        .lp-stat-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto var(--space-3);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(108,99,255,0.1), rgba(79,172,254,0.08));
          color: var(--hero-purple);
        }

        .lp-stat-value {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #6C63FF, #4FACFE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .lp-stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-top: 4px;
        }

        /* ─── FEATURE CARDS ─── */
        .lp-features {
          padding: 6rem 0;
          background: var(--bg-body);
        }

        .lp-section-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        .lp-section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .lp-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--hero-purple);
          margin-bottom: var(--space-3);
        }

        .lp-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text);
          margin: 0 0 var(--space-3);
        }

        .lp-section-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .lp-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .lp-feature-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .lp-feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--card-color), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .lp-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: rgba(108,99,255,0.2);
        }

        .lp-feature-card:hover::before {
          opacity: 1;
        }

        .lp-feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-5);
          transition: transform 0.3s;
        }

        .lp-feature-card:hover .lp-feature-icon {
          transform: scale(1.1) rotate(-3deg);
        }

        .lp-feature-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text);
          margin-bottom: var(--space-2);
        }

        .lp-feature-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* ─── HOW IT WORKS ─── */
        .lp-how {
          padding: 6rem 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
        }

        .lp-how-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
          position: relative;
        }

        .lp-how-grid::before {
          content: '';
          position: absolute;
          top: 40px;
          left: 16%;
          right: 16%;
          height: 2px;
          background: linear-gradient(90deg, #6C63FF, #4FACFE);
          opacity: 0.2;
        }

        .lp-how-step {
          text-align: center;
          position: relative;
        }

        .lp-how-number {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: linear-gradient(135deg, #6C63FF, #4FACFE);
          color: white;
          font-size: 1.1rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-5);
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 24px rgba(108,99,255,0.25);
        }

        .lp-how-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text);
          margin-bottom: var(--space-2);
        }

        .lp-how-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* ─── CTA ─── */
        .lp-cta {
          padding: 6rem 0;
          background: var(--bg-body);
        }

        .lp-cta-box {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 3rem;
          text-align: center;
          background: linear-gradient(135deg, #6C63FF 0%, #4FACFE 100%);
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(108,99,255,0.25);
        }

        .lp-cta-box::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 180%;
          background: radial-gradient(circle, rgba(255,255,255,0.1), transparent 60%);
          pointer-events: none;
        }

        .lp-cta-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 900;
          color: white;
          margin-bottom: var(--space-3);
          position: relative;
        }

        .lp-cta-desc {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.85);
          margin-bottom: var(--space-8);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }

        .lp-cta-buttons {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
        }

        .lp-cta-btn {
          padding: 14px 32px;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          transition: all 0.2s;
          border: none;
          text-decoration: none;
        }

        .lp-cta-btn.primary {
          background: white;
          color: #6C63FF;
        }

        .lp-cta-btn.primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .lp-cta-btn.outline {
          background: rgba(255,255,255,0.15);
          color: white;
          border: 2px solid rgba(255,255,255,0.3);
        }

        .lp-cta-btn.outline:hover {
          background: rgba(255,255,255,0.25);
          transform: scale(1.05);
        }

        .lp-cta-btn:active { transform: scale(0.95) !important; }

        /* ─── FOOTER ─── */
        .lp-footer {
          padding: 3rem 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          text-align: center;
        }

        .lp-footer-text {
          font-size: 0.85rem;
          color: var(--text-tertiary);
        }

        .lp-footer-links {
          display: flex;
          gap: var(--space-6);
          justify-content: center;
          margin-bottom: var(--space-3);
          flex-wrap: wrap;
        }

        .lp-footer-links a {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .lp-footer-links a:hover { color: var(--hero-purple); }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 900px) {
          .lp-hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: var(--space-8);
            padding-top: 4rem;
          }
          .lp-hero-badge { margin-left: auto; margin-right: auto; }
          .lp-hero-sub { margin-left: auto; margin-right: auto; }
          .lp-hero-right { order: -1; }
          .lp-hero-img-wrap { max-width: 380px; margin: 0 auto; }
          .lp-float-badge { display: none; }
          .lp-features-grid, .lp-how-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
          .lp-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .lp-how-grid::before { display: none; }
          .lp-cta-box { padding: 3rem 1.5rem; margin: 0 1rem; }
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section className="lp-hero">
        <div className="lp-hero-inner">
          {/* LEFT — Text + Search */}
          <div className="lp-hero-left">
            <motion.div
              className="lp-hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StarIcon size={14} /> #1 Student Hostel Platform
            </motion.div>

            <motion.h1
              className="lp-hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Find Your Perfect<br />
              <span className="lp-hero-title-gradient">Student Hostel</span>
            </motion.h1>

            <motion.p
              className="lp-hero-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Search, compare, and book verified hostels across India. Safe, affordable, and hassle-free — your new home is just a search away.
            </motion.p>

            <motion.div
              className={`lp-search-wrap ${searchFocused ? 'focused' : ''}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="lp-search-inner">
                <SearchAutocomplete
                  onSearch={handleSearch}
                  placeholder="Enter city name (e.g., Hyderabad, Bangalore...)"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <button className="lp-search-btn" onClick={() => {
                  const input = document.querySelector('.search-autocomplete-container input');
                  if (input?.value) handleSearch(input.value);
                }}>
                  <SearchIcon size={16} /> Search
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Hero Image */}
          <motion.div
            className="lp-hero-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            <div className="lp-hero-img-wrap">
              <img
                src="/images/lucid-origin_a_surreal_and_vibrant_cinematic_photo_of_isometric_low_poly_city_scene_minimal_3-0.jpg"
                alt="Find your perfect student hostel"
                className="lp-hero-img"
                loading="eager"
              />
              <div className="lp-hero-img-overlay" />

              {/* Floating badges */}
              <motion.div
                className="lp-float-badge top-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="lp-float-badge-icon" style={{ background: 'rgba(34,197,94,0.12)' }}>
                  <CheckCircleIcon size={18} style={{ color: '#16a34a' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem' }}>500+</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Verified Hostels</div>
                </div>
              </motion.div>

              <motion.div
                className="lp-float-badge bottom-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="lp-float-badge-icon" style={{ background: 'rgba(108,99,255,0.12)' }}>
                  <StarIcon size={18} style={{ color: '#6C63FF' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem' }}>4.8★</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Avg. Rating</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="lp-stats">
        <div className="lp-stats-inner">
          {stats.map((s, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="lp-stat">
                <div className="lp-stat-icon">
                  <s.icon size={22} />
                </div>
                <div className="lp-stat-value">{s.value}</div>
                <div className="lp-stat-label">{s.label}</div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="lp-features">
        <div className="lp-section-inner">
          <RevealSection>
            <div className="lp-section-header">
              <div className="lp-section-tag"><ZapIcon size={14} /> Why HostelHub</div>
              <h2 className="lp-section-title">Everything You Need, In One Place</h2>
              <p className="lp-section-desc">
                We've built the largest student hostel network with safety, transparency, and convenience at the core.
              </p>
            </div>
          </RevealSection>

          <div className="lp-features-grid">
            {features.map((f, i) => (
              <RevealSection key={i} delay={i * 0.15}>
                <div className="lp-feature-card" style={{ '--card-color': f.color }}>
                  <div
                    className="lp-feature-icon"
                    style={{ background: `${f.color}15`, color: f.color }}
                  >
                    <f.icon size={26} />
                  </div>
                  <div className="lp-feature-title">{f.title}</div>
                  <div className="lp-feature-desc">{f.desc}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="lp-how">
        <div className="lp-section-inner">
          <RevealSection>
            <div className="lp-section-header">
              <div className="lp-section-tag"><ArrowRightIcon size={14} /> How It Works</div>
              <h2 className="lp-section-title">Book in 3 Simple Steps</h2>
              <p className="lp-section-desc">
                From search to move-in, HostelHub makes finding your next home effortless.
              </p>
            </div>
          </RevealSection>

          <div className="lp-how-grid">
            {howItWorks.map((h, i) => (
              <RevealSection key={i} delay={i * 0.2}>
                <div className="lp-how-step">
                  <div className="lp-how-number">{h.step}</div>
                  <div className="lp-how-title">{h.title}</div>
                  <div className="lp-how-desc">{h.desc}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="lp-cta">
        <div className="lp-section-inner">
          <RevealSection>
            <div className="lp-cta-box">
              <h2 className="lp-cta-title">Ready to Find Your Home?</h2>
              <p className="lp-cta-desc">
                Join thousands of students who've already found their perfect hostel through HostelHub.
              </p>
              <div className="lp-cta-buttons">
                <Link to="/search" className="lp-cta-btn primary">
                  <SearchIcon size={16} /> Browse Hostels
                </Link>
                <Link to="/register" className="lp-cta-btn outline">
                  Create Account <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="lp-footer">
        <div className="lp-section-inner">
          <div className="lp-footer-links">
            <Link to="/search">Browse Hostels</Link>
            <Link to="/login">Student Login</Link>
            <Link to="/login">Owner Login</Link>
            <Link to="/register">Register</Link>
          </div>
          <p className="lp-footer-text">© 2026 HostelHub. Built for students, by students.</p>
        </div>
      </footer>
    </main>
  );
}
