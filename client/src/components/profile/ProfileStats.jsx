import {
  FaMicrophone,
  FaFileLines,
  FaCode,
  FaChartLine,
  FaArrowTrendUp,
  FaFire,
} from "react-icons/fa6";

const stats = [
  {
    title: "AI Interview Score",
    value: "92%",
    change: "+12% This Week",
    icon: <FaMicrophone />,
    bg: "bg-green-50",
    iconBg: "from-green-500 to-emerald-600",
    text: "text-green-600",
  },
  {
    title: "Resume ATS Score",
    value: "88%",
    change: "ATS Optimized",
    icon: <FaFileLines />,
    bg: "bg-blue-50",
    iconBg: "from-blue-500 to-cyan-600",
    text: "text-blue-600",
  },
  {
    title: "Coding Problems",
    value: "126",
    change: "LeetCode + DSA",
    icon: <FaCode />,
    bg: "bg-purple-50",
    iconBg: "from-purple-500 to-indigo-600",
    text: "text-purple-600",
  },
  {
    title: "Mock Interviews",
    value: "9",
    change: "Completed",
    icon: <FaChartLine />,
    bg: "bg-orange-50",
    iconBg: "from-orange-400 to-red-500",
    text: "text-orange-600",
  },
];

const ProfileStats = () => {
  return (
    <section className="bg-white rounded-[28px] border border-green-100 shadow-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
            PERFORMANCE OVERVIEW
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-1">
            Profile Statistics
          </h2>

          <p className="text-gray-500 mt-2">
            Your interview preparation performance summary.
          </p>
        </div>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
          <FaFire />
          Active Learner
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-3xl p-5 border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
          >
            <div className="flex justify-between items-start">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.iconBg}
                text-white flex items-center justify-center text-2xl shadow-lg`}
              >
                {item.icon}
              </div>

              <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <FaArrowTrendUp />
                +5%
              </div>
            </div>

            <h3 className={`text-4xl font-bold mt-6 ${item.text}`}>
              {item.value}
            </h3>

            <p className="text-gray-700 font-semibold mt-2">{item.title}</p>

            <p className="text-gray-500 text-sm mt-1">{item.change}</p>

            {/* Progress Bar */}
            <div className="mt-5 h-2 bg-white rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${item.iconBg}`}
                style={{
                  width:
                    item.value === "126"
                      ? "90%"
                      : item.value === "9"
                      ? "75%"
                      : item.value,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary */}
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white p-5">
          <p className="text-green-100 text-sm">Current Interview Streak</p>

          <h2 className="text-3xl font-bold mt-2">7 Days 🔥</h2>

          <p className="text-green-100 text-sm mt-2">
            Practice every day to keep your streak alive.
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
          <p className="text-gray-500 text-sm">Strongest Skill</p>

          <h2 className="text-2xl font-bold text-green-700 mt-2">
            React Development
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Excellent UI building and component design.
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
          <p className="text-gray-500 text-sm">Needs Improvement</p>

          <h2 className="text-2xl font-bold text-orange-600 mt-2">
            SQL & DBMS
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Practice JOINs, Subqueries and Normalization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileStats;