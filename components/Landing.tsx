"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CustomButton } from ".";
import { useState, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData  from '../animations/orbit.json'

const Landing = ({ landing }: { landing: boolean }) => {
    const landingA = 'HeBra Technologies is at the forefront of a technological revolution, harnessing the power of photons to reshape the landscape of computing and communication.'
    const landingP = 'Introducing the next revolution in technology: computing and communications using quantum particles.'

    const [selectedStat, setStat] = useState(0)

    const gradientColour = (int: number) => {
        if (int === selectedStat) {
            return 'bg-gradient-to-r from-[#DD9E48] via-[#e0a758] via-[#e7bc80] to-[#DD9E48]'
        } else {
            return 'bg-gradient-to-r from-white to-white'
        }
    }

    const statsAnim = {
        initial: {
            opacity: 0,
            y:-40
        },
        animation: {
            opacity: 1,
            y:0,
            transition: {
                duration: 0.6
            }
        },
        exit: {
            y:40,
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    }

    return ( 
        <motion.div key="landing" className={`bg-main-black relative xl:pt-10 ${landing ? '': 'pb-[5rem] md:pb-28 lg:pb-36 2xl:pb-[20rem]'}`} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.75}}>
            <div className="relative mx-auto max-w-[1920px]">

                <div className="circle-glow z-[1]"></div>
                <div className="circle-glow-large z-[1] right-0 translate-x-[-240px] translate-y-[195px] lg:block hidden 2xl:translate-x-[-380px] 2xl:translate-y-[266px] xl:translate-x-[-270px]"></div>

                <div className="absolute top-0 translate-y-[-178px] translate-x-4 sm:translate-x-[20%] sm:right-0 md:translate-y-[-272px] lg:translate-y-[-267px] xl:translate-y-[-327px] 2xl:translate-x-[15%]">
                    <Lottie autoPlay={true} loop={true} animationData={animationData} className="w-[690px] h-[640px] md:w-[800px] md:h-auto lg:w-[930px] xl:w-[1100px] 2xl:w-[1200px]"/>
                </div>

                <div className="w-[85%] 3xl:w-[75%] flex flex-col pt-[7rem] mx-auto lg:pt-[9.5rem]">
                    <div className="circle-glow-large-left z-[1] xl:translate-x-[20px] xl:translate-y-[-120px] lg:translate-x-0"/>
                    <h1 className="text-white text-[2.7rem] leading-[3.4rem] font-semibold tracking-tight z-[1] md:text-[3.2rem] md:tracking-normal lg:text-6xl lg:text-[4.1rem] lg:w-[77%] xl:text-[4.7rem] xl:w-[85%] 2xl:text-[5.7rem]">{landing ? <>Revolutionising<br/>Computers</> : <>Who are we?</>}</h1>
                    <p className="text-[#C3C3C3] mt-6 text-md font-semibold z-[1] md:w-[600px] md:text-lg xl:text-xl lg:mt-10 2xl:mt-12">{landing ? landingP: landingA}</p>
                    <span><CustomButton text={landing ? "Learn More": "Our Team"} styles="mt-12 lg:hidden" boxShadow="0 0 7em 0 #FFB800"/></span>
                    <span><CustomButton text={landing ? "Learn More": "Our Team"} styles="mt-12 2xl:mt-14 lg:flex hidden" boxShadow="0 0 6em -0.6em #FFB800"/></span>
                    
                    {landing &&
                    <>
                        <div className="flex mt-14 md:mt-[4.5rem] z-[1] self-center w-full max-w-[1000px]">
                            <h3 onClick={() => setStat(0)} className={`statistics-text relative before:absolute before:border-r-[1px] before:inset-0 before:top-[20%] lg:before:top-[5%] before:h-[60%] lg:before:h-[90%] before:border-gray-400 before:right-[10%] md:before:right-0 md:text-center ${gradientColour(0)}`}>50+<br/>Years</h3>
                            <h3 onClick={() => setStat(1)} className={`statistics-text text-center ${gradientColour(1)}`}>$3.4<br/>Trillion</h3>
                            <h3 onClick={() => setStat(2)} className={`statistics-text md:text-center text-right relative before:absolute before:border-l-[1px] lg:before:top-[5%] lg:before:h-[90%] before:inset-0 before:top-[20%] before:h-[60%] before:border-gray-400 before:left-[10%] md:before:left-0 ${gradientColour(2)}`}>85%<br/>Ahead</h3>
                        </div>

                        <AnimatePresence mode="wait">
                            {selectedStat === 0 && <motion.p key={1} variants={statsAnim} initial="initial" animate="animation" exit="exit" className="stats-p">Combined estimated market values for the top 10 applications of the first two versions of our Tech Device.</motion.p>}
                            {selectedStat === 1 && <motion.p key={2} variants={statsAnim} initial="initial" animate="animation" exit="exit" className="stats-p">Ipsam eum consequuntur distinctio saepe provident corporis porro quasi facilis reiciendis officia dolores inventors!</motion.p>}
                            {selectedStat === 2 && <motion.p key={3} variants={statsAnim} initial="initial" animate="animation" exit="exit" className="stats-p">Combined estimated market values for the top 10 applications of the first two versions of our Tech Device.</motion.p>}
                        </AnimatePresence>
                    </>
                    }
                </div>
                
            </div>
        </motion.div>
     );
}
 
export default Landing;