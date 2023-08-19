import Image from 'next/image';
import TextReveal from "@/motion/Reveal";

const FoundersLanding = () => {
    return ( 
        <div className="bg-main-black pt-12 h-full">
            <Image
                src="/hebratech_logo.png"
                alt='hebratech logo'
                className='object-contain opacity-[0.15] absolute translate-x-[-45%] mt-4 grayscale-100'
                width={330}
                height={270}
            />

            <div className="flex max-w-[85%] mx-auto items-center justify-center flex-col">
                <TextReveal><h2 className="text-white text-2xl font-semibold text-center mb-8 before:absolute relative before:border-b-[1px] before:border-[#A3A3A3] before:w-[110%] before:right-[-5%] before:top-10 before:bottom-0 before:opacity-50">MEET OUR FOUNDERS</h2></TextReveal>
                
                <p className="text-[#C3C3C3]">HeBra Technologies is led by a visionary team of founders, each bringing diverse expertise to the table. Their collective knowledge in optics, mathematics, physics, and manufacturing drives groundbreaking innovations in optical computing and related technologies.</p>

                <button type="button" className="radial mt-8 self-start" >
                    <span className="font-semibold text-sm tracking-tight text-white">SEE MORE OF THE TEAM</span>
                </button>

                <div className="founders mt-12">
                    <div className="founder_sections">
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
    )
}
 
export default FoundersLanding;