const projects = [
  {
    title: "AI Interview Preparation Platform",
    tech: "React, Node.js, Express.js, MongoDB",
    description:
      "AI-powered interview preparation platform with mock interviews, resume analyzer, coding practice, analytics, and dashboard.",
  },
  {
    title: "E-Commerce Platform",
    tech: "React, Node.js, Express.js, MongoDB",
    description:
      "Full-stack e-commerce application with authentication, product management, cart, wishlist, orders, and payment workflow.",
  },
];

const ProjectsCard = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Projects
      </h2>

      <div className="space-y-5">

        {projects.map((project, index) => (

          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
          >

            <h3 className="text-lg font-semibold text-gray-800">
              {project.title}
            </h3>

            <p className="text-green-600 text-sm mt-1">
              {project.tech}
            </p>

            <p className="text-gray-600 mt-3">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

};

export default ProjectsCard;