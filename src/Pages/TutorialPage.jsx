import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const TutorialPage = () => {
  const navigate = useNavigate();


  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const tutorialVideos = [
    "https://www.youtube.com/embed/rGrBHiuPlT0?si=ZKOzlztaQcEYBdwP",
    "https://www.youtube.com/embed/bOUqVC4XkOY?si=t2sn3K6D_tQhaICx",
    "https://www.youtube.com/embed/JnoZE51WZg4?si=RQNl_w8DTcSFnVNK",
    "https://www.youtube.com/embed/k74yjmfFb_A?si=M34Z5or7Lt5tKRm4",
    "https://www.youtube.com/embed/KUIWRsVZZZA?si=QOMLlPirRqL2sR-O",
    "https://www.youtube.com/embed/ZGGufccTLso?si=lkhfiZiNgL4hNmWr",
    "https://www.youtube.com/embed/W0n-ODPwtzA?si=E2KQPOIBRKZfRTcj",
    "https://www.youtube.com/embed/p9PEIsOzJ5E?si=NbYgDeHaNiEv5j7A",
    "https://www.youtube.com/embed/Pc86Xg2MX-U?si=Q2E7OHPLR_9k2bbY"
  ];

  return (
    <div className="min-h-screen bg-neutral-gray p-6">
    <div className="container mx-auto">

      <h1
        className="text-4xl md:text-5xl font-bold text-center text-strong-blue mb-10"
        data-aos="fade-down"
      >
        Tutorials - Master Japanese!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorialVideos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <iframe
              className="w-full h-60"
              src={video}
              title={`Tutorial ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-dark-blue-gray">
                Episode {index + 1}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to={"/start-learning"}
          className="px-6 py-3 bg-strong-blue text-white font-bold rounded-lg shadow-lg hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          Learn Vocabularies
        </Link>
      </div>
    </div>
    </div>
  );
};

export default TutorialPage;
