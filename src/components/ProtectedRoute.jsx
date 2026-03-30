import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ role }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If a specific role is required, check if user has that role
  if (role && userRole !== role) {
    // Redirect to appropriate dashboard based on actual role
    if (userRole === 'student') {
      return <Navigate to="/student/dashboard" replace />;
    }
    if (userRole === 'owner') {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
