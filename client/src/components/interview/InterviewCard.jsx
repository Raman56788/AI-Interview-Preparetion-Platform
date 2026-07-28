const InterviewCard = ({
  title,
  icon,
  description,
  color,
}) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-6
        hover:shadow-lg
        transition
        cursor-pointer
      "
    >
      <div
        className={`
          w-14
          h-14
          rounded-xl
          flex
          items-center
          justify-center
          text-2xl
          ${color}
        `}
      >
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-5">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {description}
      </p>

      <button
        className="
          mt-6
          w-full
          bg-green-600
          hover:bg-green-700
          text-white
          py-3
          rounded-xl
          transition
        "
      >
        Start Interview
      </button>
    </div>
  );
};

export default InterviewCard;