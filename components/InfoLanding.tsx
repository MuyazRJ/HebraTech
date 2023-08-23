
import Image from "next/image";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import infoAData  from '../animations/new_age_of_computing.json'
import infoSData  from '../animations/super_communications.json'

const InfoLanding = () => {
    return ( 
        <div className="bg-main-black xl:pt-20 pt-8 h-full items-center pb-20">
            <div className="mt-4 w-[75%] z-[1] mb-10 mx-auto lg:hidden" style={{borderBottom: '2px solid rgba(255, 255, 255, .75)'}}/>

            <div className="mx-auto flex-col items-center justify-center flex lg:flex-row lg:w-[85%] lg:gap-[6rem] max-w-[1600px]">
                <div className="info_container">
                <div className="relative"><Lottie autoPlay={true} loop={true} animationData={infoAData} className="w-[130px] lg:w-[150px] xl:w-[200px] 3xl:w-[230px] h-auto"/></div>

                    <h2 className="info_t">The New-Age Of Computing</h2>
                    <p className="info_p">The quantum-powered computing devices offer exceptional capabilities, including the equivalent of 2 million qubits and operating speeds hundreds of millions of times faster than traditional computing. These devices generate no heat and address the limitations of digital computing, providing a solution to the growing computational power crisis.</p>
                    <button type="button" className="radial mt-8 self-start" >
                        <span className="info_s">Learn More</span>
                    </button>
                </div>

                <div className="w-[45%] mt-10 mb-10 lg:hidden" style={{borderBottom:'1px solid rgba(255, 255, 255, .75)'}}/>

                <div className="info_container">
                    <div className="relative"><Lottie autoPlay={true} loop={true} animationData={infoSData} className="w-[130px] lg:w-[150px] xl:w-[200px] 3xl:w-[230px] h-auto"/></div>

                    <h2 className="info_t">Super Communications</h2>
                    <p className="info_p">On the other hand, the superpowered communication networks enable long-range laser communications that can transmit data through the atmosphere and weather. This advancement has the potential to greatly enhance and revolutionize global communication systems by significantly improving efficiency and reliability.</p>
                    <button type="button" className="radial mt-8 self-start" >
                        <span className="info_s">Learn More</span>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default InfoLanding;