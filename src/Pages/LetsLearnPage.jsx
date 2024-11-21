import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useAuth } from "../authProvider/AuthProvider";

const LetsLearnPage = () => {
  const {setTitle} = useAuth();
  useEffect(() => {
    setTitle('Start Learning|Lingo-Bingo')
    AOS.init({ duration: 1000 });
  }, []);

  const lessons = [
    "Lesson 1",
    "Lesson 2",
    "Lesson 3",
    "Lesson 4",
    "Lesson 5",
    "Lesson 6",
    "Lesson 7",
    "Lesson 8",
    "Lesson 9",
    "Lesson 10",
  ];

  return (
    <div className="min-h-screen bg-neutral-gray p-6">

    <div className="container mx-auto">
      <h1
        className="text-4xl md:text-5xl font-bold text-center text-strong-blue mb-10"
        data-aos="fade-up"
      >
        Let’s Learn Japanese!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lessons.map((lesson, index) => (
          <Link
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-light-blue-gray transition-all duration-300 transform hover:scale-105 cursor-pointer"
            to={`/lesson/${index + 1}`}
            data-aos="fade-up"
          >
            <h2 className="text-lg font-semibold text-dark-blue-gray">
              {lesson}
            </h2>
          </Link>
        ))}
      </div>

      <div className="mt-16" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-dark-blue-gray text-center mb-6">
          Learn the Japanese Alphabet
        </h2>
        <div className="flex justify-center">
          <iframe
            className="rounded-lg shadow-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-1AAnvJ27ig?si=vTE1xl9jR_3d5_rn"
            title="Japanese Alphabet Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          to={"/tutorials"}
          className="px-6 py-3 bg-strong-blue text-white font-bold rounded-lg shadow-lg hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          View More Tutorials
        </Link>
      </div>
    </div>
    </div>
  );
};

export default LetsLearnPage;
