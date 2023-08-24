"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion"

const Founders = () => {
    const [founder, setFounder] = useState(1)
    const [currentPara, setP] = useState('')
    const [currentFounderName, setFounderName] = useState('')

    const pAnim = {
        initial: {
            opacity: 0,
            x:-80
        },
        animation: {
            opacity: 1,
            x:0,
            transition: {
                duration: 0.5,
                ease: easeOut
            }
        },
        exit: {
            x:'70%',
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: easeOut
            }
        }
    }

    useEffect(() => {
        if (founder === 1) {
            setP("The brains behind our technology is Anthony Hester, PhD, our Chief Technology Officer. Anthony has a Bachelor of Science in both Math and Physics from the University of Alabama, and Masters Degrees in both Physics, from the Georgia Institute of Technology, and Mathematics, from the University of Alabama in Huntsville, and he received his PhD in Mathematics, also from UAH. He also minored in Computer Science. Anthony and his dad, Dr. Charles Hester, formed Quantum Information Extraction, Inc, in 2013 to develop their optics technology. Anthony was also an adjunct professor at UAH. Anthony also founded the QIE Foundation.")
            setFounderName('Anthony Hester')
        }

        else if (founder === 2) {
            setP("Sunny is the CEO for HeBra Technologies, Quantum Information Extraction, Inc. and QIE Foundation. She has a Bachelor of Arts from Ole Miss where she studied Architecture, Marketing and Psychology. She began studying Psychology at the American Institute of Psychotherapy at the age of 8. After returning to Huntsville, she served as project manager on design projects all over the state of Alabama at Jones and Herrin Architecture, was part of the local startup team at KMC Telecom and then served as Operations Analyst and Technical Writer before helping develop their in-house systems software. She was building an online pet accessories empire before pivoting to lead our team.")
            setFounderName('Sunshine Webb-Brazelton')
        }

        else if (founder === 3) {
            setP("Stacy is serving as President. His background is in Logistics, Transportation and Manufacturing, is the inventor of several mechanical devices, holds multiple patents, is an investor in several other businesses, and will lead our manufacturing team.")
            setFounderName('Stacy Brazelton')
        }

        else {
            setP("Dr. Charles Hester is a mathematical genius and technical guru who will be advising HeBra Technologies and developing our patents. He has a PhD in electro-optics from Carnegie-Mellon.  Dr. Hester began research on our patented proprietary tech over 40 years ago.  He painstakingly researched all the different technologies for manipulating light and concluded that our device provides the speed, performance, low power consumption, and low cost of manufacture necessary to solve problems in optical computing, Laser Comms/FSO, and other related technologies that exploit light from the ultraviolet to the millimeter wave.")
            setFounderName('Charles Hester')
        }
    }, [founder])

    return ( 
        <div className="h-screen w-screen bg-main-black">
            <h2 className="text-white md:text-3xl w-[56%] mx-auto z-[1] text-2xl 2xl:text-8xl lg:text-7xl lg:text-[4.3rem] font-semibold text-center mb-12 before:absolute relative before:border-b-[1px] before:border-[#A3A3A3] before:w-[110%] before:right-[-5%] before:top-10 before:bottom-0 before:opacity-50 lg:before:hidden">OUR FOUNDERS</h2> 
            <div className="flex w-[84%] mx-auto relative overflow-y-hidden">
                <div className="flex flex-col items-center gap-1">
                    <div className={`founder_image ${founder === 1 ? 'before:opacity-100': 'before:opacity-0'}`} onClick={() => setFounder(1)}>
                        <Image
                            src="/4.png"
                            alt='Founder Anthony Hester'
                            fill={true}
                            className='object-contain'
                        />
                    </div>

                    <div className={`founder_image ${founder === 2 ? 'before:opacity-100': 'before:opacity-0'} `} onClick={() => setFounder(2)}>
                        <Image
                            src="/SUNSHINE_WEBB_BRAZELTON_HebraTech.png"
                            alt='Founder Anthony Hester'
                            fill={true}
                            className='object-contain'
                        />
                    </div>

                    <div className={`founder_image ${founder === 3 ? 'before:opacity-100': 'before:opacity-0'}`} onClick={() => setFounder(3)}>
                        <Image
                            src="/3.png"
                            alt='Founder Anthony Hester'
                            fill={true}
                            className='object-contain'
                        />
                    </div>

                    <div className={`founder_image ${founder === 4 ? 'before:opacity-100': 'before:opacity-0'}`} onClick={() => setFounder(4)}>
                        <Image
                            src="/2.png"
                            alt='Founder Anthony Hester'
                            fill={true}
                            className='object-contain'
                        />
                    </div>
                </div>

                <div className="border-l-[2.7px] border-main-gold ml-[1.2rem] mt-2 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        {<motion.h2 initial="initial" animate="animation" exit="exit" key={founder} variants={pAnim} className="text-white font-semibold pl-[0.4rem] font-[jost] -translate-y-0.5 tracking-normal text-sm">{currentFounderName}</motion.h2>}
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        {<motion.p initial="initial" animate="animation" exit="exit" key={founder} variants={pAnim} className="text-[#E1E1E1] mt-1 font-[jost] text-xs pl-[0.4rem] tracking-normal font-[500] overflow-hidden">{currentPara}</motion.p>}
                    </AnimatePresence>

                </div>
            </div>
        </div>
     );
}
 
export default Founders;