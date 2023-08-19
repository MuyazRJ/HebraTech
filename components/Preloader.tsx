"use client"

import { AnimatePresence, delay, easeIn, motion } from "framer-motion"

const Preloader = ({ loading, doneLoading }: { loading: boolean, doneLoading: boolean}) => {
    const title = "Loading..."

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
        <AnimatePresence mode="wait">
            <div className="bg-main-black h-screen w-screen absolute -z-10">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="overflow-hidden p-4">
                        <motion.span variants={stagger} initial="initial" animate="animate" className="flex" key="let">
                            {Array.from(title).map((letter, index) => (
                                <motion.span key={index} variants={letterAnimation} className={`text-white text-8xl ${loading ? 'flex': 'hidden'}`} >{letter}</motion.span>
                            ))}
                        </motion.span>
                    </div>
                </div>
            </div>

            {!loading && <motion.div className="fixed bg-white h-screen w-screen -z-10" variants={enter} initial='initial' animate='animate'/>}
            {!loading && <motion.div className="fixed bg-main-black h-screen w-screen -z-10" variants={enter} initial='initial' animate={{y:0, transition:{duration:0.85, ease:[0.99, 0, 0.17, 1], delay:0.6}}}/>}
        </AnimatePresence>
     );
}
 
export default Preloader;