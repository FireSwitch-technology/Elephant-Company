import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../src/Pages/Portfolio.jsx";
import Aboutpage from "../src/Pages/Aboutpage.jsx";
import FAQs from "../src/Pages/FAQs.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Portfoliopage from "./Pages/Portfoliopage.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfoliopage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
