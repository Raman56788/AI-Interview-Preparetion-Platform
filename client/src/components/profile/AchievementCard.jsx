import {
  FaTrophy,
  FaFire,
  FaCode,
  FaMicrophone,
  FaGithub,
  FaMedal,
  FaStar,
  FaArrowTrendUp,
  FaCircleCheck,
  FaLaptopCode,
} from "react-icons/fa6";

const achievements = [
  {
    title: "AI Mock Interviews Completed",
    value: "9 Interviews",
    description: "Completed AI-powered mock interviews with analytics.",
    icon: <FaMicrophone />,
    bg: "bg-green-50",
    iconBg: "from-green-500 to-emerald-600",
    text: "text-green-700",
  },
  {
    title: "Java + SQL DSA Practice",
    value: "126 Problems",
    description: "Solved Java, SQL and DSA problems on coding platforms.",
    icon: <FaCode />,
    bg: "bg-blue-50",
    iconBg: "from-blue-500 to-cyan-600",
    text: "text-blue-700",
  },
  {
    title: "Resume ATS Score",
    value: "88 / 100",
    description: "Optimized resume for software developer placements.",
    icon: <FaMedal />,
    bg: "bg-purple-50",
    iconBg: "from-purple-500 to-indigo-600",
    text: "text-purple-700",
  },
  {
    title: "Interview Practice Streak",
    value: "7 Days 🔥",
    description: "Maintained continuous interview preparation streak.",
    icon: <FaFire />,
    bg: "bg-orange-50",
    iconBg: "from-orange-400 to-red-500",
    text: "text-orange-700",
  },
];

const projectStats = [
  { title: "MERN Project", value: "AI Interview Platform" },
  { title: "GitHub Repository", value: "Raman56788" },
  { title: "Frontend Progress", value: "95%" },
  { title: "Backend Progress", value: "85%" },
];

const AchievementCard = () => {
  return (
    <section className="bg-white rounded-[28px] border border-green-100 shadow-xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
            ACHIEVEMENTS & MILESTONES
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-1">
            Career Achievements
          </h2>

          <p className="text-gray-500 mt-2">
            Your learning milestones, coding journey and AI interview progress.
          </p>
        </div>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
          <FaTrophy />
          Top Performer
        </div>
      </div>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-3xl border border-white p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex justify-between items-start">

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.iconBg}
                text-white flex items-center justify-center text-2xl shadow-lg`}
              >
                {item.icon}
              </div>

              <FaStar className="text-yellow-400 text-xl" />

            </div>

            <h3 className={`text-2xl font-bold mt-5 ${item.text}`}>
              {item.value}
            </h3>

            <p className="font-semibold text-gray-800 mt-2">
              {item.title}
            </p>

            <p className="text-gray-500 text-sm mt-2 leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* MERN Project Progress */}
      <div className="mt-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg">

        <div className="flex items-center gap-3 mb-5">
          <FaLaptopCode className="text-2xl" />

          <h2 className="text-2xl font-bold">
            AI Interview Preparation Platform
          </h2>
        </div>

        <p className="text-green-100 leading-7">
          Full Stack MERN Project with AI Mock Interviews, Resume Analyzer,
          Coding Practice, Analytics Dashboard and Profile Management.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {projectStats.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
            >
              <p className="text-green-100 text-sm">{item.title}</p>

              <h3 className="text-xl font-bold mt-2">{item.value}</h3>
            </div>
          ))}
        </div>

      </div>

      {/* GitHub & Coding Summary */}
      <div className="grid lg:grid-cols-2 gap-6 mt-10">

        {/* GitHub */}
        <div className="bg-green-50 rounded-3xl border border-green-100 p-6">

          <div className="flex items-center gap-3 mb-4">
            <FaGithub className="text-3xl text-green-700" />

            <h3 className="text-xl font-bold text-gray-800">
              GitHub Activity
            </h3>
          </div>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-gray-600">Username</span>

              <span className="font-bold text-green-700">
                Raman56788
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Main Project</span>

              <span className="font-bold text-gray-800">
                AI Interview Platform
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Tech Stack</span>

              <span className="font-bold text-gray-800">
                MERN + Gemini AI
              </span>
            </div>

          </div>

        </div>

        {/* Coding Journey */}
        <div className="bg-blue-50 rounded-3xl border border-blue-100 p-6">

          <div className="flex items-center gap-3 mb-4">
            <FaArrowTrendUp className="text-3xl text-blue-600" />

            <h3 className="text-xl font-bold text-gray-800">
              Coding Journey
            </h3>
          </div>

          {[
            { skill: "Java DSA", value: 85 },
            { skill: "SQL Practice", value: 80 },
            { skill: "React Development", value: 92 },
            { skill: "Python Basics", value: 75 },
          ].map((item) => (
            <div key={item.skill} className="mb-5">

              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">
                  {item.skill}
                </span>

                <span className="font-bold text-blue-600">
                  {item.value}%
                </span>
              </div>

              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Milestone Timeline */}
      <div className="mt-10">

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Learning Milestones
        </h3>

        <div className="space-y-5">

          {[
            "Built AI Interview Preparation Platform using MERN Stack.",
            "Completed 126+ Java & SQL coding problems.",
            "Improved Resume ATS Score to 88%.",
            "Completed AI Mock Interview Dashboard & Analytics Module.",
            "Preparing for HCLTech & Software Developer Placements.",
          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-start">

              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md">
                <FaCircleCheck />
              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex-1">
                <p className="font-medium text-gray-700">{item}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AchievementCard;