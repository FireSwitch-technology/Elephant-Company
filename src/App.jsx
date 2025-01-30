import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../src/Pages/Portfolio.jsx";
import Aboutpage from "../src/Pages/Aboutpage.jsx";
import Warranty from "../src/Pages/Warranty.jsx";
import FAQs from "../src/Pages/FAQs.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "../src/components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
