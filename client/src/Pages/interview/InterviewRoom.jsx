import { FaMicrophone, FaVideo } from "react-icons/fa";


const InterviewRoom = () => {

  return (

    <div className="min-h-screen bg-gray-100 p-6">


      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

        <h1 className="text-3xl font-bold text-gray-800">
          AI Interview Room
        </h1>

        <p className="text-gray-500 mt-2">
          Your AI powered mock interview session.
        </p>

      </div>





      {/* Interview Area */}

      <div className="grid md:grid-cols-2 gap-6">





        {/* AI Interviewer */}

        <div className="bg-white rounded-2xl shadow-sm p-6">


          <div className="
          h-64
          bg-gray-200
          rounded-xl
          flex
          items-center
          justify-center
          ">

            <h2 className="text-xl font-semibold text-gray-600">
              AI Interviewer
            </h2>

          </div>



          <p className="mt-6 text-gray-700 font-medium">

            Question:

          </p>


          <p className="text-gray-500 mt-2">

            Tell me about yourself.

          </p>


        </div>






        {/* User Section */}

        <div className="bg-white rounded-2xl shadow-sm p-6">


          <div className="
          h-64
          bg-gray-200
          rounded-xl
          flex
          items-center
          justify-center
          ">

            <h2 className="text-xl font-semibold text-gray-600">
              Your Camera
            </h2>


          </div>





          <button
            className="
            mt-6
            w-full
            bg-green-600
            hover:bg-green-700
            text-white
            py-4
            rounded-xl
            flex
            items-center
            justify-center
            gap-3
            "
          >

            <FaMicrophone />

            Start Answer


          </button>


        </div>



      </div>


    </div>

  );

};


export default InterviewRoom;