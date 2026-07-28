const interviews = [
  {
    role: "React Developer",
    score: "92%",
    date: "28 Jul 2026",
    status: "Completed",
  },
  {
    role: "Java Backend",
    score: "88%",
    date: "26 Jul 2026",
    status: "Completed",
  },
  {
    role: "HR Interview",
    score: "95%",
    date: "24 Jul 2026",
    status: "Completed",
  },
];

const RecentInterviews = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Recent Interviews
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">Role</th>
              <th className="text-left py-3">Score</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Status</th>

            </tr>

          </thead>

          <tbody>

            {interviews.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4">{item.role}</td>

                <td className="py-4 font-semibold text-green-600">
                  {item.score}
                </td>

                <td className="py-4">{item.date}</td>

                <td className="py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentInterviews;