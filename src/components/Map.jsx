import React from "react";
import callicon from "../assets/callicon.png";
import watsappicon from "../assets/watsappicon.png";
import locationicon from "../assets/locationicon.png";
import timeicon from "../assets/timeicon.png";
import emailicon from "../assets/emailicon.png";

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

        <div className=" absolute z-10 bottom-14 left-3 bg-white mx-auto max-w-[360px] md:max-w-[500px] rounded-lg p-4">
          <h1 className="  text-3xl sm:text-5xl font-bold font-display mb-5 ">
            Contact Us
          </h1>
          <div className=" flex items-center justify-baseline space-x-3 ">
            <span className="max-w-[24px]  h-[24px] ">
              <img src={callicon} className=" w-full h-full object-cover" />
            </span>
            <span className=" text-base md:text-xl font-normal mb-3 font-display">
              Phone: (647) 648-1808
            </span>
          </div>
          <div className=" flex  items-center justify-baseline space-x-3   ">
            <span className="max-w-[24px]  h-[24px] ">
              <img src={watsappicon} className=" w-full h-full object-cover" />
            </span>
            <span className="text-base md:text-xl font-normal mb-3 font-display">
              WhatsApp: (647) 648-1808
            </span>
          </div>
          <div className=" flex  items-center justify-baseline space-x-3 ">
            <span className="max-w-[24px]  h-[24px] ">
              <img src={emailicon} className=" w-full h-full object-cover" />
            </span>
            <span className="text-base md:text-xl font-normal mb-3 font-display">
              Email: Elephantcompany@gmail.com
            </span>
          </div>
          <div className=" flex  items-center justify-baseline space-x-3 ">
            <span className="max-w-[24px]  h-[24px] ">
              <img src={locationicon} className=" w-full h-full object-cover" />
            </span>
            <span className="text-base md:text-xl font-normal mb-3 font-display">
              Address: 162 Longboat Run W, Brantford, ON N3T 0R8
            </span>
          </div>
          <div className=" flex  items-center justify-baseline space-x-3 ">
            <span className="max-w-[24px] h-[24px] ">
              <img src={timeicon} className=" w-full h-full object-cover" />
            </span>
            <span className="text-base md:text-xl font-normal mb-3 font-display">
              Working Hours: Mon - Fri: 9am - 5pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
