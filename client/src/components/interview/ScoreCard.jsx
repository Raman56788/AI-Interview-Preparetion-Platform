import { FaArrowUp, FaStar } from "react-icons/fa";

const colorMap = {
  green: {
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    text: "text-green-600",
    bar: "bg-green-500",
  },
  blue: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    text: "text-blue-600",
    bar: "bg-blue-500",
  },
  purple: {
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    text: "text-purple-600",
    bar: "bg-purple-500",
  },
  orange: {
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    text: "text-orange-600",
    bar: "bg-orange-500",
  },
};

const ScoreCard = ({ title, score, color = "green", icon }) => {
  const theme = colorMap[color];

  const getRemark = () => {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Very Good";
    if (score >= 60) return "Good";
    return "Needs Improvement";
  };

  return (
    <div
      className={`${theme.bg} rounded-3xl shadow-md p-6 hover:shadow-xl transition duration-300`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center mb-5">
        <div
          className={`${theme.iconBg} w-14 h-14 rounded-full flex items-center justify-center text-2xl ${theme.text}`}
        >
          {icon || <FaStar />}
        </div>

        <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
          <FaArrowUp />
          +5%
        </div>
      </div>

      {/* Title */}
      <p className="text-gray-500 text-sm">{title}</p>

      {/* Score */}
      <h2 className={`text-5xl font-bold mt-2 ${theme.text}`}>
        {score}
        <span className="text-2xl">%</span>
      </h2>

      {/* Progress Bar */}
      <div className="mt-5">
        <div className="w-full bg-white rounded-full h-3 overflow-hidden">
          <div
            className={`${theme.bar} h-3 rounded-full transition-all duration-700`}
            style={{ width: `${score}%` }}
          />
        </div>

        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Performance Badge */}
      <div className="mt-5 flex justify-between items-center">
        <span
          className={`${theme.iconBg} ${theme.text} px-3 py-1 rounded-full text-sm font-semibold`}
        >
          {getRemark()}
        </span>

        <span className="text-gray-400 text-xs">
          AI Performance Score
        </span>
      </div>
    </div>
  );
};

export default ScoreCard;