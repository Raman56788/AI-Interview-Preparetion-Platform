import {
  FaCode,
  FaCircleCheck,
  FaFire,
  FaBullseye,
  FaClock,
  FaCalendarCheck,
  FaTrophy,
} from "react-icons/fa6";

import { codingStats } from "../../data/codingRoadmap";

const CodingStats = () => {
  const dayPercentage = Math.round(
    (codingStats.completedDays / codingStats.targetDays) * 100
  );

  const solvedPercentage = Math.round(
    (codingStats.solvedProblems / codingStats.totalProblems) * 100
  );

  const easyPercentage = Math.round(
    (codingStats.easySolved / codingStats.totalEasy) * 100
  );

  const mediumPercentage = Math.round(
    (codingStats.mediumSolved / codingStats.totalMedium) * 100
  );

  const hardPercentage = Math.round(
    (codingStats.hardSolved / codingStats.totalHard) * 100
  );

  const statsCards = [
    {
      title: "Total Target",
      value: codingStats.totalProblems,
      subtitle: "DSA Problems",
      icon: <FaCode />,
      bg: "from-green-100 to-green-50",
      iconBg: "bg-green-600",
      text: "text-green-700",
    },
    {
      title: "Solved",
      value: codingStats.solvedProblems,
      subtitle: `${solvedPercentage}% Completed`,
      icon: <FaCircleCheck />,
      bg: "from-blue-100 to-blue-50",
      iconBg: "bg-blue-600",
      text: "text-blue-700",
    },
    {
      title: "Current Streak",
      value: codingStats.currentStreak,
      subtitle: "Days Practice",
      icon: <FaFire />,
      bg: "from-orange-100 to-orange-50",
      iconBg: "bg-orange-500",
      text: "text-orange-700",
    },
    {
      title: "60-Day Goal",
      value: `${codingStats.completedDays}/${codingStats.targetDays}`,
      subtitle: `${dayPercentage}% Journey Complete`,
      icon: <FaBullseye />,
      bg: "from-purple-100 to-purple-50",
      iconBg: "bg-purple-600",
      text: "text-purple-700",
    },
  ];

  return (
    <div className="space-y-8">

      {/* ================= TOP STATS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statsCards.map((card) => (
          <div
            key={card.title}
            className={`bg-gradient-to-br ${card.bg} rounded-3xl p-5 shadow-md border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex justify-between items-center">
              <div
                className={`${card.iconBg} w-12 h-12 rounded-2xl text-white flex items-center justify-center text-xl shadow-lg`}
              >
                {card.icon}
              </div>

              <span className="text-xs uppercase tracking-[2px] text-gray-400 font-semibold">
                Stats
              </span>
            </div>

            <h2 className={`text-4xl font-bold mt-5 ${card.text}`}>
              {card.value}
            </h2>

            <p className="font-semibold text-gray-700 mt-2">{card.title}</p>

            <p className="text-sm text-gray-500">{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* ================= MAIN SECTION ================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Progress Card */}

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-green-100 p-6">

          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs tracking-[3px] uppercase text-green-600 font-bold">
                CODING JOURNEY
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                60-Day Placement Progress
              </h2>
            </div>

            <FaBullseye className="text-3xl text-green-600" />
          </div>

          {/* Big Progress */}

          <div className="mb-5">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Journey</span>

              <span>{dayPercentage}%</span>
            </div>

            <div className="w-full h-4 bg-green-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-700"
                style={{ width: `${dayPercentage}%` }}
              />
            </div>
          </div>

          {/* Small Stats */}

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-green-50 rounded-2xl p-4 text-center">
              <FaCalendarCheck className="mx-auto text-2xl text-green-600 mb-2" />

              <p className="text-xs uppercase text-gray-500">
                Completed Days
              </p>

              <h3 className="text-3xl font-bold text-green-700">
                {codingStats.completedDays}
              </h3>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 text-center">
              <FaClock className="mx-auto text-2xl text-blue-600 mb-2" />

              <p className="text-xs uppercase text-gray-500">
                Target Days
              </p>

              <h3 className="text-3xl font-bold text-blue-700">
                {codingStats.targetDays}
              </h3>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <FaFire className="mx-auto text-2xl text-orange-500 mb-2" />

              <p className="text-xs uppercase text-gray-500">
                Current Streak
              </p>

              <h3 className="text-3xl font-bold text-orange-600">
                {codingStats.currentStreak}
              </h3>
            </div>

            <div className="bg-purple-50 rounded-2xl p-4 text-center">
              <FaTrophy className="mx-auto text-2xl text-purple-600 mb-2" />

              <p className="text-xs uppercase text-gray-500">
                Current Phase
              </p>

              <h3 className="text-3xl font-bold text-purple-700">
                {codingStats.currentPhase}/13
              </h3>
            </div>

          </div>
        </div>

        {/* Difficulty Breakdown */}

        <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-6">

          <p className="text-xs uppercase tracking-[3px] text-green-600 font-bold">
            DIFFICULTY BREAKDOWN
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-2 mb-6">
            LeetCode Progress
          </h2>

          {/* Easy */}

          <div className="mb-5">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-green-700">Easy</span>

              <span>
                {codingStats.easySolved}/{codingStats.totalEasy}
              </span>
            </div>

            <div className="h-3 bg-green-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${easyPercentage}%` }}
              />
            </div>
          </div>

          {/* Medium */}

          <div className="mb-5">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-blue-700">Medium</span>

              <span>
                {codingStats.mediumSolved}/{codingStats.totalMedium}
              </span>
            </div>

            <div className="h-3 bg-blue-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${mediumPercentage}%` }}
              />
            </div>
          </div>

          {/* Hard */}

          <div className="mb-5">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-red-700">Hard</span>

              <span>
                {codingStats.hardSolved}/{codingStats.totalHard}
              </span>
            </div>

            <div className="h-3 bg-red-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 rounded-full"
                style={{ width: `${hardPercentage}%` }}
              />
            </div>
          </div>

          {/* Footer Card */}

          <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-5 text-white">

            <p className="text-green-100 text-sm">
              Placement Goal
            </p>

            <h2 className="text-4xl font-bold mt-2">
              450+
            </h2>

            <p className="text-green-100 text-sm mt-2">
              DSA Problems (Easy + Medium + Hard)
            </p>

            <div className="mt-4 text-sm bg-white/20 rounded-xl p-3">
              🎯 Solve at least **8 problems every week** to finish in **60 Days**.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingStats;