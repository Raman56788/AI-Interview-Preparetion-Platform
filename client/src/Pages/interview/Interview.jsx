import { useNavigate } from "react-router-dom";
import {
  FaMicrophone,
  FaLaptopCode,
  FaUserTie,
  FaCode,
  FaServer,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";

import InterviewCard from "../../components/interview/InterviewCard";
import InterviewStats from "../../components/interview/InterviewStats";
import RecentInterviews from "../../components/interview/RecentInterviews";
import InterviewTips from "../../components/interview/InterviewTips";

const categories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    description: "React, HTML, CSS, JavaScript",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Backend",
    icon: <FaServer />,
    description: "Node.js, Express, APIs",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Java",
    icon: <FaCode />,
    description: "Core Java & OOP",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "HR Interview",
    icon: <FaUserTie />,
    description: "HR & Communication",
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "DSA",
    icon: <FaBrain />,
    description: "Coding & Problem Solving",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Mock Interview",
    icon: <FaMicrophone />,
    description: "AI Powered Interview",
    color: "bg-red-100 text-red-600",
  },
];

const Interview = () => {
  const navigate = useNavigate();

  const startInterview = () => {
    navigate("/interview/setup");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl shadow-lg p-8 mb-8 text-white flex flex-col md:flex-row items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold mb-3">
            AI Interview Dashboard 🚀
          </h1>

          <p className="text-lg text-green-100 max-w-xl">
            Practice technical and HR interviews with Gemini AI.
            Improve your communication, coding confidence and interview score.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button
              onClick={startInterview}
              className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition flex items-center gap-2"
            >
              <FaMicrophone />
              Start AI Interview
              <FaArrowRight />
            </button>

            <button
              onClick={() => navigate("/analytics")}
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              View Analytics
            </button>
          </div>
        </div>

        <div className="hidden md:flex text-8xl opacity-20">
          🤖
        </div>
      </div>

      {/* Interview Statistics */}
      <InterviewStats />

      {/* Categories */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Interview Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <InterviewCard
              key={index}
              title={item.title}
              icon={item.icon}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </div>

      {/* Recent Interviews */}
      <div className="mt-10">
        <RecentInterviews />
      </div>

      {/* AI Tips */}
      <div className="mt-10">
        <InterviewTips />
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Ready for your next interview?
          </h2>

          <p className="text-gray-500 mt-2">
            Generate AI questions based on your role and level, answer them by
            voice or text, and get instant feedback.
          </p>
        </div>

        <button
          onClick={startInterview}
          className="mt-5 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
        >
          <FaMicrophone />
          Start Interview Now
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Interview;