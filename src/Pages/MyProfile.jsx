import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../authProvider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css"; 

const MyProfile = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    const {user} = useAuth();
  const { displayName, email, photoURL } = user;
  const name = displayName || "Guest";
  const image = photoURL;
  return (
    <div className="min-h-screen bg-neutral-gray p-2 md:p-8">
      <h1
        className="text-4xl md:text-5xl font-bold text-center text-strong-blue mb-10"
        data-aos="fade-up"
      >
        Welcome, {name}!
      </h1>

      <div
        className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto p-6 flex flex-col items-center text-center"
        data-aos="fade-up"
      >
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-32 h-32 rounded-full mb-6 shadow-md object-cover"
        />

        <h2 className="text-2xl font-bold text-dark-blue-gray mb-2">{name}</h2>
        <p className="text-soft-gray-2 text-lg mb-4">{email}</p>

        <Link
          to="/update-profile"
          className="px-6 py-3 bg-strong-blue text-white font-bold rounded-lg shadow-lg hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;

