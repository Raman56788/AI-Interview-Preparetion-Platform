import {
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";


const tips = [
  "Practice React Hooks and frontend concepts",
  "Solve daily Java DSA problems",
  "Improve communication skills",
  "Optimize your resume for ATS",
];


const InterviewTips = () => {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-sm
      p-6
    ">

      <div className="
        flex
        items-center
        gap-3
        mb-5
      ">

        <div className="
          w-12
          h-12
          rounded-xl
          bg-yellow-100
          text-yellow-600
          flex
          items-center
          justify-center
          text-xl
        ">
          <FaLightbulb />
        </div>


        <div>

          <h2 className="
            text-xl
            font-semibold
            text-gray-800
          ">
            AI Interview Tips
          </h2>


          <p className="
            text-sm
            text-gray-500
          ">
            Personalized preparation suggestions
          </p>

        </div>


      </div>




      <div className="space-y-4">

        {
          tips.map((tip, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                bg-gray-50
                p-3
                rounded-xl
              "
            >

              <FaCheckCircle
                className="
                  text-green-600
                "
              />


              <p className="
                text-gray-700
              ">
                {tip}
              </p>


            </div>

          ))
        }

      </div>


    </div>

  );

};


export default InterviewTips;