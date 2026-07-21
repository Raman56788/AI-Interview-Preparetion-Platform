function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-700">
          EduHire AI
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          AI Powered Teacher Hiring Platform
        </p>

        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;