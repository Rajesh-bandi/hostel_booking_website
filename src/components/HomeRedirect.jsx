import { Navigate } from 'react-router-dom';

export default function HomeRedirect() {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  // If logged in, redirect to appropriate dashboard
  if (token && userRole) {
    if (userRole === 'student') {
      return <Navigate to="/student/dashboard" replace />;
    } else if (userRole === 'owner') {
      return <Navigate to="/owner/dashboard" replace />;
    }
  }

  // If not logged in, show the landing page
  return null;
}
