"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from "react-scroll/modules";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion"

const Navbar = ({ landing }: { landing: boolean }) => {
    const [menuIsOpen, setMenu] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleClick = () => {
        if (menuIsOpen) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    const handleScroll = () => {
        setPrevScrollPos(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

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
        <main className={`fixed z-10 w-full duration-300 ${prevScrollPos < 50 ? 'bg-transparent':'bg-main-black'}`}>
            <motion.div >
                <nav className="w-[85%] 3xl:w-[75%] h-[75px] flex justify-between items-center pt-2 mx-auto lg:h-[100px] max-w-[1440px]">
                        <div className='relative lg:flex-1 lg:w-[45px] w-[40px]'>
                            <Link href='/'>
                                <Image
                                    src="/hebratech_logo.png"
                                    alt='hebratech logo'
                                    className='object-contain'
                                    width={55}
                                    height={16}
                                />
                            </Link>
                        </div>
                   
                    <ul className='gap-14 hidden lg:flex lg:flex-1 justify-center'>
                        {landing && <li className='nav-button'><Link href="/about">About Us</Link></li>}
                        {landing && <li className='nav-button'><Link href="/about">Our Team</Link></li>}

                        {!landing && <li className='nav-button'><ScrollLink to='landing' smooth={true}>About Us</ScrollLink></li>}
                        {!landing && <ScrollLink to="team" smooth={true} offset={-120}><li className='nav-button'>Our Team</li></ScrollLink>}
                    </ul>

                    <div className='hidden lg:flex-1 lg:flex items-end justify-end lg:mr-2'>
                        <ScrollLink to="contact" smooth={true} offset={-120}>
                            <button className='rounded-full px-4 border-[1px] border-[#c0c0c0] flex items-center justify-center pt-0.5 pb-[0.2rem] hover:bg-main-gold hover:bg-opacity-90 hover:border-black duration-200 hover:text-black text-white'>
                                <span className='text-sm'>Contact Us</span>
                            </button>
                        </ScrollLink>
                    </div>

                    
                    <div className='lg:hidden flex h-[40%] flex-col items-center justify-between cursor-pointer z-20' onClick={handleClick}>
                        <div className={`burger-menu ${menuIsOpen ? 'rotate-45 h-[.25em] w-[2.4em] translate-y-[0.33rem]' : 'burger-menu-lines'}`}/>
                        <div className={`burger-menu ${menuIsOpen ? '' : 'burger-menu-lines'}`}/>
                        <div className={`burger-menu ${menuIsOpen ? 'rotate-[-45deg] h-[.25em] w-[2.4em] translate-y-[-1.1rem]' : 'burger-menu-lines'}`}/>
                    </div>

                    <AnimatePresence mode='wait'>
                        {menuIsOpen && (
                            <motion.div key="b-menu" className='absolute h-screen w-screen bg-main-black inset-0 flex justify-center items-center flex-col gap-6 top-0' variants={menuAnim} initial="initial" animate="animate" exit="exit">
                                {landing && <ScrollLink to='landing' smooth={true}><span className='burger-menu-text' onClick={handleClick}>Home</span></ScrollLink>}
                                {!landing && <Link href='/' onClick={handleClick}><span className='burger-menu-text'>Home</span></Link>}
                                {!landing && <ScrollLink to='team' onClick={handleClick} smooth={true}><span className='burger-menu-text'>Our Team</span></ScrollLink>}
                                {landing && <Link href='/about' onClick={handleClick}><span className='burger-menu-text'>Our Team</span></Link>}
                                {!landing && <ScrollLink to='landing' onClick={handleClick} smooth={true}><span className='burger-menu-text'>About Us</span></ScrollLink>}
                                {landing && <Link href='/about' onClick={handleClick}><span className='burger-menu-text'>About Us</span></Link>}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.div>
        </main>
     );
}
 
export default Navbar;