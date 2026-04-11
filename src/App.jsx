import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './pages/Home'
import HostelInfo from './pages/HostelInfo'
import SearchResults from './pages/SearchResults'
import HostelDetails from './pages/HostelDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import StudentDashboard from './pages/StudentDashboard'
import StudentProfile from './pages/StudentProfile'
import AdminDashboard from './pages/AdminDashboard'
import DoubleSharing from './pages/DoubleSharing'
import TripleSharing from './pages/TripleSharing'
import FourSharing from './pages/FourSharing'
import FeeManagement from './pages/FeeManagement'
import OwnerDashboard from './pages/OwnerDashboard'
import OwnerHostels from './pages/OwnerHostels'
import AddHostel from './pages/AddHostel'
import ManageRooms from './pages/ManageRooms'
import OwnerBookings from './pages/OwnerBookings'
import OwnerComplaints from './pages/OwnerComplaints'
import ProtectedRoute from './components/ProtectedRoute'
import ChatBot from './components/ChatBot'

// Smart Home component that redirects logged-in users to their dashboard
function SmartHome() {
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
  return <Home />;
}

function NotFound() {
  return (
    <div style={{padding: 24}}>
      <h2>Page not found</h2>
      <p><Link to="/">Go Home</Link></p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        {/* Smart Home - redirects logged-in users to dashboard */}
        <Route path="/" element={<SmartHome />} />
        
        {/* Landing page for non-logged-in users */}
        <Route path="/landing" element={<Home />} />
        
        {/* Public Routes */}
        <Route path="/search" element={<SearchResults />} />
        <Route path="/hostel/:id" element={<HostelDetails />} />
        <Route path="/hostel-info" element={<HostelInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Student Routes */}
        <Route element={<ProtectedRoute role="student" />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentProfile />} />
        </Route>

        {/* Protected Admin/Owner Routes */}
        <Route element={<ProtectedRoute role="owner" />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/double" element={<DoubleSharing />} />
          <Route path="/admin/triple" element={<TripleSharing />} />
          <Route path="/admin/four" element={<FourSharing />} />
          <Route path="/admin/fees" element={<FeeManagement />} />
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          <Route path="/owner/hostels" element={<OwnerHostels />} />
          <Route path="/owner/hostels/add" element={<AddHostel />} />
          <Route path="/owner/hostels/:id/edit" element={<AddHostel />} />
          <Route path="/owner/rooms" element={<ManageRooms />} />
          <Route path="/owner/rooms/add" element={<ManageRooms />} />
          <Route path="/owner/bookings" element={<OwnerBookings />} />
          <Route path="/owner/complaints" element={<OwnerComplaints />} />
        </Route>

        {/* Redirects */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Global ChatBot - appears on all pages */}
      <ChatBot />
    </>
  )
}

