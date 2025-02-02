import React, { useEffect } from "react";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="  w-full h-[690px]   ">
          {/* background img */}
          <img
            src="https://s3-alpha-sig.figma.com/img/7084/7b04/796fe7a8e3775a09d11dd612d1f4c04a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BhZczWaadiZ6jNvs9GmztIFWyqbxanuWYAsc8Vos0kqVQkLgwu66BEL2WVlP-K1I1FYin5Xqk5sJg6PmgF1GdZexfUhOilQZ6-3zutV~c6TLdZf1xvD~IoDZKn2NXS4ieZldbjujTN9PvXxu0xTlTqxPVwjSJah~itT7n9f70ohTYlKzYudJgU19zxsVudhvhy7DAXIgeIRos2Qdi7hcmXtoZn1ZNIDo97Xpjh-DrdatFO3sxYH9vHc2pciKr9PwqVp8iYWW5gNmgFgANyC3FuFauJlzKW07LHfjc5j-EdoPFMCVKusuq1PXzAlGDjLSD6ZSCt17nrJuk8ToYBlPXg__"
            alt=""
            className=" w-full h-full object-cover"
          />
        </div>

        {/* content */}
        <div
          data-aos="zoom-in"
          className="absolute top-1/2 transform -translate-y-1/2 w-full px-4 sm:px-8 flex flex-col items-center justify-center gap-5 z-10"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-display text-white font-bold">
            Home & Commercial Services You Can Count On
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-display font-normal text-white text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            We specialize in top-tier home and commercial renovations, painting,
            and contracting services in Brantford and surrounding areas.
          </p>
        </div>
      </div>

      {/* form start from here */}
      <div className=" -mt-20 z-10 ">
        <div className="  bg-black-100 lg:w-6xl  p-8 m-auto rounded-2xl sm:grid sm:grid-cols-3 grid grid-cols-1 gap-5 text-center ">
          {/* vector1 */}
          <div className="flex flex-col items-center gap-2 justify-center">
            <img src={vector1} alt="" className=" w-14 h-12 object-cover" />
            <p className="font-display text-blue-100 font-bold text-5xl sm:text-6xl">
              150+
            </p>
            <p className=" text-xl font-display font-normal text-white">
              Projects Completed
            </p>
          </div>
          {/* vector2 */}
          <div className="flex flex-col items-center gap-2 justify-center">
            <img src={vector2} alt="" className=" w-14 h-12 object-cover" />
            <p className="font-display text-blue-100 font-bold text-5xl sm:text-6xl">
              150+
            </p>
            <p className=" text-xl font-display font-normal text-white">
              Years of Experience
            </p>
          </div>
          {/* vector3 */}
          <div className="flex flex-col items-center gap-2 justify-center">
            <img src={vector3} alt="" className=" w-14 h-12 object-cover" />
            <p className="font-display text-blue-100 font-bold text-5xl sm:text-6xl">
              150+
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
