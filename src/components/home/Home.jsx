import React, { useEffect } from 'react';
import Hero from "./Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoDotFill } from "react-icons/go";
import { Box, styled } from '@mui/material';
import clients from "../../assets/clients.png";
import business from "../../assets/business.jpg";
import Clients from './Clients';
import { Link } from "react-router-dom";

const Component = styled(Box)`
  padding: 10px 5px;
  background: #F2F2F2;
`;

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <>
      <Component>
        <Hero />
      </Component>

      <section id='hero' className='w-[90%] m-auto flex flex-col lg:flex-row justify-between items-center gap-20 py-10 sm:px-20'>
        <div className='flex flex-col justify-center items-start gap-8'>
          <h1 data-aos="zoom-in" className='text-black font-semibold lg:text-[90px] text-[50px] lg:leading-[100px] leading-[60px] font-ubuntu'>
            Transform Your Brand’s Presence: Expert Digital Marketing Solutions
          </h1>
          <p data-aos="zoom-in" className='font-ubuntu text-[16px] lg:text-[20px] text-slate-700'>
            We craft outstanding brands, products, web apps, and websites for startups and enterprises.
          </p>
          <img src={clients} alt="clientimg" className="max-w-full h-auto" />

          <Link to="contact">
            <button data-aos="zoom-in" className='bg-limegreen px-6 py-4 rounded-full text-[15px] lg:text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white'>
              Get Started Now
            </button>
          </Link>

          <div data-aos="zoom-in" className='flex flex-col lg:flex-row justify-center items-start gap-10'>
            <p className='font-ubuntu text-[20px] font-bold text-black'>Trusted by many Customers</p>
          </div>
        </div>
      </section>

      <div className="w-full h-auto bg-limegreen flex flex-wrap justify-between items-center gap-4 py-5 px-10">
        {["Creative People", "Good Reviews", "Awesome Design", "Fast Delivery"].map((item) => (
          <div key={item} className='flex items-center w-full sm:w-1/2 md:w-1/5'>
            <GoDotFill className='text-[30px]' />
            <p className='text-[18px] md:text-[20px] item-center font-bold ml-2'>{item}</p>
          </div>
        ))}
      </div>

      {["Build Your Buzz Marketing Service", "High Search Rankings", "Expertise", "Complete Brand Control"].map((title, index) => (
        <section key={title} id='hero' className='w-[90%] m-auto flex flex-col lg:flex-row justify-between items-center gap-20 py-20 sm:px-20'>
          <div className='flex flex-col items-center gap-8'>
            <h1 data-aos="zoom-in" className='text-black font-semibold lg:text-[90px] text-[50px] lg:leading-[100px] leading-[60px] font-ubuntu'>
              {title}
            </h1>
            <img src={business} alt='img' className="max-w-full h-auto" />
            <p data-aos="zoom-in" className='font-ubuntu text-[16px] lg:text-[20px] text-slate-700'>
              {index === 0 ? "Digital marketing refers to the process of enhancing the visibility and appeal of products, services, or brands through the use of digital technologies..." :
                index === 1 ? "Achieving high search rankings is crucial for boosting your online visibility and attracting more organic traffic to your site..." :
                index === 2 ? "At Build Your Buzz, our expertise lies at the intersection of innovative digital strategies and proven marketing techniques..." :
                "Achieving complete brand control means having the ability to shape, manage, and enhance every aspect of your brand’s identity and presence across all digital platforms..."}
            </p>
          </div>
        </section>
      ))}

      <Clients />
    </>
  );
}

export default Home;
