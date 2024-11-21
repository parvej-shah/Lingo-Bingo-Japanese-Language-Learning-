import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useAuth } from "../authProvider/AuthProvider";
const AboutUs = () => {
  const {setTitle} = useAuth();

  useEffect(() => {
        setTitle('About Us|Lingo-Bingo')
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className="min-h-screen bg-neutral-gray p-6 flex flex-col items-center justify-center">
      <h1
        className="text-4xl md:text-5xl font-bold text-center text-strong-blue mb-10"
        data-aos="fade-up"
      >
        About Us
      </h1>
      <div
        className="bg-white rounded-lg shadow-lg max-w-4xl p-8 space-y-6"
        data-aos="fade-up"
      >
        <p className="text-lg text-dark-blue-gray leading-relaxed">
          Welcome to <span className="text-strong-blue font-bold">Lingo Bingo</span>! 
          Our mission is to make learning Japanese fun, interactive, and accessible for everyone. 
          Whether you’re a beginner or looking to refine your skills, we offer engaging lessons, cultural insights, and practical resources to help you achieve your goals.
        </p>
        <p className="text-lg text-dark-blue-gray leading-relaxed">
          At <span className="text-strong-blue font-bold">Lingo Bingo</span>, we believe language learning is more than just vocabulary and grammar. 
          It’s about connecting with a rich culture, embracing its beauty, and using the language confidently in everyday situations.
        </p>
        <div>
          <h2 className="text-2xl font-bold text-cherry-blossom-red mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 text-dark-blue-gray space-y-2">
            <li>Interactive lessons designed for learners of all levels.</li>
            <li>40+ cultural lessons to deepen your understanding of Japan.</li>
            <li>Live sessions with native speakers to enhance your fluency.</li>
            <li>User-friendly interface and responsive design.</li>
            <li>Comprehensive tutorials and vocabulary resources.</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-bold text-strong-blue mb-8">
            Ready to start your language journey?
          </h2>
          <Link
            to={"/start-learning"}
            className="px-6 py-3 bg-strong-blue text-white font-bold rounded-lg shadow-lg hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          >
            Start Learning Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
