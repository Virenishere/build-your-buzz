import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
import { styled } from "@mui/material";

import logoimg from "../../assets/Logo.png"

import {Link} from "react-router-dom"


const Logo = styled('img')({
  width: '5vh',
  height: '5vh',
})

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "" },
    { link: "Services", path: "services" },
    { link: "About Us", path: "about" },
    { link: "Contact", path: "contact" }, 
  ];

  return (
    <nav className="w-full flex bg-customBlue justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      {/* <h1 className="text-white md:text-4xl text-3xl font-bold font-ubuntu">
        Build Your<span className="text-limegreen italic"> Buzz</span>
      </h1> */}

      <Link to="">
      <Logo src={logoimg} alt="logo"/>
      </Link>
      
      {/* Desktop navigation */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <Link
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-white font-ubuntu text-sm"
              to={path}
              spy="true"
              offset={-100}
              smooth="true"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hire Us button (hidden on mobile) */}
      <Link to="contact" className="bg-limegreen font-ubuntu hover:bg-white text-black px-4 py-2 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden">
        HIRE US
      </Link>

      {/* Mobile menu toggle */}
      <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="text-white text-3xl cursor-pointer" />
        ) : (
          <FaBars className="text-white text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile menu items */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full bg-black p-4 absolute top-16 left-0 lg:hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black w-full text-center"
                to={path}
                offset={-100}
                smooth="true"
                onClick={closeMenu} // Close menu when a link is clicked
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
