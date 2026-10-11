import { useState } from "react";

const levels = [
  "Easy",
  "Medium",
  "Hard",
];

const DifficultyFilter = () => {

  const [selected, setSelected] = useState("Easy");

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Select Difficulty
      </h2>

      <div className="flex flex-wrap gap-4">

        {levels.map((level) => (

          <button

            key={level}

            onClick={() => setSelected(level)}

            className={`
              px-6
              py-3
              rounded-xl
              font-semibold
              transition

              ${
                selected === level
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }
            `}

          >

            {level}

          </button>

        ))}

      </div>

    </div>

  );

};

export default DifficultyFilter;