const ATSScoreCard = () => {
  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        ATS Score
      </h2>

      {/* Score */}

      <div className="flex items-center justify-between mb-4">

        <span className="text-gray-600 font-medium">
          Resume Score
        </span>

        <span className="text-3xl font-bold text-green-600">
          85%
        </span>

      </div>

      {/* Progress Bar */}

      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-green-600 rounded-full"
          style={{ width: "85%" }}
        ></div>

      </div>

      {/* Message */}

      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">

        <h3 className="font-semibold text-green-700">
          Excellent Resume
        </h3>

        <p className="text-gray-600 mt-2">
          Your resume is ATS-friendly. Add a few more technical skills
          to improve your score further.
        </p>

      </div>

    </div>

  );
};

export default ATSScoreCard;