import { useState } from "react";


const durations = [
  "15 Minutes",
  "30 Minutes",
  "45 Minutes",
];


const DurationSelector = () => {

  const [selected, setSelected] = useState("30 Minutes");


  return (

    <div>


      <h2 className="text-xl font-semibold mb-6">
        Select Duration
      </h2>



      <div className="flex gap-4 flex-wrap">


        {durations.map((time) => (


          <button

            key={time}

            onClick={() => setSelected(time)}

            className={`px-6 py-3 rounded-xl font-semibold transition ${
              selected === time
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}

          >

            {time}

          </button>


        ))}


      </div>


    </div>

  );

};


export default DurationSelector;