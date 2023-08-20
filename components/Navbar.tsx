"use client"

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {
    const [menuIsOpen, setMenu] = useState(false)

    const handleClick = () => {
        if (menuIsOpen) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    const menuAnim = {
        initial: {
            x: '100%'
        },
        animate: {
            x:0,
            transition: {
                duration: 1,
                ease: [0.76, 0.1, 0.24, 1]
            }
        },
        exit: {
            x: '100%',
            transition: {
                duration: 0.4
            }
        }
    }

    return ( 
        <main className='absolute z-10 w-full'>
            <nav className="w-[85%] h-[75px] flex justify-between items-center pt-2 mx-auto lg:mt-6 md:mt-4">
                <div className='relative lg:flex-1 lg:w-[60px] w-[40px]'>
                    <Image
                        src="/hebratech_logo.png"
                        alt='hebratech logo'
                        className='object-contain'
                        width={50}
                        height={16}
                    />
                </div>

                <ul className='gap-14 hidden lg:flex lg:flex-1 justify-center'>
                    <li className='nav-button'>About Us</li>
                    <li className='nav-button'>Our Team</li>
                </ul>

                <div className='hidden lg:flex-1 lg:flex items-end justify-end lg:mr-2'>
                    <button className='rounded-full px-4 border-[1px] border-[#c0c0c0] flex items-center justify-center pt-0.5 pb-[0.2rem] hover:bg-main-gold hover:bg-opacity-90 hover:border-black duration-200 hover:text-black text-white'>
                        <span className='text-sm'>Contact Us</span>
                    </button>
                </div>

                
                <div className='lg:hidden flex h-[40%] flex-col items-center justify-between cursor-pointer z-20' onClick={handleClick}>
                    <div className={`burger-menu ${menuIsOpen ? 'rotate-45 h-[.25em] w-[2.4em] translate-y-[0.33rem]' : 'burger-menu-lines'}`}/>
                    <div className={`burger-menu ${menuIsOpen ? '' : 'burger-menu-lines'}`}/>
                    <div className={`burger-menu ${menuIsOpen ? 'rotate-[-45deg] h-[.25em] w-[2.4em] translate-y-[-1.1rem]' : 'burger-menu-lines'}`}/>
                </div>

                <AnimatePresence mode='wait'>
                    {menuIsOpen && (
                        <motion.div key="b-menu" className='absolute h-screen w-screen bg-main-black inset-0 flex justify-center items-center flex-col gap-6 top-0' variants={menuAnim} initial="initial" animate="animate" exit="exit">
                            <span className='burger-menu-text'>Home</span>
                            <span className='burger-menu-text'>Our Team</span>
                            <span className='burger-menu-text'>About Us</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </main>
     );
}
 
export default Navbar;