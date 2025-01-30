import React from "react";
import Map from "../components/Map";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <div className=" w-full h-fit m-auto bg-gray-100  ">
      <div className=" pt-40">
        {" "}
        <p className="p-5 font-normal text-xl text-blue-100 flex justify-baseline items-center">
          Home <IoIosArrowForward />
          <span className=" text-black font-bold text-xl"> Contact Us</span>
        </p>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
