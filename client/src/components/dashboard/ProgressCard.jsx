import {
  FaChartLine,
  FaFire,
  FaCalendarCheck,
  FaCircleCheck,
  FaTrophy,
  FaArrowTrendUp,
} from "react-icons/fa6";

const progressData = [
  {
    name: "React Development",
    value: 80,
    color: "bg-blue-500",
  },
  {
    name: "Java & DSA",
    value: 60,
    color: "bg-orange-500",
  },
  {
    name: "AI Interview",
    value: 70,
    color: "bg-green-500",
  },
  {
    name: "Resume ATS Score",
    value: 85,
    color: "bg-purple-500",
  },
];

const ProgressCard = () => {
  const weeklyProgress = 75;
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (weeklyProgress / 100) * circumference;

  return (
    <div className="relative overflow-hidden bg-white rounded-[28px] border border-green-100 shadow-xl p-6">

      {/* Background Decoration */}
      <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-green-100 rounded-full blur-3xl opacity-60"></div>

      {/* ================= HEADER ================= */}
      <div className="relative flex items-center gap-4 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl shadow-lg">
          <FaChartLine />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-green-600 font-semibold">
            Weekly Performance
          </p>

          <h2 className="text-2xl font-bold text-gray-800">
            Learning Progress
          </h2>

          <p className="text-sm text-gray-500">
            Track your AI Interview preparation journey.
          </p>
        </div>

      </div>

      {/* ================= CIRCULAR PROGRESS ================= */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">

        {/* Circular Score */}
        <div className="relative flex items-center justify-center">

          <svg className="w-44 h-44 -rotate-90" viewBox="0 0 120 120">

            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#DCFCE7"
              strokeWidth="8"
              fill="none"
            />

            {/* Progress Circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#16A34A"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />

          </svg>

          {/* Center Text */}
          <div className="absolute text-center">
            <p className="text-sm text-gray-500">Weekly Goal</p>

            <h2 className="text-4xl font-bold text-green-700">
              {weeklyProgress}%
            </h2>

            <p className="text-xs text-green-600 font-semibold">
              Completed
            </p>
          </div>

        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-72">

          <div className="bg-green-50 rounded-2xl p-4 border border-green-100 text-center">
            <FaFire className="text-orange-500 text-2xl mx-auto mb-2" />

            <h3 className="text-2xl font-bold text-orange-500">
              7
            </h3>

            <p className="text-xs text-gray-500">
              Day Streak
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 text-center">
            <FaCalendarCheck className="text-blue-600 text-2xl mx-auto mb-2" />

            <h3 className="text-2xl font-bold text-blue-700">
              9
            </h3>

            <p className="text-xs text-gray-500">
              Interviews Done
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100 text-center">
            <FaTrophy className="text-purple-600 text-2xl mx-auto mb-2" />

            <h3 className="text-2xl font-bold text-purple-700">
              95%
            </h3>

            <p className="text-xs text-gray-500">
              Best Score
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-center">
            <FaArrowTrendUp className="text-green-600 text-2xl mx-auto mb-2" />

            <h3 className="text-2xl font-bold text-green-700">
              +12%
            </h3>

            <p className="text-xs text-gray-500">
              Weekly Growth
            </p>
          </div>

        </div>

      </div>

      {/* ================= SKILL PROGRESS ================= */}
      <div className="space-y-5 mb-8">

        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">
            Skill Progress
          </h3>

          <span className="text-sm text-green-600 font-semibold">
            Updated Today
          </span>
        </div>

        {progressData.map((item, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-2xl p-4 border border-green-100"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">
                {item.name}
              </span>

              <span className="font-semibold text-gray-600">
                {item.value}%
              </span>
            </div>

            <div className="w-full bg-white rounded-full h-3 overflow-hidden">
              <div
                className={`h-3 rounded-full ${item.color}`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}

      </div>

      {/* ================= ACHIEVEMENT CARD ================= */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-5 text-white shadow-lg">

        <div className="flex items-center gap-3 mb-3">
          <FaCircleCheck className="text-2xl text-green-100" />

          <span className="uppercase tracking-wide text-sm font-semibold">
            Achievement Unlocked
          </span>
        </div>

        <h3 className="text-2xl font-bold">
          React Interview Master 🚀
        </h3>

        <p className="mt-2 text-green-100 leading-6">
          You scored above 90% in your latest Frontend interview.
          Keep practicing SQL and DBMS to unlock the next badge.
        </p>

        <button className="mt-5 bg-white text-green-700 px-5 py-3 rounded-xl font-semibold hover:bg-green-100 transition">
          Continue Learning
        </button>

      </div>

    </div>
  );
};

export default ProgressCard;