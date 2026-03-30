import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    // Student fields
    email: '',
    // Owner fields
    username: '',
    // Common
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    setIsLoading(true);

    let result;
    if (role === 'student') {
      result = await authAPI.studentLogin(formData.email, formData.password);
    } else {
      result = await authAPI.ownerLogin(formData.username, formData.password);
    }

    setIsLoading(false);

    if (result.success) {
      if (role === 'student') {
        navigate('/student/dashboard');
      } else {
        navigate('/owner/dashboard');
      }
    } else {
      setError(result.message || 'Invalid credentials');
    }
  };

  if (!role) {
    return (
      <>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }

          :root {
            --primary: #4f46e5;
            --accent: #06b6d4;
            --bg: #ffffff;
            --bg-secondary: #fafafa;
            --text: #0a0a0a;
            --text-secondary: #525252;
            --border: #e5e5e5;
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
          }

          body.dark-mode {
            --bg: #0a0a0a;
            --bg-secondary: #171717;
            --text: #fafafa;
            --text-secondary: #a3a3a3;
            --border: #262626;
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text);
            -webkit-font-smoothing: antialiased;
          }

          .container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .role-selection {
            max-width: 900px;
            width: 100%;
          }

          .header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .title {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -0.03em;
            margin-bottom: 0.75rem;
          }

          .subtitle {
            font-size: 1.125rem;
            color: var(--text-secondary);
            letter-spacing: -0.01em;
          }

          .roles-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-bottom: 2.5rem;
          }

          .role-card {
            background: var(--bg);
            border: 1.5px solid var(--border);
            border-radius: 1.125rem;
            padding: 2.5rem;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-align: center;
          }

          .role-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary);
          }

          .role-icon {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
          }

          .role-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
          }

          .role-desc {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 0.9375rem;
            letter-spacing: -0.01em;
          }

          .footer-links {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9375rem;
            transition: color 0.3s;
          }

          .footer-links a:hover {
            color: var(--primary);
          }

          @media (max-width: 768px) {
            .roles-grid { grid-template-columns: 1fr; }
            .title { font-size: 2rem; }
          }
        `}</style>

        <div className="container">
          <div className="role-selection">
            <div className="header">
              <h1 className="title">Welcome Back</h1>
              <p className="subtitle">Select your account type to continue</p>
            </div>

            <div className="roles-grid">
              <div className="role-card" onClick={() => setRole('student')}>
                <div className="role-icon">🎓</div>
                <h2 className="role-title">Student</h2>
                <p className="role-desc">
                  Access your bookings, search hostels, and manage your profile.
                </p>
              </div>

              <div className="role-card" onClick={() => setRole('owner')}>
                <div className="role-icon">🏢</div>
                <h2 className="role-title">Hostel Owner</h2>
                <p className="role-desc">
                  Manage your hostel, review bookings, and track payments.
                </p>
              </div>
            </div>

            <div className="footer-links">
              <Link to="/">← Back to Home</Link>
              <div>
                <span style={{ color: 'var(--text-secondary)' }}>Don't have an account? </span>
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </>
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
          --text: #0a0a0a;
          --text-secondary: #525252;
          --border: #e5e5e5;
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-secondary: #171717;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --border: #262626;
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          background: var(--bg-secondary);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
        }

        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .form-card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1.125rem;
          padding: 2.5rem;
          max-width: 420px;
          width: 100%;
          box-shadow: var(--shadow-lg);
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .role-badge {
          display: inline-block;
          padding: 0.4375rem 1rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(6, 182, 212, 0.08));
          border: 1.5px solid rgba(79, 70, 229, 0.15);
          border-radius: 6.25rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .form-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
        }

        .form-subtitle {
          color: var(--text-secondary);
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: -0.01em;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1.125rem;
          border: 1.5px solid var(--border);
          border-radius: 0.75rem;
          background: var(--bg-secondary);
          color: var(--text);
          font-size: 0.9375rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
        }

        .error-message {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 0.875rem 1.125rem;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          text-align: center;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-footer {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.875rem;
        }

        .form-footer button {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          font-weight: 500;
          padding: 0;
          text-decoration: underline;
        }

        .form-footer a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }

        .form-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .form-card { padding: 2rem 1.5rem; }
          .form-title { font-size: 1.625rem; }
        }
      `}</style>

      <div className="container">
        <div className="form-card">
          <div className="form-header">
            <span className="role-badge">{role === 'student' ? '🎓 Student' : '🏢 Owner'}</span>
            <h1 className="form-title">Welcome Back</h1>
            <p className="form-subtitle">Login to your account</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            {role === 'student' ? (
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                  autoFocus
                />
              </div>
            ) : (
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-input"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your username"
                  autoFocus
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="form-footer">
            <button type="button" onClick={() => setRole('')}>
              ← Change Account Type
            </button>
            <br />
            <span style={{ color: 'var(--text-secondary)' }}>Don't have an account? </span>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}
