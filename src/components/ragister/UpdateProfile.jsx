import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const user = auth.currentUser;

      if (user) {
        await updateProfile(user, {
          displayName: data.name,
          photoURL: data.photoURL,
        });
        toast.success("Profile updated successfully!");
        navigate("/my-profile");
      } else {
        toast.warning("No user is logged in.");
      }
    } catch (error) {
      toast.error("An ERROR! Occured.Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-gray flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-center text-strong-blue mb-6">
          Update Profile
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          data-aos="fade-up"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-dark-blue-gray font-medium mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-soft-gray focus:ring-2 focus:ring-strong-blue focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="photoURL"
              className="block text-dark-blue-gray font-medium mb-2"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              type="text"
              placeholder="Enter photo URL"
              {...register("photoURL", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-soft-gray focus:ring-2 focus:ring-strong-blue focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-strong-blue text-white font-bold rounded-lg shadow-lg hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          >
            Update Information
          </button>
        </form>
        <button
          onClick={() => reset()}
          className="mt-4 text-sm text-soft-gray-2 hover:text-dark-blue-gray"
        >
          Reset Form
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
