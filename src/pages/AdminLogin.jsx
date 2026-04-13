import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { adminAPI } from '../services/api';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');

    // If already logged in as admin, redirect
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      navigate('/admin/dashboard');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    setIsLoading(true);
    const result = await adminAPI.login(email, password);
    setIsLoading(false);

    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(result.message || 'Login failed');
    }
  };

  return (
    <>
      <style>{`
        .admin-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
        }
        .admin-login-card {
          background: rgba(30, 41, 59, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(79, 70, 229, 0.2);
          border-radius: 20px;
          padding: 3rem;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(79, 70, 229, 0.1);
        }
        .admin-login-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: linear-gradient(135deg, rgba(79,70,229,0.15), rgba(124,58,237,0.1));
          border: 1px solid rgba(79,70,229,0.3);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
        }
        .admin-login-title {
          font-size: 2rem;
          font-weight: 800;
          color: #f1f5f9;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .admin-login-subtitle {
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        .admin-form-group {
          margin-bottom: 1.25rem;
        }
        .admin-form-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .admin-form-input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(15, 23, 42, 0.8);
          border: 1.5px solid #334155;
          border-radius: 12px;
          color: #f1f5f9;
          font-size: 0.95rem;
          font-family: inherit;
          outline: none;
          transition: all 0.2s;
        }
        .admin-form-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
        }
        .admin-form-input::placeholder {
          color: #475569;
        }
        .admin-login-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
          text-align: center;
        }
        .admin-login-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          font-family: inherit;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .admin-login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
        }
        .admin-login-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .admin-login-spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: adminSpin 0.6s linear infinite;
        }
        @keyframes adminSpin { to { transform: rotate(360deg); } }
        .admin-login-footer {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.85rem;
          color: #64748b;
        }
        .admin-login-footer a {
          color: #818cf8;
          text-decoration: none;
          font-weight: 500;
        }
        .admin-login-footer a:hover { text-decoration: underline; }
      `}</style>
      <div className="admin-login-page">
        <div className="admin-login-card">
          <div className="admin-login-badge">🛡️ Admin Panel</div>
          <h1 className="admin-login-title">Welcome Back</h1>
          <p className="admin-login-subtitle">Sign in to the HostelHub admin dashboard</p>

          {error && <div className="admin-login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="admin-form-group">
              <label className="admin-form-label">Email Address</label>
              <input
                type="email"
                className="admin-form-input"
                placeholder="admin@hostelhub.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Password</label>
              <input
                type="password"
                className="admin-form-input"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="admin-login-btn" disabled={isLoading}>
              {isLoading ? (
                <><div className="admin-login-spinner" /> Signing in...</>
              ) : (
                'Sign In to Admin Panel'
              )}
            </button>
          </form>

          <div className="admin-login-footer">
            <Link to="/login">← Back to User Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}
