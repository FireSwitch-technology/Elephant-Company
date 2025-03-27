import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imgOne from "../assets/materials/emily.png";
import imgTwo from "../assets/materials/micheal-smith.png";
import imgThree from "../assets/materials/sarah-brown.png";
import imgFour from "../assets/materials/david-wilson.png";
import imgFive from "../assets/materials/jessica-taylor.png";
import imgSix from "../assets/materials/chris-lee.png";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      text: "They built my dream home with precision and flair!",

      img: imgOne,
    },
    {
      name: "Michael Smith",
      text: "A construction company that actually delivers on promises!",

      img: imgTwo,
    },
    {
      name: "Sarah Brown",
      text: "Their team is like a well-oiled machine—impressive!",

      img: imgThree,
    },
    {
      name: "David Wilson",
      text: "I never knew construction could be this fun!",

      img: imgFour,
    },
    {
      name: "Jessica Taylor",
      text: "They turned my chaotic ideas into a stunning reality!",

      img: imgFive,
    },
    {
      name: "Chris Lee",
      text: "Professional, punctual, and downright awesome!",

      img: imgSix,
    },
  ];
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-gray-200 py-12 px-4 flex flex-col items-center">
      <h2 data-aos="zoom-in" className="text-2xl font-bold mb-8">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            data-aos="fade"
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-black">{testimonial.text}</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="h-10 w-10 rounded-full mr-3 scale-125 transform "
              />
              <span className="font-semibold text-gray-900">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
