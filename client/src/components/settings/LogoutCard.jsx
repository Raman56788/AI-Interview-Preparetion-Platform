import { useNavigate } from "react-router-dom";


const LogoutCard = () => {


  const navigate = useNavigate();



  const handleLogout = () => {

    // Future: clear JWT token here

    navigate("/login");

  };



  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">


      <h2 className="text-2xl font-semibold text-gray-800 mb-4">

        Account Actions

      </h2>



      <p className="text-gray-500 mb-6">

        Manage your account session and account deletion.

      </p>




      <div className="space-y-4">



        {/* Logout Button */}


        <button

          onClick={handleLogout}

          className="
            w-full
            bg-green-600
            hover:bg-green-700
            text-white
            py-3
            rounded-xl
            font-semibold
            transition
          "

        >

          Logout

        </button>







        {/* Delete Account */}


        <button

          className="
            w-full
            bg-red-500
            hover:bg-red-600
            text-white
            py-3
            rounded-xl
            font-semibold
            transition
          "

        >

          Delete Account

        </button>



      </div>



    </div>

  );

};



export default LogoutCard;