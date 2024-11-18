import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { ClipLoader } from "react-spinners"; 
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../authProvider/AuthProvider";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [googleAuthLoading, setGoogleAuthLoading] = useState(false);
  const {createUser} = useAuth();
  const handleRegister = (data) => {
    const { name, email, photoURL, password } = data;
    createUser(email,password)
    .then(res=>{
        toast.warning(res.user);
        toast.success("Registration successful!");
        navigate("/home");
    })
    .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
            toast.error('Email already in use.');
          } else if (error.code === 'auth/invalid-email') {
            toast.error('Invalid email address.');
          } else if (error.code === 'auth/weak-password') {
            toast.error('Password is too weak. Please use a stronger password.');
          } else if (error.code === 'auth/user-disabled') {
            toast.error('This user has been disabled.');
          } else if (error.code === 'auth/too-many-requests') {
            toast.error('Too many requests. Please try again later.');
          } else if (error.code === 'auth/network-request-failed') {
            toast.error('Network error. Please check your connection.');
          } else if (error.code === 'auth/account-exists-with-different-credential') {
            toast.error('This email is already associated with a different account.');
          } else if (error.code === 'auth/timeout') {
            toast.error('The request timed out. Please try again.');
          } else {
            toast.error('An unknown error occurred.');
          }
      });

    if (name && email && photoURL && password) {
      
    } else {
      
    }
  };

  const handleGoogleLogin = () => {
    setGoogleAuthLoading(true);

    // Simulate Google authentication
    setTimeout(() => {
      setGoogleAuthLoading(false);
      toast.success("Google login successful!");
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue-gray via-light-pink to-neutral-gray flex items-center justify-center px-4 py-4">
      <div className="bg-white m-2 md:m-8 shadow-lg rounded-lg p-8 w-full max-w-xl">
        {/* Right Form Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center text-dark-blue-gray mb-6">
            Register For Lingo Bingo
          </h2>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-mount-fuji-gray">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full border-soft-gray focus:ring-light-blue-gray focus:ring-2"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red text-sm">{errors.name.message}</span>
              )}
            </div>
            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-mount-fuji-gray">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered w-full border-soft-gray focus:ring-light-blue-gray focus:ring-2"
                {...register("photoURL")}
              />
              {errors.photoURL && (
                <span className="text-red text-sm">{errors.photoURL.message}</span>
              )}
            </div>
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
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  validate: {
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) || "Must contain an uppercase letter",
                    hasLowercase: (value) =>
                      /[a-z]/.test(value) || "Must contain a lowercase letter",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red text-sm">{errors.password.message}</span>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-primary w-full bg-strong-blue text-white hover:bg-sky-blue">
              Register
            </button>
          </form>

          {/* Or Divider */}
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

          {/* Login Link */}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-cherry-blossom-red hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
