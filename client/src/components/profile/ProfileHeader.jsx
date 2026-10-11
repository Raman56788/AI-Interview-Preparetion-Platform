const ProfileHeader = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-8">

      <div className="flex flex-col md:flex-row items-center gap-6">

        {/* Avatar */}

        <img
          src="https://i.pravatar.cc/200"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-green-500"
        />

        {/* User Info */}

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Raman Agnihotri
          </h1>

          <p className="text-lg text-green-600 mt-2">
            MERN Stack Developer
          </p>

          <p className="text-gray-500 mt-2">
            ramanagnihotri32@gmail.com
          </p>

          <div className="flex flex-wrap gap-3 mt-5">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
              React
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
              Node.js
            </span>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
              MongoDB
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
              Express.js
            </span>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ProfileHeader;