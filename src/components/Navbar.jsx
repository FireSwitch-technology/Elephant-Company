import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/toogleBtn.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const activeLink = "text-blue-100";
  const normalLink = "text-white hover:text-blue-100";

  return (
    <div className="fixed top-10 right-0 w-full z-40 px-4">
      <div className="  max-w-6xl p-3 px-4 mx-auto rounded-full shadow-lg bg-black/20 backdrop-blur-3xl flex justify-between items-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="flex justify-center items-center space-x-1">
            <img src={logo} alt="Logo" className="h-10" />
            <p className=" text-sm sm:text-base flex flex-col ">
              <span> Elephant </span>{" "}
              <span className="ml-2">Company INC. </span>
            </p>
          </div>{" "}
        </NavLink>
        <div className=" hidden sm:flex space-x-10">
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
        <NavLink to="/booking">
          <button className="p-3 bg-blue-200   hidden sm:flex text-white rounded-full">
            Get a Quote
          </button>
        </NavLink>

        {/* toggleMenu */}
        <div className="flex md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <img src={menu} className="cursor-pointer sm:hidden" />
          ) : (
            <img src={menu} className="cursor-pointer sm:hidden" />
          )}
        </div>
      </div>
      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 bg-gray-900 backdrop-blur-3xl transition-all duration-300 ease-in-out overflow-hidden z-20 sm:hidden ${
          isOpen ? "w-1/2 h-screen" : "w-0 h-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <IoClose
            className="cursor-pointer text-white absolute top-4 right-4"
            size={24}
            onClick={closeMenu}
          />
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={closeMenu}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              Home
            </p>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={closeMenu}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              Portfolio
            </p>
          </NavLink>
          <NavLink
            to="/aboutpage"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={closeMenu}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              About
            </p>
          </NavLink>

          <NavLink
            to="/faqs"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={closeMenu}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              FAQs
            </p>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={closeMenu}
          >
            <p className="cursor-pointer text-base font-display font-normal">
              Contact Us
            </p>
          </NavLink>
        </div>
      </div>
      {/* OVERLAY */}
      <div
        className={`fixed top-0 right-0 bg-black/20 backdrop-blur-3xl bg-opacity-50 transition-all duration-300 ease-in-out z-10 sm:hidden ${
          isOpen ? "w-1/2 h-screen" : "w-0 h-0"
        }`}
        onClick={closeMenu}
      ></div>
    </div>
  );
};

export default Navbar;
