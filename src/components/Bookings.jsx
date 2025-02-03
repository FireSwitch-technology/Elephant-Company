import React from "react";
import elephant from "../assets/elephant2.svg";

const Bookings = () => {
  return (
    <div className="bg-gray-200 pt-12 px-4 h-screen  relative">
      {/* content */}
      <div className="flex flex-col justify-center items-center m-auto py-20 z-30 relative">
        <h1 className="font-bold font-display text-5xl mb-10">Booking</h1>
        <div className="max-w-3xl w-full grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10">
            <input
              type="text"
              placeholder="Name"
              className="bg-white font-normal font-display py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-white font-normal font-display  py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-white font-normal font-display  py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-full"
            />
            <input
              type="text"
              placeholder="Service"
              className="bg-white font-normal font-display  py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-full "
            />
          </div>
          <textarea
            placeholder="Message"
            className="bg-white font-normal font-display  py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-full h-20"
          ></textarea>
        </div>
        <button className="text-white font-display bg-blue-200 py-2 px-6 rounded-full mt-[32px]  ">
          Request a Quote
        </button>
      </div>
      {/* absolute imge */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] z-10 hidden sm:flex ">
        {" "}
        <img src={elephant} className=" w-full h-full  object-cover" />
      </div>
    </div>
  );
};

export default Bookings;
