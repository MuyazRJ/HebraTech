"use client"

import TextReveal from "@/motion/Reveal";
import { motion, AnimatePresence, easeOut } from "framer-motion"
import { useState, useEffect } from "react";
import { Hexagon } from ".";
import { membersData } from "./data";
import Image from "next/image";

const Team = () => {
    const [member, setMember] = useState(4)
    const [currentPara, setP] = useState('')
    const [currentMemberName, setMemberName] = useState('')

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
        setMemberName(membersData[member - 1].name)
        setP(membersData[member - 1].description)
    }, [member])

    return ( 
        <div className="bg-main-black pb-10 relative">
            <TextReveal>
                <div className="flex justify-center"><h2 className="founders_text z-[32]">KEY TEAM MEMBERS</h2></div>
            </TextReveal>

            <div className="flex flex-col justify-center w-[90%] mx-auto items-center mt-8">
                <div className="absolute w-screen h-full">

                </div>
                <div className="w-[120vw] relative hidden">
                    <div className="w-full h-[0.1px] bg-main-gold absolute translate-y-[13.5rem] rotate-[29deg] bg-gradient-to-r from-[#FFA800] to-[#FFB800] opacity-80"/>
                    <div className="w-full h-[0.1px] bg-main-gold absolute translate-y-[7.5rem] rotate-[29deg] opacity-30"/>
                    <div className="w-full h-[0.1px] bg-main-gold absolute translate-y-[5rem] rotate-[29deg] opacity-30"/>
                    <div className="w-full h-[0.1px] bg-main-gold absolute translate-y-[2rem] rotate-[29deg] opacity-30"/>
                    <div className="w-[80%] h-[0.1px] bg-main-gold absolute translate-y-[15.5rem] rotate-[29deg] opacity-30"/>
                    <div className="w-[70%] h-[0.1px] bg-main-gold absolute translate-y-[17.5rem] rotate-[29deg] opacity-60"/>
                </div>
                
                <div className="flex flex-col items-center relative">
                    <div className="absolute">
                    <div className="relative w-[450px] h-[450px]">
                    <Image
                        src="/lines_shooting.png"
                        alt='Founder Anthony Hester'
                        fill={true}
                        className='absolute scale-150 object-contain -translate-y-4'
                    />
                    </div>
                    </div>

                    <div className="flex gap-6">
                        <Hexagon imgPath="GARY_K._FEDDER_PhD.png" size="100" alt="GARY K. FEDDER" click={() => setMember(4)} currentMember={member} memberNumber={4}/>
                        <Hexagon imgPath="PATRICK_J._REARDON_PhD.png" size="100" alt="PATRICK J. REARDON" click={() => setMember(2)} currentMember={member} memberNumber={2}/>
                    </div>

                    <div className="flex gap-6">
                        <Hexagon imgPath="DAVID_M._BLOOM_PhD_Stanford_Team_Professor.png" size="100" alt="DAVID M. BLOOM" click={() => setMember(3)} currentMember={member} memberNumber={3}/>
                        <Hexagon imgPath="JUAN_ALONSO_Director_of_Simulations.png" size="100" alt="JUAN ALONSO" click={() => setMember(5)} currentMember={member} memberNumber={5}/>
                        <Hexagon imgPath="CHRISTINA_BUTLER_Director_of_Government_Affairs_-HeBraTech_1.png" size="100" alt="CHRISTINA BUTLER" click={() => setMember(1)} currentMember={member} memberNumber={1}/>
                    </div>


                    <div className="flex gap-6">
                        <Hexagon imgPath="CLAUDIO_MORALES_PhD_Mathematician__Algorithms_Expert.png" size="100" alt="CLAUDIO MORALES" click={() => setMember(6)} currentMember={member} memberNumber={6}/>
                        <Hexagon imgPath="BOBBY_DENEEFE_Financial_Advisor_and_Board_Member.png" size="100" alt="BOBBY DENEEFE" click={() => setMember(7)} currentMember={member} memberNumber={7}/>
                    </div>
                </div>

                <div className="border-l-[3.5px] border-main-gold ml-[1.2rem] mt-10 overflow-x-hidden relative mb-2">
                    <AnimatePresence mode="wait">
                        {<motion.h2 initial="initial" animate="animation" exit="exit" key={member} variants={pAnim} className="text-white font-semibold pl-[0.4rem] font-[jost] -translate-y-0.5 tracking-normal text-sm">{currentMemberName}</motion.h2>}
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        {<motion.p initial="initial" animate="animation" exit="exit" key={member} variants={pAnim} className="text-[#E1E1E1] mt-1 font-[jost] text-xs pl-[0.4rem] tracking-normal font-[500] overflow-hidden">{currentPara}</motion.p>}
                    </AnimatePresence>
                </div>
            </div>
        </div>
     );
}
 
export default Team;