import React, { useState } from "react";
import Gallery from "../components/Gallery";

import Construction from "../assets/materials/Construction.jpg";
import Workers from "../assets/materials/Workers.jpg";
import fill from "../assets/materials/comercialrenovation.jpg";
import fffg from "../assets/materials/fffg.jpg";
import Hallway from "../assets/materials/Hallway.jpg";
import Kitchen from "../assets/materials/Kitchen.jpg";
import Ceiling from "../assets/materials/Ceiling.jpg";
import Team from "../assets/materials/team.jpg";
import fffa from "../assets/materials/fffa.jpg";
import fffb from "../assets/materials/fffb.jpg";
import fffc from "../assets/materials/fffc.jpg";
import fffd from "../assets/materials/fffd.jpg";
import fffe from "../assets/materials/fffe.jpg";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, Image: Construction },
    { id: 2, Image: Ceiling },
    { id: 3, Image: fill },
    { id: 4, Image: fffg },
    { id: 5, Image: Hallway },
    { id: 6, Image: Kitchen },
    { id: 7, Image: Workers },
    { id: 8, Image: Team },
    { id: 9, Image: fffa },
    { id: 10, Image: fffb },
    { id: 11, Image: fffc },
    { id: 12, Image: fffd },
    { id: 12, Image: fffe },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].Image);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].Image);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className=" bg-gray-100   w-full h-fit pt-32">
      <div className=" p-6 md:p-12 max-w-6xl mx-auto ">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-600">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          &gt; <span className="font-bold text-black">Portfolio</span>
        </div>

        {/* Image Grid */}
        <div>
          <Gallery
            images={images}
            columnCount="3"
            gap="4"
            onImageClick={openModal}
          />
        </div>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-3xl bg-opacity-75"
            onClick={closeModal}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-[60vw] h-[70vh] object-cover rounded-lg"
              />
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                onClick={showPrevImage}
              >
                &#10094;
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                onClick={showNextImage}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-12  p-6 md:p-12 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Transform Your Property Today!
          </h2>
          <p className="text-gray-600 mb-6">
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
  );
};

export default Portfolio;
