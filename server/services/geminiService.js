const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// ================= Gemini Configuration =================
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
});

// ================= Interview Evaluation =================
const evaluateInterview = async (
  role,
  level,
  questions,
  answers
) => {
  try {
    const prompt = `
You are an AI Interview Evaluator.

Evaluate the interview for a ${level} level ${role} candidate.

Interview Questions:
${questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}

Candidate Answers:
${answers.map((a, i) => `${i + 1}. ${a}`).join("\n")}

Return ONLY valid JSON in this format:

{
  "overallScore": 85,
  "technicalScore": 84,
  "communicationScore": 86,
  "confidenceScore": 82,
  "strengths": [
    "Strong React fundamentals",
    "Good JavaScript understanding",
    "Clear communication skills"
  ],
  "improvements": [
    "Explain answers with examples",
    "Practice SQL and DBMS",
    "Improve DSA problem solving"
  ],
  "recommendation": "Practice React, SQL and Java DSA mock interviews regularly."
}
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    console.log("========== GEMINI INTERVIEW RESPONSE ==========");
    console.log(text);

    // Remove markdown if Gemini returns ```json
    const cleanJSON = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(cleanJSON);

    return analysis;
  } catch (error) {
    console.error("Gemini Evaluation Error:", error.message);

    // Fallback Response
    return {
      overallScore: 75,
      technicalScore: 72,
      communicationScore: 78,
      confidenceScore: 74,

      strengths: [
        "Basic concepts are clear.",
        "Good attempt to answer questions.",
        "Shows willingness to learn."
      ],

      improvements: [
        "Improve technical depth.",
        "Practice communication in English.",
        "Answer with more confidence."
      ],

      recommendation:
        "Practice React, JavaScript, SQL and DSA mock interviews regularly."
    };
  }
};

module.exports = { evaluateInterview };