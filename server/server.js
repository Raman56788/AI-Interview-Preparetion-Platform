const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// ================= Import Routes =================
const authRoutes = require("./routes/authRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// ================= Environment Check =================
console.log(
  "🤖 Gemini Key Loaded:",
  process.env.GEMINI_API_KEY ? "YES ✅" : "NO ❌"
);

console.log(
  "🍃 Mongo URI Loaded:",
  process.env.MONGO_URI ? "YES ✅" : "NO ❌"
);

// ================= CORS =================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS Blocked:", origin);
      return callback(new Error("CORS Not Allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ================= Middleware =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Upload Folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================= Home =================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Interview Preparation Backend Running 🚀",
    version: "2.0.0",
    developer: "Raman Agnihotri",
  });
});

// ================= Health Check =================
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    server: "Running",
    database:
      mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
    gemini: process.env.GEMINI_API_KEY ? "Configured" : "Missing",
  });
});

// ================= Routes =================
app.use("/api/auth", authRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/resume", resumeRoutes);

// ================= 404 =================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found.`,
  });
});

// ================= Error Handler =================
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ================= MongoDB =================
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log("\n========================================");
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log("========================================");
      console.log(
        `📄 Resume Upload API  : http://localhost:${PORT}/api/resume/upload`
      );
      console.log(
        `🤖 Resume Analyze API : http://localhost:${PORT}/api/resume/analyze`
      );
      console.log(
        `🎤 Interview API      : http://localhost:${PORT}/api/interview/questions`
      );
      console.log(
        `❤️ Health Check API   : http://localhost:${PORT}/api/health`
      );
      console.log("========================================\n");
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error.message);
  });