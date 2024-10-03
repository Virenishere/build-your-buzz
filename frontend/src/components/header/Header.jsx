import React, { useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import logoimg from "../../assets/Logo.png";

// Styled component for the logo
const Logo = styled('img')({
  width: '5vh',
  height: '5vh',
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  // Close mobile menu
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Navigation items
  const navItems = [
    { link: "Home", path: "" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },
    { link: "Contact", path: "contact" }
  ];

  // NavLink component for rendering individual links
  const NavLink = ({ link, path, onClick }) => (
    <li>
      <Link
        className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-white font-ubuntu text-sm"
        to={path}
        onClick={onClick}
      >
        {link}
      </Link>
    </li>
  );

  return (
    <nav className="relative w-full flex bg-customBlue justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-white md:text-4xl text-3xl font-bold font-ubuntu">
          Build Your <span className="text-limegreen italic">Buzz</span>
        </h1>
      </Link>

      {/* Desktop navigation */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map((item) => (
          <NavLink key={item.path} link={item.link} path={item.path} />
        ))}
      </ul>

      {/* Hire Us button (hidden on mobile) */}
      <Link
        to="contact"
        className="bg-limegreen font-ubuntu hover:bg-white text-black px-4 py-2 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden"
      >
        HIRE US
      </Link>

      {/* Mobile menu toggle */}
      <div className="flex lg:hidden items-center" onClick={toggleMenu}>
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
        } lg:hidden w-full bg-black p-4 absolute top-16 left-0`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map((item) => (
            <NavLink key={item.path} link={item.link} path={item.path} onClick={closeMenu} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
