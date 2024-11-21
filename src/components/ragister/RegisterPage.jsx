import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { ClipLoader } from "react-spinners"; 
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../authProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {createUser,googleAuthLoading,loginWithGoggle,setGoogleAuthLoading,setTitle} = useAuth();
  useEffect(()=>{
    setTitle('Register |Lingo-Bingo')
  },[])
  const handleRegister = (data) => {
    const { name, email, photoURL, password } = data;
    createUser(email,password)
    .then(res=>{
        toast.success("Registration successful!");
        if(name && photoURL){
          updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          }).then(() => {
          }).catch((error) => {
          });
        }
        navigate("/");
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
    <div className="min-h-screen bg-gradient-to-br from-light-blue-gray via-light-pink to-neutral-gray flex items-center justify-center px-4 py-4">
      <div className="bg-neutral-gray m-2 md:m-8 shadow-lg rounded-lg p-8 w-full max-w-xl">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center text-dark-blue-gray mb-6">
            Register For Lingo Bingo
          </h2>
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
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
            <button
              type="submit"
              className="btn btn-primary w-full bg-strong-blue text-white hover:bg-sky-blue">
              Register
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
