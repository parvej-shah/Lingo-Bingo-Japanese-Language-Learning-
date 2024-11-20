import React from "react";
import { FaUserPlus, FaBook, FaChartLine, FaUserCheck } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure you import AOS styles
import mountainFuji from '../../assets/Images/mountain-fuji.jpg'
const JoinUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="bg-neutral-gray py-16 px-6 sm:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
        {/* Left Section: Image */}
        <div className="lg:w-1/2" data-aos="fade-left">
          <img
            src={mountainFuji}
            alt="Japanese Culture"
            className="rounded-lg shadow-xl w-full"
          />
        </div>

        {/* Right Section: Content */}
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-blue-gray mb-4">
            Find Out Why You Should Learn With Lingo Bingo
          </h1>
          <p className="text-mount-fuji-gray mb-6">
            Immerse yourself in the rich culture of Japan while mastering the language. Join our courses to explore the traditions, art, food, and more!
          </p>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
            <div className=" bg-white p-6 rounded-lg shadow-md" data-aos="fade-down-right">
              <div className="flex justify-center md:justify-start items-center">
              <FaUserPlus size={30} className="text-strong-blue" />
                </div>
              <div>
                <h3 className="font-semibold text-lg">Create Account</h3>
                <p className="text-sm text-soft-gray">Get started by signing up and exploring our free resources.</p>
              </div>
            </div>

            <div className=" bg-white p-6 rounded-lg shadow-md" data-aos="fade-down-left">
            <div className="flex justify-center md:justify-start items-center">
              <FaBook size={30} className="text-strong-blue" /></div>
              <div>
                <h3 className="font-semibold text-lg">Select Course</h3>
                <p className="text-sm text-soft-gray">Choose from various courses focused on Japanese culture and language.</p>
              </div>
            </div>

            <div className=" bg-white p-6 rounded-lg shadow-md" data-aos="fade-up-left">
            <div className="flex justify-center md:justify-start items-center">
              <FaChartLine size={30} className="text-strong-blue" />
            </div>
              <div>
                <h3 className="font-semibold text-lg">Learn Your Skill</h3>
                <p className="text-sm text-soft-gray">Enhance your language skills through interactive lessons and activities.</p>
              </div>
            </div>
            <div className=" bg-white p-6 rounded-lg shadow-md" data-aos="fade-up-right">
                <div className="flex justify-center md:justify-start items-center">
              <FaUserCheck size={30} className="text-strong-blue" />
                </div>
              <div>
                <h3 className="font-semibold text-lg">Success Story</h3>
                <p className="text-sm text-soft-gray">See how our students have succeeded in mastering Japanese and its culture.</p>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up-left">
            <button className="btn btn-primary bg-strong-blue text-white rounded-lg px-8 py-3 flex items-center gap-2">
              <AiOutlinePlayCircle size={20} /> Start Learning
            </button>
            <button className="btn btn-outline hover:bg-cherry-blossom-pink hover:border-cherry-blossom-red hover:text-red border-strong-blue text-strong-blue rounded-lg px-8 py-3 flex items-center gap-2">
              <AiOutlinePlayCircle size={20} /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
