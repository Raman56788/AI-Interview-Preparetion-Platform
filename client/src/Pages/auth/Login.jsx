function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-6 p-3 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-3 border rounded"
        />

        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded">
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;