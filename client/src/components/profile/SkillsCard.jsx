const skills = [
  "Java",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST API",
  "DSA",
  "SQL",
];

const SkillsCard = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Technical Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (

          <span
            key={skill}
            className="
              bg-green-100
              text-green-700
              px-4
              py-2
              rounded-full
              text-sm
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

export default SkillsCard;