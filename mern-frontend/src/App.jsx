import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ReceptionistDashboard from './pages/ReceptionistDashboard';
import RegisterVisitor from './pages/RegisterVisitor';
import ActiveVisitors from './pages/ActiveVisitors';
import Reports from './pages/Reports';

import DashboardLayout from './components/DashboardLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/SignupPage" element={<SignupPage />} />

      {/* Receptionist Routes with Shared Layout */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <ReceptionistDashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/register"
        element={
          <DashboardLayout>
            <RegisterVisitor />
          </DashboardLayout>
        }
      />
      <Route
        path="/active"
        element={
          <DashboardLayout>
            <ActiveVisitors />
          </DashboardLayout>
        }
      />
      <Route
        path="/reports"
        element={
          <DashboardLayout>
            <Reports />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default App
