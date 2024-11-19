import React, { useEffect } from "react";
import "aos/dist/aos.css"; 
import AOS from "aos";
import { AiOutlinePlayCircle } from "react-icons/ai"; 
import { FaCheckCircle, FaUserGraduate } from "react-icons/fa"; 
import female1 from '../../assets/Images/female1.png'
const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className= "bg-gradient-to-br from-neutral-gray to-light-blue-gray min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20">
      <div className="container mx-auto">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div
          className="lg:w-1/2 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-blue-gray mb-4">
            Learn Japanese and <span className="text-strong-blue">Move Forward</span>
          </h1>
          <p className="text-mount-fuji-gray mb-6">
            Master Japanese with our interactive courses and practical lessons.
            Build your confidence and grow your skills with over 60+ engaging courses.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="btn btn-primary bg-strong-blue hover:bg-sky-blue text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
            <button className="btn btn-outline border-strong-blue text-strong-blue hover:bg-light-blue px-6 py-3 rounded-lg flex items-center gap-2">
              <AiOutlinePlayCircle size={20} /> Watch Intro
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center relative">
          <img
            src={female1 }
            alt="Student learning Japanese"
            className="rounded-lg mb-6 lg:mb-0 lg:ml-6 w-full h-full"
            data-aos="fade-left"
          />
          <div
            className="absolute top-5 right-5 bg-light-blue text-dark-blue-gray p-4 rounded-lg shadow-md flex items-center gap-2"
            data-aos="fade-in"
          >
            <FaCheckCircle className="text-strong-blue" size={20} />
            <div>
              <span className="text-2xl font-bold">60+</span>
              <span> Interactive Courses</span>
            </div>
          </div>
          <div
            className="absolute bottom-10 left-10 bg-light-pink text-cherry-blossom-red p-4 rounded-lg shadow-md flex items-center gap-2"
            data-aos="fade-in"
          >
            <FaCheckCircle className="text-cherry-blossom-red" size={20} />
            <span>Get 20% off on every course</span>
          </div>
          <div
            className="absolute bottom-20 right-20 bg-light-blue-gray text-deep-navy-gray p-4 rounded-lg shadow-md flex items-center gap-2"
            data-aos="fade-in"
          >
            <FaUserGraduate className="text-dark-blue-gray" size={20} />
            <div>
              <span className="text-2xl font-bold">1250+</span>
              <span> Active Students</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
