function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-green-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to AI Interview Preparation Platform
        </p>

        <form className="mt-8">

          <label className="block text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="block text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
          >
            Login
          </button>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?
            <span className="text-green-600 font-semibold cursor-pointer">
              {" "}
              Signup
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;