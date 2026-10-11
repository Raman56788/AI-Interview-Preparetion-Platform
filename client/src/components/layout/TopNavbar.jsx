import {
  FaBell,
  FaSearch,
  FaChevronDown,
  FaBars,
  FaMoon,
  FaPlus,
} from "react-icons/fa";

const TopNavbar = ({ setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-green-100 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between gap-5">

        {/* ================= LEFT SECTION ================= */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden w-10 h-10 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 flex items-center justify-center transition"
          >
            <FaBars />
          </button>

          {/* Heading */}
          <div>
            <p className="text-sm text-green-600 font-semibold uppercase tracking-wider">
              AI Interview Platform
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              Good Evening, Raman 👋
            </h2>

            <p className="text-sm text-gray-500">
              Keep practicing to improve your interview score.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex items-center gap-4">

          {/* Search Box */}
          <div className="hidden lg:flex items-center bg-green-50 border border-green-100 rounded-2xl px-4 py-3 w-80">
            <FaSearch className="text-green-500 mr-3" />

            <input
              type="text"
              placeholder="Search interview, resume, analytics..."
              className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
            />
          </div>

          {/* New Interview Button */}
          <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition">
            <FaPlus />
            New Interview
          </button>

          {/* Dark Mode Icon (Future Feature) */}
          <button className="w-11 h-11 rounded-2xl bg-green-50 text-green-700 hover:bg-green-100 transition flex items-center justify-center">
            <FaMoon />
          </button>

          {/* Notification */}
          <button className="relative w-11 h-11 rounded-2xl bg-green-50 hover:bg-green-100 transition flex items-center justify-center text-green-700">
            <FaBell className="text-lg" />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-green-50 hover:bg-green-100 rounded-2xl px-3 py-2 cursor-pointer transition border border-green-100">

            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow">
                R
              </div>

              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <div className="hidden sm:block">
              <h4 className="font-semibold text-gray-800">
                Raman Agnihotri
              </h4>

              <p className="text-xs text-gray-500">
                MERN Stack Developer
              </p>
            </div>

            <FaChevronDown className="text-gray-400 text-xs hidden sm:block" />
          </div>
        </div>
      </div>

      {/* ================= MOBILE SEARCH ================= */}
      <div className="mt-4 lg:hidden">
        <div className="flex items-center bg-green-50 border border-green-100 rounded-2xl px-4 py-3">
          <FaSearch className="text-green-500 mr-3" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
          />
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;