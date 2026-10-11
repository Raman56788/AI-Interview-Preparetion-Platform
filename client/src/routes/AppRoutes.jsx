import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import ProtectedLayout from "../components/layout/ProtectedLayout";

// Public Pages
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// Protected Pages
import Dashboard from "../pages/dashboard/Dashboard";
import Analytics from "../pages/analytics/Analytics";
import Profile from "../pages/profile/Profile";
import Resume from "../pages/resume/Resume";
import Settings from "../pages/settings/Settings";

// Coding Practice
import CodingPractice from "../pages/coding/CodingPractice";

// Interview Pages
import Interview from "../pages/interview/Interview";
import InterviewSetup from "../pages/interview/InterviewSetup";
import InterviewRoom from "../pages/interview/InterviewRoom";
import InterviewResult from "../pages/interview/InterviewResult";

function AppRoutes() {
  const location = useLocation();

  const hideNavbar = [
    "/login",
    "/signup",
    "/dashboard",
    "/analytics",
    "/profile",
    "/resume",
    "/coding",
    "/interview",
    "/interview/setup",
    "/interview/room",
    "/interview/result",
    "/settings",
  ].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={
            <ProtectedLayout>
              <Analytics />
            </ProtectedLayout>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedLayout>
              <Profile />
            </ProtectedLayout>
          }
        />

        {/* Resume Analyzer */}
        <Route
          path="/resume"
          element={
            <ProtectedLayout>
              <Resume />
            </ProtectedLayout>
          }
        />

        {/* Coding Practice */}
        <Route
          path="/coding"
          element={
            <ProtectedLayout>
              <CodingPractice />
            </ProtectedLayout>
          }
        />

        {/* AI Interview */}
        <Route
          path="/interview"
          element={
            <ProtectedLayout>
              <Interview />
            </ProtectedLayout>
          }
        />

        {/* Interview Setup */}
        <Route
          path="/interview/setup"
          element={
            <ProtectedLayout>
              <InterviewSetup />
            </ProtectedLayout>
          }
        />

        {/* Interview Room */}
        <Route
          path="/interview/room"
          element={
            <ProtectedLayout>
              <InterviewRoom />
            </ProtectedLayout>
          }
        />

        {/* Interview Result */}
        <Route
          path="/interview/result"
          element={
            <ProtectedLayout>
              <InterviewResult />
            </ProtectedLayout>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedLayout>
              <Settings />
            </ProtectedLayout>
          }
        />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default AppRoutes;

