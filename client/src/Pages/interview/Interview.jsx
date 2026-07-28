import {
  FaMicrophone,
  FaLaptopCode,
  FaUserTie,
  FaCode,
  FaServer,
  FaBrain,
} from "react-icons/fa";

import InterviewCard from "../../components/interview/InterviewCard";
import InterviewStats from "../../components/interview/InterviewStats";
import RecentInterviews from "../../components/interview/RecentInterviews";
import InterviewTips from "../../components/interview/InterviewTips";


const categories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    description: "React, HTML, CSS, JavaScript",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Backend",
    icon: <FaServer />,
    description: "Node.js, Express, APIs",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Java",
    icon: <FaCode />,
    description: "Core Java & OOP",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "HR Interview",
    icon: <FaUserTie />,
    description: "HR & Communication",
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "DSA",
    icon: <FaBrain />,
    description: "Coding & Problem Solving",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Mock Interview",
    icon: <FaMicrophone />,
    description: "AI Powered Interview",
    color: "bg-red-100 text-red-600",
  },
];


const Interview = () => {

  return (

    <div className="min-h-screen bg-gray-100 p-6">


      {/* Heading */}

      <div className="
        bg-white
        rounded-2xl
        shadow-sm
        p-8
        mb-8
      ">

        <h1 className="
          text-3xl
          font-bold
          text-gray-800
        ">
          AI Interview Dashboard
        </h1>


        <p className="
          text-gray-500
          mt-2
        ">
          Practice interviews with AI and improve your confidence.
        </p>


      </div>



      {/* Interview Statistics */}

      <InterviewStats />




      {/* Interview Categories */}

      <div className="mt-10">


        <h2 className="
          text-2xl
          font-semibold
          text-gray-800
          mb-6
        ">
          Interview Categories
        </h2>



        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">


          {
            categories.map((item, index) => (

              <InterviewCard

                key={index}

                title={item.title}

                icon={item.icon}

                description={item.description}

                color={item.color}

              />

            ))
          }


        </div>


      </div>





      {/* Recent Interviews */}

      <div className="mt-10">

        <RecentInterviews />

      </div>





      {/* AI Interview Tips */}

      <div className="mt-10">

        <InterviewTips />

      </div>



    </div>

  );

};


export default Interview;