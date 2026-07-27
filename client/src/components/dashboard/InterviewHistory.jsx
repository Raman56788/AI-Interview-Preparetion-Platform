const interviewData = [
  {
    id: 1,
    role: "React Developer",
    score: "92%",
    date: "23 Jul 2026",
    status: "Completed",
  },
  {
    id: 2,
    role: "Java Backend",
    score: "87%",
    date: "22 Jul 2026",
    status: "Completed",
  },
  {
    id: 3,
    role: "HR Interview",
    score: "95%",
    date: "20 Jul 2026",
    status: "Completed",
  },
  {
    id: 4,
    role: "DSA Round",
    score: "80%",
    date: "18 Jul 2026",
    status: "Completed",
  },
];

const InterviewHistory = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        Interview History
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Your recent mock interview results
      </p>

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

            {interviewData.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4 font-medium">
                  {item.role}
                </td>

                <td className="py-4 text-green-600 font-semibold">
                  {item.score}
                </td>

                <td className="py-4 text-gray-600">
                  {item.date}
                </td>

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

export default InterviewHistory;