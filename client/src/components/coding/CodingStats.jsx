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

const safePercent = (value, total) => {
  if (!total || total <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((value / total) * 100)));
};

const CodingStats = () => {
  const dayPercentage = safePercent(
    codingStats.completedDays,
    codingStats.targetDays
  );

  const solvedPercentage = safePercent(
    codingStats.solvedProblems,
    codingStats.totalProblems
  );

  const easyPercentage = safePercent(
    codingStats.easySolved,
    codingStats.totalEasy
  );

  const mediumPercentage = safePercent(
    codingStats.mediumSolved,
    codingStats.totalMedium
  );

  const hardPercentage = safePercent(
    codingStats.hardSolved,
    codingStats.totalHard
  );

  const statsCards = [
    {
      title: "Total Problems",
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
      title: "Accuracy",
      value: "82%",
      subtitle: "Practice accuracy",
      icon: <FaBullseye />,
      bg: "from-purple-100 to-purple-50",
      iconBg: "bg-purple-600",
      text: "text-purple-700",
    },
    {
      title: "Current Streak",
      value: `${codingStats.currentStreak} Days`,
      subtitle: "Practice streak",
      icon: <FaFire />,
      bg: "from-orange-100 to-orange-50",
      iconBg: "bg-orange-500",
      text: "text-orange-700",
    },
  ];

  const difficultyStats = [
    {
      name: "Easy",
      solved: codingStats.easySolved,
      total: codingStats.totalEasy,
      percentage: easyPercentage,
      color: "bg-green-500",
      track: "bg-green-100",
      text: "text-green-700",
    },
    {
      name: "Medium",
      solved: codingStats.mediumSolved,
      total: codingStats.totalMedium,
      percentage: mediumPercentage,
      color: "bg-blue-500",
      track: "bg-blue-100",
      text: "text-blue-700",
    },
    {
      name: "Hard",
      solved: codingStats.hardSolved,
      total: codingStats.totalHard,
      percentage: hardPercentage,
      color: "bg-red-500",
      track: "bg-red-100",
      text: "text-red-700",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Statistics */}
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
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Stats
              </span>
            </div>

            <h2 className={`text-3xl font-bold mt-5 ${card.text}`}>
              {card.value}
            </h2>
            <p className="font-semibold text-gray-700 mt-2">{card.title}</p>
            <p className="text-sm text-gray-500">{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Progress and Difficulty */}
      <div className="grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-green-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs tracking-[3px] uppercase text-green-600 font-bold">
                Coding Journey
              </p>
              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                60-Day Placement Progress
              </h2>
            </div>
            <FaBullseye className="text-3xl text-green-600" />
          </div>

          <div className="mb-6">
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

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-2xl p-4 text-center">
              <FaCalendarCheck className="mx-auto text-2xl text-green-600 mb-2" />
              <p className="text-xs uppercase text-gray-500">Completed Days</p>
              <h3 className="text-3xl font-bold text-green-700">
                {codingStats.completedDays}
              </h3>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 text-center">
              <FaClock className="mx-auto text-2xl text-blue-600 mb-2" />
              <p className="text-xs uppercase text-gray-500">Target Days</p>
              <h3 className="text-3xl font-bold text-blue-700">
                {codingStats.targetDays}
              </h3>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <FaFire className="mx-auto text-2xl text-orange-500 mb-2" />
              <p className="text-xs uppercase text-gray-500">Current Streak</p>
              <h3 className="text-3xl font-bold text-orange-600">
                {codingStats.currentStreak}
              </h3>
            </div>

            <div className="bg-purple-50 rounded-2xl p-4 text-center">
              <FaTrophy className="mx-auto text-2xl text-purple-600 mb-2" />
              <p className="text-xs uppercase text-gray-500">Current Phase</p>
              <h3 className="text-3xl font-bold text-purple-700">
                {codingStats.currentPhase}/13
              </h3>
            </div>
          </div>
        </section>

        {/* Difficulty Breakdown */}
        <section className="bg-white rounded-3xl shadow-lg border border-green-100 p-6">
          <p className="text-xs uppercase tracking-[3px] text-green-600 font-bold">
            Difficulty Breakdown
          </p>
          <h2 className="text-xl font-bold text-gray-800 mt-2 mb-6">
            LeetCode Progress
          </h2>

          {difficultyStats.map((item) => (
            <div className="mb-5" key={item.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className={`font-semibold ${item.text}`}>
                  {item.name}
                </span>
                <span>
                  {item.solved}/{item.total}
                </span>
              </div>
              <div className={`h-3 ${item.track} rounded-full overflow-hidden`}>
                <div
                  className={`h-full ${item.color} rounded-full transition-all`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}

          <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-5 text-white">
            <p className="text-green-100 text-sm">Placement Goal</p>
            <h2 className="text-4xl font-bold mt-2">450+</h2>
            <p className="text-green-100 text-sm mt-2">
              Target DSA problems across Easy, Medium and Hard levels.
            </p>
            <div className="mt-4 text-sm bg-white/20 rounded-xl p-3">
              🎯 Maintain a consistent weekly coding practice routine.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CodingStats;

