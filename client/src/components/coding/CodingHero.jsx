import {
  FaCode,
  FaFire,
  FaTrophy,
  FaLaptopCode,
  FaJava,
  FaBrain,
  FaCalendarCheck,
  FaArrowTrendUp,
} from "react-icons/fa6";

const CodingHero = () => {
  const stats = [
    {
      title: "450+ Problems",
      subtitle: "Easy • Medium • Hard",
      icon: <FaCode className="text-green-600 text-2xl" />,
      bg: "bg-green-100",
    },
    {
      title: "13 Learning Phases",
      subtitle: "Basics → Advanced",
      icon: <FaBrain className="text-blue-600 text-2xl" />,
      bg: "bg-blue-100",
    },
    {
      title: "60-Day Plan",
      subtitle: "Placement Preparation",
      icon: <FaCalendarCheck className="text-purple-600 text-2xl" />,
      bg: "bg-purple-100",
    },
    {
      title: "HCLTech Focus",
      subtitle: "Java + SQL + DSA",
      icon: <FaLaptopCode className="text-orange-600 text-2xl" />,
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="rounded-[32px] bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white overflow-hidden shadow-xl relative">

      {/* Background Blur */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full blur-2xl"></div>

      <div className="relative p-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-5">
          <FaFire />
          Coding Practice Module
        </div>

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          DSA & LeetCode Master Roadmap
        </h1>

        <p className="mt-4 text-green-100 text-lg max-w-3xl leading-8">
          Practice 450+ interview coding problems in Java, track your daily
          progress, prepare company-wise questions, and become placement-ready
          for HCLTech, TCS, Infosys, Accenture, Josh Technology and SDE roles.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition">
            Start Day 1 Roadmap
          </button>

          <button className="border border-white/40 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-white/20 transition">
            View 60-Day Plan
          </button>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 text-gray-800 shadow-lg hover:scale-[1.03] transition"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center`}
              >
                {item.icon}
              </div>

              <h3 className="font-bold text-lg mt-4">{item.title}</h3>

              <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Progress Strip */}
        <div className="mt-10 bg-white/15 rounded-3xl p-5 backdrop-blur-md border border-white/20">
          <div className="flex flex-wrap justify-between items-center gap-5">

            <div>
              <p className="text-sm text-green-100">Overall DSA Journey</p>

              <h2 className="text-2xl font-bold mt-1 flex items-center gap-2">
                <FaArrowTrendUp />
                0% Completed
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <FaJava />
              Java Interview Track
            </div>

            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <FaTrophy />
              Placement Target 2027
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-5">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>0 / 450 Problems</span>
            </div>

            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="bg-white h-full rounded-full w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingHero;