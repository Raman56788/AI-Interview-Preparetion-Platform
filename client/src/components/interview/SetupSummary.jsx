const SetupSummary = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Interview Summary
      </h2>


      <div className="space-y-4">


        <div className="flex justify-between">

          <span className="text-gray-500">
            Role
          </span>

          <span className="font-semibold text-gray-800">
            Frontend Developer
          </span>

        </div>



        <div className="flex justify-between">

          <span className="text-gray-500">
            Difficulty
          </span>

          <span className="font-semibold text-gray-800">
            Medium
          </span>

        </div>




        <div className="flex justify-between">

          <span className="text-gray-500">
            Duration
          </span>

          <span className="font-semibold text-gray-800">
            30 Minutes
          </span>

        </div>



      </div>


    </div>

  );

};


export default SetupSummary;