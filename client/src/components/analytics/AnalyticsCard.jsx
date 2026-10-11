const AnalyticsCard = ({ title, value, icon, color, change }) => {
  const styles = {
    green: {
      bg: "from-green-500 to-emerald-600",
      light: "bg-green-500/10",
      text: "text-green-400",
      border: "border-green-500/30",
      shadow: "shadow-green-500/20",
    },

    blue: {
      bg: "from-blue-500 to-cyan-500",
      light: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/30",
      shadow: "shadow-blue-500/20",
    },

    purple: {
      bg: "from-purple-500 to-pink-500",
      light: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/30",
      shadow: "shadow-purple-500/20",
    },

    orange: {
      bg: "from-orange-500 to-yellow-500",
      light: "bg-orange-500/10",
      text: "text-orange-400",
      border: "border-orange-500/30",
      shadow: "shadow-orange-500/20",
    },
  };

  const style = styles[color];

  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        bg-gradient-to-br from-gray-900 to-black
        border ${style.border}
        p-6
        shadow-xl ${style.shadow}
        transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.02]
      `}
    >
      {/* Glow */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl ${style.light}`}
      />

      {/* Icon */}
      <div
        className={`
          w-14 h-14 rounded-2xl
          bg-gradient-to-br ${style.bg}
          flex items-center justify-center
          text-white text-2xl shadow-lg
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <p className="text-gray-400 text-sm mt-5">{title}</p>

      {/* Value */}
      <h2 className="text-4xl font-bold text-white mt-2">{value}</h2>

      {/* Change */}
      <div className="flex items-center justify-between mt-5">
        <span
          className={`
            px-3 py-1 rounded-full text-xs font-semibold
            ${style.light} ${style.text}
          `}
        >
          {change}
        </span>

        <span className={`${style.text} text-lg`}>↗</span>
      </div>
    </div>
  );
};

export default AnalyticsCard;