import { useEffect, useState } from "react";
import { FaClock, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InterviewTimer = ({ duration }) => {
  const navigate = useNavigate();

  // Convert duration into seconds
  const getSeconds = () => {
    switch (duration) {
      case "30 Minutes":
        return 30 * 60;
      case "45 Minutes":
        return 45 * 60;
      default:
        return 15 * 60;
    }
  };

  const [timeLeft, setTimeLeft] = useState(getSeconds());

  // Reset timer when duration changes
  useEffect(() => {
    setTimeLeft(getSeconds());
  }, [duration]);

  // Countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      alert("⏰ Time is over! Interview submitted automatically.");
      navigate("/interview/result");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const warning = timeLeft <= 60;

  return (
    <div
      className={`rounded-2xl shadow-md p-5 flex justify-between items-center transition-all ${
        warning
          ? "bg-red-100 border border-red-300"
          : "bg-green-100 border border-green-300"
      }`}
    >
      <div className="flex items-center gap-3">
        {warning ? (
          <FaExclamationTriangle className="text-red-600 text-3xl animate-pulse" />
        ) : (
          <FaClock className="text-green-600 text-3xl" />
        )}

        <div>
          <h3 className="font-semibold text-gray-700">Interview Countdown</h3>
          <p className="text-sm text-gray-500">Remaining Time</p>
        </div>
      </div>

      <h2
        className={`text-3xl font-bold tracking-wider ${
          warning ? "text-red-600 animate-pulse" : "text-green-600"
        }`}
      >
        {minutes}:{seconds}
      </h2>
    </div>
  );
};

export default InterviewTimer;