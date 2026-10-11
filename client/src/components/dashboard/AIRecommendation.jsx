import {
  FaRobot,
  FaArrowRight,
  FaReact,
  FaJava,
  FaDatabase,
  FaLightbulb,
  FaChartLine,
  FaCircleCheck,
} from "react-icons/fa6";

const AIRecommendation = () => {
  const recommendations = [
    {
      title: "React Hooks Practice",
      description: "Improve useState, useEffect, useContext and custom hooks.",
      icon: <FaReact />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Java + DSA Revision",
      description: "Solve Arrays, Strings, Sliding Window and DP problems.",
      icon: <FaJava />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "SQL & DBMS Interview",
      description: "Practice JOINs, Subqueries, Normalization and Queries.",
      icon: <FaDatabase />,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white rounded-[28px] border border-green-100 shadow-xl p-6">

      {/* Background Decoration */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-60"></div>

      {/* ================= HEADER ================= */}
      <div className="relative flex items-center gap-4 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl shadow-lg">
          <FaRobot />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-green-600 font-semibold">
            Gemini AI Assistant
          </p>

          <h2 className="text-2xl font-bold text-gray-800">
            Personalized Recommendation
          </h2>

          <p className="text-sm text-gray-500">
            AI suggestions based on your interview history.
          </p>
        </div>

      </div>

      {/* ================= AI INSIGHT CARD ================= */}
      <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg mb-6">

        <div className="flex items-center gap-3 mb-3">
          <FaChartLine className="text-yellow-300 text-xl" />

          <span className="text-sm font-semibold uppercase tracking-wide">
            AI Performance Insight
          </span>
        </div>

        <h3 className="text-2xl font-bold">
          Your React performance improved by 15%
        </h3>

        <p className="mt-3 text-green-100 leading-6">
          Excellent improvement in Frontend Development interviews. Continue
          practicing SQL, DBMS and Java DSA to increase your overall placement
          score above <strong>95%</strong>.
        </p>

        <div className="mt-5 flex items-center gap-3 bg-white/20 rounded-xl px-4 py-3">
          <FaLightbulb className="text-yellow-300 text-xl" />

          <p className="text-sm">
            AI predicts your strongest area is <strong>React UI</strong>.
          </p>
        </div>

      </div>

      {/* ================= RECOMMENDED PRACTICE ================= */}
      <div className="mb-6">

        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Recommended Practice This Week
        </h3>

        <div className="space-y-4">

          {recommendations.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-2xl p-4 hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color}`}
              >
                {item.icon}
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>

              <FaCircleCheck className="text-green-500 text-lg mt-2" />
            </div>
          ))}

        </div>

      </div>

      {/* ================= SKILL IMPROVEMENT ================= */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-green-50 rounded-2xl border border-green-100 p-4">
          <p className="text-sm text-gray-500">Focus Area</p>

          <h3 className="text-lg font-bold text-green-700 mt-1">
            SQL + DBMS
          </h3>

          <div className="w-full h-2 bg-green-100 rounded-full mt-3">
            <div className="h-2 bg-green-500 rounded-full w-4/5"></div>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            80% Recommended Practice
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4">
          <p className="text-sm text-gray-500">Strongest Skill</p>

          <h3 className="text-lg font-bold text-blue-700 mt-1">
            React + Frontend
          </h3>

          <div className="w-full h-2 bg-blue-100 rounded-full mt-3">
            <div className="h-2 bg-blue-500 rounded-full w-[95%]"></div>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            95% Performance Score
          </p>
        </div>

      </div>

      {/* ================= ACTION BUTTON ================= */}
      <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition duration-300 shadow-lg hover:shadow-xl">
        Start Recommended Practice
        <FaArrowRight />
      </button>

    </div>
  );
};

export default AIRecommendation;