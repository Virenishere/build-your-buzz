import React, { useEffect } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos'



const About = () =>{

    useEffect(() =>{
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
        });
    }, [])
    return (
        <section id="about" className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20">
            <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col justify-center items-start gap-4">
                <h1 className="text-lime-500 font-ubuntu text-[19px] font-semibold">WHO WE ARE</h1>
                <h1 className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu">The leading social media marketing agency</h1>
                <p className="font-ubuntu text-[18px] text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum nam iste quas eius, numquam autem id dicta facilis deleniti voluptatem sed earum incidunt cupiditate repellat consectetur officia pariatur at, quam similique, culpa illum. Qui eos impedit ea minus omnis quasi adipisci quis quidem. Impedit!</p>

                <div className='flex flex-col justify-center items-start gap-4'>
                    <p className="text-black flex justify-center gap-4 font-ubuntu">
                    <FaChevronCircleRight className="text-limegreen size-6"/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, vitae!</p>

                    <p className="text-black flex justify-center gap-4 font-ubuntu">
                    <FaChevronCircleRight className="text-limegreen size-6"/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, vitae!</p>

                    <p className="text-black flex justify-center gap-4 font-ubuntu">
                    <FaChevronCircleRight className="text-limegreen size-6"/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, vitae!</p>

                    <p className="text-black flex justify-center gap-4 font-ubuntu">
                    <FaChevronCircleRight className="text-limegreen size-6"/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, vitae!</p>
                </div>

                <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white">Discover More</button>
            </div>
        </section>
    )
}

export default About