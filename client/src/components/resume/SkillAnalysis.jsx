import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

import {
  FaBrain,
  FaCode,
  FaTriangleExclamation,
} from "react-icons/fa6";

// ---------------- Skill Icons ----------------
const getSkillIcon = (skill) => {
  const name = skill.toLowerCase();

  if (name.includes("react"))
    return <FaReact className="text-sky-500 text-2xl" />;

  if (name.includes("javascript"))
    return <FaJs className="text-yellow-500 text-2xl" />;

  if (name.includes("java"))
    return <FaJava className="text-orange-500 text-2xl" />;

  if (name.includes("python"))
    return <FaPython className="text-blue-500 text-2xl" />;

  if (name.includes("html"))
    return <FaHtml5 className="text-orange-600 text-2xl" />;

  if (name.includes("css"))
    return <FaCss3Alt className="text-blue-600 text-2xl" />;

  if (name.includes("node"))
    return <FaNodeJs className="text-green-600 text-2xl" />;

  if (
    name.includes("mongo") ||
    name.includes("sql") ||
    name.includes("database")
  )
    return <FaDatabase className="text-green-700 text-2xl" />;

  if (name.includes("express"))
    return <FaCode className="text-gray-700 text-2xl" />;

  return <FaCheckCircle className="text-green-600 text-2xl" />;
};

// ---------------- Component ----------------
const SkillAnalysis = ({ resumeData }) => {
  // Gemini Skills
  const aiSkills = resumeData?.skills || [];

  // Missing Keywords
  const missingKeywords = resumeData?.missingKeywords || [];

  // Dynamic Skill Level
  const skills = aiSkills.map((skill, index) => ({
    name: skill,
    icon: getSkillIcon(skill),
    level: Math.max(95 - index * 4, 70),
  }));

  const averageMatch =
    skills.length > 0
      ? Math.round(
          skills.reduce((sum, item) => sum + item.level, 0) / skills.length
        )
      : 0;

  return (
    <div className="bg-white rounded-[30px] border border-green-100 shadow-xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
            AI SKILL ANALYSIS
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-1">
            Skills Detected
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Technologies identified from your resume using Gemini AI.
          </p>
        </div>

        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
          <FaBrain className="text-green-600 text-xl" />
        </div>
      </div>

      {/* No Skills */}
      {skills.length === 0 ? (
        <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-8 text-center">
          <FaBrain className="mx-auto text-4xl text-gray-400 mb-3" />

          <p className="text-gray-500 font-medium">
            Upload and analyze a resume to see detected skills.
          </p>
        </div>
      ) : (
        <>
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-2xl p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center">
                    {skill.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-green-600 font-medium">
                      AI Detected
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Match Score</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ATS Keywords Found */}
          <div className="bg-green-50 rounded-2xl border border-green-100 p-5 mb-6">
            <h3 className="font-bold text-green-700 flex items-center gap-2 mb-4">
              <FaCheckCircle />
              ATS Keywords Found ({skills.length})
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 rounded-full bg-white border border-green-200 text-sm font-medium text-green-700 hover:bg-green-100 transition"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Keywords */}
          <div className="bg-red-50 rounded-2xl border border-red-100 p-5">
            <h3 className="font-bold text-red-700 flex items-center gap-2 mb-4">
              <FaTriangleExclamation />
              Missing ATS Keywords ({missingKeywords.length})
            </h3>

            {missingKeywords.length === 0 ? (
              <p className="text-green-700 font-medium">
                🎉 No important keywords are missing.
              </p>
            ) : (
              <div className="flex flex-wrap gap-3">
                {missingKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-4 py-2 rounded-full bg-white border border-red-200 text-sm font-medium text-red-700 hover:bg-red-100 transition"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Summary */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-green-50 rounded-2xl border border-green-100 p-4 text-center">
              <FaChartLine className="mx-auto text-green-600 text-xl mb-2" />

              <p className="text-xs text-gray-500">Detected Skills</p>

              <h3 className="text-2xl font-bold text-green-700">
                {skills.length}
              </h3>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4 text-center">
              <FaBrain className="mx-auto text-blue-600 text-xl mb-2" />

              <p className="text-xs text-gray-500">Average Match</p>

              <h3 className="text-2xl font-bold text-blue-700">
                {averageMatch}%
              </h3>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default SkillAnalysis;