const ProgressSection = () => (
  <div className="bg-white rounded-3xl p-6 shadow-md border border-green-100">
    <h2 className="text-xl font-bold mb-5">Learning Progress</h2>

    {[
      ["AI Interview", 92],
      ["Resume Preparation", 88],
      ["Coding Practice", 84],
      ["Frontend Development", 90],
    ].map(([item, value]) => (
      <div key={item} className="mb-5">
        <div className="flex justify-between mb-2">
          <span>{item}</span>
          <span>{value}%</span>
        </div>

        <div className="bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default ProgressSection;