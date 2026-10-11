import { NavLink, useNavigate } from "react-router-dom";

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
  FaRobot,
  FaChevronRight,
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
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50
        w-72 min-h-screen
        bg-gradient-to-b from-white via-green-50 to-emerald-50
        border-r border-green-100
        shadow-2xl
        flex flex-col justify-between
        transform transition-transform duration-300

        md:static md:translate-x-0

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }
      `}
    >
      {/* ================= Mobile Close Button ================= */}
      <button
        onClick={() => setSidebarOpen(false)}
        className="md:hidden absolute top-5 right-5 text-gray-500 hover:text-red-500 text-xl"
      >
        <FaTimes />
      </button>

      {/* ================= TOP SECTION ================= */}
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl shadow-lg">
            <FaRobot />
          </div>

          <div>
            <h1 className="text-xl font-bold text-green-700">
              InterviewAI Pro
            </h1>

            <p className="text-sm text-gray-500">
              AI Career Platform
            </p>
          </div>
        </div>

        {/* AI Career Card */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-5 text-white shadow-lg mb-8">
          <p className="text-xs uppercase tracking-widest text-green-100">
            AI Career Copilot
          </p>

          <h2 className="text-lg font-bold mt-2 leading-6">
            Practice Smarter with Gemini AI
          </h2>

          <p className="text-sm text-green-100 mt-2">
            MERN • Java • SQL • HR • DSA
          </p>

          <button className="mt-4 w-full bg-white text-green-700 py-2 rounded-xl font-semibold hover:bg-green-100 transition">
            Start Interview
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `
                  flex items-center justify-between
                  px-4 py-3 rounded-2xl
                  transition-all duration-300 group

                  ${
                    isActive
                      ? "bg-green-100 text-green-700 border border-green-200 shadow-md"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-700 hover:shadow-sm"
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-lg ${
                        isActive
                          ? "text-green-600"
                          : "text-gray-500 group-hover:text-green-600"
                      }`}
                    >
                      {item.icon}
                    </span>

                    <span className="font-medium">{item.name}</span>
                  </div>

                  {isActive && (
                    <FaChevronRight className="text-green-600 text-sm" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="p-5 border-t border-green-100">
        {/* User Card */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-md p-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
              R
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Raman Agnihotri
              </h3>

              <p className="text-xs text-gray-500">
                MERN Stack Developer
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5">
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>Interview Progress</span>
              <span className="font-semibold text-green-600">75%</span>
            </div>

            <div className="w-full h-2 rounded-full bg-green-100">
              <div className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 w-3/4"></div>
            </div>

            <p className="text-xs text-green-600 mt-2">
              9 / 12 Interviews Completed
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-2xl bg-red-50 text-red-600 hover:bg-red-100 transition-all font-semibold border border-red-100"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;    