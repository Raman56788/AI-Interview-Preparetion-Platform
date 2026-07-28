import {
  FaMicrophone,
  FaStar,
  FaClock,
  FaTrophy,
} from "react-icons/fa";

const stats = [
  {
    title: "Interviews",
    value: "24",
    icon: <FaMicrophone />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Average Score",
    value: "89%",
    icon: <FaStar />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Practice Hours",
    value: "52h",
    icon: <FaClock />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Global Rank",
    value: "#24",
    icon: <FaTrophy />,
    color: "bg-purple-100 text-purple-600",
  },
];

const InterviewStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm p-6"
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color}`}
          >
            {item.icon}
          </div>

          <h3 className="text-gray-500 mt-4">
            {item.title}
          </h3>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InterviewStats;