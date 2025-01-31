import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className=" w-full flex flex-col items-center justify-center bg-gray-100 ">
      <div className=" max-w-6xl  m-auto  py-20 flex flex-col sm:flex sm:flex-row   justify-center items-center gap-10">
        {/*  */}
        <div data-aos="zoom-in" className=" bg-white rounded-2xl shadow-lg p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className=" text-2xl sm:text-5xl font-bold font-display  text-black mb-3"
          >
            Who We Are
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className=" text-base sm:text-xl font-normal font-display text-black"
          >
            Elephant Solutions was founded in 2014 with a passion for
            high-quality craftsmanship and a dedication to exceptional service.
            From humble beginnings in Brantford, our commitment to delivering
            top-tier services has helped us grow into a trusted name in the
            industry. Whether it's transforming homes or enhancing commercial
            spaces, we take pride in every project, large or small.
          </p>
        </div>
        {/*  */}
        <div data-aos="zoom-in" className="bg-white rounded-2xl shadow-lg p-6 ">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-2xl sm:text-5xl font-bold font-display  text-black mb-3"
          >
            Our Mission
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className=" text-base sm:text-xl font-normal font-display text-black"
          >
            At Elephant Solutions, our mission is to deliver outstanding
            craftsmanship with a focus on customer satisfaction and quality. We
            believe in creating lasting relationships with our clients by
            providing services that are timely, transparent, and tailored to
            each client’s vision. We strive for excellence in everything we do,
            ensuring each project is completed on time and to the highest
            standard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
