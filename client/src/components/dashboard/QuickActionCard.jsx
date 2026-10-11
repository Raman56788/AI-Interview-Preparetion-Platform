import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const colorMap = {
  green: {
    bg: "from-green-50 to-emerald-50",
    border: "border-green-200",
    iconBg: "bg-green-500",
    text: "text-green-700",
    button: "bg-green-600 hover:bg-green-700",
  },
  blue: {
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
    iconBg: "bg-blue-500",
    text: "text-blue-700",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  purple: {
    bg: "from-purple-50 to-pink-50",
    border: "border-purple-200",
    iconBg: "bg-purple-500",
    text: "text-purple-700",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  orange: {
    bg: "from-orange-50 to-yellow-50",
    border: "border-orange-200",
    iconBg: "bg-orange-500",
    text: "text-orange-700",
    button: "bg-orange-600 hover:bg-orange-700",
  },
};

const QuickActionCard = ({
  title,
  description,
  icon,
  to,
  color = "green",
}) => {
  const style = colorMap[color];

  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-3xl border ${style.border}
      bg-gradient-to-br ${style.bg}
      p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
    >
      {/* Decorative Background */}
      <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/40 rounded-full blur-2xl"></div>

      {/* Icon */}
      <div
        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg ${style.iconBg}`}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative mt-6">
        <h3 className={`text-xl font-bold ${style.text}`}>
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-6 mt-2">
          {description}
        </p>
      </div>

      {/* Bottom Button */}
      <div className="relative mt-8 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-500">
          Open Module
        </span>

        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow-md ${style.button}
          group-hover:translate-x-1 transition`}
        >
          <FaArrowRight />
        </div>
      </div>

      {/* Bottom Progress Line */}
      <div className="mt-5 h-1.5 w-full rounded-full bg-white overflow-hidden">
        <div
          className={`h-full rounded-full ${
            color === "green"
              ? "bg-green-500 w-full"
              : color === "blue"
              ? "bg-blue-500 w-4/5"
              : color === "purple"
              ? "bg-purple-500 w-3/4"
              : "bg-orange-500 w-2/3"
          }`}
        ></div>
      </div>
    </Link>
  );
};

export default QuickActionCard;