import Image from 'next/image';
import TextReveal from "@/motion/Reveal";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData  from '../animations/orbit.json'

const FoundersLanding = () => {
    return ( 
        <div className="bg-main-black pt-12 lg:pt-20 h-full relative lg:pb-10">
            <div className="relative max-w-[1920px] mx-auto">
            <div className="absolute top-0 left-0 translate-x-[-260px] translate-y-[-217px] lg:block hidden xl:translate-x-[-240px] xl:translate-y-[-245px] 3xl:translate-x-[-130px] 2xl:translate-x-[-120px]">
                    <Lottie autoPlay={true} loop={true} animationData={animationData} className="w-[890px] xl:w-[1100px] 3xl:w-[1200px] h-auto"/>
            </div>
            <div className="absolute translate-x-[-45%] mt-4 w-[430px] h-[310px] md:h-[365px] lg:translate-x-[4.65rem] lg:w-[220px] 3xl:w-[290px] lg:translate-y-[1.85rem] xl:translate-x-[11.2rem] xl:translate-y-[6.8rem] xl:w-[260px] 2xl:translate-x-[18.8rem] 3xl:translate-x-[20.3rem] 3xl:translate-y-[9.8rem]">
            <Image
                src="/hebratech_logo.png"
                alt='hebratech logo'
                className='opacity-[0.2] object-contain lg:opacity-100'
                fill={true}
            />
            </div>

            <div className="flex mx-auto items-center justify-center flex-col max-w-[1600px] w-[85%]">
                <TextReveal><h2 className="text-white xl:pb-6 lg:pb-2 text-2xl 2xl:text-8xl lg:text-7xl lg:text-[4.3rem] md:text-3xl font-semibold lg:before:hidden text-center mb-8 before:absolute relative before:border-b-[1px] before:border-[#A3A3A3] before:w-[110%] before:right-[-5%] before:top-10 before:bottom-0 before:opacity-50">MEET OUR FOUNDERS</h2></TextReveal>
                
                <p className="text-[#C3C3C3] md:text-lg z-[1] lg:absolute lg:text-base lg:w-[33%] lg:translate-y-[128px] lg:translate-x-[4rem] lg:left-0 xl:translate-y-[188px] xl:translate-x-[7rem] 2xl:text-lg 2xl:translate-x-[9rem] 2xl:w-[37%]">HeBra Technologies is led by a visionary team of founders, each bringing diverse expertise to the table. Their collective knowledge in optics, mathematics, physics, and manufacturing drives groundbreaking innovations in optical computing and related technologies.</p>

                <button type="button" className="radial mt-8 self-start lg:absolute lg:left-0 lg:lg:translate-y-[248px] lg:translate-x-[4rem] xl:translate-y-[298px] xl:translate-x-[7rem] 2xl:translate-x-[9rem]">
                    <span className="font-semibold text-sm tracking-tight text-white md:text-base">SEE MORE OF THE TEAM</span>
                </button>

                <div className="founders">
                    <div className="founder_sections 2xl:mb-6">
                        <div className="founder_images">
                            <Image
                                src="/ANTHONY_HESTER_PhD_Founder_HebraTech.png"
                                alt='Founder Anthony Hester'
                                fill={true}
                                className='object-contain'
                            />
                        </div>
                        
                        <h3 className='founder_name'>Anthony Hester</h3>
                        <span className='founder_position'>PHD, Founder, CTO</span>
                    </div>


                    <div className="founder_sections">
                        <div className="founder_images">
                            <Image
                                src="/SUNSHINE_WEBB_BRAZELTON_HebraTech.png"
                                alt='Founder Sunny Webb Brazelton'
                                fill={true}
                                className='object-contain'
                            />
                        </div>
                        
                        <h3 className='founder_name'>Sunny Webb Brazelton</h3>
                        <span className='founder_position'>Founder, CEO</span>
                    </div>
                </div>

                <div className="founders mt-6">
                    <div className="founder_sections">
                        <div className="founder_images">
                            <Image
                                src="/STACY_BRAZELTON_Founder_HebraTech.png"
                                alt='Founder Stacy Brazelton'
                                fill={true}
                                className='object-contain'
                            />
                        </div>
                        
                        <h3 className='founder_name'>Stacy Brazelton</h3>
                        <span className='founder_position'>Founder, COO</span>
                    </div>


                    <div className="founder_sections">
                        <div className="founder_images">
                            <Image
                                src="/CHARIES_HESTER_PhD_Founder_HebraTech.png"
                                alt='Founder Charles Hester'
                                fill={true}
                                className='object-contain'
                            />
                        </div>
                        
                        <h3 className='founder_name'>Charles Hester</h3>
                        <span className='founder_position'>PHD, Founder, Chief Engineer - Physics & Optics</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
 
export default FoundersLanding;