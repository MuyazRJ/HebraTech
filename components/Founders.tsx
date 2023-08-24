"use client"

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const Founders = () => {
    const [founder, setFounder] = useState(2)

    return ( 
        <div className="h-screen w-screen bg-main-black">

            <h2 className="text-white md:text-3xl w-[56%] mx-auto z-[1] text-2xl 2xl:text-8xl lg:text-7xl lg:text-[4.3rem] font-semibold text-center mb-12 before:absolute relative before:border-b-[1px] before:border-[#A3A3A3] before:w-[110%] before:right-[-5%] before:top-10 before:bottom-0 before:opacity-50 lg:before:hidden">OUR FOUNDERS</h2> 
            <div className="flex w-[84%] mx-auto relative overflow-y-hidden">
                <div className="flex flex-col items-center gap-1">
                    <div className={`w-[80px] h-[80px] relative overflow-hidden before:absolute before:inset-0 before:bg-[#FFBB37] before:rounded-full before:w-[74px] before:h-[74px] before:top-[0.05rem] before:left-[0.2rem] before:hover:opacity-100 before:duration-300 ${founder === 1 ? 'before:opacity-100': 'before:opacity-0'}`}>
                        <Image
                            src="/4.png"
                            alt='Founder Anthony Hester'
                            fill={true}
                            className='object-contain'
                        />
                    </div>

                    <div className={`w-[80px] h-[80px] relative overflow-hidden before:absolute before:inset-0 before:bg-[#FFBB37] before:rounded-full before:w-[74px] before:h-[74px] before:top-[0.05rem] before:left-[0.2rem] before:hover:opacity-100 before:duration-300 ${founder === 1 ? 'before:opacity-100': 'before:opacity-0'} `}>
                        <Image
                            src="/SUNSHINE_WEBB_BRAZELTON_HebraTech.png"
                            alt='Founder Anthony Hester'
                            fill={true}
                            className='object-contain'
                        />
                    </div>

                    <div className={`w-[80px] h-[80px] relative overflow-hidden before:absolute before:inset-0 before:bg-[#FFBB37] before:rounded-full before:w-[74px] before:h-[74px] before:top-[0.05rem] before:left-[0.2rem] before:hover:opacity-100 before:duration-300 ${founder === 1 ? 'before:opacity-100': 'before:opacity-0'}`}>
                        <Image
                            src="/3.png"
                            alt='Founder Anthony Hester'
                            fill={true}
                            className='object-contain'
                        />
                    </div>

                    <div className={`w-[80px] h-[80px] relative overflow-hidden before:absolute before:inset-0 before:bg-[#FFBB37] before:rounded-full before:w-[74px] before:h-[74px] before:top-[0.05rem] before:left-[0.2rem] before:hover:opacity-100 before:duration-300 ${founder === 1 ? 'before:opacity-100': 'before:opacity-0'}`}>
                        <Image
                            src="/2.png"
                            alt='Founder Anthony Hester'
                            fill={true}
                            className='object-contain'
                        />
                    </div>
                </div>

                <div className="border-l-[2.7px] border-main-gold ml-[1.2rem] mt-2">
                    <h2 className="text-white font-semibold pl-[0.4rem] font-[jost] -translate-y-1 tracking-normal text-sm">Anthony Hester</h2>
                    <p className="text-[#E1E1E1] font-[jost] text-xs pl-[0.4rem] tracking-normal font-[500]">The brains behind our technology is Anthony Hester, PhD, our Chief Technology Officer. Anthony has a Bachelor of Science in both Math and Physics from the University of Alabama, and Masters Degrees in both Physics, from the Georgia Institute of Technology, and Mathematics, from the University of Alabama in Huntsville, and he received his PhD in Mathematics, also from UAH. He also minored in Computer Science. Anthony and his dad, Dr. Charles Hester, formed Quantum Information Extraction, Inc, in 2013 to develop their optics technology. Anthony was an adjunct professor at UAH. Anthony also founded the QIE Foundation, our online STEM education nonprofit.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Founders;