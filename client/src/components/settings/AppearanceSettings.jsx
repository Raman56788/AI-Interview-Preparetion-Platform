import { useState } from "react";

const AppearanceSettings = () => {

  const [theme, setTheme] = useState("Light");

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Appearance
      </h2>

      <div className="space-y-4">

        <button
          onClick={() => setTheme("Light")}
          className={`
            w-full
            py-3
            rounded-xl
            font-semibold
            transition
            ${
              theme === "Light"
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }
          `}
        >
          ☀️ Light Mode
        </button>

        <button
          onClick={() => setTheme("Dark")}
          className={`
            w-full
            py-3
            rounded-xl
            font-semibold
            transition
            ${
              theme === "Dark"
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }
          `}
        >
          🌙 Dark Mode
        </button>

      </div>

    </div>

  );

};

export default AppearanceSettings;