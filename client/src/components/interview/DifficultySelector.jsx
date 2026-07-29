import { useState } from "react";

const levels = [
  "Easy",
  "Medium",
  "Hard",
];

const DifficultySelector = () => {

  const [selected, setSelected] = useState("Medium");

  return (

    <div>

      <h2 className="text-xl font-semibold mb-6">
        Select Difficulty
      </h2>

      <div className="flex gap-4 flex-wrap">

        {levels.map((level) => (

          <button

            key={level}

            onClick={() => setSelected(level)}

            className={`px-6 py-3 rounded-xl font-semibold transition ${
              selected === level
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}

          >

            {level}

          </button>

        ))}

      </div>

    </div>

  );

};

export default DifficultySelector;