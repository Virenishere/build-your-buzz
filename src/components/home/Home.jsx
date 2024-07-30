import react, { useEffect } from 'react';

import Hero from "./Hero";
import AOS from 'aos'
import 'aos/dist/aos.css'

import {Box, styled} from '@mui/material';

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

               <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
                <div className='flex flex-col justify-center items-start gap-8'>
                    <h1 data-aos="zoom-in" data-aos-delay="" className='tex-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>Transform Your Brand’s Presence: Expert Digital Marketing Solutions</h1>
                </div>
                <div></div>

               </section>

        </>
    )
}

export default Home;