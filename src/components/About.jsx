import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const aboutcontent = [
    {
      id: 1,
      h1: "Who We Are",
      p: "Elephant Solutions was founded in 2014 with a passion for high-quality craftsmanship and a dedication to exceptional service.ginnings in Brantford, our commitment to delivering top-tier services has helped us grow into a trusted name in the industry. Whether it's transforming homes or enhancing commercial spaces, we take pride in every project, large or small.",
    },
    {
      id: 2,
      h1: " Our Mission",
      p: "    At Elephant Solutions, our mission is to deliver outstanding craftsmanship with a focus on customer satisfaction and quality. We believe in creating lasting relationships with our clients by providing services that are timely, transparent, and tailored to each client’s vision. We strive for excellence in everything we do, ensuring each project is completed on time and to the highest standard.",
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
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-rows-1 sm:grid-cols-2 gap-10">
          {aboutcontent.map(({ id, h1, p }) => (
            <div
              data-aos="zoom-in"
              className="max-w-[560px] p-7 bg-white rounded-2xl"
              key={id}
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="300"
                className="text-[20px] md:text-[40px] font-bold font-display text-black mb-3"
              >
                {h1}
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-delay="300"
                className="text-base text-start sm:text-xl font-normal font-display text-black"
              >
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
