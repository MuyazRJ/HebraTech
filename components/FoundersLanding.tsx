import Image from 'next/image';
import TextReveal from "@/motion/Reveal";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData  from '../animations/orbit.json'
import Link from 'next/link';

const FoundersLanding = () => {
    return ( 
        <div className="founders_bg" id="founders_landing">
            <div className="relative max-w-[1920px] mx-auto">
            <div className="info_animation">
                    <Lottie autoPlay={true} loop={true} animationData={animationData} className="w-[890px] xl:w-[1100px] 3xl:w-[1200px] h-auto"/>
            </div>
            <div className="logo">
            <Image
                src="/hebratech_logo.png"
                alt='hebratech logo'
                className='opacity-[0.2] object-contain lg:opacity-100'
                fill={true}
            />
            </div>

            <div className="founders_section">
                <TextReveal><h2 className="founders_title">MEET OUR FOUNDERS</h2></TextReveal>
                
                <p className="founders_p">HeBra Technologies is led by a visionary team of founders, each bringing diverse expertise to the table. Their collective knowledge in optics, mathematics, physics, and manufacturing drives groundbreaking innovations in optical computing and related technologies.</p>

                <button type="button" className="founders_button">
                    <Link href="/about#team2"><span className="font-semibold text-sm tracking-tight text-white md:text-base">SEE MORE OF THE TEAM</span></Link>
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