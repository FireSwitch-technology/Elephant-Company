import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      text: "They built my dream home with precision and flair!",
      img: "/emily-johnson.jpg",
    },
    {
      name: "Michael Smith",
      text: "A construction company that actually delivers on promises!",
      img: "/michael-smith.jpg",
    },
    {
      name: "Sarah Brown",
      text: "Their team is like a well-oiled machine—impressive!",
      img: "/sarah-brown.jpg",
    },
    {
      name: "David Wilson",
      text: "I never knew construction could be this fun!",
      img: "/david-wilson.jpg",
    },
    {
      name: "Jessica Taylor",
      text: "They turned my chaotic ideas into a stunning reality!",
      img: "/jessica-taylor.jpg",
    },
    {
      name: "Chris Lee",
      text: "Professional, punctual, and downright awesome!",
      img: "/chris-lee.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-5xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">{testimonial.text}</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="h-10 w-10 rounded-full mr-3"
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
