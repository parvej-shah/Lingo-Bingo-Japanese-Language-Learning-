import React, { useEffect } from "react";
import CountUp from "react-countup";
import { FaUsers, FaBook, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SuccessSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100, 
      once: true, 
    });
  }, []);

  const stats = [
    {
      id: 1,
      icon: <FaUsers size={30} className="text-strong-blue" />,
      count: 1250,
      label: "Active Users",
      bgColor: "bg-light-blue",
      animation: "fade-up",
    },
    {
      id: 2,
      icon: <FaBook size={30} className="text-green" />,
      count: 200,
      label: "Lessons Available",
      bgColor: "bg-light-pink",
      animation: "fade-down",
    },
    {
      id: 3,
      icon: <FaGraduationCap size={30} className="text-orange" />,
      count: 3210,
      label: "Vocabulary Learned",
      bgColor: "bg-light-red",
      animation: "fade-up",
    },
    {
      id: 4,
      icon: <FaChalkboardTeacher size={30} className="text-sky-blue" />,
      count: 30,
      label: "Tutorials Completed",
      bgColor: "bg-light-blue-gray",
      animation: "fade-down",
    },
  ];

  return (
    <section className="py-16 bg-neutral-gray">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold text-dark-blue-gray mb-8"
          data-aos="fade-in"
        >
          Our Success Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 lg:mx-0">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex gap-2 items-center justify-start p-2 py-6 rounded-lg shadow-md bg-white"
              data-aos={stat.animation}
            >
              <div
                className={`p-3 rounded-full ${stat.bgColor} flex items-center justify-center`}
              >
                {stat.icon}
              </div>
              <div className="text-start">
              <h3 className="text-2xl font-bold text-dark-blue-gray">
                <CountUp start={0} end={stat.count} duration={3} separator="," />+
              </h3>
              <p className="text-mount-fuji-gray">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
