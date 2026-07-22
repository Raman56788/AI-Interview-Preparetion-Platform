import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import PasswordInput from "../../components/auth/PasswordInput";
import SocialLogin from "../../components/auth/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);

    // API call later
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
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          register={register}
          name="password"
          error={errors.password}
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
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-semibold transition"
        >
          Login
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