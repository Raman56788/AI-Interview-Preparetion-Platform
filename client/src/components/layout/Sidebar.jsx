import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaMicrophone,
  FaFileAlt,
  FaCode,
  FaChartBar,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";


const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    name: "AI Interview",
    path: "/interview",
    icon: <FaMicrophone />,
  },
  {
    name: "Resume Analyzer",
    path: "/resume",
    icon: <FaFileAlt />,
  },
  {
    name: "Coding Practice",
    path: "/coding",
    icon: <FaCode />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <FaChartBar />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FaUser />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
];


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {


  return (

    <aside

      className={`
        fixed
        top-0
        left-0
        z-50
        w-64
        min-h-screen
        bg-white
        border-r
        shadow-lg
        flex
        flex-col
        p-6

        transform
        transition-transform
        duration-300

        md:static
        md:translate-x-0

        ${
          sidebarOpen
          ?
          "translate-x-0"
          :
          "-translate-x-full md:translate-x-0"
        }
      `}

    >



      {/* Mobile Close Button */}

      <button

        onClick={() => setSidebarOpen(false)}

        className="
          md:hidden
          absolute
          top-5
          right-5
          text-gray-600
          text-xl
        "

      >

        <FaTimes />

      </button>





      {/* Logo */}

      <div className="mb-10">


        <h1
          className="
            text-2xl
            font-bold
            text-green-600
          "
        >
          🤖 InterviewAI Pro
        </h1>


        <p
          className="
            text-sm
            text-gray-500
            mt-1
          "
        >
          AI Career Platform
        </p>


      </div>





      {/* Navigation */}

      <nav className="flex-1 space-y-2">


        {
          menuItems.map((item)=>(


            <NavLink

              key={item.name}

              to={item.path}


              onClick={() => setSidebarOpen(false)}


              className={({isActive}) =>

                `
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                transition-all
                duration-300


                ${
                  isActive
                  ?
                  "bg-green-100 text-green-700 shadow-sm"
                  :
                  "text-gray-600 hover:bg-gray-100 hover:translate-x-1"
                }

                `
              }

            >


              <span className="text-lg">
                {item.icon}
              </span>


              <span className="font-medium">
                {item.name}
              </span>


            </NavLink>


          ))
        }


      </nav>





      {/* User Profile */}

      <div
        className="
          border-t
          pt-5
          mt-5
        "
      >


        <div
          className="
            flex
            items-center
            gap-3
            mb-4
          "
        >


          <div
            className="
              w-10
              h-10
              rounded-full
              bg-green-100
              flex
              items-center
              justify-center
              text-green-700
              font-bold
            "
          >
            R
          </div>



          <div>

            <h3 className="font-semibold text-gray-800">
              Raman
            </h3>


            <p className="text-xs text-gray-500">
              MERN Developer
            </p>


          </div>


        </div>





        {/* Logout */}

        <button

          className="
            flex
            items-center
            gap-4
            w-full
            px-4
            py-3
            rounded-xl
            text-red-500
            hover:bg-red-50
            transition
          "

        >

          <FaSignOutAlt />

          Logout


        </button>


      </div>



    </aside>

  );

};


export default Sidebar;