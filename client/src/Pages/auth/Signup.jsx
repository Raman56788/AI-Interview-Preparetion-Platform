function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-green-600">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join AI Interview Preparation Platform
        </p>

        <form className="mt-8">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3 mb-6"
          />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;