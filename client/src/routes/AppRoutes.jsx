import { Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";

function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default AppRoutes;