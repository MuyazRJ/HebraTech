"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CustomButton } from ".";
import { useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData  from '../animations/orbit.json'

const Landing = ({ doneLoading }: { doneLoading: boolean}) => {
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
        <motion.div key="landing" className="bg-main-black overflow-hidden origin-top relative" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.75}}>
            <div className="circle-glow z-[1]"></div>
            <div className="absolute top-0 left-0 translate-y-[-175px] translate-x-4">
                <Lottie autoPlay={true} loop={true} animationData={animationData} className="w-[690px] h-[640px]"/>
            </div>
            <div className="max-w-[85%] flex flex-col mt-[7rem] mx-auto">
                <h1 className="text-white text-[2.7rem] leading-[3.4rem] font-semibold tracking-tight z-[1]">Revolutionising Computers</h1>
                <p className="text-[#C3C3C3] mt-6 text-md font-semibold z-[1]">Introducing the next revolution in technology: computing and communications using quantum particles.</p>
                <span><CustomButton text="Learn More" styles="mt-12 text-md" boxShadow="0 0 7em 0 #FFB800"/></span>
                
                <div className="flex mt-14">
                    <h3 onClick={() => setStat(0)} className={`statistics-text relative before:absolute before:border-r-[1px] before:inset-0 before:top-[20%] before:h-[60%] before:border-gray-400 before:right-[10%] ${gradientColour(0)}`}>50+<br/>Years</h3>
                    <h3 onClick={() => setStat(1)} className={`statistics-text text-center ${gradientColour(1)}`}>$3.4<br/>Trillion</h3>
                    <h3 onClick={() => setStat(2)} className={`statistics-text text-right relative before:absolute before:border-l-[1px] before:inset-0 before:top-[20%] before:h-[60%] before:border-gray-400 before:left-[10%] ${gradientColour(2)}`}>50+<br/>Years</h3>
                </div>

                <AnimatePresence mode="wait">
                    {selectedStat === 0 && <motion.p key={1} variants={statsAnim} initial="initial" animate="animation" exit="exit" className="stats-p">Combined estimated market values for the top 10 applications of the first two versions of our Tech Device.</motion.p>}
                    {selectedStat === 1 && <motion.p key={2} variants={statsAnim} initial="initial" animate="animation" exit="exit" className="stats-p">Ipsam eum consequuntur distinctio saepe provident corporis porro quasi facilis reiciendis officia dolores inventors!</motion.p>}
                    {selectedStat === 2 && <motion.p key={3} variants={statsAnim} initial="initial" animate="animation" exit="exit" className="stats-p">Combined estimated market values for the top 10 applications of the first two versions of our Tech Device.</motion.p>}
                </AnimatePresence>
            </div>
        </motion.div>
     );
}
 
export default Landing;