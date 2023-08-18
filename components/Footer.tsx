import Image from "next/image";

const Footer = () => {
    return ( 
        <div className="bg-main-black w-full pb-10 flex justify-center relative">
            <div className="absolute w-[270px] h-[270px] left-0 translate-x-[-70px] opacity-40">
                <Image
                    src="/footer_logo.png"
                    alt='hebratech logo'
                    className='object-contain'
                    fill={true}
                />
            </div>
            <div className="flex w-[85%] justify-between mt-8 z-[1] items-center">
                <div className="flex flex-col">
                  
                <span className="text-white mt-4">HebraTech 2023</span>
                <span className="text-white mt-4">All rights reserved &copy;</span>
            </div>

                <div className="flex flex-col gap-4 justify-center">
                    <span className="text-white tracking-light">Who are we?</span>
                    <span className="text-white tracking-light">Our Team</span>
                    <span className="text-white tracking-light">Contact us</span>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;