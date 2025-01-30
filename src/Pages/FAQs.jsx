import React from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import Accordian from "../components/Accordian";
import Womansmile from "../assets/womansmile.png";

const FAQs = () => {
  return (
    <div className=" w-full h-fit m-auto bg-gray-100  ">
      <div className=" pt-40 max-w-6xl mx-auto  p-3">
        <p className="font-normal text-base sm:text-xl text-blue-100 flex justify-baseline items-center">
          Home
          <span className=" text-black font-bold text-base sm:text-xl">
            {" "}
            FAQs
          </span>
        </p>
        <div className="mt-8 ">
          <h1 className=" text-5xl font-bold font-display">
            Curious Minds Wants to Know
          </h1>
          <div className=" flex flex-col sm:flex-row sm:flex  justify-between items-center">
            {/* accordian */}
            <div className="p-4  w-[100%] sm:w-[60%] bg-white rounded-lg ">
              {/* <Accordian /> */}
            </div>
            <div className="  w-[100%] sm:w-[30%] h-[490px] ">
              <img
                src={Womansmile}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
