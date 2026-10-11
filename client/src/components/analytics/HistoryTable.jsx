import {
  FaEye,
  FaCircleCheck,
  FaArrowTrendUp,
  FaTriangleExclamation,
  FaCalendarDays,
  FaLaptopCode,
  FaTrophy,
  FaChartLine,
  FaBullseye,
  FaClipboardCheck,
} from "react-icons/fa6";

const interviewHistory = [
  {
    date: "15 Sep 2026",
    role: "Frontend Developer",
    score: 95,
    level: "Intermediate",
    status: "Excellent",
  },
  {
    date: "12 Sep 2026",
    role: "Java Developer",
    score: 90,
    level: "Beginner",
    status: "Very Good",
  },
  {
    date: "08 Sep 2026",
    role: "MERN Stack Developer",
    score: 87,
    level: "Intermediate",
    status: "Improving",
  },
  {
    date: "04 Sep 2026",
    role: "HR Interview",
    score: 81,
    level: "Beginner",
    status: "Good",
  },
  {
    date: "01 Sep 2026",
    role: "DSA Interview",
    score: 72,
    level: "Advanced",
    status: "Needs Practice",
  },
];

const HistoryTable = () => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Excellent":
        return {
          bg: "bg-green-500/10",
          text: "text-green-400",
          border: "border-green-500/30",
          icon: <FaCircleCheck />,
        };

      case "Very Good":
        return {
          bg: "bg-blue-500/10",
          text: "text-blue-400",
          border: "border-blue-500/30",
          icon: <FaArrowTrendUp />,
        };

      case "Improving":
        return {
          bg: "bg-purple-500/10",
          text: "text-purple-400",
          border: "border-purple-500/30",
          icon: <FaArrowTrendUp />,
        };

      case "Good":
        return {
          bg: "bg-yellow-500/10",
          text: "text-yellow-400",
          border: "border-yellow-500/30",
          icon: <FaArrowTrendUp />,
        };

      default:
        return {
          bg: "bg-red-500/10",
          text: "text-red-400",
          border: "border-red-500/30",
          icon: <FaTriangleExclamation />,
        };
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-green-950 rounded-3xl p-6 shadow-2xl border border-green-500/20">

      {/* ================= Header ================= */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

        <div>
          <p className="uppercase tracking-[4px] text-green-400 text-xs font-semibold">
            AI INTERVIEW HISTORY
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            Recent Interview Attempts
          </h2>

          <p className="text-gray-400 mt-2">
            View your latest AI mock interview performances and progress.
          </p>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 px-5 py-2 rounded-full text-green-400 text-sm font-semibold">
          Last 5 Interviews
        </div>

      </div>

      {/* ================= Table ================= */}
      <div className="overflow-x-auto rounded-2xl border border-gray-800">

        <table className="min-w-full text-sm">

          <thead className="bg-gray-950 text-green-400">
            <tr>
              <th className="px-5 py-4 text-left">Date</th>
              <th className="px-5 py-4 text-left">Role</th>
              <th className="px-5 py-4 text-left">Score</th>
              <th className="px-5 py-4 text-left">Level</th>
              <th className="px-5 py-4 text-left">Status</th>
              <th className="px-5 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {interviewHistory.map((item, index) => {
              const style = getStatusStyle(item.status);

              return (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-green-500/5 transition duration-300"
                >
                  {/* Date */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaCalendarDays className="text-green-400" />
                      {item.date}
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <FaLaptopCode className="text-green-400" />
                      <span className="font-semibold text-white">
                        {item.role}
                      </span>
                    </div>
                  </td>

                  {/* Score */}
                  <td className="px-5 py-4">
                    <div>
                      <span className="text-green-400 font-bold text-lg">
                        {item.score}%
                      </span>

                      <div className="w-28 bg-gray-800 rounded-full h-2 mt-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Level */}
                  <td className="px-5 py-4">
                    <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700">
                      {item.level}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`${style.bg} ${style.text} ${style.border}
                        border px-3 py-1 rounded-full flex items-center gap-2 w-fit text-xs font-semibold`}
                    >
                      {style.icon}
                      {item.status}
                    </span>
                  </td>

                  {/* Button */}
                  <td className="px-5 py-4 text-center">
                    <button className="bg-green-500 hover:bg-green-600 transition text-white p-3 rounded-xl shadow-lg">
                      <FaEye />
                    </button>
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

      {/* ================= Summary Cards ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

        <div className="bg-white/5 border border-green-500/20 rounded-2xl p-5 text-center">
          <FaClipboardCheck className="text-green-400 text-2xl mx-auto mb-3" />

          <p className="text-gray-400 text-sm">
            Total Interviews
          </p>

          <h3 className="text-3xl font-bold text-green-400 mt-2">
            12
          </h3>
        </div>

        <div className="bg-white/5 border border-blue-500/20 rounded-2xl p-5 text-center">
          <FaChartLine className="text-blue-400 text-2xl mx-auto mb-3" />

          <p className="text-gray-400 text-sm">
            Average Score
          </p>

          <h3 className="text-3xl font-bold text-blue-400 mt-2">
            89%
          </h3>
        </div>

        <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-5 text-center">
          <FaTrophy className="text-purple-400 text-2xl mx-auto mb-3" />

          <p className="text-gray-400 text-sm">
            Best Score
          </p>

          <h3 className="text-3xl font-bold text-purple-400 mt-2">
            97%
          </h3>
        </div>

        <div className="bg-white/5 border border-orange-500/20 rounded-2xl p-5 text-center">
          <FaBullseye className="text-orange-400 text-2xl mx-auto mb-3" />

          <p className="text-gray-400 text-sm">
            Completion Rate
          </p>

          <h3 className="text-3xl font-bold text-orange-400 mt-2">
            92%
          </h3>
        </div>

      </div>

      {/* ================= AI Insight ================= */}
      <div className="mt-8 bg-gradient-to-r from-green-500/10 via-black to-green-900/20 border border-green-500/20 rounded-2xl p-6">

        <h3 className="text-green-400 font-bold text-xl mb-3">
          🤖 AI Performance Insight
        </h3>

        <p className="text-gray-300 leading-7">
          Your interview performance is improving consistently.
          You achieved an average AI score of{" "}
          <span className="text-green-400 font-semibold">89%</span> and your
          best performance reached{" "}
          <span className="text-purple-400 font-semibold">97%</span>.
          Continue practicing MERN Stack, React, JavaScript, SQL, DBMS and HR
          interview questions to reach a consistent{" "}
          <span className="text-green-400 font-semibold">95%+ score.</span>
        </p>

      </div>

    </div>
  );
};

export default HistoryTable;