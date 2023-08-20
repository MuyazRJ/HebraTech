"use client"

import { AnimatePresence, delay, easeIn, motion } from "framer-motion"

const Preloader = ({ loading }: { loading: boolean }) => {
    const title = "HEBRA"

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
            }
        }
    }

    const letterAnimation = {
        initial: {
            y: 210
        },
        animate: {
            y: 0,
            transition: {
                ease:[0, 0.55, 0.45, 1],
                duration: 0.8
            }
        }
    }

    const enter = {
        initial:{
            y:'-100%'
        },
        animate: {
            y:0,
            transition: {
                duration: 0.85, ease:[0.99, 0, 0.17, 1],
                delay: 0.3
            }
        }
    }

    return ( 
        <>
            <div className={`h-screen w-screen absolute -z-10 duration-[400ms] ${loading ? 'bg-[#F3BF28]': 'bg-main-black'}`}>
                <div className="w-full h-full flex items-center">
                    <div className="overflow-y-hidden mx-auto">
                        <motion.span variants={stagger} initial="initial" animate="animate" className="flex relative pb-20" key="let">
                            {Array.from(title).map((letter, index) => (
                                <motion.span key={index} variants={letterAnimation} className={`font-semibold text-[6.4rem] tracking-normal overflow-x-hidden ${loading ? 'text-black': 'text-[#F3BF28]'}`} >{letter}</motion.span>
                            ))}
                        </motion.span>
                    </div>
                </div>
            </div>

            {!loading && <motion.div className="fixed bg-[#F3BF28] h-screen w-screen -z-10" variants={enter} initial='initial' animate='animate'/>}
            {!loading && <motion.div className="fixed bg-main-black h-screen w-screen -z-10" variants={enter} initial='initial' animate={{y:0, transition:{duration:0.85, ease:[0.99, 0, 0.17, 1], delay:0.6}}}/>}
        </>
     );
}
 
export default Preloader;