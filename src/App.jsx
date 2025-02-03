import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Aboutpage from "../src/Pages/Aboutpage.jsx";
import FAQs from "../src/Pages/FAQs.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Portfoliopage from "./Pages/Portfoliopage.jsx";
import Footer from "./Pages/Footer.jsx";

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
      <Footer />
    </div>
  );
};

export default App;
