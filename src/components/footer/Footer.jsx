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

        <div className="flex flex-col gap-6">
          <h1 className="text-white text-2xl font-semibold">Subscribe to Newsletter</h1>
          <p className="text-[16px] text-slate-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima delectus amet illo dolore veritatis repellendus.
          </p>
          <div className="flex gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your valid email"
              className="w-full bg-slate-900 px-6 py-4 rounded-lg text-white"
            />
            <button className="bg-limegreen px-6 py-2 rounded-xl text-[17px] font-semibold active:bg-lime-300">
            Subscribe Now
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-black border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 items-center gap-8 px-20 py-6">
        <div className="text-white text-[17px] text-center">
          <h1>Developed by Virender Prasad | Copyright 2024, Build Your Buzz, All Rights Reserved</h1>
        </div>
        <div className="text-center">
          <p className="text-white text-3xl font-bold">Build Your
            <span className="text-limegreen italic"> Buzz</span>
          </p>
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-6 mb-8"> {/* Adjusted gap and margin-bottom here */}
          <FaFacebook className="text-limegreen text-2xl" />
          <BsTwitterX className="text-limegreen text-2xl" />
          <FaInstagram className="text-limegreen text-2xl" />
          <FaYoutube className="text-limegreen text-2xl" />
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
