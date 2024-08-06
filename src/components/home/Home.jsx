import react, { useEffect } from 'react';

import Hero from "./Hero";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GoDotFill } from "react-icons/go";
// import business from "../../assets/business.jpg"

import {Box, styled} from '@mui/material';

import clients from "../../assets/clients.png"
import business from "../../assets/business.jpg"
import ApplicationForm from '../Careear/Careear';

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
            <ApplicationForm/>
               <Hero />
               </Component>

               <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
                <div className='flex flex-col justify-center items-start gap-8'>
                    <h1 data-aos="zoom-in" data-aos-delay="" className='tex-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>Transform Your Brand’s Presence: Expert Digital Marketing Solutions</h1>
                    <p data-aos="xoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>We design exceptional brands, products, web apps, <br></br> websites for startups and enterprises.</p>
                    <button data-aos="zoom-in" data-aos-delay="600" className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white'>Get Started Now</button>
                    <div data-aos="zoom-in" data-aos-delay="600" className='flex lg:flex-row flex-col justify-center lg:items-center items-start gap-10'>
                    <img src={clients} alt="clientimg" />
                    <p className='font-ubuntu text-[20px] font-bold text-black'>Trusted by many Customers</p>
                </div>
                </div>
               </section>


               <div className="w-100% h-32 bg-limegreen flex flex-row justify-between items-start gap-8 py-10 px-10">
                
                <div className='w-25% flex'>
                <GoDotFill className='text-[30px]'/>
                <p className='text-[20px] font-bold'>Creative People</p>
                </div>

                <div className='w-25% flex'>
                <GoDotFill className='text-[30px]' />
                <p className='text-[20px] font-bold'>Good Reviews</p>
                </div>
                
                <div className='w-25% flex'>
                <GoDotFill className='text-[30px]'/>
                <p className='text-[20px] font-bold'>Awesome Design</p>
                </div>
                
                <div className='w-25% flex'>
                <GoDotFill className='text-[30px]' />
                <p className='text-[20px] font-bold'>Fast Delivery</p>
                </div>
               
               </div>


               <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
               <div className='flex flex-col items-center gap-8'>
    <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>
        Build Your Buzz Marketing Service
    </h1>
    <img src={business} alt='img'/>

    <p data-aos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>
        Digital marketing refers to the process of enhancing the visibility and appeal of products, services, or brands through the use of digital technologies. It involves utilizing a variety of online platforms such as search engines, social media, email, mobile applications, and digital ads to connect with potential customers. The goal is to drive traffic to websites, boost brand recognition, and generate leads or sales. Strategies in digital marketing include improving search engine rankings (SEO), engaging users through social media, creating valuable content, running targeted email campaigns, investing in online advertising, and analyzing campaign performance to refine and achieve marketing objectives in the digital landscape.
    </p>
             </div>                
               </section>


               <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
               <div className='flex flex-col items-center gap-8'>
    <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>
    High Search Rankings
    </h1>

    <img src={business} alt='img'/>

    <p data-aos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>
    Achieving high search rankings is crucial for boosting your online visibility and attracting more organic traffic to your site. At Build Your Buzz, we specialize in implementing cutting-edge SEO strategies that propel your website to the top of search engine results pages (SERPs). Our approach includes comprehensive keyword research, on-page optimization, and high-quality link building to ensure your site not only ranks higher but also reaches the right audience. By focusing on the latest SEO trends and best practices, we help you stay ahead of the competition and make your brand more discoverable in a crowded digital landscape. Elevate your online presence and watch your business grow with our expert SEO solutions.
    </p>
 </div>                
            </section>


            <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
               <div className='flex flex-col items-center gap-8'>
    <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>
    Expertise
    </h1>

    <img src={business} alt='img'/>

    <p data-aos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>
    At Build Your Buzz, our expertise lies at the intersection of innovative digital strategies and proven marketing techniques. Our team of seasoned professionals brings a wealth of experience in various aspects of digital marketing, including search engine optimization (SEO), social media management, content creation, and data analytics. We pride ourselves on our deep understanding of market trends and consumer behavior, allowing us to craft tailored solutions that drive measurable results. Whether you’re looking to enhance your online presence, increase engagement, or achieve sustainable growth, our expertise ensures that your marketing efforts are both strategic and effective. Partner with us to leverage our knowledge and experience, and watch your brand thrive in the dynamic digital landscape.
    </p>
 </div>                
            </section>


            <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
               <div className='flex flex-col items-center gap-8'>
    <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>
    Complete Brand Control
    </h1>
    
    <img src={business} alt='img'/>

    <p data-aos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>
    Achieving complete brand control means having the ability to shape, manage, and enhance every aspect of your brand’s identity and presence across all digital platforms. At Build Your Buzz, we empower you with comprehensive tools and strategies to maintain a cohesive and impactful brand image. From crafting a distinctive brand voice and visual style to managing your online reputation and engagement, we ensure that every touchpoint reflects your brand’s core values and messaging. Our tailored approach provides you with the insights and control needed to adapt and evolve your brand strategy, ensuring consistency and alignment with your business goals. Take charge of your brand’s narrative and watch it resonate with your audience, all while reinforcing your market position with our expert support.
    </p>
 </div>                
            </section>


        </>
    )
}

export default Home;