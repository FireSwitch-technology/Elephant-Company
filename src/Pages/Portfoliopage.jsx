import React from "react";
import Construction from "../assets/materials/Construction.jpg";
import Workers from "../assets/materials/Workers.jpg";
import Hallway from "../assets/materials/Hallway.jpg";
import Kitchen from "../assets/materials/Kitchen.jpg";
import Ceiling from "../assets/materials/Ceiling.jpg";
import Team from "../assets/materials/team.jpg";
import fffa from "../assets/materials/fffa.jpg";

const Portfoliopage = () => {
  const images = [
    {
      src: Kitchen,
      alt: "Construction",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "434px",
      height: "300px",
    },
    {
      src: Construction,
      alt: "Painting",
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      width: "434px",
      height: "600px",
    },
    {
      src: Workers,
      alt: "Workers",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "364px",
      height: "276px",
    },
    {
      src: Hallway,
      alt: "Scaffolding",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "434px",
      height: "276px",
    },
    {
      src: Kitchen,
      alt: "Hallway",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "364px",
      height: "476px",
    },
    {
      src: Ceiling,
      alt: "Kitchen",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "335px",
      height: "323px",
    },
    {
      src: Team,
      alt: "Ceiling Work",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "533px",
      height: "323px",
    },
    {
      src: fffa,
      alt: "Workers Measuring",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      width: "364px",
      height: "239px",
    },
  ];

  return (
    <div>
      {" "}
      <div className=" bg-gray-100   w-full h-fit pt-32">
        <div className=" p-6 md:py-12 max-w-6xl mx-auto ">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm text-gray-600">
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>{" "}
            &gt; <span className="font-bold text-black">Portfolio</span>
          </div>
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`object-cover rounded-lg w-full h-full ${image.colSpan} ${image.rowSpan}`}
              />
            ))}
          </div>
          {/* Call to Action Section */}
          <div className="mt-12  p-6 md:p-5 rounded-lg text-center bg-white  max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4">
              Transform Your Property Today!
            </h2>
            <p className="text-base sm:text-xl text-black-100 mb-6 px-2">
              Let Elephant Solutions take care of all your home and business
              improvement needs with expertise you can trust.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliopage;
