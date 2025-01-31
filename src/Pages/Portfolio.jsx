import React from "react";
import Gallery from "../components/Gallery.jsx";
import Construction from "../assets/materials/Construction.jpg";
import Painting from "../assets/materials/Painting.jpg";
import Workers from "../assets/materials/Workers.jpg";
import Scaffolding from "../assets/materials/Scaffolding.jpg";
import Hallway from "../assets/materials/Hallway.jpg";
import Kitchen from "../assets/materials/Kitchen.jpg";
import Ceiling from "../assets/materials/Ceiling.jpg";
import team from "../assets/materials/team.jpg";
const Portfolio = () => {
  const images = [
    { id: 1, Image: Construction },
    { id: 2, Image: Painting },
    { id: 3, Image: Workers },
    { id: 4, Image: Scaffolding },
    { id: 5, Image: Hallway },
    { id: 6, Image: Kitchen },
    { id: 7, Image: Ceiling },
    { id: 8, Image: team },
  ];
  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto mt-40">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-gray-600">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>{" "}
        &gt; <span className="font-bold">Portfolio</span>
      </div>

      {/* Image Grid */}
      <div>
        <Gallery images={images} columnCount="3" gap="4" />
        {/* <Gallery columnCount="4" gap="4" /> */}
      </div>
      {/* Call to Action Section */}
      <div className="mt-12 bg-gray-100 p-6 md:p-12 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Transform Your Property Today!
        </h2>
        <p className="text-gray-600 mb-6">
          Let Elephant Solutions take care of all your home and business
          improvement needs with expertise you can trust.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
