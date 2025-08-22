import React, { useState, useEffect } from "react";
import { FaMapMarkedAlt, FaFacebook, FaYoutube, FaArrowUp, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

// Reusable component for contact information
const ContactInfoItem = ({ icon: Icon, text }) => (
  <p className="flex items-center gap-3 text-[16px] text-slate-100">
    <Icon className="text-limegreen" />
    <span>{text}</span>
  </p>
);

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <section className="w-full bg-customBlue grid lg:grid-cols-3 grid-cols-1 gap-16 lg:p-20 p-10">
  <div className="flex flex-col justify-center gap-10">
    <h1 className="text-white font-semibold text-[40px] leading-[50px]">
      Let's Start Working Together, Get in Touch!
    </h1>

    <Link to="contact">
      <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold hover:bg-white hover:text-black">
        Get Started Now
      </button>
    </Link>
  </div>

  <div className="flex flex-col gap-10">
    <h1 className="text-white text-2xl font-semibold">Contact Information</h1>
    <div className="flex flex-col gap-4">
      <ContactInfoItem icon={FaMapMarkedAlt} text="Mumbai" />
      <ContactInfoItem icon={FaPhoneVolume} text="91-XXXXX-XXXXX" />
      <ContactInfoItem icon={IoIosMailOpen} text="support@support.com" />
      <ContactInfoItem icon={IoTime} text="10:00 AM-7:00 PM" />
    </div>
  </div>

  {/* List of Links */}
  <div className="flex flex-col gap-4 lg:items-end items-start">
    <h1 className="text-white text-2xl font-semibold">Quick Links</h1>
    <Link to="/" className="text-white hover:text-limegreen">
      Home
    </Link>
    <Link to="/services" className="text-white hover:text-limegreen">
      Services
    </Link>
    <Link to="/about" className="text-white hover:text-limegreen">
      About Us
    </Link>
    <Link to="/contact" className="text-white hover:text-limegreen">
      Contact
    </Link>
   
  </div>
</section>


      <section className="w-full bg-black border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 items-center gap-8 px-20 py-6">
        <div className="text-white text-[17px] text-center">
          <h1>Developed by Virender Prasad | Copyright 2024, Build Your Buzz, All Rights Reserved</h1>
        </div>
        <div className="text-center">
          <Link to="/">
          <p className="text-white text-3xl font-bold">Build Your
            <span className="text-limegreen italic"> Buzz</span>
          </p>
          </Link>
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-6 mb-8"> {/* Adjusted gap and margin-bottom here */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-limegreen text-2xl" />
       </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <BsTwitterX className="text-limegreen text-2xl" />
        </a>
       <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
       <FaInstagram className="text-limegreen text-2xl" />
       </a>
<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
  <FaYoutube className="text-limegreen text-2xl" />
</a>

        </div>
      </section>

      {isVisible && (
        <div
          id="icon-box"
          className="bg-limegreen text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 bottom-6 right-6"
          onClick={scrollToTop}
        >
          <FaArrowUp className='w-[35px] h-[35px]' />
        </div>
      )}
    </>
  );
}

export default Footer;
