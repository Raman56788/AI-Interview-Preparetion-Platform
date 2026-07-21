function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        AI Interview Preparation Platform
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Prepare smarter with AI powered interviews
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
        Start Interview
      </button>
    </div>
  );
}

export default Home;