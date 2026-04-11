import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';
import { GraduationCapIcon, BuildingIcon, ArrowLeftIcon, KeyIcon, MailIcon, UserIcon, PhoneIcon, HomeIcon } from '../components/Icons';

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    // Student fields
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Owner fields
    username: '',
    hostelName: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    let result;
    if (role === 'student') {
      result = await authAPI.studentRegister({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
    } else {
      result = await authAPI.ownerRegister({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        hostelName: formData.hostelName,
      });
    }

    setIsLoading(false);

    if (result.success) {
      if (role === 'student') {
        alert('Registration successful! Please check your email to verify your account.');
        navigate('/login');
      } else {
        alert('Registration successful!');
        navigate('/owner/dashboard');
      }
    } else {
      setError(result.message || 'Registration failed');
    }
  };

  const pageStyles = `
    .auth-page {
      min-height: 100vh;
      display: flex;
      background: var(--bg-body);
    }

    .auth-left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-8);
      overflow-y: auto;
    }

    .auth-right {
      flex: 1;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 50%, var(--accent-dark) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-8);
      position: relative;
      overflow: hidden;
    }

    .auth-right::before {
      content: '';
      position: absolute;
      top: -30%;
      right: -20%;
      width: 60%;
      height: 150%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      animation: float 20s ease-in-out infinite;
    }

    .auth-right-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      max-width: 400px;
    }

    .auth-right-title {
      font-size: var(--text-4xl);
      font-weight: 800;
      margin-bottom: var(--space-4);
      letter-spacing: var(--tracking-tighter);
      line-height: var(--leading-tight);
    }

    .auth-right-text {
      font-size: var(--text-lg);
      opacity: 0.85;
      line-height: var(--leading-relaxed);
    }

    .auth-content {
      max-width: 460px;
      width: 100%;
      animation: fadeInUp 0.5s ease both;
    }

    .auth-back {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      color: var(--text-secondary);
      font-size: var(--text-sm);
      font-weight: 500;
      margin-bottom: var(--space-6);
      transition: color var(--duration-fast) var(--ease-default);
    }

    .auth-back:hover {
      color: var(--primary);
    }

    .auth-header {
      margin-bottom: var(--space-6);
    }

    .auth-title {
      font-size: var(--text-3xl);
      font-weight: 700;
      margin-bottom: var(--space-2);
      letter-spacing: var(--tracking-tighter);
      color: var(--text);
    }

    .auth-subtitle {
      color: var(--text-secondary);
      font-size: var(--text-base);
    }

    .role-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: 0.375rem 0.875rem;
      background: var(--primary-50);
      color: var(--primary);
      border: 1px solid var(--primary-200);
      border-radius: var(--radius-full);
      font-size: var(--text-xs);
      font-weight: 600;
      margin-bottom: var(--space-4);
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    body.dark-mode .role-badge,
    body.dark-theme .role-badge {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.25);
    }

    .roles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
      margin-bottom: var(--space-8);
    }

    .role-card {
      background: var(--bg);
      border: 1.5px solid var(--border);
      border-radius: var(--radius-xl);
      padding: var(--space-8) var(--space-6);
      cursor: pointer;
      transition: all var(--duration-normal) var(--ease-default);
      text-align: center;
    }

    .role-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--primary-300);
    }

    .role-card-icon {
      width: 56px;
      height: 56px;
      background: var(--primary-50);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-4);
      color: var(--primary);
      border: 1px solid var(--primary-200);
      transition: all var(--duration-normal) var(--ease-default);
    }

    body.dark-mode .role-card-icon,
    body.dark-theme .role-card-icon {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.25);
    }

    .role-card:hover .role-card-icon {
      transform: scale(1.08);
    }

    .role-card-title {
      font-size: var(--text-lg);
      font-weight: 600;
      margin-bottom: var(--space-2);
      color: var(--text);
    }

    .role-card-desc {
      color: var(--text-secondary);
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
    }

    .auth-error {
      background: var(--danger-light);
      color: var(--danger-dark);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      margin-bottom: var(--space-5);
      font-size: var(--text-sm);
      font-weight: 500;
      border: 1px solid rgba(239, 68, 68, 0.15);
      animation: fadeInDown 0.3s ease both;
    }

    .auth-footer {
      margin-top: var(--space-6);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      font-size: var(--text-sm);
    }

    .auth-footer-link {
      color: var(--primary);
      font-weight: 500;
    }

    .auth-footer-link:hover {
      text-decoration: underline;
    }

    .auth-footer-text {
      color: var(--text-secondary);
    }

    .auth-change-btn {
      color: var(--primary);
      font-weight: 500;
      font-size: var(--text-sm);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
    }

    .auth-change-btn:hover {
      text-decoration: underline;
    }

    .input-icon-wrap {
      position: relative;
    }

    .input-icon {
      position: absolute;
      left: var(--space-3);
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-tertiary);
      pointer-events: none;
    }

    .input-icon + .form-input {
      padding-left: 2.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
    }

    @media (max-width: 768px) {
      .auth-right { display: none; }
      .roles-grid { grid-template-columns: 1fr; }
      .auth-title { font-size: var(--text-2xl); }
      .form-row { grid-template-columns: 1fr; }
    }
  `;

  if (!role) {
    return (
      <>
        <style>{pageStyles}</style>
        <div className="auth-page">
          <div className="auth-left">
            <div className="auth-content">
              <Link to="/" className="auth-back">
                <ArrowLeftIcon size={16} />
                Back to Home
              </Link>

              <div className="auth-header">
                <h1 className="auth-title">Create Account</h1>
                <p className="auth-subtitle">Choose your account type to get started</p>
              </div>

              <div className="roles-grid">
                <div className="role-card" onClick={() => setRole('student')}>
                  <div className="role-card-icon">
                    <GraduationCapIcon size={24} />
                  </div>
                  <h2 className="role-card-title">Student</h2>
                  <p className="role-card-desc">
                    Search and book hostels, manage reservations, and connect with owners.
                  </p>
                </div>

                <div className="role-card" onClick={() => setRole('owner')}>
                  <div className="role-card-icon">
                    <BuildingIcon size={24} />
                  </div>
                  <h2 className="role-card-title">Hostel Owner</h2>
                  <p className="role-card-desc">
                    List your hostel, manage bookings, track payments, and grow your business.
                  </p>
                </div>
              </div>

              <div className="auth-footer">
                <div>
                  <span className="auth-footer-text">Already have an account? </span>
                  <Link to="/login" className="auth-footer-link">Login</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="auth-right">
            <div className="auth-right-content">
              <h2 className="auth-right-title">Start Your<br />Journey Today</h2>
              <p className="auth-right-text">
                Join the largest student accommodation platform in India.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{pageStyles}</style>
      <div className="auth-page">
        <div className="auth-left">
          <div className="auth-content">
            <Link to="/" className="auth-back">
              <ArrowLeftIcon size={16} />
              Back to Home
            </Link>

            <div className="auth-header">
              <div className="role-badge">
                {role === 'student' ? <GraduationCapIcon size={14} /> : <BuildingIcon size={14} />}
                {role === 'student' ? 'Student' : 'Owner'}
              </div>
              <h1 className="auth-title">Create Account</h1>
              <p className="auth-subtitle">Join HostelHub today</p>
            </div>

            {error && <div className="auth-error">{error}</div>}

            <form onSubmit={handleSubmit}>
              {role === 'student' ? (
                <>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <div className="input-icon-wrap">
                      <UserIcon size={16} className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <div className="input-icon-wrap">
                        <MailIcon size={16} className="input-icon" />
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Email address"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <div className="input-icon-wrap">
                        <PhoneIcon size={16} className="input-icon" />
                        <input
                          type="tel"
                          name="phone"
                          className="form-input"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <div className="input-icon-wrap">
                        <UserIcon size={16} className="input-icon" />
                        <input
                          type="text"
                          name="username"
                          className="form-input"
                          value={formData.username}
                          onChange={handleInputChange}
                          required
                          placeholder="Choose a username"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <div className="input-icon-wrap">
                        <MailIcon size={16} className="input-icon" />
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Hostel Name</label>
                    <div className="input-icon-wrap">
                      <BuildingIcon size={16} className="input-icon" />
                      <input
                        type="text"
                        name="hostelName"
                        className="form-input"
                        value={formData.hostelName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your hostel name"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="input-icon-wrap">
                    <KeyIcon size={16} className="input-icon" />
                    <input
                      type="password"
                      name="password"
                      className="form-input"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      placeholder="Min 6 characters"
                      minLength={6}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-icon-wrap">
                    <KeyIcon size={16} className="input-icon" />
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-input"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="spinner spinner-sm" style={{ borderTopColor: 'white', borderColor: 'rgba(255,255,255,0.3)' }}></span>
                    Creating Account...
                  </>
                ) : 'Create Account'}
              </button>
            </form>

            <div className="auth-footer">
              <button type="button" className="auth-change-btn" onClick={() => setRole('')}>
                <ArrowLeftIcon size={14} />
                Change Account Type
              </button>
              <div>
                <span className="auth-footer-text">Already have an account? </span>
                <Link to="/login" className="auth-footer-link">Login</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-right-content">
            <h2 className="auth-right-title">Start Your<br />Journey Today</h2>
            <p className="auth-right-text">
              Join the largest student accommodation platform in India.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
