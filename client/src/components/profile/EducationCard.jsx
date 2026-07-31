const EducationCard = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Education
      </h2>

      <div className="space-y-5">

        <div className="border-l-4 border-green-500 pl-4">

          <h3 className="text-lg font-semibold text-gray-800">
            B.Tech - Computer Science & Engineering
          </h3>

          <p className="text-gray-600 mt-1">
            Dr. A.P.J. Abdul Kalam Technical University (AKTU)
          </p>

          <p className="text-gray-500 mt-1">
            2024 - 2028
          </p>

          <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            CGPA: 6.5
          </span>

        </div>

      </div>

    </div>

  );

};

export default EducationCard;