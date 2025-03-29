import React from "react";

const MapComp = () => {
  return (
    <div>
      <div className={`relative ${margin}`}>
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=50%25&amp;height=400&amp;hl=en&amp;q=162%20Longboat%20Run%20W,%20Brantford,%20ON%20N3T%200R8+(Elephant%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>

        <div className=" absolute z-10 bottom-14  left-14 bg-white max-w-xl rounded-lg p-14">
          <h1 className=" text-5xl font-bold font-display mb-3 ">Contact Us</h1>
          <p className=" text-xl font-normal mb-3 ">Phone: (647) 648-1808</p>
          <p className=" text-xl font-normal mb-3 ">
            Email: elephant@gmail.com
          </p>
          <p className=" text-xl font-normal mb-3 ">
            Address: 162 Longboat Run W, Brantford, ON N3T 0R8
          </p>
          <p className=" text-xl font-normal mb-3 ">
            Working Hours: Mon - Fri: 9am - 5pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComp;
