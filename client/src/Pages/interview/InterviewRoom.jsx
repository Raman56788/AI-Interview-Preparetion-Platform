import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaRobot,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

import CameraPreview from "../../components/interview/CameraPreview";
import SpeechRecognition from "../../components/interview/SpeechRecognition";
import ProgressBar from "../../components/interview/ProgressBar";
import { evaluateInterview } from "../../services/interviewService";

const InterviewRoom = () => {
  const navigate = useNavigate();

  // ================= STATES =================
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  const [role, setRole] = useState("Frontend Developer");
  const [level, setLevel] = useState("Beginner");
  const [duration, setDuration] = useState("15 Minutes");

  const [loading, setLoading] = useState(false);

  // ================= LOAD INTERVIEW DATA =================
  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("questions")) || [];

    if (savedQuestions.length === 0) {
      alert("No interview questions found. Please start again.");
      navigate("/interview/setup");
      return;
    }

    setQuestions(savedQuestions);

    setRole(localStorage.getItem("role") || "Frontend Developer");
    setLevel(localStorage.getItem("level") || "Beginner");
    setDuration(localStorage.getItem("duration") || "15 Minutes");

    const savedAnswers =
      JSON.parse(localStorage.getItem("answers")) || [];

    setAnswers(savedAnswers);
    setAnswer(savedAnswers[0] || "");
  }, [navigate]);

  // ================= SAVE ANSWER =================
  const saveCurrentAnswer = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;

    setAnswers(updatedAnswers);
    localStorage.setItem("answers", JSON.stringify(updatedAnswers));

    return updatedAnswers;
  };

  // ================= NEXT / FINISH INTERVIEW =================
  const handleNextQuestion = async () => {
    const updatedAnswers = saveCurrentAnswer();

    // Next Question
    if (currentQuestion < questions.length - 1) {
      const nextIndex = currentQuestion + 1;

      setCurrentQuestion(nextIndex);
      setAnswer(updatedAnswers[nextIndex] || "");

      return;
    }

    // ================= FINISH INTERVIEW =================
    try {
      setLoading(true);

      const interviewData = {
        role,
        level,
        duration,
        questions,
        answers: updatedAnswers,
      };

      const response = await evaluateInterview(interviewData);

      // Save Result
      localStorage.setItem(
        "interviewResult",
        JSON.stringify(response.result)
      );

      navigate("/interview/result");
    } catch (error) {
      console.error("Interview Evaluation Error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to evaluate interview."
      );
    } finally {
      setLoading(false);
    }
  };

  // ================= CURRENT QUESTION =================
  const currentText =
    questions.length > 0
      ? questions[currentQuestion]
      : "Loading interview question...";

  const progress =
    questions.length > 0
      ? ((currentQuestion + 1) / questions.length) * 100
      : 0;

  // ================= UI =================
  return (
    <div className="min-h-screen bg-gray-100 p-5 lg:p-8">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

        <h1 className="text-3xl font-bold text-green-700">
          AI Interview Room
        </h1>

        <p className="text-gray-500 mt-2">
          Practice your interview with AI and improve your confidence.
        </p>

        {/* SUMMARY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

          <div className="bg-green-50 rounded-xl p-4 text-center shadow-sm">
            <p className="text-gray-500 text-sm">Role</p>
            <h3 className="font-semibold text-green-700">{role}</h3>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 text-center shadow-sm">
            <p className="text-gray-500 text-sm">Level</p>
            <h3 className="font-semibold text-blue-700">{level}</h3>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 text-center shadow-sm">
            <p className="text-gray-500 text-sm">Duration</p>
            <h3 className="font-semibold text-purple-700">{duration}</h3>
          </div>

          <div className="bg-orange-50 rounded-xl p-4 text-center shadow-sm">
            <p className="text-gray-500 text-sm">Question</p>

            <h3 className="font-semibold text-orange-600">
              {currentQuestion + 1} / {questions.length}
            </h3>
          </div>

        </div>

      </div>

      {/* ================= MAIN INTERVIEW SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="h-64 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex flex-col justify-center items-center">

            <FaRobot className="text-6xl text-green-700 mb-4" />

            <h2 className="text-2xl font-bold text-gray-700">
              AI Interviewer
            </h2>

            <p className="text-gray-500 mt-2 text-center px-6">
              Read the question carefully and answer in English.
            </p>

          </div>

          {/* QUESTION */}
          <div className="mt-6">

            <p className="font-semibold text-green-700 mb-3">
              Current Question
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 min-h-[190px] flex items-center">

              <p className="text-lg leading-8 font-medium text-gray-800">
                {currentText}
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          {/* CAMERA */}
          <CameraPreview />

          {/* ANSWER BOX */}
          <div className="mt-6">

            <p className="font-semibold text-gray-700 mb-3">
              Your Answer
            </p>

            <textarea
              rows={8}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Speak in English or type your answer here..."
              className="w-full border rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          {/* SPEECH TO TEXT */}
          <div className="mt-5">
            <SpeechRecognition
              answer={answer}
              setAnswer={setAnswer}
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleNextQuestion}
            disabled={loading}
            className="w-full mt-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition text-white rounded-xl py-4 font-semibold flex justify-center items-center gap-3"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Evaluating Interview...
              </>
            ) : (
              <>
                {currentQuestion === questions.length - 1
                  ? "Finish Interview"
                  : "Next Question"}

                <FaArrowRight />
              </>
            )}
          </button>

        </div>

      </div>

      {/* ================= LOADING CARD ================= */}
      {loading && (
        <div className="bg-white rounded-2xl shadow-md p-8 mt-8 text-center">

          <FaSpinner className="animate-spin text-5xl text-green-600 mx-auto" />

          <h2 className="text-2xl font-bold text-green-700 mt-4">
            Gemini AI is Evaluating Your Interview...
          </h2>

          <p className="text-gray-500 mt-2">
            Please wait while AI analyzes your answers and generates your feedback.
          </p>

        </div>
      )}

      {/* ================= PROGRESS ================= */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

        <div className="flex justify-between items-center mb-3">

          <h2 className="font-bold text-xl text-gray-700">
            Interview Progress
          </h2>

          <span className="font-semibold text-green-600">
            {Math.round(progress)}%
          </span>

        </div>

        <ProgressBar progress={progress} />

        <p className="text-gray-500 mt-3">
          Completed {currentQuestion + 1} of {questions.length} questions.
        </p>

      </div>

      {/* ================= FINAL QUESTION MESSAGE ================= */}
      {currentQuestion === questions.length - 1 &&
        questions.length > 0 && (
          <div className="bg-green-100 border border-green-300 rounded-2xl p-6 mt-8 flex gap-4 items-center">

            <FaCheckCircle className="text-green-600 text-4xl" />

            <div>

              <h3 className="text-green-700 font-bold text-lg">
                Final Question
              </h3>

              <p className="text-green-700">
                After answering the last question, click
                <strong> Finish Interview </strong>
                to receive AI feedback and score.
              </p>

            </div>

          </div>
        )}

    </div>
  );
};

export default InterviewRoom;