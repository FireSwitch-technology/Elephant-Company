import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Accordian = ({ title, answer }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div className=" p-4 mb-4 w-full bg-white rounded-full">
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className=" flex justify-between w-full"
      >
        {" "}
        <span className=" text-start">{title}</span>{" "}
        {accordianOpen ? (
          <span>
            <IoIosArrowBack />
          </span>
        ) : (
          <span>
            <IoIosArrowDown />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordian;
