import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import ProtectedLayout from "../components/layout/ProtectedLayout";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";


function AppRoutes() {

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/dashboard";


  return (
    <>

      {!hideNavbar && <Navbar />}


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />


        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />


      </Routes>

    </>
  );
}


export default AppRoutes;