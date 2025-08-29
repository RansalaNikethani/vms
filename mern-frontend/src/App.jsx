import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ReceptionistDashboard from './pages/ReceptionistDashboard';
import IssueTokenPage from './pages/IssueTokenPage';
//import RegisterVisitor from './pages/RegisterVisitor';
import ActiveVisitors from './pages/ActiveVisitors';
import Reports from './pages/Reports';
import RegisteredVisitors from './components/RegisteredVisitors';
import DashboardLayout from './components/DashboardLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
          path="/IssueTokenPage"
          element={
            <DashboardLayout>
              <IssueTokenPage />
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
        <Route
          path="/RegisteredVisitors"
          element={
            <DashboardLayout>
              <RegisteredVisitors />
            </DashboardLayout>
          }
        />
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
