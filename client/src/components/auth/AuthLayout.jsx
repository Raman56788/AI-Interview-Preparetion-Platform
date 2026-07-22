const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-green-600 to-green-400 text-white p-10">
          <h1 className="text-5xl font-bold mb-6">
            AI Interview
          </h1>

          <p className="text-center text-lg leading-8">
            Prepare for technical and HR interviews with
            AI-powered mock interviews, coding challenges,
            resume analysis, and real-time feedback.
          </p>

          <div className="mt-10 text-7xl">
            🤖
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">

            <h2 className="text-3xl font-bold text-gray-800">
              {title}
            </h2>

            <p className="text-gray-500 mt-2 mb-8">
              {subtitle}
            </p>

            {children}

          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;