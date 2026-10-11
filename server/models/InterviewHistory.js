const mongoose = require("mongoose");

const interviewHistorySchema = new mongoose.Schema(
  {
    // Kis user ne interview diya
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Interview Details
    role: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    // Questions and Answers
    questions: [
      {
        type: String,
      },
    ],

    answers: [
      {
        type: String,
      },
    ],

    // AI Scores
    overallScore: {
      type: Number,
      default: 0,
    },

    technicalScore: {
      type: Number,
      default: 0,
    },

    communicationScore: {
      type: Number,
      default: 0,
    },

    confidenceScore: {
      type: Number,
      default: 0,
    },

    // AI Feedback
    strengths: [
      {
        type: String,
      },
    ],

    improvements: [
      {
        type: String,
      },
    ],

    recommendation: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model(
  "InterviewHistory",
  interviewHistorySchema
);