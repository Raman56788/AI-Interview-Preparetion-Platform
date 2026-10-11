const express = require("express");
const router = express.Router();

// Import Controllers
const { signup, login } = require("../controllers/authController");

// Import JWT Middleware
const { auth } = require("../middleware/authMiddleware");

// ================= Public Routes =================

// Signup API
router.post("/signup", signup);

// Login API
router.post("/login", login);

// ================= Protected Route =================

// Profile API (JWT Token Required)
router.get("/profile", auth, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Profile Access Granted",
    user: req.user,
  });
});

module.exports = router;