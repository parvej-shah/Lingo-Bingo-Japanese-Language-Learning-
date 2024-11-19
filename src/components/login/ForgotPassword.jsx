import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import { useAuth } from "../../authProvider/AuthProvider";

export default function ForgotPassword() {
const {emails} = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
console.log(emails);
  useEffect(() => {
    if (emails) {
      setValue("email", emails);
    }
  }, [emails, setValue]);

  const onSubmit = async (data) => {
    const { email } = data;

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "Reset email sent! Check your inbox to reset your password."
      );
      window.open('https://mail.google.com', '_blank');
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No account found for this email.");
      } else {
        toast.error("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-blue-gray via-light-pink to-neutral-gray">
      <div className="bg-neutral-gray p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-strong-blue mb-4 text-center">
          Reset Password
        </h2>
        <p className="text-soft-gray-2 mb-6 text-center">
          Enter your email address to reset your password.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              className={`input input-bordered w-full ${
                errors.email ? "border-red" : ""
              }`}
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4 bg-strong-blue text-white hover:bg-sky-blue"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
