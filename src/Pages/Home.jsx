import React from "react";

import About from "../components/About";
import Ourservice from "../components/Ourservice";
import Partners from "../components/Partners";
import Testimonial from "../components/Testimonial";
import Meetceo from "../components/Meetceo";
import Transform from "../components/Transform";
import Bookings from "../components/Bookings";
import Hero from "../components/Hero";
import Contact from "./Contact";
import Map from "../components/Map";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <About />
      <Ourservice />
      <Partners />
      <Testimonial />
      <Meetceo />
      <Transform />
      <Bookings />
      {/* 
      
      
      

   
      <Map /> */}
    </div>
  );
};

export default Home;
