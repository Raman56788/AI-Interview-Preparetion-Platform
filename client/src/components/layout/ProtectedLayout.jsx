import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      <Sidebar />


      {/* Main Area */}

      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}

        <TopNavbar />


        {/* Page Content */}

        <main className="p-6">

          {children}

        </main>

      </div>

    </div>
  );
};


export default ProtectedLayout;