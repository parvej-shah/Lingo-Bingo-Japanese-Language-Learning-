import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { ClipLoader } from "react-spinners"; // Loading spinner
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [googleAuthLoading, setGoogleAuthLoading] = useState(false);

  const handleLogin = (data) => {
    const { email, password } = data;

    // Simulated login API call
    if (email === "user@example.com" && password === "Password1") {
      toast.success("Login successful!");
      navigate("/home");
    } else {
      toast.error("Invalid email or password!");
    }
  };

  const handleGoogleLogin = () => {
    setGoogleAuthLoading(true);

    // Simulate Google authentication
    setTimeout(() => {
      setGoogleAuthLoading(false);
      toast.success("Google login successful!");
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue-gray via-light-pink to-neutral-gray flex items-center justify-center px-4 py-2">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md my-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-dark-blue-gray mb-6">
          Login to Lingo Bingo
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-mount-fuji-gray">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full border-soft-gray focus:ring-light-blue-gray focus:ring-2"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-mount-fuji-gray">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full border-soft-gray focus:ring-light-blue-gray focus:ring-2"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className="text-red text-sm">{errors.password.message}</span>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href=""
              className="text-cherry-blossom-red hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-strong-blue text-white hover:bg-sky-blue">
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="divider my-4">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2 text-dark-blue-gray border-soft-gray hover:bg-light-blue">
          {googleAuthLoading ? (
            <ClipLoader size={20} color="#3B82F6" />
          ) : (
            <FcGoogle size={20} />
          )}
          Login with Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-4">
          Don't have an account? 
          <a href="/register" className="text-cherry-blossom-red hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
