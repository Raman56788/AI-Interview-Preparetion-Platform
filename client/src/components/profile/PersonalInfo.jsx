const PersonalInfo = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Personal Information
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between border-b pb-3">

          <span className="font-medium text-gray-600">
            Full Name
          </span>

          <span className="text-gray-800">
            Raman Agnihotri
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="font-medium text-gray-600">
            Email
          </span>

          <span className="text-gray-800">
            ramanagnihotri32@gmail.com
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="font-medium text-gray-600">
            Phone
          </span>

          <span className="text-gray-800">
            +91 XXXXX XXXXX
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="font-medium text-gray-600">
            Date of Birth
          </span>

          <span className="text-gray-800">
            03 Feb 2008
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="font-medium text-gray-600">
            Location
          </span>

          <span className="text-gray-800">
            Uttar Pradesh, India
          </span>

        </div>

        <div className="flex justify-between">

          <span className="font-medium text-gray-600">
            Profession
          </span>

          <span className="text-green-600 font-semibold">
            MERN Stack Developer
          </span>

        </div>

      </div>

    </div>

  );

};

export default PersonalInfo;