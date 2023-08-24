"use client"

import TextReveal from "@/motion/Reveal";
import { motion, AnimatePresence, easeOut } from "framer-motion"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Hexagon } from ".";

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
        if (member === 1) {
            setP("Christina is our government relations, strategic communications and public relations guru. She specialized in political, corporate and non-profit consulting at the local, state and federal levels before joining HeBra Tech. She has over twenty-five years of experience in government affairs and crisis management.")
            setMemberName('CHRISTINA BUTLER, Director of Government Affairs')
        }

        else if (member === 2) {
            setP("Dr. Reardon received his B.S. in Physics from DePaul University, his M.S. and Ph.D. in Physics from UAH. Dr. Reardon specializes in performing research in optical design techniques for analogue optical computing. He was the Chief Optical Systems Designer at Teledyne Brown Engineering, where he worked on analog optical computing, diffractive and micro-optics technology, IR seekers, IR zoom systems, and an optical system for a space borne protein crystal growth experiment. As a consultant, he designed novel intraocular lenses and developed metrology systems for testing them. He also worked for Johnson & Johnson as the Manager of Optical Design of their Progressive Addition Spectacle Lens team. At the Center for Applied Optics, his work spans the fields of polarimeter calibration, space-based optics, large optics metrology, eye oximetry, HEL systems, turbulence measurement, ophthalmic optics and optical systems design and analysis.")
            setMemberName('PATRICK J. REARDON, PhD Director, Center for Applied Optics (UAH Team)')
        }

        else if (member === 3) {
            setP("Dr. Bloom received his B.S. in Electrical Engineering from the University of California Santa Barbara in 1970 and his M.S. and Ph.D. in Electrical Engineering from Stanford University. He is a Fellow of OSA and recipient of the 1980 Adolph Lomb Medal “For his contributions to the use of nonlinear optical processes to achieve real-time conjugate-wavefront generation and image reconstruction.” Bloom worked at AT Bell Laboratories, Hewlett Packard Laboratories and was a Professor in the Stanford University Department of Electrical Engineering from 1983 to 1996 and from 1999 to 2000. He is a fellow of the Optical Society of America and of the IEEE. Dr. Bloom founded a number of companies including Lightwave Electronics, New Focus, and Silicon Light Machines and is President of ALCES Technology, Incorporated.")
            setMemberName('DAVID M. BLOOM, PhD (Stanford Team) Professor. Stanford University Fellow of OSA, 1980 Adolph Lomb Medal Recipient')
        }
        
        else if (member === 4) {
            setP("Dr. Fedder received his B.S. in Physics from DePaul University, his M.S. and Ph.D. in Physics from UAH. Dr. Reardon specializes in performing research in optical design techniques for analogue optical computing. He was the Chief Optical Systems Designer at Teledyne Brown Engineering, where he worked on analog optical computing, diffractive and micro-optics technology, IR seekers, IR zoom systems, and an optical system for a space borne protein crystal growth experiment. As a consultant, he designed novel intraocular lenses and developed metrology systems for testing them. He also worked for Johnson & Johnson as the Manager of Optical Design of their Progressive Addition Spectacle Lens team. At the Center for Applied Optics, his work spans the fields of polarimeter calibration, space-based optics, large optics metrology, eye oximetry, HEL systems, turbulence measurement, ophthalmic optics and optical systems design and analysis.")
            setMemberName('GARY K. FEDDER, PhD (Carnegie Mellon Team) Howard M. Wilkoff Professor of Electrical and Computer Engineering Carnegie Mellon University ')
        }

        else if (member === 5) {
            setP("Juan is a doctoral candidate in Plasma Physics with the Space Sciences Department at UAH. He earned a Bachelor of Science in both Mathematics and Physics and earned a Masters in Space Science from UAH. He will be heading HeBra Tech's Simulations Team. Juan is originally from Spain but grew up in the US. His father is a member of NATO and their family traveled extensively throughout his childhood. He is multilingual. We consider Juan to be the future of HeBra Tech.")
            setMemberName('JUAN ALONSO Director of Simulations')
        }

        else if (member === 6) {
            setP("Dr. Morales received his BS in Mathematics from the Universidad de Chile in Santiago, and Master's in Mathematics from Universidad Tecnica del Estado, Santiago, and an MS in Statistics from the University of Iowa. He earned his doctorate in Mathematics from the University of Iowa. Professor Morales taught Mathematics and Physics for over 55 years. He is also the Chairman of the Board and is developing education modules for the QIE Foundation, our online STEM education nonprofit.")
            setMemberName('CLAUDIO MORALES, PhD Mathematician & Algorithms Expert')
        }

        else if (member === 7) {
            setP("Bobby has been a banking executive around Huntsville, Madison County and the Southeast for over 55 years and has served on countless leadership and social boards all over the area including the City of Madison Industrial Development Board, the Madison Hospital Board of Directors, Committee of 100, Huntsville Madison County Chamber of Commerce - Leadership Class 12, a Hall of Fame member of the Huntsville Madison County Builders Association, former Director of the Mortgage Bankers Association of Alabama and countless others.")
            setMemberName('BOBBY DENEEFE Financial Advisor and Board Member')
        }
        
    }, [member])

    return ( 
        <div className="bg-main-black h-screen">
            <TextReveal>
                <div className="flex justify-center"><h2 className="text-white text-3xl 2xl:text-8xl lg:text-7xl lg:text-[4.3rem] font-semibold text-center mb-10 before:absolute relative before:border-b-[1px] before:border-[#A3A3A3] before:w-[110%] before:right-[-5%] before:top-10 before:bottom-0 before:opacity-50 lg:before:hidden">KEY TEAM MEMBERS</h2></div>
            </TextReveal>

            <div className="flex flex-col justify-center w-[85%] mx-auto items-center">
                <div className="flex gap-4">
                    <Hexagon imgPath="GARY_K._FEDDER_PhD.png" size="100" alt="GARY K. FEDDER" click={() => setMember(4)} currentMember={member} memberNumber={4}/>
                    <Hexagon imgPath="PATRICK_J._REARDON_PhD.png" size="100" alt="PATRICK J. REARDON" click={() => setMember(2)} currentMember={member} memberNumber={2}/>
                </div>

                <div className="flex gap-4">
                    <Hexagon imgPath="DAVID_M._BLOOM_PhD_Stanford_Team_Professor.png" size="100" alt="DAVID M. BLOOM" click={() => setMember(3)} currentMember={member} memberNumber={3}/>
                    <Hexagon imgPath="JUAN_ALONSO_Director_of_Simulations.png" size="100" alt="JUAN ALONSO" click={() => setMember(5)} currentMember={member} memberNumber={5}/>
                    <Hexagon imgPath="CHRISTINA_BUTLER_Director_of_Government_Affairs_-HeBraTech_1.png" size="100" alt="CHRISTINA BUTLER" click={() => setMember(1)} currentMember={member} memberNumber={1}/>
                </div>


                <div className="flex gap-4">
                    <Hexagon imgPath="CLAUDIO_MORALES_PhD_Mathematician__Algorithms_Expert.png" size="100" alt="CLAUDIO MORALES" click={() => setMember(6)} currentMember={member} memberNumber={6}/>
                    <Hexagon imgPath="BOBBY_DENEEFE_Financial_Advisor_and_Board_Member.png" size="100" alt="BOBBY DENEEFE" click={() => setMember(7)} currentMember={member} memberNumber={7}/>
                </div>

                <div className="border-l-[3.5px] border-main-gold ml-[1.2rem] mt-14 overflow-hidden relative mb-2">
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