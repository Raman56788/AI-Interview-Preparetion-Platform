import { useState } from "react";

const NotificationSettings = () => {

  const [notifications, setNotifications] = useState({
    email: true,
    interview: true,
    coding: false,
  });


  const toggleNotification = (key) => {

    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });

  };


  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Notifications
      </h2>


      <div className="space-y-5">


        {/* Email Notification */}

        <div className="flex justify-between items-center">

          <div>

            <h3 className="font-medium text-gray-800">
              Email Notifications
            </h3>

            <p className="text-sm text-gray-500">
              Receive updates on your email.
            </p>

          </div>


          <button
            onClick={() => toggleNotification("email")}
            className={`
              w-14
              h-7
              rounded-full
              transition
              ${
                notifications.email
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
                  notifications.email
                  ? "translate-x-7"
                  : "translate-x-1"
                }
              `}
            />

          </button>

        </div>




        {/* Interview Reminder */}

        <div className="flex justify-between items-center">

          <div>

            <h3 className="font-medium text-gray-800">
              Interview Reminder
            </h3>

            <p className="text-sm text-gray-500">
              Get reminders before AI interviews.
            </p>

          </div>


          <button
            onClick={() => toggleNotification("interview")}
            className={`
              w-14
              h-7
              rounded-full
              transition
              ${
                notifications.interview
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
                  notifications.interview
                  ? "translate-x-7"
                  : "translate-x-1"
                }
              `}
            />

          </button>

        </div>





        {/* Coding Reminder */}

        <div className="flex justify-between items-center">

          <div>

            <h3 className="font-medium text-gray-800">
              Coding Practice Reminder
            </h3>

            <p className="text-sm text-gray-500">
              Daily coding challenge reminders.
            </p>

          </div>


          <button
            onClick={() => toggleNotification("coding")}
            className={`
              w-14
              h-7
              rounded-full
              transition
              ${
                notifications.coding
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
                  notifications.coding
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


export default NotificationSettings;