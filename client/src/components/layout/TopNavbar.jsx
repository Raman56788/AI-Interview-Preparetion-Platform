import { 
  FaBell,
  FaUserCircle
} from "react-icons/fa";


const TopNavbar = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">

      {/* Left */}

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Track your interview preparation
        </p>
      </div>


      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Notification */}

        <button className="relative text-gray-600 hover:text-green-600 transition">

          <FaBell className="text-xl"/>

          <span className="absolute -top-2 -right-2 
          bg-red-500 text-white text-xs 
          w-5 h-5 rounded-full flex items-center justify-center">

            3

          </span>

        </button>


        {/* Profile */}

        <div className="flex items-center gap-3 cursor-pointer">

          <FaUserCircle className="text-3xl text-green-600"/>

          <div>

            <p className="font-medium text-gray-800">
              Raman
            </p>

            <p className="text-xs text-gray-500">
              MERN Developer
            </p>

          </div>

        </div>


      </div>


    </header>
  );
};


export default TopNavbar;