import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicedata from "../Data/servicedata";

const Ourservice = () => {
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
          {servicedata.map(({ id, image, name }) => (
            <div
              key={id}
              className=" relative max-w-[480px] h-[490px] rounded-3xl "
            >
              <img
                src={image}
                alt=""
                className=" w-full h-full object-cover rounded-3xl "
              />
              <p className="absolute bottom-3 left-5 text-3xl font-display font-medium  text-white ">
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
