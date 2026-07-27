import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import ProtectedLayout from "../components/layout/ProtectedLayout";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import Analytics from "../pages/analytics/Analytics";


function AppRoutes() {

  const location = useLocation();


  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/analytics";



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



      </Routes>


    </>
  );
}


export default AppRoutes;