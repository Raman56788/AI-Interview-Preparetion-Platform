import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";


const TopNavbar = ({ setSidebarOpen }) => {

  return (

    <header
      className="
        bg-white
        border-b
        px-6
        py-4
        flex
        justify-between
        items-center
      "
    >


      {/* Left Section */}

      <div className="flex items-center gap-4">


        {/* Mobile Menu Button */}

        <button
          onClick={() => setSidebarOpen(true)}
          className="
            md:hidden
            text-gray-600
            text-xl
          "
        >

          <FaBars />

        </button>




        <div>

          <h2
            className="
              text-xl
              font-semibold
              text-gray-800
            "
          >
            Dashboard Overview
          </h2>


          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Track your AI interview preparation
          </p>


        </div>


      </div>





      {/* Right Section */}

      <div
        className="
          flex
          items-center
          gap-6
        "
      >



        {/* Search */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
            bg-gray-100
            px-4
            py-2
            rounded-xl
            w-64
          "
        >

          <FaSearch className="text-gray-400"/>


          <input

            type="text"

            placeholder="Search..."

            className="
              bg-transparent
              outline-none
              text-sm
              w-full
            "

          />


        </div>





        {/* Notification */}

        <button
          className="
            relative
            text-gray-600
            hover:text-green-600
            transition
          "
        >

          <FaBell className="text-xl"/>


          <span
            className="
              absolute
              -top-2
              -right-2
              bg-red-500
              text-white
              text-xs
              w-5
              h-5
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            3
          </span>


        </button>





        {/* Profile */}

        <div
          className="
            flex
            items-center
            gap-3
            cursor-pointer
            hover:bg-gray-50
            px-3
            py-2
            rounded-xl
            transition
          "
        >


          <FaUserCircle
            className="
              text-3xl
              text-green-600
            "
          />



          <div className="hidden sm:block">


            <p
              className="
                font-semibold
                text-gray-800
              "
            >
              Raman
            </p>


            <p
              className="
                text-xs
                text-gray-500
              "
            >
              MERN Developer
            </p>


          </div>



          <FaChevronDown
            className="
              text-gray-400
              text-sm
            "
          />


        </div>



      </div>


    </header>

  );

};


export default TopNavbar;