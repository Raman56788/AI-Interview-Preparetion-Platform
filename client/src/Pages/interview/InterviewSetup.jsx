import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import RoleSelector from "../../components/interview/RoleSelector";
import DifficultySelector from "../../components/interview/DifficultySelector";
import DurationSelector from "../../components/interview/DurationSelector";
import SetupSummary from "../../components/interview/SetupSummary";

const InterviewSetup = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">

        <button
          onClick={() => navigate("/interview")}
          className="
            flex
            items-center
            gap-2
            text-green-600
            hover:text-green-700
            mb-4
          "
        >
          <FaArrowLeft />
          Back
        </button>

        <h1 className="text-3xl font-bold text-gray-800">
          AI Interview Setup
        </h1>

        <p className="text-gray-500 mt-2">
          Configure your interview before starting.
        </p>

      </div>

      {/* Setup Sections */}

      <div className="grid gap-6">

        {/* Role */}

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <RoleSelector />
        </div>

        {/* Difficulty */}

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <DifficultySelector />
        </div>

        {/* Duration */}

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <DurationSelector />
        </div>

        {/* Summary */}

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <SetupSummary />
        </div>

        {/* Start Button */}

        <button
          onClick={() => navigate("/interview/room")}
          className="
            w-full
            bg-green-600
            hover:bg-green-700
            text-white
            py-4
            rounded-xl
            font-semibold
            transition
          "
        >
          Start AI Interview
        </button>

      </div>

    </div>

  );

};

export default InterviewSetup;