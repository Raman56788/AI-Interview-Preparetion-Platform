const ProblemCard = ({ title, difficulty, status }) => {

  const difficultyColor = {
    Easy: "text-green-600 bg-green-100",
    Medium: "text-yellow-600 bg-yellow-100",
    Hard: "text-red-600 bg-red-100",
  };

  return (

    <div
      className="
        bg-white
        rounded-xl
        shadow-sm
        p-5
        hover:shadow-md
        transition
        cursor-pointer
      "
    >

      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <div className="flex items-center justify-between mt-4">

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-sm
            font-medium
            ${difficultyColor[difficulty]}
          `}
        >
          {difficulty}
        </span>

        <span
          className={`
            font-semibold
            ${
              status === "Solved"
                ? "text-green-600"
                : "text-gray-500"
            }
          `}
        >
          {status}
        </span>

      </div>

    </div>

  );

};

export default ProblemCard;