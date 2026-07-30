import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import ProtectedLayout from "../components/layout/ProtectedLayout";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import Analytics from "../pages/analytics/Analytics";

import Interview from "../pages/interview/Interview";
import InterviewSetup from "../pages/interview/InterviewSetup";
import InterviewRoom from "../pages/interview/InterviewRoom";

import Resume from "../pages/resume/Resume";

function AppRoutes() {

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/analytics" ||
    location.pathname === "/interview" ||
    location.pathname === "/interview/setup" ||
    location.pathname === "/interview/room" ||
    location.pathname === "/resume";

  return (
    <>

      {!hideNavbar && <Navbar />}

      <Routes>

        {/* Home */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

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

        {/* Resume Analyzer */}

        <Route
          path="/resume"
          element={
            <ProtectedLayout>
              <Resume />
            </ProtectedLayout>
          }
        />

      </Routes>

    </>
  );

}

export default AppRoutes;