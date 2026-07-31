const stats = [
  {
    title: "Total Problems",
    value: "150",
    color: "text-blue-600",
  },
  {
    title: "Solved",
    value: "45",
    color: "text-green-600",
  },
  {
    title: "Accuracy",
    value: "82%",
    color: "text-purple-600",
  },
  {
    title: "Current Streak",
    value: "7 Days",
    color: "text-orange-600",
  },
];

const CodingStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-2xl shadow-sm p-6"
        >

          <h3 className="text-gray-500 text-sm">
            {item.title}
          </h3>

          <h2 className={`text-3xl font-bold mt-3 ${item.color}`}>
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
};

export default CodingStats;