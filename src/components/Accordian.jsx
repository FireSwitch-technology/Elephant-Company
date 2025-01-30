import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Accordian = () => {
  return (
    <div className=" py-2">
      <button className=" flex justify-between w-full">
        {" "}
        <span>This is the tittle</span>{" "}
        <span>
          <MdOutlineKeyboardArrowDown size={25} />
        </span>
      </button>
    </div>
  );
};

export default Accordian;
