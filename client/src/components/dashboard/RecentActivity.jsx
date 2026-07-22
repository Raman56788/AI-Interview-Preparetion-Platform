import { FaCheckCircle } from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "Completed React Mock Interview",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Uploaded Resume Successfully",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Solved Java Coding Challenge",
    time: "2 days ago",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 border-b last:border-none pb-4"
          >
            <div className="text-green-600 mt-1">
              <FaCheckCircle />
            </div>

            <div>
              <p className="font-medium text-gray-800">
                {activity.title}
              </p>

              <p className="text-sm text-gray-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;