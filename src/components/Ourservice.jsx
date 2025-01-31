import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video1 from "../assets/materials/homereno.mp4";
import video2 from "../assets/materials/plastering.mp4";
import video3 from "../assets/materials/interior.mp4";
import video4 from "../assets/materials/commreno.mp4";
import video5 from "../assets/materials/Floorinstallation.mp4";

const Ourservice = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0; // Reset video to the beginning
  };

  const videoBg = [
    { id: 1, video: video2, name: "Home Renovations" },
    { id: 2, video: video4, name: "Interior & Exterior Painting" },
    { id: 3, video: video5, name: "Flooring Installation" },
    { id: 4, video: video3, name: "Commercial Renovations" },
    { id: 5, video: video2, name: "Drywall & Plastering" },
  ];
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className=" bg-gray-100 m-auto lg:px-36 px-10 py-12  grid grid-cols-1  justify-center items-center gap-10   ">
      <div className=" flex flex-col items-center justify-center  ">
        <h1
          data-aos="zoom-in"
          className=" font-bold text-5xl font-display text-black mb-14"
        >
          {" "}
          Our Service
        </h1>

        {/*  */}

        <div className="flex flex-wrap justify-evenly items-center  gap-3 ">
          {videoBg.map(({ id, video, name }, index) => (
            <div
              key={id}
              data-aos="zoom-in"
              data-aos-delay="200"
              className=" relative max-w-[450px] sm:w-[450px] h-[500px] rounded-3xl "
            >
              <div className="absolute  top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black to-transparent opacity-50 rounded-3xl"></div>
              <video
                src={video}
                ref={(el) => (videoRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                loop
                muted
                className=" w-full h-full object-cover rounded-3xl"
              />

              <p
                className={`absolute ${
                  index === 0 ? "top-0" : "bottom-0"
                }  left-5 text-3xl font-display font-medium  text-white `}
              >
                {name}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
