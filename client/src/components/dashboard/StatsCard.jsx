import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const colorMap = {
  green: {
    bg: "from-green-50 to-emerald-50",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconText: "text-green-600",
    valueText: "text-green-700",
    badge: "bg-green-100 text-green-700",
  },
  blue: {
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    valueText: "text-blue-700",
    badge: "bg-blue-100 text-blue-700",
  },
  purple: {
    bg: "from-purple-50 to-pink-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    valueText: "text-purple-700",
    badge: "bg-purple-100 text-purple-700",
  },
  orange: {
    bg: "from-orange-50 to-yellow-50",
    border: "border-orange-200",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    valueText: "text-orange-700",
    badge: "bg-orange-100 text-orange-700",
  },
};

const StatsCard = ({
  title,
  value,
  subtitle,
  icon,
  color = "green",
}) => {
  const style = colorMap[color];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border ${style.border}
      bg-gradient-to-br ${style.bg}
      p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Decorative Background */}
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/50 rounded-full blur-xl"></div>

      <div className="relative flex justify-between items-start">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${style.valueText}`}>
            {value}
          </h2>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mt-4 ${style.badge}`}
          >
            <FaArrowTrendUp className="text-xs" />
            {subtitle}
          </div>
        </div>

        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${style.iconBg} ${style.iconText}`}
        >
          {icon}
        </div>
      </div>

      {/* Bottom Progress Line */}
      <div className="mt-6 h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
          style={{
            width:
              color === "green"
                ? "92%"
                : color === "blue"
                ? "88%"
                : color === "purple"
                ? "84%"
                : "80%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default StatsCard;