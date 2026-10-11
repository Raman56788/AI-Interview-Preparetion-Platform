import { useState } from "react";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { generateQuestions } from "../../services/interviewService";

const InterviewSetup = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("Frontend Developer");
  const [level, setLevel] = useState("Beginner");
  const [duration, setDuration] = useState("15 Minutes");
  const [loading, setLoading] = useState(false);

  // Demo Questions (Fallback)
  const fallbackQuestions = [
    "Tell me about yourself.",
    "What is Semantic HTML and why is it important?",
    "Explain the CSS Box Model.",
    "What is the difference between let, const and var in JavaScript?",
    "How do CSS Media Queries help in Responsive Web Design?",
  ];

  // Start Interview
  const startInterview = async () => {
    setLoading(true);

    try {
      const data = await generateQuestions(role, level);

      // Gemini Questions
      const questionList = data.questions
        .split("\n")
        .map((q) => q.replace(/^\d+\.\s*/, "").trim())
        .filter((q) => q.length > 0);

      // Save in localStorage
      localStorage.setItem("questions", JSON.stringify(questionList));
      localStorage.setItem("role", role);
      localStorage.setItem("level", level);
      localStorage.setItem("duration", duration);

      navigate("/interview/room");
    } catch (error) {
      console.error("Gemini Error:", error);

      // ALWAYS USE FALLBACK IF GEMINI FAILS
      localStorage.setItem(
        "questions",
        JSON.stringify(fallbackQuestions)
      );
      localStorage.setItem("role", role);
      localStorage.setItem("level", level);
      localStorage.setItem("duration", duration);

      alert("⚠ Gemini API unavailable. Demo Interview Started.");

      navigate("/interview/room");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <button
          onClick={() => navigate("/interview")}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
        >
          <FaArrowLeft />
          Back
        </button>

        <h1 className="text-3xl font-bold text-gray-800">
          AI Interview Setup
        </h1>

        <p className="text-gray-500 mt-2">
          Configure your interview before starting.
        </p>
      </div>

      <div className="grid gap-6">

        {/* Role */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Select Role</h2>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded-xl p-3"
          >
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Java Developer</option>
            <option>MERN Stack Developer</option>
            <option>HR Interview</option>
            <option>DSA</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Difficulty Level</h2>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border rounded-xl p-3"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Duration */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">
            Interview Duration
          </h2>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border rounded-xl p-3"
          >
            <option>15 Minutes</option>
            <option>30 Minutes</option>
            <option>45 Minutes</option>
          </select>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">
            Interview Summary
          </h2>

          <div className="space-y-3 text-gray-700">
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Level:</strong> {level}</p>
            <p><strong>Duration:</strong> {duration}</p>
            <p><strong>Questions:</strong> 5 AI Generated Questions</p>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={startInterview}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition"
        >
          <FaPlay />

          {loading
            ? "Generating Questions..."
            : "Start AI Interview"}
        </button>

      </div>
    </div>
  );
};

export default InterviewSetup;