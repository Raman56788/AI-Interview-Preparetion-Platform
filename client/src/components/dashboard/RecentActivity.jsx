import {
  FaCircleCheck,
  FaMicrophone,
  FaFileLines,
  FaCode,
  FaDatabase,
  FaArrowRight,
  FaClock,
  FaFire,
  FaChartLine,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "Frontend Developer AI Interview Completed",
    description:
      "React, JavaScript and HTML/CSS interview completed successfully.",
    time: "Today • 2 Hours Ago",
    score: 95,
    icon: <FaMicrophone />,
    bg: "from-green-100 to-green-50",
    iconBg: "bg-green-500",
    badge: "Excellent",
  },
  {
    id: 2,
    title: "Resume ATS Analysis Completed",
    description: "Resume ATS score improved after AI optimization.",
    time: "Yesterday",
    score: 88,
    icon: <FaFileLines />,
    bg: "from-blue-100 to-blue-50",
    iconBg: "bg-blue-500",
    badge: "Improved",
  },
  {
    id: 3,
    title: "Java DSA Coding Practice",
    description:
      "Sliding Window and Two Pointer interview questions solved.",
    time: "2 Days Ago",
    score: 84,
    icon: <FaCode />,
    bg: "from-purple-100 to-purple-50",
    iconBg: "bg-purple-500",
    badge: "Practice",
  },
  {
    id: 4,
    title: "SQL Mock Interview Finished",
    description: "DBMS, JOINs and Subqueries interview completed.",
    time: "3 Days Ago",
    score: 90,
    icon: <FaDatabase />,
    bg: "from-orange-100 to-orange-50",
    iconBg: "bg-orange-500",
    badge: "Completed",
  },
];

const RecentActivity = () => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-green-100 bg-gradient-to-br from-white via-green-50/40 to-white p-7 shadow-xl">

      {/* Decorative Blur */}
      <div className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-green-200 blur-3xl opacity-30"></div>

      {/* Header */}
      <div className="relative mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <span className="rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-green-700">
            Activity Timeline
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-800">
            Recent Activity
          </h2>

          <p className="mt-2 text-gray-500">
            Your latest AI interview preparation journey, resume analysis and
            coding practice history.
          </p>
        </div>

        <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3 text-green-700">
            <FaFire className="text-xl" />
            <div>
              <p className="text-xs text-green-600">Weekly Activity</p>
              <h4 className="font-bold">4 Tasks Completed</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">

        <div className="absolute left-5 top-0 h-full w-[2px] bg-green-200"></div>

        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex gap-5">

              {/* Timeline Icon */}
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
                <FaCircleCheck />
              </div>

              {/* Activity Card */}
              <div
                className={`flex-1 rounded-3xl bg-gradient-to-r ${activity.bg} border border-green-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Left */}
                  <div className="flex gap-4">

                    <div
                      className={`h-14 w-14 ${activity.iconBg} flex items-center justify-center rounded-2xl text-xl text-white shadow-md`}
                    >
                      {activity.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {activity.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {activity.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <FaClock className="text-green-600" />
                        {activity.time}
                      </div>
                    </div>

                  </div>

                  {/* Right */}
                  <div className="flex flex-col items-start gap-3 lg:items-end">

                    <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-green-700 shadow">
                      {activity.score}% Score
                    </span>

                    <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                      {activity.badge}
                    </span>

                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Weekly Summary */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Interviews</p>
            <FaMicrophone className="text-green-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-green-700">09</h3>
          <p className="mt-2 text-xs text-green-600">+2 This Week</p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Average Score</p>
            <FaChartLine className="text-blue-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-blue-700">89%</h3>
          <p className="mt-2 text-xs text-blue-600">+6% Improvement</p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Resume ATS</p>
            <FaFileLines className="text-purple-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-purple-700">88%</h3>
          <p className="mt-2 text-xs text-purple-600">ATS Optimized</p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Coding Problems</p>
            <FaCode className="text-orange-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-orange-600">126</h3>
          <p className="mt-2 text-xs text-orange-600">Java + SQL + React</p>
        </div>

      </div>

      {/* Footer Button */}
      <div className="mt-8">
        <Link
          to="/analytics"
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-emerald-700 hover:shadow-xl"
        >
          View Complete Interview History
          <FaArrowRight />
        </Link>
      </div>

    </section>
  );
};

export default RecentActivity;