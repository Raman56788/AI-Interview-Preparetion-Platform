const AccountSettings = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Account Settings
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between border-b pb-3">

          <span className="text-gray-600 font-medium">
            Full Name
          </span>

          <span className="text-gray-800">
            Raman Agnihotri
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="text-gray-600 font-medium">
            Email
          </span>

          <span className="text-gray-800">
            ramanagnihotri32@gmail.com
          </span>

        </div>

        <div className="flex gap-4 pt-3">

          <button
            className="
              flex-1
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Edit Profile
          </button>

          <button
            className="
              flex-1
              bg-gray-200
              hover:bg-gray-300
              text-gray-800
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Change Password
          </button>

        </div>

      </div>

    </div>

  );

};

export default AccountSettings;