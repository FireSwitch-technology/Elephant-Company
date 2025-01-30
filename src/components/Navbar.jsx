import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const activeLink = "text-blue-100";
  const normalLink = "text-white hover:text-blue-100";

  return (
    <div className="fixed top-10 right-0 w-full z-40">
      <div className="  max-w-6xl p-3 mx-auto rounded-full shadow-lg bg-black/20 backdrop-blur-2xl flex justify-between items-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-10" />
            <p className=" ">
              Elephant <br /> Company
            </p>
          </div>{" "}
        </NavLink>
        <div className=" hidden sm:flex space-x-4">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              Portfolio
            </p>
          </NavLink>
          <NavLink
            to="/aboutpage"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              About
            </p>
          </NavLink>
          <NavLink
            to="/warranty"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              Warranty
            </p>
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              FAQs
            </p>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              Contact Us
            </p>
          </NavLink>
        </div>
        <button className="p-3 bg-blue-100 hidden sm:flex text-white rounded-full">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
