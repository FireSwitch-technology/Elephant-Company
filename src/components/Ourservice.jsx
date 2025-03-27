import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video1 from "../assets/materials/homereno.mp4";
import video2 from "../assets/materials/plastering.mp4";
import video3 from "../assets/materials/interior.mp4";
import video4 from "../assets/materials/commreno.mp4";
import video5 from "../assets/materials/Floorinstallation.mp4";
import imgOne from "../assets/materials/home-renovation.png";
import imgTwo from "../assets/materials/interior-painting.png";
import imgThree from "../assets/materials/flooring-installation.png";
import imgFour from "../assets/materials/commercial-renovation.png";
import imgFive from "../assets/materials/drywall.png";

const Ourservice = () => {
  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0; // Reset video to the beginning
  };

  const ImageBg = [
    {
      id: 1,
      Image: imgOne,
      name: "Home Renovations",
    },
    {
      id: 2,
      Image: imgTwo,
      name: "Interior & Exterior Painting",
    },
    {
      id: 3,
      Image: imgThree,
      name: "Flooring Installation",
    },
    {
      id: 4,
      Image: imgFour,
      name: "Commercial Renovations",
    },
    {
      id: 5,
      Image: imgFive,
      name: "Drywall & Plastering",
    },
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
    <div className="px-4 py-12 w-full bg-gray-200 flex flex-col items-center justify-center ">
      <div className=" mx-auto  max-w-6xl    ">
        <h1
          data-aos="zoom-in"
          className=" text-center font-bold text-5xl font-display text-black mb-14"
        >
          Our Service
        </h1>

        {/*  */}

        <div className="flex flex-wrap justify-evenly items-center ">
          {ImageBg.map(({ id, Image, name }) => (
            <div
              key={id}
              data-aos="zoom-in"
              data-aos-delay="200"
              className=" relative  w-full sm:w-[48%] md:w-[45%] lg:w-[48%] h-[500px] rounded-3xl mb-8 "
            >
              <div className=" absolute  top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black to-transparent opacity-50 rounded-3xl"></div>
              <img
                src={Image}
                className=" w-full h-full object-cover rounded-3xl"
              />

              <p className="absolute bottom-4 left-5 text-xl md:text-3xl font-display font-medium  text-white">
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
