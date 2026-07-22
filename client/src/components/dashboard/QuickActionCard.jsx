import { Link } from "react-router-dom";

const QuickActionCard = ({
  title,
  description,
  icon,
  to,
  color = "green",
}) => {
  const colors = {
    green: "bg-green-500 hover:bg-green-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    purple: "bg-purple-500 hover:bg-purple-600",
  };

  return (
    <Link
      to={to}
      className="block rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl ${colors[color]}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-gray-800">
        {title}
      </h3>

      <p className="mt-2 text-gray-500 text-sm">
        {description}
      </p>
    </Link>
  );
};

export default QuickActionCard;