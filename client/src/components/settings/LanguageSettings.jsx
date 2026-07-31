import { useState } from "react";

const LanguageSettings = () => {

  const [language, setLanguage] = useState("English");

  const [timezone, setTimezone] = useState("Asia/Kolkata");


  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Language & Preferences
      </h2>


      <div className="space-y-5">


        {/* Language */}

        <div>

          <label className="block text-gray-700 font-medium mb-2">
            Select Language
          </label>


          <select

            value={language}

            onChange={(e) => setLanguage(e.target.value)}

            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-green-500
            "

          >

            <option>
              English
            </option>

            <option>
              Hindi
            </option>

            <option>
              Spanish
            </option>

          </select>


        </div>





        {/* Time Zone */}

        <div>

          <label className="block text-gray-700 font-medium mb-2">
            Time Zone
          </label>


          <select

            value={timezone}

            onChange={(e) => setTimezone(e.target.value)}

            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-green-500
            "

          >

            <option>
              Asia/Kolkata
            </option>

            <option>
              America/New_York
            </option>

            <option>
              Europe/London
            </option>

          </select>


        </div>


      </div>


    </div>

  );

};


export default LanguageSettings;