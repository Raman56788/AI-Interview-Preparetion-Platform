import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import PasswordInput from "../../components/auth/PasswordInput";
import SocialLogin from "../../components/auth/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Login API
  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      // Save JWT Token & User
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login Successful ✅");

      // Redirect Dashboard
      navigate("/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your AI Interview journey"
    >
      <form onSubmit={handleSubmit(onSubmit)}>

        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register}
          name="email"
          error={errors.email}
          rules={{ required: "Email is required" }}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          register={register}
          name="password"
          error={errors.password}
          rules={{ required: "Password is required" }}
        />

        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="text-green-600 hover:underline text-sm"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-semibold transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      <SocialLogin />

      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-green-600 font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </p>

    </AuthLayout>
  );
};

export default Login;