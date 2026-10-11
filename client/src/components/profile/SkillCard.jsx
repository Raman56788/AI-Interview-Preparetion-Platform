import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    progress: 92,
    icon: <FaReact />,
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-50",
  },
  {
    name: "JavaScript",
    progress: 90,
    icon: <FaJs />,
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
  },
  {
    name: "Java + DSA",
    progress: 85,
    icon: <FaJava />,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    name: "SQL / DBMS",
    progress: 82,
    icon: <FaDatabase />,
    color: "from-purple-500 to-fuchsia-600",
    bg: "bg-purple-50",
  },
  {
    name: "Python",
    progress: 78,
    icon: <FaPython />,
    color: "from-sky-500 to-cyan-600",
    bg: "bg-sky-50",
  },
  {
    name: "MongoDB",
    progress: 80,
    icon: <SiMongodb />,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
  },
];

const technologies = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
];

const SkillCard = () => {
  return (
    <section className="bg-white rounded-[28px] border border-green-100 shadow-xl p-6">

      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
          TECH STACK
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          Technical Skills
        </h2>

        <p className="text-gray-500 mt-2">
          Skills used in MERN Stack Development and AI Interview Platform.
        </p>
      </div>

      {/* Progress Skills */}
      <div className="space-y-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`${skill.bg} rounded-2xl border border-white p-4 hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex justify-between items-center mb-3">

              <div className="flex items-center gap-3">

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color}
                  flex items-center justify-center text-white text-xl shadow`}
                >
                  {skill.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    Intermediate to Advanced
                  </p>
                </div>

              </div>

              <span className="text-lg font-bold text-green-700">
                {skill.progress}%
              </span>

            </div>

            {/* Progress Bar */}
            <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>

      {/* Technology Badges */}
      <div className="mt-10">

        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Tools & Technologies
        </h3>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 hover:bg-green-100 transition"
            >
              <span className={`text-lg ${tech.color}`}>
                {tech.icon}
              </span>

              <span className="text-sm font-medium text-gray-700">
                {tech.name}
              </span>

            </div>
          ))}
        </div>

      </div>

      {/* Strength Summary */}
      <div className="grid md:grid-cols-2 gap-4 mt-10">

        <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-5 text-white">
          <p className="text-green-100 text-sm">Strongest Skill</p>

          <h2 className="text-2xl font-bold mt-2">
            React.js & Frontend Development
          </h2>

          <p className="text-green-100 text-sm mt-3">
            High confidence in building responsive UI with React, Tailwind CSS and JavaScript.
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
          <p className="text-sm text-gray-500">Currently Learning</p>

          <h2 className="text-2xl font-bold text-green-700 mt-2">
            Cloud + SQL Optimization
          </h2>

          <p className="text-gray-500 text-sm mt-3">
            Preparing SQL, DBMS and Cloud concepts for HCLTech and placement interviews.
          </p>
        </div>

      </div>

    </section>
  );
};

export default SkillCard;