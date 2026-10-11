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
          Education details and career objective for placement preparation.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-green-300 ml-4 space-y-8">

        {/* B.Tech */}
        <div className="relative pl-8">
          <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-md"></div>

          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            2023 – 2027
          </span>

          <h3 className="text-xl font-bold text-gray-800 mt-3">
            B.Tech – Computer Science & Engineering
          </h3>

          <div className="mt-3 space-y-3 text-gray-600">

            <div className="flex items-center gap-3">
              <FaBuildingColumns className="text-green-600" />
              <span>Maharana Pratap Group of Institutions (MPGI), Kanpur</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-green-600" />
              <span>Dr. A.P.J Abdul Kalam Technical University (AKTU)</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarDays className="text-green-600" />
              <span>Final Year • 7th Semester</span>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot className="text-green-600" />
              <span>Kanpur, Uttar Pradesh</span>
            </div>

          </div>
        </div>

        {/* Career Goal */}
        <div className="relative pl-8">
          <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md"></div>

          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            Career Objective
          </span>

          <h3 className="text-xl font-bold text-gray-800 mt-3">
            MERN Stack Developer & Cloud Data Engineer
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            Passionate about building full-stack web applications, AI-powered
            interview platforms and cloud-based solutions. Preparing for HCLTech,
            internships and software development roles.
          </p>
        </div>

        {/* Current Project */}
        <div className="relative pl-8">
          <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-purple-500 border-4 border-white shadow-md"></div>

          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
            Current Project
          </span>

          <div className="flex items-center gap-3 mt-3">
            <FaLaptopCode className="text-purple-600 text-xl" />

            <h3 className="text-xl font-bold text-gray-800">
              AI Interview Preparation Platform
            </h3>
          </div>

          <p className="text-gray-600 mt-3 leading-7">
            Building a complete MERN Stack project with AI Mock Interviews,
            Resume Analyzer, Coding Practice, Analytics Dashboard and Profile
            Management using React, Node.js, Express, MongoDB and Gemini AI.
          </p>
        </div>

      </div>

      {/* Achievement Section */}
      <div className="mt-10">

        <h3 className="text-2xl font-bold text-gray-800 mb-5">
          Academic Highlights
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-green-50 border border-green-100 rounded-2xl p-5 flex gap-4">
            <FaCircleCheck className="text-green-600 text-2xl mt-1" />

            <div>
              <h4 className="font-semibold text-gray-800">
                126+ Coding Problems Solved
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Java DSA, LeetCode and SQL practice.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4">
            <FaMedal className="text-blue-600 text-2xl mt-1" />

            <div>
              <h4 className="font-semibold text-gray-800">
                AI Mock Interview Practice
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Completed multiple AI interview sessions with performance tracking.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 flex gap-4">
            <FaLaptopCode className="text-purple-600 text-2xl mt-1" />

            <div>
              <h4 className="font-semibold text-gray-800">
                MERN Stack Project Development
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                React, Tailwind CSS, Node.js, Express and MongoDB based AI platform.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex gap-4">
            <FaGraduationCap className="text-orange-500 text-2xl mt-1" />

            <div>
              <h4 className="font-semibold text-gray-800">
                Placement Preparation
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Preparing for HCLTech, Cloud Data Engineer and Software Developer roles.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Info Card */}
      <div className="mt-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg">

        <p className="text-green-100 text-sm uppercase tracking-[3px]">
          Career Vision
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Building AI-Powered Software Solutions
        </h2>

        <p className="mt-3 text-green-100 leading-7">
          My goal is to become a Full Stack MERN Developer and Cloud Engineer by
          building real-world AI applications, improving DSA skills and gaining
          industry experience through internships and placements.
        </p>

      </div>

    </section>
  );
};

export default EducationCard;