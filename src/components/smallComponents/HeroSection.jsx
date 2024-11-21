import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; 
import AOS from "aos";
import { AiOutlinePlayCircle } from "react-icons/ai"; 
import { FaCheckCircle, FaUserGraduate } from "react-icons/fa";
import female1 from '../../assets/Images/female1.png'
import female2 from '../../assets/Images/female2.png'
import female3 from '../../assets/Images/female3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [reloadSlide, setReloadSlide] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500 ,
      once: false,
    });
    AOS.refresh();
  }, [reloadSlide]);
  return (
    <section className= "bg-gradient-to-br from-neutral-gray to-light-blue-gray pt-14 flex items-center justify-center w-full">
      <Swiper
      className="p-0 w-full"
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() =>setReloadSlide([true])}
      onSwiper={(swiper) => setReloadSlide([true])}
    >
      <SwiperSlide className="w-full">
        <div className="container mx-auto pb-12 md:pb-0 px-2 sm:px-6  xl:px-20">
      <div className="w-full flex flex-col-reverse lg:flex-row md:justify-between items-center">
        <div
          className="lg:w-1/2 lg:pr-4 text-center lg:text-left "
          
        >
          <h1 data-aos="fade-right" className="text-4xl sm:text-5xl font-bold text-dark-blue-gray mb-4">
            Learn Japanese and <span className="text-strong-blue">Move Forward</span>
          </h1>
          <p data-aos="fade-left" className="text-mount-fuji-gray mb-6">
            Master Japanese with our interactive courses and practical lessons.
            Build your confidence and grow your skills with over 60+ engaging courses.
          </p>
          <div className="flex md:justify-start justify-center items-center gap-2 md:gap-4" data-aos="fade-right">
            <Link to={'/start-learning'} className="btn btn-primary bg-cherry-blossom-red hover:bg-red text-white px-6 py-3 rounded-lg border-cherry-blossom-red">
              Get Started
            </Link>
            <Link to={'/start-learning'} className="btn btn-outline border-cherry-blossom-red hover:border-red text-cherry-blossom-red hover:bg-cherry-blossom-pink hover:text-red px-6 py-3 rounded-lg flex items-center gap-2">
              <AiOutlinePlayCircle size={20} /> Watch Intro
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center relative w-full ">
          <img
            src={female1 }
            alt="Student learning Japanese"
            className="rounded-lg mb-6 lg:mb-0 lg:ml-6 w-full h-full "
            data-aos="fade-left"
          />
          <div
            className="absolute top-1 right-1 md:top-24 md:right-[5%] bg-light-blue p-2  md:p-4 rounded-lg shadow-md  flex items-center flex-col justify-center"
            data-aos="fade-up-right"
          >
            
            <div className="flex gap-1 md:gap-2 items-center justify-center text-sm">
            <FaCheckCircle className="text-strong-blue" size={26} />
            <p className="text-lg md:text-2xl font-bold text-deep-navy-gray">60+</p>
            </div>
              <p className="md:text-base text-xs text-dark-blue-gray"> Interactive Courses</p>
          </div>
          {/* second */}
          <div
            className="absolute bottom-20 md:bottom-28 left-1 md:left-10 bg-light-pink text-cherry-blossom-red p-2 md:p-4 rounded-lg shadow-md text-xs md:text-base  md:flex items-center gap-2"
            data-aos="fade-down-left"
          > 
          <div className='flex flex-col gap-1'>
          <div className="flex gap-2 items-center">
          <FaCheckCircle className="text-cherry-blossom-red" size={24} />
          <span>Get 20% off</span>
          </div>
          <div className="flex gap-2 items-center">
          <FaCheckCircle className="text-cherry-blossom-red" size={24} />
          <span>Learn New Skills</span>
          </div>
          </div>
            
          </div>
          <div
            className="absolute bottom-6 right-1 md:right-14 bg-light-blue-gray text-deep-navy-gray p-2 md:p-4 rounded-lg shadow-md flex justify-center flex-col items-center"
            data-aos="fade-down-right"
          >
            <div className="flex gap-2 items-center justify-center">
            <FaUserGraduate className="text-deep-navy-gray" size={24} />
            <p className="text-base md:text-2xl font-bold text-deep-navy-gray">1250+</p>
            </div>
              <p className="text-dark-blue-gray md:text-base text-xs"> Active Students</p>
          </div>
        </div>
      </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="w-full">
      <div className="container mx-auto pb-12 md:pb-0 px-2 sm:px-6  xl:px-20">
      <div className="w-full flex flex-col-reverse lg:flex-row md:justify-between items-center">
        <div
          className="lg:w-1/2 lg:pr-4 text-center lg:text-left "
          
        >
          <h1 data-aos="fade-right" className="text-4xl sm:text-5xl font-bold text-dark-blue-gray mb-4">
          Immerse Yourself in  <span className="text-strong-blue">Japanese Culture</span>
          </h1>
          <p data-aos="fade-left" className="text-mount-fuji-gray mb-6">
          Learning Japanese is not just about the language; it's about experiencing the rich culture. Join our specialized lessons that integrate language with traditions, food, and history.
          </p>
          <div className="flex md:justify-start justify-center items-center gap-2 md:gap-4" data-aos="fade-right">
          <Link to={'/start-learning'} className="btn btn-primary bg-cherry-blossom-red hover:bg-red text-white px-6 py-3 rounded-lg border-cherry-blossom-red">
              Get Started
            </Link>
            <Link to={'/start-learning'} className="btn btn-outline border-cherry-blossom-red hover:border-red text-cherry-blossom-red hover:bg-cherry-blossom-pink hover:text-red px-6 py-3 rounded-lg flex items-center gap-2">
              <AiOutlinePlayCircle size={20} /> Watch Intro
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center relative w-full ">
          <img
            src={female2 }
            alt="Student learning Japanese"
            className="rounded-lg mb-6 lg:mb-0 lg:ml-6 w-full h-full "
            data-aos="fade-left"
          />
          <div
            className="absolute top-1 right-1 md:top-24 md:right-[5%] bg-light-blue p-2  md:p-4 rounded-lg shadow-md  flex items-center flex-col justify-center"
            data-aos="fade-up-right"
          >
            
            <div className="flex gap-1 md:gap-2 items-center justify-center text-sm">
            <FaCheckCircle className="text-strong-blue" size={26} />
            <p className="text-lg md:text-2xl font-bold text-deep-navy-gray">40+</p>
            </div>
              <p className="md:text-base text-xs text-dark-blue-gray">Cultural Lessons</p>
          </div>
          {/* second */}
          <div
            className="absolute bottom-20 md:bottom-28 left-1 md:left-10 bg-light-pink text-cherry-blossom-red p-2 md:p-4 rounded-lg shadow-md text-xs md:text-base  md:flex items-center gap-2"
           data-aos="fade-down-left"
          > 
          <div className='flex flex-col gap-1'>
          <div className="flex gap-2 items-center">
          <FaCheckCircle className="text-cherry-blossom-red" size={24} />
          <span>Live Sessions with <br /> Native Speakers</span>
          </div>
          </div>
          </div>
          <div
            className="absolute bottom-6 right-1 md:right-14 bg-light-blue-gray text-deep-navy-gray p-2 md:p-4 rounded-lg shadow-md flex justify-center flex-col items-center"
            data-aos="fade-down-right"
          >
            <div className="flex gap-2 items-center justify-center">
            <FaCheckCircle className="text-green" size={26} />
            <p className="text-dark-blue-gray md:text-base text-xs text-center">Japanese <br /> Etiquette</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="w-full">
      <div className="container mx-auto pb-12 md:pb-0 px-2 sm:px-6 xl:px-20">
      <div className="w-full flex flex-col-reverse lg:flex-row md:justify-between items-center">
        <div
          className="lg:w-1/2 lg:pr-4 text-center lg:text-left "
          
        >
          <h1 data-aos="fade-right" className="text-4xl sm:text-5xl font-bold text-dark-blue-gray mb-4">
          Speak Japanese with  <span className="text-strong-blue">Confidence</span>
          </h1>
          <p data-aos="fade-left" className="text-mount-fuji-gray mb-6">
          Break the language barrier and communicate effectively in Japanese. Our courses focus on building speaking and listening skills with real-world practice scenarios.
          </p>
          <div className="flex md:justify-start justify-center items-center gap-2 md:gap-4" data-aos="fade-right">
          <Link to={'/start-learning'} className="btn btn-primary bg-cherry-blossom-red hover:bg-red text-white px-6 py-3 rounded-lg border-cherry-blossom-red">
              Get Started
            </Link>
            <Link to={'/start-learning'} className="btn btn-outline border-cherry-blossom-red hover:border-red text-cherry-blossom-red hover:bg-cherry-blossom-pink hover:text-red px-6 py-3 rounded-lg flex items-center gap-2">
              <AiOutlinePlayCircle size={20} /> Watch Intro
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center relative w-full ">
          <img
            src={female3 }
            alt="Student learning Japanese"
            className="rounded-lg mb-6 lg:mb-0 lg:ml-6 w-full h-full "
            data-aos="fade-left"
          />
          <div
            className="absolute top-1 right-1 md:top-24 md:right-[5%] bg-light-blue p-2  md:p-4 rounded-lg shadow-md  flex items-center flex-col justify-center"
            data-aos="fade-up-right"
          >
            
            <div className="flex gap-1 md:gap-2 items-center justify-center text-sm">
            <FaCheckCircle className="text-strong-blue" size={26} />
            <p className="text-lg md:text-2xl font-bold text-deep-navy-gray">50+</p>
            </div>
              <p className="md:text-base text-xs text-dark-blue-gray"> Speaking Exercises</p>
          </div>
          {/* second */}
          <div
            className="absolute bottom-20 md:bottom-28 left-1 md:left-10 bg-light-pink text-cherry-blossom-red p-2 md:p-4 rounded-lg shadow-md text-xs md:text-base  md:flex items-center gap-2"
            data-aos="fade-down-left"
          > 
          <div className='flex flex-col gap-1'>
          <div className="flex gap-2 items-center">
          <FaCheckCircle className="text-cherry-blossom-red" size={24} />
          <span>Join Our Community</span>
          </div>
          </div>
          </div>
          <div
            className="absolute bottom-6 right-1 md:right-14 bg-light-blue-gray  p-2 md:p-4 rounded-lg shadow-md flex justify-center flex-col items-center"
            data-aos="fade-down-right"
          >
            <div className="flex gap-2 items-center justify-center">
            <FaCheckCircle className="text-green" size={24} />
            <p className="text-base font-bold text-deep-navy-gray">Real-Life Scenarios</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default HeroSection;
