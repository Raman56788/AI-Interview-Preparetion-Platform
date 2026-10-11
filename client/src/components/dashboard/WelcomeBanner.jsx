import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMicrophone,
  FaChartLine,
  FaFire,
  FaBrain,
} from "react-icons/fa6";

const WelcomeBanner = ({ name = "Raman" }) => {
  const hour = new Date().getHours();

  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-green-100 via-white to-emerald-100 border border-green-200 shadow-xl p-8 lg:p-10">

      {/* Background Decorations */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-200/30 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10">

        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide shadow">
            <FaBrain />
            AI INTERVIEW PREPARATION PLATFORM
          </span>

          <h1 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            {greeting},
            <span className="text-green-700"> {name} 👋</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Practice AI Mock Interviews, improve your Resume ATS Score, solve
            Coding Problems, and track your interview performance using
            <span className="font-semibold text-green-700"> Gemini AI.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              to="/interview"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700 hover:scale-105 transition duration-300 shadow-lg"
            >
              <FaMicrophone />
              Start AI Interview
            </Link>

            <Link
              to="/analytics"
              className="inline-flex items-center gap-3 bg-white border border-green-200 text-green-700 px-6 py-3 rounded-2xl font-semibold hover:bg-green-50 transition shadow"
            >
              <FaChartLine />
              View Analytics
              <FaArrowRight />
            </Link>

          </div>

          {/* Mini Stats */}
          <div className="flex flex-wrap gap-6 mt-8">

            <div>
              <p className="text-2xl font-bold text-green-700">92%</p>
              <span className="text-sm text-gray-500">Interview Accuracy</span>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-700">126+</p>
              <span className="text-sm text-gray-500">Coding Problems</span>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-700">15+</p>
              <span className="text-sm text-gray-500">AI Mock Interviews</span>
            </div>

          </div>

        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="w-full lg:w-[340px]">

          <div className="bg-white/80 backdrop-blur-md border border-green-200 rounded-3xl shadow-xl p-6">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaFire />
              </div>

              <div>
                <p className="text-sm text-gray-500">Current Streak</p>
                <h3 className="font-bold text-gray-800">7 Days</h3>
              </div>
            </div>

            <h2 className="text-5xl font-bold text-green-700">75%</h2>

            <p className="text-gray-600 mt-2">
              Weekly interview goal completed.
            </p>

            {/* Progress */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2 text-gray-600">
                <span>Progress</span>
                <span>75 / 100</span>
              </div>

              <div className="w-full bg-green-100 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">

              <div className="bg-green-50 rounded-xl p-3 text-center">
                <p className="text-xl font-bold text-green-700">95%</p>
                <span className="text-xs text-gray-500">Best Score</span>
              </div>

              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-xl font-bold text-blue-700">88%</p>
                <span className="text-xs text-gray-500">Resume ATS</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default WelcomeBanner;