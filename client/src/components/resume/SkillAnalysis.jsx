const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
];

const SkillAnalysis = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Skills Detected
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-4
              py-2
              rounded-full
              bg-green-100
              text-green-700
              font-medium
            "
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
};

export default SkillAnalysis;