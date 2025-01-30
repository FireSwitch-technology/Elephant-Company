import React from "react";
import vector from "../assets/vec2.png";
import vector2 from "../assets/vec3.png";
import vector3 from "../assets/vec4.png";
import Meetceo from "../components/Meetceo.jsx";

const Aboutpage = () => {
  const aboutcontent = [
    {
      id: 1,
      Texth1: "Who We Are",
      Textp:
        "Elephant Solutions was founded in 2014 with a passion for high-quality craftsmanship and a dedication to exceptional service. From humble beginnings in Brantford, our commitment to delivering top-tier services has helped us grow into a trusted name in the industry. Whether it's transforming homes or enhancing commercial spaces, we take pride in every project, large or small.",
    },
    {
      id: 2,
      Texth1: "  Our Mission",
      Textp:
        "At Elephant Solutions, our mission is to deliver outstanding craftsmanship with a focus on customer satisfaction and quality. We believe in creating lasting relationships with our clients by providing services that are timely, transparent, and tailored to each client’s vision. We strive for excellence in everything we do, ensuring each project is completed on time and to the highest",
    },
    {
      id: 3,
      Texth1: " Why Choose Us",
      Textp:
        "Choosing us means working with a team committed to quality, reliability, and your satisfaction. We bring experience, skill, and a focus on your needs to every project. With our proven track record and dedication to excellence, you can trust us to deliver results you’ll be proud of.",
    },
    {
      id: 4,
      Image: vector,
      Texth2: " 3-Year Warranty",
      Textp:
        "Our 3-year warranty covers our work, giving you added peace of mind.",
    },
    {
      id: 5,
      Image: vector2,
      Texth2: "  $1 Million Insurance",
      Textp:
        "Our $1 million liability insurance offers full protection for every project.",
    },
    {
      id: 6,
      Image: vector3,
      Texth2: "  Licensed And Bonded",
      Textp:
        "Our team is fully licensed and bonded, meeting all industry standards and regulations.",
    },
  ];
  return (
    <div className="bg-gray-100  ">
      <div className="max-w-5xl mx-auto p-5 ">
        <p className="text-black mb-5">Home - About </p>
        <div className=" flex flex-col lg:flex lg:flex-row gap-10 justify-center items-center  ">
          {aboutcontent.slice(0, 2).map(({ id, Texth1, Textp }) => (
            <div key={id} className="bg-white rounded-2xl shadow-lg p-6">
              <h1 className="text-2xl sm:text-5xl font-bold font-display  text-black mb-3">
                {Texth1}{" "}
              </h1>
              <p className=" text-base sm:text-xl font-normal font-display text-black mt-4">
                {Textp}{" "}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            {" "}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-black-100 text-xl font-normal font-display mb-6">
              Growing as a means working with a team committed to quality,
              reliability, and user satisfaction. We bring expertise in various
              sectors to help you achieve your goals efficiently and
              effectively.
            </p>
          </div>
          <div className="grid md:grid-rows-3 gap-6">
            <div className="p-4 bg-green-100 rounded-lg shadow">
              <h3 className="font-semibold">3-Year Warranty</h3>
              <p className="text-gray-600 text-sm">
                Our warranty covers our work, giving you added peace of mind.
              </p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow">
              <h3 className="font-semibold">$1 Million Insurance</h3>
              <p className="text-gray-600 text-sm">
                Your investments are always protected with full coverage.
              </p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg shadow">
              <h3 className="font-semibold">Licensed And Bonded</h3>
              <p className="text-gray-600 text-sm">
                We meet all industry standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our History Section */}
      <div className="bg-gray-900 text-white p-6 md:p-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Our History</h2>
        <p className="text-gray-300 text-center mb-6">
          Growing with Dedication and Excellence
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className=" p-6 bg-gray-800 rounded-lg shadow-lg  flex space-x-4 items-center">
            <h3 className=" transform rotate-90 text-4xl font-medium text-blue-100">
              2010
            </h3>
            <div>
              <p className="text-white font-medium mb-2 text-2xl">
                The Foundation Of Elephant Company
              </p>
              <p className=" text-base">
                We started as a one man band, CEO Malkom and his toolbox.
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex  space-x-4  items-center">
            <h3 className=" transform rotate-90 text-4xl font-medium text-blue-100">
              2016
            </h3>
            <div>
              <p className="text-white font-medium mb-2 text-2xl">
                Our First Employee.
              </p>
              <p className="text-gray-400 text-sm">
                We hired our first helper, and bought a 2006 F150 to help us get
                around!
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex  space-x-4  items-center">
            <h3 className="transform rotate-90 text-4xl font-medium text-blue-100">
              2017
            </h3>
            <div>
              <p className="text-white font-medium mb-2 text-2xl">
                Expansion to Ontario and Beyond
              </p>
              <p className="text-gray-400 text-sm">
                We started helping families and business all across the country
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex  space-x-4  items-center">
            <h3 className="transform rotate-90 text-4xl font-medium text-blue-100">
              2020
            </h3>
            <div>
              <p className="text-white font-medium mb-2 text-2xl">
                Covid 19: Surviving Through a Lockdown
              </p>
              <p className="text-gray-400 text-sm">
                How the company managed while on lockdown.
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex  space-x-4 items-center lg:col-span-2">
            <h3 className="transform rotate-90 text-4xl font-medium text-blue-100">
              2023
            </h3>
            <div>
              <p className="text-white font-medium mb-2 text-2xl">
                Present Day: A Year of Growth and Expanded Horizons
              </p>
              <p className="text-gray-400 text-sm">
                In 2024, we expanded our services and took on more complex
                projects, strengthening client relationships and enhancing our
                commitment to quality and excellence. our extensive portfolio to
                check it out!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Meetceo />
    </div>
  );
};

export default Aboutpage;
