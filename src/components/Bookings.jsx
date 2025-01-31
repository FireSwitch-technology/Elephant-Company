import React from "react";

const Bookings = () => {
  return (
    <div className="bg-gray-100 pt-12 px-4">
      <div className=" flex flex-col justify-center items-center m-auto py-20">
        <h1 className=" font-bold font-display text-5xl mb-10">Booking</h1>
        <div className=" max-w-4xl  grid grid-cols-1 gap-10   ">
          <div className=" grid grid-cols-1 lg:grid-cols-2  justify-between items-center gap-10 ">
            <input
              type="text"
              placeholder="Name"
              className=" bg-white py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-[365px] "
            />
            <input
              type="text"
              placeholder="Email"
              className=" bg-white py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-[365px] "
            />

            <input
              type="text"
              placeholder="Phone"
              className=" bg-white py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-[365px] "
            />
            <input
              type="text"
              placeholder="Services"
              className=" bg-white py-2 px-6 rounded-full shadow-lg text-xl text-black-100 w-[365px] "
            />
          </div>
          <input
            type="text"
            placeholder="Message"
            className=" bg-white py-5 px-6 rounded-full shadow-lg text-xl text-black-100 w-full"
          />
        </div>
        <button className=" text-white font-display bg-blue-100 py-2 px-3 rounded-full mt-4">
          {" "}
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default Bookings;
