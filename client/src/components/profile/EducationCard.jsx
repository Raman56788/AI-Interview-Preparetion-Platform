import {
  FaGraduationCap,
  FaBuildingColumns,
  FaLocationDot,
  FaCalendarDays,
  FaLaptopCode,
  FaMedal,
  FaCircleCheck,
} from "react-icons/fa6";

const EducationCard = () => {
  const highlights = [
    {
      title: "Java DSA & Coding Practice",
      description:
        "Practicing Java, data structures, algorithms and SQL problems.",
      icon: <FaCircleCheck />,
      style: "bg-green-50 border-green-100 text-green-600",
    },
    {
      title: "AI Mock Interview Practice",
      description:
        "Developing interview preparation and performance tracking features.",
      icon: <FaMedal />,
      style: "bg-blue-50 border-blue-100 text-blue-600",
    },
    {
      title: "MERN Stack Project",
      description:
        "Building an AI interview platform using React, Node.js, Express and MongoDB.",
      icon: <FaLaptopCode />,
      style: "bg-purple-50 border-purple-100 text-purple-600",
    },
    {
      title: "Placement Preparation",
      description:
        "Preparing for software developer, web developer and cloud-related roles.",
      icon: <FaGraduationCap />,
      style: "bg-orange-50 border-orange-100 text-orange-500",
    },
  ];

  return (
    <section className="bg-white rounded-[28px] border border-green-100 shadow-xl p-6">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
          EDUCATION & CAREER
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          Academic Journey
        </h2>

        <p className="text-gray-500 mt-2">
          Education details, academic highlights and career objectives.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative border-l-2 border-green-300 ml-4 space-y-8">
        <div className="relative pl-8">
          <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-md" />

          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            B.Tech
          </span>

          <h3 className="text-xl font-bold text-gray-800 mt-3">
            B.Tech – Computer Science & Engineering
          </h3>

          <div className="mt-3 space-y-3 text-gray-600">
            <div className="flex items-start gap-3">
              <FaBuildingColumns className="text-green-600 mt-1 shrink-0" />
              <span>
                Maharana Pratap Group of Institutions (MPGI), Kanpur
              </span>
            </div>

            <div className="flex items-start gap-3">
              <FaGraduationCap className="text-green-600 mt-1 shrink-0" />
              <span>
                Dr. A.P.J. Abdul Kalam Technical University (AKTU)
              </span>
            </div>

            <div className="flex items-start gap-3">
              <FaCalendarDays className="text-green-600 mt-1 shrink-0" />
              <span>Final Year • 7th Semester</span>
            </div>

            <div className="flex items-start gap-3">
              <FaLocationDot className="text-green-600 mt-1 shrink-0" />
              <span>Kanpur, Uttar Pradesh</span>
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div className="relative pl-8">
          <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md" />

          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            Career Objective
          </span>

          <h3 className="text-xl font-bold text-gray-800 mt-3">
            Software Developer / MERN Stack Developer
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            Interested in building web applications and AI-powered software
            solutions. Focused on improving Java DSA, React development,
            SQL and full-stack development skills while preparing for
            internships and software development opportunities.
          </p>
        </div>

        {/* Current Project */}
        <div className="relative pl-8">
          <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-purple-500 border-4 border-white shadow-md" />

          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
            Current Project
          </span>

          <div className="flex items-start gap-3 mt-3">
            <FaLaptopCode className="text-purple-600 text-xl mt-1 shrink-0" />

            <h3 className="text-xl font-bold text-gray-800">
              AI Interview Preparation Platform
            </h3>
          </div>

          <p className="text-gray-600 mt-3 leading-7">
            A MERN stack project featuring AI Mock Interviews, Resume
            Analyzer, Coding Practice, Analytics Dashboard and Profile
            Management, with Gemini AI integration for interview questions
            and basic feedback.
          </p>
        </div>
      </div>

      {/* Academic Highlights */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-5">
          Academic & Technical Highlights
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`border rounded-2xl p-5 flex gap-4 ${item.style}`}
            >
              <div className="text-2xl mt-1 shrink-0">{item.icon}</div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Vision */}
      <div className="mt-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg">
        <p className="text-green-100 text-sm uppercase tracking-[3px]">
          Career Vision
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Building Practical Software Solutions
        </h2>

        <p className="mt-3 text-green-100 leading-7">
          My goal is to become a skilled software developer by building
          real-world projects, strengthening problem-solving skills and
          gaining industry experience through internships and placements.
        </p>
      </div>
    </section>
  );
};

export default EducationCard;

