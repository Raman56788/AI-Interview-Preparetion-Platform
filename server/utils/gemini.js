const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Check API Key
if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ GEMINI_API_KEY is missing in .env file");
}

// Gemini Initialization
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Latest Gemini Model (2026)
const model = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
  generationConfig: {
    temperature: 0.4,
    topP: 0.9,
    maxOutputTokens: 4096,
  },
});

console.log("🤖 Gemini Model Loaded: gemini-3.6-flash");

module.exports = model;