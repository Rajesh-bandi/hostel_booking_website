import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

export default function StudentProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: '',
    phone: '',
    course: '',
    year: ''
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme');
      setIsDark(newTheme === 'dark');
      if (newTheme === 'dark') {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    };

    window.addEventListener('themeChange', handleThemeChange);
    fetchProfile();

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  async function fetchProfile() {
    setIsLoading(true);
    const result = await authAPI.getMe();

    if (result.success) {
      setUser(result.user);
      setEditData({
        name: result.user.name || '',
        phone: result.user.phone || '',
        course: result.user.course || '',
        year: result.user.year || ''
      });
    } else {
      navigate('/login');
    }

    setIsLoading(false);
  }

  function handleLogout() {
    authAPI.logout();
    navigate('/');
  }

  function toggleTheme() {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
    
    if (newTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    
    window.dispatchEvent(new Event('themeChange'));
  }

  async function handleSave() {
    setSaving(true);
    setMessage('');
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/students/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editData)
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setUser({ ...user, ...editData });
        setIsEditing(false);
        setMessage('Profile updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(data.message || 'Failed to update profile');
      }
    } catch (err) {
      setMessage('Failed to update profile');
    } finally {
      setSaving(false);
    }
  }

  const styles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }

    .student-profile {
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
      transition: all 0.2s ease;
    }

    .light-theme { background: #ffffff; color: #111827; }
    .dark-theme { background: #0f172a; color: #f1f5f9; }

    .header { background: #111827; padding: 1.5rem 2rem; color: white; }
    .dark-theme .header { background: #1e293b; border-bottom: 1px solid #334155; }

    .header-container { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
    .header-left h1 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem; }
    .header-left p { opacity: 0.8; font-size: 0.875rem; }
    .header-right { display: flex; gap: 0.75rem; }

    .btn { padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 500; font-size: 0.8125rem; text-decoration: none; transition: all 0.2s ease; cursor: pointer; border: none; }
    .btn-white { background: white; color: #111827; }
    .btn-white:hover { background: #f1f5f9; }
    .btn-outline { background: transparent; border: 1px solid rgba(255, 255, 255, 0.3); color: white; }
    .btn-outline:hover { background: rgba(255, 255, 255, 0.1); border-color: white; }

    .content { max-width: 720px; margin: 0 auto; padding: 2rem; }

    .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; }
    .dark-theme .card { background: #1e293b; border-color: #334155; }

    .profile-header { text-align: center; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #e2e8f0; }
    .dark-theme .profile-header { border-bottom-color: #334155; }

    .profile-avatar { width: 80px; height: 80px; background: #111827; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem; }
    .dark-theme .profile-avatar { background: #3b82f6; }

    .profile-name { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem; color: #111827; }
    .dark-theme .profile-name { color: #f1f5f9; }

    .profile-email { color: #6b7280; font-size: 0.875rem; }
    .dark-theme .profile-email { color: #94a3b8; }

    .message { padding: 0.75rem 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; font-size: 0.875rem; }
    .message-success { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
    .dark-theme .message-success { background: rgba(16, 185, 129, 0.15); color: #34d399; }
    .message-error { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
    .dark-theme .message-error { background: rgba(239, 68, 68, 0.15); color: #f87171; }

    .info-section { margin-bottom: 2rem; }
    .info-section:last-child { margin-bottom: 0; }

    .section-title { font-size: 1rem; font-weight: 600; margin-bottom: 1rem; color: #111827; display: flex; justify-content: space-between; align-items: center; }
    .dark-theme .section-title { color: #f1f5f9; }

    .info-row { display: flex; justify-content: space-between; align-items: center; padding: 0.875rem 0; border-bottom: 1px solid #f1f5f9; }
    .dark-theme .info-row { border-bottom-color: #334155; }
    .info-row:last-child { border-bottom: none; }

    .info-label { color: #6b7280; font-size: 0.8125rem; font-weight: 500; }
    .dark-theme .info-label { color: #94a3b8; }

    .info-value { font-weight: 500; color: #111827; font-size: 0.875rem; }
    .dark-theme .info-value { color: #f1f5f9; }

    .edit-input { padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; font-size: 0.875rem; background: #ffffff; color: #111827; width: 200px; text-align: right; }
    .dark-theme .edit-input { background: #0f172a; border-color: #334155; color: #f1f5f9; }
    .edit-input:focus { outline: none; border-color: #3b82f6; }

    .verification-badge { display: inline-flex; align-items: center; gap: 0.25rem; padding: 0.25rem 0.625rem; border-radius: 6rem; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; }
    .verified { background: #d1fae5; color: #059669; }
    .dark-theme .verified { background: rgba(16, 185, 129, 0.15); color: #34d399; }
    .not-verified { background: #fef3c7; color: #92400e; }
    .dark-theme .not-verified { background: rgba(251, 191, 36, 0.15); color: #fbbf24; }

    .btn-edit { padding: 0.375rem 0.75rem; background: #eff6ff; color: #3b82f6; border: 1px solid #dbeafe; border-radius: 0.375rem; font-size: 0.75rem; font-weight: 500; cursor: pointer; }
    .btn-edit:hover { background: #dbeafe; }
    .dark-theme .btn-edit { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.25); }

    .edit-actions { display: flex; gap: 0.5rem; margin-top: 1.5rem; justify-content: flex-end; }

    .btn-save { padding: 0.5rem 1rem; background: #111827; color: white; border: none; border-radius: 0.5rem; font-size: 0.8125rem; font-weight: 500; cursor: pointer; }
    .btn-save:hover { background: #1f2937; }
    .btn-save:disabled { opacity: 0.6; cursor: not-allowed; }
    .dark-theme .btn-save { background: #3b82f6; }
    .dark-theme .btn-save:hover { background: #2563eb; }

    .btn-cancel-form { padding: 0.5rem 1rem; background: #f8fafc; color: #374151; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.8125rem; font-weight: 500; cursor: pointer; }
    .btn-cancel-form:hover { background: #f1f5f9; }
    .dark-theme .btn-cancel-form { background: #334155; color: #f1f5f9; border-color: #475569; }

    .preference-row { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; }
    .preference-info { display: flex; flex-direction: column; gap: 0.25rem; }
    .preference-label { font-weight: 500; color: #111827; font-size: 0.875rem; }
    .dark-theme .preference-label { color: #f1f5f9; }
    .preference-desc { color: #6b7280; font-size: 0.75rem; }
    .dark-theme .preference-desc { color: #94a3b8; }

    .theme-toggle { position: relative; width: 48px; height: 26px; background: #e2e8f0; border-radius: 13px; cursor: pointer; transition: all 0.2s ease; }
    .theme-toggle.active { background: #3b82f6; }
    .theme-toggle::after { content: ''; position: absolute; width: 22px; height: 22px; background: white; border-radius: 50%; top: 2px; left: 2px; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
    .theme-toggle.active::after { left: 24px; }

    @media (max-width: 768px) {
      .header-container { flex-direction: column; align-items: flex-start; gap: 1rem; }
      .content { padding: 1.25rem; }
      .card { padding: 1.5rem; }
      .info-row { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
      .edit-input { width: 100%; text-align: left; }
    }
  `;

  if (isLoading) {
    return (
      <div className={`student-profile ${isDark ? 'dark-theme' : 'light-theme'}`} style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <style>{styles}</style>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔄</div>
          <div style={{ fontSize: '1rem', color: isDark ? '#94a3b8' : '#6b7280' }}>
            Loading profile...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`student-profile ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <style>{styles}</style>

      <div className="header">
        <div className="header-container">
          <div className="header-left">
            <h1>👤 My Profile</h1>
            <p>Manage your account details</p>
          </div>
          <div className="header-right">
            <Link to="/student/dashboard" className="btn btn-white">Dashboard</Link>
            <Link to="/" className="btn btn-outline">Home</Link>
            <button onClick={handleLogout} className="btn btn-outline">Logout</button>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="card">
          <div className="profile-header">
            <div className="profile-avatar">🎓</div>
            <h2 className="profile-name">{user?.name}</h2>
            <p className="profile-email">{user?.email}</p>
          </div>

          {message && (
            <div className={`message ${message.includes('success') ? 'message-success' : 'message-error'}`}>
              {message}
            </div>
          )}

          <div className="info-section">
            <h3 className="section-title">
              Personal Information
              {!isEditing && (
                <button className="btn-edit" onClick={() => setIsEditing(true)}>
                  ✏️ Edit
                </button>
              )}
            </h3>

            <div className="info-row">
              <span className="info-label">Full Name</span>
              {isEditing ? (
                <input type="text" className="edit-input" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
              ) : (
                <span className="info-value">{user?.name}</span>
              )}
            </div>

            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-value">{user?.email}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Phone Number</span>
              {isEditing ? (
                <input type="tel" className="edit-input" value={editData.phone} onChange={(e) => setEditData({ ...editData, phone: e.target.value })} placeholder="Enter phone number" />
              ) : (
                <span className="info-value">{user?.phone || 'Not provided'}</span>
              )}
            </div>

            <div className="info-row">
              <span className="info-label">Course</span>
              {isEditing ? (
                <input type="text" className="edit-input" value={editData.course} onChange={(e) => setEditData({ ...editData, course: e.target.value })} placeholder="e.g. B.Tech, MBA" />
              ) : (
                <span className="info-value">{user?.course || 'Not provided'}</span>
              )}
            </div>

            <div className="info-row">
              <span className="info-label">Year</span>
              {isEditing ? (
                <input type="text" className="edit-input" value={editData.year} onChange={(e) => setEditData({ ...editData, year: e.target.value })} placeholder="e.g. 1st Year, 2nd Year" />
              ) : (
                <span className="info-value">{user?.year || 'Not provided'}</span>
              )}
            </div>

            {isEditing && (
              <div className="edit-actions">
                <button className="btn-cancel-form" onClick={() => setIsEditing(false)}>Cancel</button>
                <button className="btn-save" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save Changes'}</button>
              </div>
            )}
          </div>

          <div className="info-section">
            <h3 className="section-title">Verification Status</h3>

            <div className="info-row">
              <span className="info-label">Email Verification</span>
              <span className="info-value">
                {user?.isEmailVerified ? (
                  <span className="verification-badge verified">✓ Verified</span>
                ) : (
                  <span className="verification-badge not-verified">⚠ Not Verified</span>
                )}
              </span>
            </div>

            <div className="info-row">
              <span className="info-label">Member Since</span>
              <span className="info-value">
                {new Date(user?.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="info-section">
            <h3 className="section-title">Preferences</h3>

            <div className="preference-row">
              <div className="preference-info">
                <span className="preference-label">Dark Mode</span>
                <span className="preference-desc">Switch between light and dark theme</span>
              </div>
              <div className={`theme-toggle ${isDark ? 'active' : ''}`} onClick={toggleTheme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
