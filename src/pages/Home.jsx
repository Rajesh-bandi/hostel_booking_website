import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LocationAutocomplete from '../components/LocationAutocomplete';

export default function Home() {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState(null);
  const [hostelName, setHostelName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    const name = localStorage.getItem('userName');
    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
      setUserName(name || (role === 'student' ? 'Student' : 'Owner'));
    }
  }, []);

  function toggleTheme() {
    const dark = !document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserRole('');
    setUserName('');
  }

  function handleSearch() {
    const params = new URLSearchParams();
    if (searchLocation?.city) {
      params.append('city', searchLocation.city);
    }
    if (hostelName.trim()) {
      params.append('name', hostelName.trim());
    }

    if (params.toString()) {
      navigate(`/search?${params.toString()}`);
    } else {
      alert('Please enter a city or hostel name to search');
    }
  }

  return (
    <main>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --primary: #4f46e5;
          --primary-dark: #4338ca;
          --primary-light: #6366f1;
          --accent: #06b6d4;
          --accent-warm: #f59e0b;
          --bg: #ffffff;
          --bg-secondary: #fafafa;
          --bg-tertiary: #f5f5f5;
          --text: #0a0a0a;
          --text-secondary: #525252;
          --text-tertiary: #737373;
          --border: #e5e5e5;
          --border-light: #f5f5f5;
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
          --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-secondary: #171717;
          --bg-tertiary: #262626;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --text-tertiary: #737373;
          --border: #262626;
          --border-light: #171717;
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
          --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        body.dark-mode .header {
          background: rgba(10, 10, 10, 0.75);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 1.25rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.375rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 0.625rem;
          transition: transform 0.3s;
        }

        .logo:hover {
          transform: translateY(-1px);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -0.375rem;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        .nav-actions {
          display: flex;
          gap: 0.875rem;
          align-items: center;
        }

        .btn-outline {
          padding: 0.625rem 1.5rem;
          border: 1.5px solid var(--border);
          color: var(--text);
          border-radius: 0.625rem;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .btn-outline:hover {
          background: var(--bg-secondary);
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-1px);
          box-shadow: var(--shadow);
        }

        .btn-primary {
          padding: 0.625rem 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 0.625rem;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        .theme-btn {
          background: var(--bg-secondary);
          border: 1.5px solid var(--border);
          border-radius: 0.625rem;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1.125rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .theme-btn:hover {
          transform: translateY(-1px) scale(1.05);
          border-color: var(--primary);
          box-shadow: var(--shadow);
        }

        .mobile-menu-btn {
          display: none;
          background: var(--bg-secondary);
          border: 1.5px solid var(--border);
          border-radius: 0.625rem;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1.125rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 2.5rem;
          height: 2.5rem;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-btn:hover {
          transform: translateY(-1px) scale(1.05);
          border-color: var(--primary);
        }

        .mobile-nav {
          display: none;
          position: fixed;
          top: 5rem;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 1.5rem;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 999;
          animation: fadeIn 0.2s ease;
        }

        body.dark-mode .mobile-nav {
          background: rgba(10, 10, 10, 0.97);
        }

        .mobile-nav.open {
          display: flex;
        }

        .mobile-nav a,
        .mobile-nav button {
          padding: 0.875rem 1rem;
          border-radius: 0.625rem;
          font-weight: 500;
          font-size: 1rem;
          color: var(--text);
          text-decoration: none;
          transition: all 0.2s;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
        }

        .mobile-nav a:hover,
        .mobile-nav button:hover {
          background: var(--bg-secondary);
          color: var(--primary);
        }

        .mobile-nav-divider {
          height: 1px;
          background: var(--border);
          margin: 0.5rem 0;
        }

        /* Stats Section */
        .stats-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          padding: 3.5rem 2.5rem;
        }

        .stats-grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          color: white;
        }

        .stat-number {
          font-size: 2.75rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9375rem;
          opacity: 0.85;
          letter-spacing: -0.01em;
        }

        /* Hero */
        .hero {
          margin-top: 5rem;
          padding: 9rem 2.5rem 8rem;
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -10%;
          width: 60%;
          height: 150%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -50%;
          right: -10%;
          width: 60%;
          height: 150%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
          animation: float 25s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 50px); }
        }

        .hero-content {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          background: var(--bg);
          border: 1.5px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 6.25rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2.5rem;
          letter-spacing: -0.01em;
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-badge:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 1.5rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          font-size: 1.375rem;
          color: var(--text-secondary);
          margin: 0 0 3.5rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.5;
        }

        /* Search Box */
        .search-card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1.25rem;
          padding: 1.75rem;
          box-shadow: var(--shadow-xl);
          max-width: 980px;
          margin: 0 auto;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .search-card:hover {
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.2);
        }

        body.dark-mode .search-card {
          background: var(--bg-secondary);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .search-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr auto;
          gap: 0.875rem;
        }

        .search-input {
          padding: 1rem 1.375rem;
          border: 1.5px solid var(--border);
          border-radius: 0.875rem;
          font-size: 0.9375rem;
          background: var(--bg-secondary);
          color: var(--text);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
        }

        .search-btn {
          padding: 1rem 2.25rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 0.875rem;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .search-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        .search-btn:active {
          transform: translateY(0);
        }

        /* Features */
        .features {
          padding: 7rem 2.5rem;
          background: var(--bg);
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-tag {
          display: inline-block;
          padding: 0.5rem 1.125rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(6, 182, 212, 0.08));
          color: var(--primary);
          border-radius: 6.25rem;
          font-size: 0.8125rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1.5px solid rgba(79, 70, 229, 0.15);
        }

        .section-title {
          font-size: 2.75rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
          line-height: 1.5;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: var(--bg-secondary);
          padding: 2.5rem;
          border-radius: 1.25rem;
          border: 1.5px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.03), rgba(6, 182, 212, 0.03));
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(79, 70, 229, 0.2);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(6, 182, 212, 0.1));
          border-radius: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          border: 1.5px solid rgba(79, 70, 229, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-title {
          font-size: 1.375rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.875rem;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
        }

        .feature-desc {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
        }

        /* CTA */
        .cta {
          padding: 7rem 2.5rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          position: relative;
          overflow: hidden;
        }

        .cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 80%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
          animation: float 25s ease-in-out infinite;
        }

        .cta::after {
          content: '';
          position: absolute;
          bottom: -50%;
          right: -20%;
          width: 80%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
          animation: float 30s ease-in-out infinite reverse;
        }

        .cta-content {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin: 0 0 1.25rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .cta-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 2.75rem;
          letter-spacing:-0.01em;
          line-height: 1.5;
        }

        .cta-btn {
          padding: 1.125rem 2.75rem;
          background: white;
          color: var(--primary);
          border: none;
          border-radius: 0.875rem;
          font-weight: 600;
          font-size: 1.0625rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        /* Footer */
        .footer {
          background: var(--bg-secondary);
          padding: 3.5rem 2.5rem;
          border-top: 1.5px solid var(--border);
        }

        .footer-content {
          max-width: 1320px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-logo {
          font-size: 1.375rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }

        .footer-text {
          color: var(--text-secondary);
          margin: 0.625rem 0;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu-btn { display: flex; }
          .nav-container { padding: 1rem 1.5rem; }
          .hero { padding: 7rem 1.5rem 5rem; margin-top: 4rem; }
          .hero-title { font-size: 2.75rem; }
          .hero-subtitle { font-size: 1.125rem; }
          .search-grid { grid-template-columns: 1fr; }
          .search-card { padding: 1.5rem; }
          .features { padding: 5rem 1.5rem; }
          .features-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .section-title { font-size: 2.25rem; }
          .section-subtitle { font-size: 1.125rem; }
          .cta { padding: 5rem 1.5rem; }
          .cta-title { font-size: 2.25rem; }
          .cta-subtitle { font-size: 1.125rem; }
          .footer { padding: 2.5rem 1.5rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
          .nav-actions .btn-outline { display: none; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.25rem; }
          .section-title { font-size: 1.875rem; }
          .cta-title { font-size: 1.875rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .stat-number { font-size: 2rem; }
        }
      `}</style>

      <header className="header">
        <div className="nav-container">
          <Link to="/" className="logo">
            <span>🏠</span>
            HostelHub
          </Link>

          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Browse</Link></li>
              <li><Link to="/hostel-info">How It Works</Link></li>
            </ul>
          </nav>

          <div className="nav-actions">
            {isLoggedIn ? (
              <>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Welcome, <strong style={{ color: 'var(--text)' }}>{userName}</strong>
                </span>
                <Link 
                  to={userRole === 'student' ? '/student/dashboard' : '/owner/dashboard'} 
                  className="btn-outline"
                >
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn-primary" style={{ background: '#dc2626' }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-outline">Login</Link>
                <Link to="/login" className="btn-primary">Sign Up</Link>
              </>
            )}
            <button className="theme-btn" onClick={toggleTheme}>
              {document.body.classList.contains('dark-mode') ? '☀️' : '🌙'}
            </button>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>🏠 Home</Link>
        <Link to="/search" onClick={() => setIsMobileMenuOpen(false)}>🔍 Browse Hostels</Link>
        <Link to="/hostel-info" onClick={() => setIsMobileMenuOpen(false)}>ℹ️ How It Works</Link>
        <div className="mobile-nav-divider" />
        {isLoggedIn ? (
          <>
            <Link to={userRole === 'student' ? '/student/dashboard' : '/owner/dashboard'} onClick={() => setIsMobileMenuOpen(false)}>
              📊 Dashboard
            </Link>
            <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} style={{ color: '#dc2626' }}>
              🚪 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>🔐 Login</Link>
            <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>✨ Sign Up Free</Link>
          </>
        )}
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨</span>
            <span>Trusted by 10,000+ Students</span>
          </div>

          <h1 className="hero-title">
            Find Your Perfect<br />Student Hostel
          </h1>

          <p className="hero-subtitle">
            Discover verified hostels across India with the best amenities and prices
          </p>

          <div className="search-card">
            <div className="search-grid">
              <LocationAutocomplete
                onSelect={setSearchLocation}
                placeholder="📍 City or Location"
              />
              <input
                type="text"
                className="search-input"
                placeholder="🏨 Hostel Name (Optional)"
                value={hostelName}
                onChange={e => setHostelName(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSearch()}
              />
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Students Housed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Verified Hostels</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Cities Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8★</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">HOW IT WORKS</span>
            <h2 className="section-title">Simple Steps to Your New Home</h2>
            <p className="section-subtitle">Find and book your perfect hostel in minutes</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">Search & Compare</h3>
              <p className="feature-desc">
                Browse hundreds of verified hostels. Filter by location, price, and amenities to find your perfect match.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3 className="feature-title">Book Instantly</h3>
              <p className="feature-desc">
                Create your profile, submit booking requests, and connect directly with hostel owners instantly.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3 className="feature-title">Move In</h3>
              <p className="feature-desc">
                Once approved, complete the payment and move into your comfortable new home away from home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FOR OWNERS</span>
            <h2 className="section-title">List Your Hostel</h2>
            <p className="section-subtitle">Reach thousands of students looking for accommodation</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3 className="feature-title">Easy Setup</h3>
              <p className="feature-desc">
                Create your hostel profile in minutes with our intuitive registration process.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Manage Bookings</h3>
              <p className="feature-desc">
                Review requests, approve bookings, and manage everything from one dashboard.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Track Payments</h3>
              <p className="feature-desc">
                Monitor rent payments, generate receipts, and manage finances effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Find Your Hostel?</h2>
          <p className="cta-subtitle">
            Join thousands of students who found their perfect accommodation
          </p>
          <Link to="/login" className="cta-btn">
            Get Started Free
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">🏠 HostelHub</div>
          <p className="footer-text">Your Trusted Student Accommodation Platform</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1.5rem 0', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Home</Link>
            <Link to="/search" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Browse Hostels</Link>
            <Link to="/hostel-info" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>How It Works</Link>
            <Link to="/login" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Login</Link>
            <Link to="/register" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Register</Link>
          </div>
          <p className="footer-text" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            © 2026 HostelHub. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
