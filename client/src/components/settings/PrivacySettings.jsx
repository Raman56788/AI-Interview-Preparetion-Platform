import { useState } from "react";


const PrivacySettings = () => {


  const [privacy, setPrivacy] = useState({

    twoFactor: false,

    privateProfile: false,

  });



  const togglePrivacy = (key) => {

    setPrivacy({

      ...privacy,

      [key]: !privacy[key],

    });

  };



  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">


      <h2 className="text-2xl font-semibold text-gray-800 mb-6">

        Privacy & Security

      </h2>



      <div className="space-y-5">



        {/* Two Factor Authentication */}


        <div className="flex justify-between items-center">


          <div>

            <h3 className="font-medium text-gray-800">

              Two Factor Authentication

            </h3>


            <p className="text-sm text-gray-500">

              Add an extra layer of account security.

            </p>


          </div>




          <button

            onClick={() => togglePrivacy("twoFactor")}

            className={`
              w-14
              h-7
              rounded-full
              transition
              ${
                privacy.twoFactor
                ? "bg-green-600"
                : "bg-gray-300"
              }
            `}

          >


            <div

              className={`
                w-6
                h-6
                bg-white
                rounded-full
                transition
                ${
                  privacy.twoFactor
                  ? "translate-x-7"
                  : "translate-x-1"
                }
              `}

            />


          </button>


        </div>







        {/* Private Profile */}


        <div className="flex justify-between items-center">


          <div>

            <h3 className="font-medium text-gray-800">

              Private Profile

            </h3>


            <p className="text-sm text-gray-500">

              Control who can view your profile.

            </p>


          </div>




          <button

            onClick={() => togglePrivacy("privateProfile")}

            className={`
              w-14
              h-7
              rounded-full
              transition
              ${
                privacy.privateProfile
                ? "bg-green-600"
                : "bg-gray-300"
              }
            `}

          >


            <div

              className={`
                w-6
                h-6
                bg-white
                rounded-full
                transition
                ${
                  privacy.privateProfile
                  ? "translate-x-7"
                  : "translate-x-1"
                }
              `}

            />


          </button>


        </div>



      </div>



    </div>

  );

};



export default PrivacySettings;