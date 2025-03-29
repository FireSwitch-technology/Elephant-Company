import React from "react";
import callicon from "../assets/callicon.png";
import watsappicon from "../assets/watsappicon.png";
import locationicon from "../assets/locationicon.png";
import timeicon from "../assets/timeicon.png";
import emailicon from "../assets/emailicon.png";
import social1 from "../assets/social1.png";
import social2 from "../assets/social2.png";

const Map = ({ margin }) => {
  return (
    <div className=" ">
      <div className={`relative w-full  ${margin}`}>
        <iframe
          width="100%"
          height="736"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=50%25&amp;height=400&amp;hl=en&amp;q=162%20Longboat%20Run%20W,%20Brantford,%20ON%20N3T%200R8+(Elephant%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>

        <div className=" max-w-6xl mx-auto  ">
          <div className=" absolute  bottom-14 mx-6 z-10 bg-white  max-w-[522px] h-[434px] rounded-lg py-[24px] px-[32px] ">
            <h1 className="  text-3xl sm:text-5xl font-bold font-display ">
              Contact Us
            </h1>
            <div className=" flex items-center  space-x-3 py-[15px] ">
              <span className="w-[18px] h-[18px] md:w-[24px]  md:h-[24px] ">
                <img src={callicon} className=" w-full h-full object-cover" />
              </span>
              <span className=" text-base md:text-xl font-normal  font-display">
                Phone: (647) 648-1808
              </span>
            </div>
            <div className=" flex  items-center  space-x-3 pb-[15px]    ">
              <span className="w-[18px] h-[18px] md:w-[24px]  md:h-[24px]">
                <img
                  src={watsappicon}
                  className=" w-full h-full object-cover"
                />
              </span>
              <span className="text-base md:text-xl font-normal font-display">
                WhatsApp: (647) 648-1808
              </span>
            </div>
            <div className=" flex  items-center pb-[15px]    space-x-3 ">
              <span className="w-[18px] h-[18px] md:w-[24px]  md:h-[24px] ">
                <img src={emailicon} className=" w-full h-full object-cover" />
              </span>
              <span className="text-base md:text-xl font-normal font-display">
                Email: Elephantcompany@gmail.com
              </span>
            </div>
            <div className=" flex  items-center pb-[15px]    space-x-3 ">
              <span className="w-[18px] h-[18px] md:w-[24px]  md:h-[24px] ">
                <img
                  src={locationicon}
                  className=" w-full h-full object-cover"
                />
              </span>
              <span className="text-base md:text-xl font-normal  font-display">
                Address: 162 Longboat Run W, Brantford, ON N3T 0R8
              </span>
            </div>
            <div className=" flex  items-center    space-x-3 pb-[15px] ">
              <span className="w-[18px] h-[18px] md:w-[24px]  md:h-[24px] ">
                <img src={timeicon} className=" w-full h-full object-cover" />
              </span>
              <span className="text-base md:text-xl font-normal  font-display">
                Working Hours: Mon - Fri: 9am - 5pm
              </span>
            </div>
            {/*  */}
            <div  onClick={() => window.open("https://www.facebook.com/share/16VcxwA4Bw/?mibextid=wwXIfr", "_blank")}  className=" flex  items-center    space-x-3 pb-[15px] ">
              <span className="w-[18px] h-[18px] md:w-[24px]  md:h-[24px] ">
                <img src={social2} className=" w-full h-full object-cover" />
              </span>
              <span className="text-base md:text-xl font-normal  font-display">
              ElephantCompany
              </span>
            </div>
            {/*  */}
            <div  onClick={() => window.open("https://www.instagram.com/elephantcompanyinc/", "_blank")} className=" flex  items-center    space-x-3 ">
              <span className="w-[18px] h-[18px] md:w-[24px]  md:h-[24px] ">
                <img src={social1} className=" w-full h-full object-cover" />
              </span>
              <span className="text-base md:text-xl font-normal  font-display">
              ElephantCompany
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
