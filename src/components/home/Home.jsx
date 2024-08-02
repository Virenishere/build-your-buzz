import react, { useEffect } from 'react';

import Hero from "./Hero";
import AOS from 'aos'
import 'aos/dist/aos.css'

import {Box, styled} from '@mui/material';

import clients from "../../assets/clients.png"

const Component = styled(Box)`
padding: 10px 5px;
background: #F2F2F2;
`

const Home = ()=>{

    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
        })
    }, [])

    return (
        <>
               <Component>
               <Hero />
               </Component>

               <section id='hero' className='w-[90%] flex m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
                <div className='flex flex-col justify-center items-start gap-8'>
                    <h1 data-aos="zoom-in" data-aos-delay="" className='tex-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>Transform Your Brand’s Presence: Expert Digital Marketing Solutions</h1>
                    <p data-aos="xoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>We design exceptional brands, products, web apps, <br></br> websites for startups and enterprises.</p>
                    <button data-aos="zoom-in" data-aos-delay="600" className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white'>Get Started Now</button>
                    <div data-aos="zoom-in" data-aos-delay="600" className='flex lg:flex-row flex-col justify-center lg:items-center items-start gap-10'>
                   
                    <img src={clients} alt="clientimg" />


                    <p className='font-ubuntu text-[20px] font-bold text-black'>Trusted by many Customers</p>
                </div>
                </div>
                
                <div>   
                <div className='flex flex-col items-center gap-8'>
    <h1 data-aos="zoom-in" data-aos-delay="" className='display-inline text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>
        Build Your Buzz Marketing Service
    </h1>
    <p data-aos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>
        Digital marketing refers to the process of enhancing the visibility and appeal of products, services, or brands through the use of digital technologies. It involves utilizing a variety of online platforms such as search engines, social media, email, mobile applications, and digital ads to connect with potential customers. The goal is to drive traffic to websites, boost brand recognition, and generate leads or sales. Strategies in digital marketing include improving search engine rankings (SEO), engaging users through social media, creating valuable content, running targeted email campaigns, investing in online advertising, and analyzing campaign performance to refine and achieve marketing objectives in the digital landscape.
    </p>
</div>                
</div>

               </section>

        </>
    )
}

export default Home;