import React, { useEffect } from "react";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import heroBg from "../assets/herobg.jpeg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className=" w-full h-fit bg-gray-200 flex items-center justify-center flex-col    ">
      <div className="relative w-full flex items-center justify-center flex-col  ">
        {/* Overlay */}
        <div className="absolute inset-0  bg-gradient-to-b from-black/20 to-black/60"></div>
        <div className="  w-full h-[690px]   ">
          {/* background img */}
          <img src={heroBg} alt="" className=" w-full h-full object-cover" />
        </div>

        {/* content */}
        <div
          data-aos="zoom-in"
          className="absolute top-84 transform -translate-y-1/2 w-full  flex flex-col items-center justify-center gap-5 z-10"
        >
          <h1 className=" text-3xl md:text-5xl max-w-[360px]  md:max-w-3xl  lg:text-[80px] lg:max-w-7xl text-center font-display text-white font-bold">
            Home & Commercial Services You Can Count On
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-display font-normal text-white text-center max-w-xs sm:max-w-[377px] md:max-w-lg lg:max-w-2xl">
            We specialize in top-tier home and commercial renovations, painting,
            and contracting services in Brantford and surrounding areas.
          </p>
        </div>
      </div>

      {/* form start from here */}
      <div className=" -mt-20 z-10 ">
        <div className="  bg-black-100 lg:w-6xl  p-10 m-auto rounded-2xl sm:grid sm:grid-cols-3 grid grid-cols-1 justify-between gap-[47px] ">
          {/* vector1 */}
          <div className="flex flex-col items-center gap-2 ">
            <img src={vector1} alt="" className=" w-14 h-12 object-cover" />
            <p className="font-display text-blue-100 font-bold text-5xl sm:text-6xl">
              150+
            </p>
            <p className=" text-xl font-display font-normal text-white">
              Projects Completed
            </p>
          </div>
          {/* vector2 */}
          <div className="flex flex-col items-center gap-2 ">
            <img src={vector2} alt="" className=" w-14 h-12 object-cover" />
            <p className="font-display text-blue-100 font-bold text-5xl sm:text-6xl">
              10+
            </p>
            <p className=" text-xl font-display font-normal text-white">
              Years of Experience
            </p>
          </div>
          {/* vector3 */}
          <div className="flex flex-col items-center gap-2">
            <img src={vector3} alt="" className=" w-14 h-12 object-cover" />
            <p className="font-display text-blue-100 font-bold text-5xl sm:text-6xl">
              99%
            </p>
            <p className=" text-xl font-display font-normal text-white">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
