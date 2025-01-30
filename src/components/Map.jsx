import React from "react";

const Map = ({ margin }) => {
  return (
    <div className=" ">
      <div className={`relative  ${margin}`}>
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=50%25&amp;height=400&amp;hl=en&amp;q=162%20Longboat%20Run%20W,%20Brantford,%20ON%20N3T%200R8+(Elephant%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>

        <div className=" absolute z-10 bottom-14 mx-10  bg-white max-w-[522px] rounded-lg p-9">
          <h1 className="  text-3xl sm:text-5xl font-bold font-display mb-3 ">
            Contact Us
          </h1>
          <p className=" text-base sm:text-xl font-normal mb-3 ">
            Phone: (647) 648-1808
          </p>
          <p className=" text-base sm:text-xl font-normal mb-3 ">
            Email: elephant@gmail.com
          </p>
          <p className=" text-base sm:text-xl font-normal mb-3 ">
            Address: 162 Longboat Run W, Brantford, ON N3T 0R8
          </p>
          <p className=" text-base sm:text-xl font-normal mb-3 ">
            Working Hours: Mon - Fri: 9am - 5pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
