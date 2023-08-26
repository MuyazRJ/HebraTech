"use client"

import Image from "next/image";
import Link from 'next/link';
import { Link as ScrollLink } from "react-scroll/modules";

const Footer = ({ landing }: { landing:boolean }) => {
    return ( 
        <div className="bg-main-black w-full pb-10 flex justify-center relative">
            <div className="absolute w-[270px] h-[270px] left-0 translate-x-[-70px] opacity-50">
                <Image
                    src="/footer_logo.png"
                    alt='hebratech logo'
                    className='object-contain'
                    fill={true}
                />
            </div>
            <div className="flex w-[85%] gap-[4.5rem] mt-8 z-[1] items-center justify-center sm:justify-between">
                <div className="flex flex-col">
                  
                <span className="text-white mt-4 sm:text-lg md:text-xl">HebraTech 2023</span>
                <span className="text-white mt-4 sm:text-lg md:text-xl">All rights reserved &copy;</span>
                <span className="text-white mt-4 sm:text-lg md:text-xl">Developed by <a href="https://www.arctech.studio/" target="_blank">Arctech</a></span>
            </div>

                <div className="flex flex-col gap-4 justify-center">
                    {landing && <Link href="/about"><span className="text-white tracking-light sm:text-lg md:text-xl cursor-pointer">Who are we?</span></Link>}
                    {!landing && <ScrollLink to="landing" smooth={true} offset={-200}><span className="text-white tracking-light sm:text-lg md:text-xl cursor-pointer">Who are we?</span></ScrollLink>}

                    <ScrollLink to={`${landing ? 'founders_landing': 'founders'}`} smooth={true} offset={-200}><span className="text-white tracking-light sm:text-lg md:text-xl cursor-pointer">Our Team</span></ScrollLink>
                    <ScrollLink to='contact' smooth={true}><span className="text-white tracking-light sm:text-lg md:text-xl cursor-pointer">Contact us</span></ScrollLink>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;