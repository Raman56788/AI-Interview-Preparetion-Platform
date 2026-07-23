import {
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";


const AIRecommendation = () => {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      border
    ">


      {/* Header */}

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
          bg-green-100
          flex
          items-center
          justify-center
          text-green-600
        ">

          <FaRobot className="text-2xl"/>

        </div>


        <div>

          <h2 className="
            text-xl
            font-bold
            text-gray-800
          ">
            AI Recommendation
          </h2>


          <p className="
            text-sm
            text-gray-500
          ">
            Personalized learning suggestions
          </p>

        </div>


      </div>




      {/* Message */}

      <div className="
        bg-green-50
        rounded-xl
        p-4
        mb-5
      ">


        <p className="
          text-gray-700
          leading-relaxed
        ">

          Your React performance improved by

          <span className="
            font-bold
            text-green-600
            mx-1
          ">
            15%
          </span>

          this week.

        </p>


      </div>




      {/* Suggestions */}

      <div className="space-y-3">


        <p className="
          font-semibold
          text-gray-800
        ">
          Recommended Practice:
        </p>


        <ul className="
          text-sm
          text-gray-600
          space-y-2
        ">


          <li>
            ✅ Practice React Hooks
          </li>


          <li>
            ✅ Solve 5 Java DSA Problems
          </li>


          <li>
            ✅ Improve Resume ATS Score
          </li>


        </ul>


      </div>




      {/* Button */}

      <button
        className="
          mt-6
          flex
          items-center
          gap-3
          bg-green-600
          text-white
          px-5
          py-3
          rounded-xl
          hover:bg-green-700
          transition
        "
      >

        Start Practice

        <FaArrowRight />

      </button>


    </div>

  );

};


export default AIRecommendation;