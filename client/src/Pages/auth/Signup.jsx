import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import PasswordInput from "../../components/auth/PasswordInput";
import SocialLogin from "../../components/auth/SocialLogin";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Start your AI Interview preparation today"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          register={register}
          name="name"
          error={errors.name}
        />

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
          placeholder="Create a password"
          register={register}
          name="password"
          error={errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          register={register}
          name="confirmPassword"
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Create Account
        </button>
      </form>

      <SocialLogin />

      <p className="text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-green-600 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;