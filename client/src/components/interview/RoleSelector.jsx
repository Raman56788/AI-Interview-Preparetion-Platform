import {
  FaLaptopCode,
  FaServer,
  FaCode,
  FaUserTie,
  FaBrain,
} from "react-icons/fa";

const roles = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: <FaLaptopCode />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Backend Developer",
    icon: <FaServer />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Java Developer",
    icon: <FaCode />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    title: "HR Interview",
    icon: <FaUserTie />,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 5,
    title: "DSA",
    icon: <FaBrain />,
    color: "bg-purple-100 text-purple-600",
  },
];

const RoleSelector = () => {
  return (
    <div>

      <h2 className="text-xl font-semibold mb-6">
        Select Interview Role
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {roles.map((role) => (

          <div
            key={role.id}
            className="bg-white rounded-2xl shadow-sm p-6 cursor-pointer hover:shadow-lg transition"
          >

            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${role.color}`}
            >
              {role.icon}
            </div>

            <h3 className="text-lg font-semibold mt-5">
              {role.title}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RoleSelector;