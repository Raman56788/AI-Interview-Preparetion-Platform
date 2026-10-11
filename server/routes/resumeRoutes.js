const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const {
  uploadResume,
  analyzeResume,
} = require("../controllers/resumeController");

const router = express.Router();

// ================= Upload Folder =================
const uploadPath = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// ================= Multer Storage =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const fileName =
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, fileName);
  },
});

// ================= PDF Filter =================
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed."));
    }
  },
});

// ================= Upload Resume API =================
router.post("/upload", upload.single("resume"), uploadResume);

// ================= Analyze Resume API =================
router.post("/analyze", upload.single("resume"), analyzeResume);

// ================= Multer Error Handler =================
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  if (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  next();
});

module.exports = router;