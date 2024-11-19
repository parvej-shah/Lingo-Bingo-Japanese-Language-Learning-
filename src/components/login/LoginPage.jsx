import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { ClipLoader } from "react-spinners"; // Loading spinner
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../authProvider/AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {googleAuthLoading,loginWithGoggle,setGoogleAuthLoading,signInUser,emails,setEmails} = useAuth();

  const handleLogin = (data) => {
    const { email, password } = data;
    signInUser(email,password)
    .then(res=>{
      toast.success("Login successful!");
      navigate("/");
  })
  .catch((error) => {
    if (error.code === 'auth/user-not-found') {
      toast.error('No user found with this email. Please register first.');
    } else if (error.code === 'auth/wrong-password') {
      toast.error('Incorrect password. Please try again.');
    } else if (error.code === 'auth/user-disabled') {
      toast.error('This account has been disabled.');
    } else if (error.code === 'auth/invalid-credential') {
      toast.error('Invalid email address or Password..');
    } else if (error.code === 'auth/too-many-requests') {
      toast.error('Too many login attempts. Please try again later.');
    } else if (error.code === 'auth/network-request-failed') {
      toast.error('Network error. Please check your connection.');
    } else if (error.code === 'auth/internal-error') {
      toast.error('An internal error occurred. Please try again later.');
    } else {
      toast.error('An unknown error occurred during login.');
    }
    });
  };

  const handleGoogleLogin = () => {
    setGoogleAuthLoading(true);
    loginWithGoggle()
    .then((result) => {
      setTimeout(() => {
        setGoogleAuthLoading(false);
        toast.success("Google login successful!");
        navigate("/");
      }, 1000);
    })
    .catch((error) => {
      setGoogleAuthLoading(false);
      if (error.code === 'auth/popup-closed-by-user') {
        toast.error('The popup was closed before completing the sign-in.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        toast.error('Sign-in process was canceled.');
      } else if (error.code === 'auth/account-exists-with-different-credential') {
        toast.error('This email is already associated with a different account.');
      } else if (error.code === 'auth/operation-not-allowed') {
        toast.error('Google sign-in is not enabled. Please contact support.');
      } else if (error.code === 'auth/network-request-failed') {
        toast.error('Network error. Please check your connection.');
      } else if (error.code === 'auth/timeout') {
        toast.error('The request timed out. Please try again.');
      } else if (error.code === 'auth/internal-error') {
        toast.error('An internal error occurred. Please try again later.');
      } else if (error.code === 'auth/unauthorized-domain') {
        toast.error('Unauthorized domain. Please check your Firebase configuration.');
      } else {
        toast.error('An unknown error occurred during Google login.');
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue-gray via-light-pink to-neutral-gray flex items-center justify-center px-4 py-2">
      <div className="bg-neutral-gray shadow-lg rounded-lg p-8 w-full max-w-md my-8">
        <h2 className="text-3xl font-bold text-center text-dark-blue-gray mb-6">
          Login to Lingo Bingo
        </h2>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-mount-fuji-gray">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full border-soft-gray focus:ring-light-blue-gray focus:ring-2"
              {...register("email", { required: "Email is required" })}
              onPointerLeave={(e)=>setEmails(e.target.value)}
            />
            {errors.email && (
              <span className="text-red text-sm">{errors.email.message}</span>
            )}
          </div>
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

          <div className="text-right">
            <Link to={`/forgot-password?email=${encodeURIComponent(emails)}`}
              href=""
              className="text-cherry-blossom-red hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full bg-strong-blue text-white hover:bg-sky-blue">
            Login
          </button>
        </form>

        <div className="divider my-4">OR</div>

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
