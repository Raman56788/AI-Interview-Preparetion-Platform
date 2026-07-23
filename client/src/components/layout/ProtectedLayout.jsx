import { useState } from "react";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";


const ProtectedLayout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (

    <div
      className="
        flex
        min-h-screen
        bg-gray-100
        overflow-x-hidden
      "
    >


      {/* Sidebar */}

      <Sidebar

        sidebarOpen={sidebarOpen}

        setSidebarOpen={setSidebarOpen}

      />



      {/* Mobile Overlay */}

      {
        sidebarOpen && (

          <div

            className="
              fixed
              inset-0
              bg-black
              bg-opacity-40
              z-40
              md:hidden
            "

            onClick={() => setSidebarOpen(false)}

          />

        )
      }




      {/* Main Content */}

      <div
        className="
          flex-1
          flex
          flex-col
        "
      >


        <TopNavbar

          setSidebarOpen={setSidebarOpen}

        />



        <main
          className="
            p-6
            w-full
          "
        >

          {children}

        </main>


      </div>


    </div>

  );

};


export default ProtectedLayout;