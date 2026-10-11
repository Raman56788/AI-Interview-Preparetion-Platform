const express = require("express");
const router = express.Router();

// Controllers
const {
  generateQuestions,
  evaluateInterview,
} = require("../controllers/interviewController");

// Auth Middleware
const { auth } = require("../middleware/authMiddleware");

// ==========================================
// Generate AI Interview Questions
// POST /api/interview/questions
// ==========================================
router.post("/questions", auth, generateQuestions);

// ==========================================
// Evaluate AI Interview Answers
// POST /api/interview/evaluate
// ==========================================
router.post("/evaluate", auth, evaluateInterview);

// Export Router
module.exports = router;