import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

const Clients = () =>{
    return (
        <>
         <div className="bg-limegreen flex justify-center items-center min-h-screen p-10">
    <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 bg-gray-800 text-white">
        <h1 className="py-5 text-lg">Reviews</h1>
        <div className="flex flex-col gap-3 mt-14">
            
            
            <div className="flex flex-col gap-4 bg-gray-700 p-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-7 h-7 text-center rounded-full bg-red-500 text-white">J</div>
                        <span>Jess Hopkins</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                </div>
                <div className='text-white'>
                    Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </div>
                
            </div>

            <div className="flex flex-col gap-4 bg-gray-700 p-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-7 h-7 text-center rounded-full bg-yellow-500 text-white">A</div>
                        <span>Alice Banks</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className='text-white'>
                The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.
                </div>
                
            </div>

            <div className="flex flex-col gap-4 bg-gray-700 p-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-7 h-7 text-center rounded-full bg-sky-400 text-white">O</div>
                        <span>Omar Hassan</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className='text-white'>
                Outstanding digital marketing service—delivers exceptional results with clear communication and innovative strategies.
                </div>
                
            </div>

            <div className="flex flex-col gap-4 bg-gray-700 p-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-7 h-7 text-center rounded-full bg-green-500 text-white">M</div>
                        <span>Ming Zhao</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                </div>
                <div className='text-white'>
                Exceptional digital marketing expertise drives impactful results with creativity and professionalism.
                </div>
                
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Clients