const { GoogleGenerativeAI } = require("@google/generative-ai");
const { evaluateInterview } = require("../services/geminiService");
const InterviewHistory = require("../models/InterviewHistory");

// ================= Gemini API =================
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ======================================================
// GENERATE INTERVIEW QUESTIONS
// ======================================================
exports.generateQuestions = async (req, res) => {
  try {
    const { role, level } = req.body;

    if (!role || !level) {
      return res.status(400).json({
        success: false,
        message: "Role and Level are required.",
      });
    }

    // ✅ Latest Gemini Model
    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
    });

    const prompt = `
You are an AI Interview Coach.

Generate exactly 5 interview questions for a ${level} level ${role} candidate.

Rules:
- Return only questions.
- Number questions from 1 to 5.
- No answers.
- Keep questions practical and interview-oriented.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Convert Gemini text into clean array
    const questions = text
      .split("\n")
      .map((q) => q.replace(/^\d+\.\s*/, "").trim())
      .filter((q) => q.length > 0);

    return res.status(200).json({
      success: true,
      role,
      level,
      questions,
    });

  } catch (error) {
    console.error("Gemini Question Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate interview questions.",
      error: error.message,
    });
  }
};

// ======================================================
// EVALUATE INTERVIEW
// ======================================================
exports.evaluateInterview = async (req, res) => {
  try {
    const { role, level, duration, questions, answers } = req.body;

    if (!questions || !answers) {
      return res.status(400).json({
        success: false,
        message: "Questions and answers are required.",
      });
    }

    // AI Evaluation
    const aiResult = await evaluateInterview(
      role,
      level,
      questions,
      answers
    );

    // Save Interview History
    const interview = await InterviewHistory.create({
      userId: req.user.id,
      role,
      level,
      duration,
      questions,
      answers,
      overallScore: aiResult.overallScore,
      technicalScore: aiResult.technicalScore,
      communicationScore: aiResult.communicationScore,
      confidenceScore: aiResult.confidenceScore,
      strengths: aiResult.strengths,
      improvements: aiResult.improvements,
      recommendation: aiResult.recommendation,
    });

    return res.status(200).json({
      success: true,
      message: "Interview evaluated successfully.",
      result: interview,
    });

  } catch (error) {
    console.error("Interview Evaluation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Interview evaluation failed.",
      error: error.message,
    });
  }
}; 