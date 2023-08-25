"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion"
import TextReveal from "@/motion/Reveal";
import { foundersData, membersData } from "./data";

const Founders = () => {
    const [founder, setFounder] = useState(2)
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
        setFounderName(foundersData[founder - 1].name)
        setP(foundersData[founder - 1].description)
    }, [founder])

    return ( 
        <div className="bg-main-black pb-12">
            <TextReveal>
                <div className="flex justify-center">
                <h2 className="founders_text">OUR FOUNDERS</h2></div>
            </TextReveal>
            
            <div className="flex w-[85%] mx-auto relative overflow-y-hidden max-w-[1440px] mt-10 3xl:w-[75%] lg:pb-12">
                <div className="flex flex-col items-center gap-1 lg:items-start lg:gap-10">
                    <div className="flex items-center">
                        <div className={`founder_image ${founder === 2 ? 'before:opacity-100': 'before:opacity-0'} `} onClick={() => setFounder(2)}>
                            <Image
                                src="/SUNSHINE_WEBB_BRAZELTON_HebraTech.png"
                                alt='Founder Anthony Hester'
                                fill={true}
                                className='object-contain'
                            />
                        </div>

                        <div className="founders_container">
                            <h2 className="large_founder_name">{foundersData[1].name}</h2>
                            <p className="large_founder_desc">{foundersData[1].description}</p>
                        </div>
                   </div>

                   <div className="flex items-center">
                        <div className={`founder_image ${founder === 1 ? 'before:opacity-100': 'before:opacity-0'}`} onClick={() => setFounder(1)}>
                            <Image
                                src="/ANTHONY_HESTER_PhD_Founder_HebraTech.png"
                                alt='Founder Anthony Hester'
                                fill={true}
                                className='object-contain'
                            />
                        </div>

                        <div className="founders_container">
                            <h2 className="large_founder_name">{foundersData[0].name}</h2>
                            <p className="large_founder_desc">{foundersData[0].description}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className={`founder_image ${founder === 3 ? 'before:opacity-100': 'before:opacity-0'}`} onClick={() => setFounder(3)}>
                            <Image
                                src="/STACY_BRAZELTON_Founder_HebraTech.png"
                                alt='Founder Anthony Hester'
                                fill={true}
                                className='object-contain'
                            />
                        </div>

                        <div className="founders_container">
                            <h2 className="large_founder_name">{foundersData[2].name}</h2>
                            <p className="large_founder_desc">{foundersData[2].description}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className={`founder_image ${founder === 4 ? 'before:opacity-100': 'before:opacity-0'}`} onClick={() => setFounder(4)}>
                            <Image
                                src="/CHARIES_HESTER_PhD_Founder_HebraTech.png"
                                alt='Founder Anthony Hester'
                                fill={true}
                                className='object-contain'
                            />
                        </div>

                        <div className="founders_container">
                            <h2 className="large_founder_name">{foundersData[3].name}</h2>
                            <p className="large_founder_desc">{foundersData[3].description}</p>
                        </div>
                    </div>
                </div>

                <div className="border-l-[2.7px] border-main-gold ml-[1.2rem] mt-2 overflow-hidden relative mb-2 lg:hidden">
                    <AnimatePresence mode="wait">
                        {<motion.h2 initial="initial" animate="animation" exit="exit" key={founder} variants={pAnim} className="text-white font-semibold pl-[0.4rem] font-[jost] -translate-y-0.5 tracking-normal text-sm sm:text-base md:text-xl">{currentFounderName}</motion.h2>}
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        {<motion.p initial="initial" animate="animation" exit="exit" key={founder} variants={pAnim} className="text-[#E1E1E1] mt-1 font-[jost] text-xs pl-[0.4rem] tracking-normal font-[500] overflow-hidden sm:text-sm md:text-base">{currentPara}</motion.p>}
                    </AnimatePresence>
                </div>
            </div>
        </div>
     );
}
 
export default Founders;