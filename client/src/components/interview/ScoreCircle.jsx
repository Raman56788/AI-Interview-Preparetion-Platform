import { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";

const ScoreCircle = ({ score = 0 }) => {
  const radius = 78;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);

  // Animation
  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += 1;

      if (current >= score) {
        current = score;
        clearInterval(timer);
      }

      setProgress(current);
    }, 15);

    return () => clearInterval(timer);
  }, [score]);

  const offset =
    circumference - (progress / 100) * circumference;

  const getPerformance = () => {
    if (score >= 90)
      return {
        text: "Excellent 🚀",
        color: "text-green-600",
        bg: "bg-green-100",
      };

    if (score >= 75)
      return {
        text: "Very Good 👍",
        color: "text-blue-600",
        bg: "bg-blue-100",
      };

    if (score >= 60)
      return {
        text: "Good 🙂",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
      };

    if (score >= 40)
      return {
        text: "Average",
        color: "text-orange-600",
        bg: "bg-orange-100",
      };

    return {
      text: "Needs Improvement",
      color: "text-red-600",
      bg: "bg-red-100",
    };
  };

  const performance = getPerformance();

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center w-full">

      {/* Trophy */}
      <div className="bg-yellow-100 p-4 rounded-full mb-4">
        <FaTrophy className="text-yellow-500 text-4xl" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        Overall AI Score
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        Gemini AI Interview Evaluation
      </p>

      {/* Circular Progress */}
      <div className="relative w-64 h-64 mt-8">

        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 200 200"
        >
          {/* Background Circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Progress Circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#16A34A"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 0.4s ease",
            }}
          />
        </svg>

        {/* Center Score */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">

          <p className="text-gray-400 text-sm uppercase tracking-wide">
            Score
          </p>

          <h1 className="text-6xl font-bold text-green-600">
            {progress}
          </h1>

          <p className="text-gray-500 font-semibold text-lg">
            /100
          </p>

        </div>

      </div>

      {/* Badge */}
      <div
        className={`${performance.bg} ${performance.color} mt-8 px-6 py-3 rounded-full font-bold text-lg`}
      >
        {performance.text}
      </div>

      {/* Description */}
      <p className="text-center text-gray-500 mt-5 leading-7 max-w-sm">
        Your interview score is calculated based on your technical knowledge,
        communication skills, confidence, and answer quality analyzed by Gemini AI.
      </p>

      {/* Progress Label */}
      <div className="w-full mt-8">

        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Interview Score</span>
          <span>{score}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-green-600 h-3 rounded-full transition-all duration-700"
            style={{ width: `${score}%` }}
          />

        </div>

      </div>

    </div>
  );
};

export default ScoreCircle;