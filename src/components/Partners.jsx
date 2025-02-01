import React from "react";
import partnersimg1 from "../assets/partnerimg1.png";
import partnersimg2 from "../assets/partnerimg2.png";
import partnersimg3 from "../assets/partnerimg3.png";
import partnersimg4 from "../assets/partnerimg4.png";
import partnersimg5 from "../assets/partnerimg5.png";

const Partners = () => {
  const partnersimg = [
    { id: 1, image: partnersimg1 },
    { id: 2, image: partnersimg2 },
    { id: 3, image: partnersimg3 },
    { id: 4, image: partnersimg4 },
    { id: 5, image: partnersimg5 },
  ];
  return (
    <div className="bg-gray-900 text-white py-8 flex flex-col items-center">
      <h1 className="text-xl sm:text-5xl font-bold mb-6">
        Our Trusted Partners
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {partnersimg.map(({ id, image }) => (
          <div key={id}>
            <img src={image} alt="" className=" max-w-[187px]  max-h-[75px] " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
