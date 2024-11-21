import React, { useEffect } from "react";
import { FaBullseye, FaLanguage, FaBookReader, FaMagic } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animation styles

const MissionAndVocabulary = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 
        ,easing: "ease-in-out", // Set easing function
        once: false,
    });

  }, []);

  return (
    <section className="bg-light-blue-gray py-16 px-6 sm:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue-gray mb-6">
            Our Mission: Empowering You to Master Japanese
          </h2>
          <p className="text-mount-fuji-gray mb-8">
            At <span className="text-strong-blue font-bold">Lingo Bingo</span>, our mission is to make learning Japanese 
            engaging, efficient, and fun. We believe that understanding vocabulary is the foundation of mastering any 
            language, and we’re here to help you achieve fluency with ease.
          </p>
          <p className="text-mount-fuji-gray mb-8">
            With interactive lessons, cultural insights, and practice tools, our platform immerses you in both the 
            language and the rich culture of Japan. Build your confidence step-by-step with real-life vocabulary 
            applications.
          </p>
        </div>
        <div
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8"
          data-aos="fade-left"
        >
          <div className=" bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center items-center">
            <FaBullseye size={30} className="text-strong-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-dark-blue-gray">
                Clear Goals
              </h3>
              <p className="text-sm text-soft-gray">
                Set daily vocabulary goals and track your progress with ease.
              </p>
            </div>
          </div>
          <div className=" bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-down-left">
          <div className="flex justify-center items-center">
            <FaLanguage size={30} className="text-strong-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-dark-blue-gray">
                Interactive Lessons
              </h3>
              <p className="text-sm text-soft-gray">
                Learn vocabularies through engaging activities and quizzes.
              </p>
            </div>
          </div>
          <div className=" bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center items-center">
            <FaBookReader size={30} className="text-strong-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-dark-blue-gray">
                Cultural Context
              </h3>
              <p className="text-sm text-soft-gray">
                Understand vocabulary within the context of Japanese culture.
              </p>
            </div>
          </div>
          <div className=" bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up-left">
            <div className="flex justify-center items-center">
            <FaMagic size={30} className="text-strong-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-dark-blue-gray">
                Memory Boost
              </h3>
              <p className="text-sm text-soft-gray">
                Use scientifically backed techniques to retain vocabulary longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVocabulary;
