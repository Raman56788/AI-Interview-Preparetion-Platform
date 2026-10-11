const ProgressCard = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Your Progress
      </h2>

      <div className="space-y-6">

        <div>

          <div className="flex justify-between mb-2">

            <span>Problems Solved</span>

            <span>45 / 150</span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div
              className="bg-green-600 h-3 rounded-full"
              style={{ width: "30%" }}
            />

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <span>Daily Goal</span>

            <span>3 / 5</span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: "60%" }}
            />

          </div>

        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">

          <h3 className="font-semibold text-green-700">
            Keep Going! 🚀
          </h3>

          <p className="text-gray-600 mt-2">
            Solve 2 more problems today to complete your daily goal.
          </p>

        </div>

      </div>

    </div>

  );

};

export default ProgressCard;