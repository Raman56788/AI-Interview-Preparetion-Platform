function Dashboard() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold text-green-700">
        Welcome to Dashboard 👋
      </h1>

      <p className="text-gray-600 mt-2">
        AI Interview Preparation Platform
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold">Total Interviews</h2>
          <p className="text-3xl font-bold text-green-600 mt-3">12</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold">Practice Score</h2>
          <p className="text-3xl font-bold text-green-600 mt-3">85%</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-3xl font-bold text-green-600 mt-3">8</p>
        </div>
      </div>

      <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
        Start New Interview
      </button>
    </div>
  );
}

export default Dashboard;