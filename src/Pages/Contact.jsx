import React from "react";
import Map from "../components/Map";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <div className=" w-full h-screen m-auto bg-gray-200  ">
      <div className=" pt-40">
        {" "}
        <div className="mb-4 text-sm text-gray-600 max-w-6xl mx-auto  p-3">
          <a href="/" className="text-base text-blue-500 hover:underline">
            Home
          </a>{" "}
          &gt;{" "}
          <span className="font-bold text-base font-display text-black">
            Contact
          </span>
        </div>
        <Map className=" " />
      </div>
    </div>
  );
};

export default Contact;
