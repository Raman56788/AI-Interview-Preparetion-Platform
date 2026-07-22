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


const Sidebar = () => {

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-6">

      {/* Logo */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-600">
          InterviewAI
        </h1>

        <p className="text-sm text-gray-500">
          Prepare. Practice. Perform.
        </p>
      </div>


      {/* Menu */}

      <nav className="space-y-2">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({isActive}) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition
              
              ${
                isActive
                ? "bg-green-100 text-green-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >

            <span className="text-lg">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </NavLink>

        ))}


        {/* Logout */}

        <button
          className="flex items-center gap-4 px-4 py-3 rounded-xl 
          text-red-500 hover:bg-red-50 w-full mt-6"
        >

          <FaSignOutAlt />

          Logout

        </button>


      </nav>

    </aside>
  );
};


export default Sidebar;