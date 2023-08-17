
import Image from "next/image";

const InfoLanding = () => {
    return ( 
        <div className="bg-main-black pt-12 h-full flex flex-col items-center">
            <div className="mt-4 w-[75%] mb-10" style={{borderBottom: '2px solid rgba(255, 255, 255, .75)'}}/>
            <div className="flex flex-col items-center max-w-[85%]">
                <Image
                    src="/filler.png"
                    alt='hebratech logo'
                    className='object-contain'
                    width={50}
                    height={50}
                />

                <h2 className="text-white font-bold text-xl mt-6">The New-Age Of Computing</h2>
                <p className="text-[#C3C3C3] mt-4  w-[100%]">The quantum-powered computing devices offer exceptional capabilities, including the equivalent of 2 million qubits and operating speeds hundreds of millions of times faster than traditional computing. These devices generate no heat and address the limitations of digital computing, providing a solution to the growing computational power crisis.</p>
                <button type="button" className="radial mt-8 self-start" >
                    <span className="font-bold text-md tracking-tight text-white">Learn More</span>
                </button>
            </div>

            <div className="w-[45%] mt-10 mb-10" style={{borderBottom:'1px solid rgba(255, 255, 255, .75)'}}/>

            <div className="flex flex-col items-center max-w-[85%]">
                <Image
                    src="/filler2.png"
                    alt='hebratech logo'
                    className='object-contain'
                    width={50}
                    height={50}
                />

                <h2 className="text-white font-bold text-xl mt-6">Super Communications</h2>
                <p className="text-[#C3C3C3] mt-4 w-[100%]">On the other hand, the superpowered communication networks enable long-range laser communications that can transmit data through the atmosphere and weather. This advancement has the potential to greatly enhance and revolutionize global communication systems by significantly improving efficiency and reliability.</p>
                <button type="button" className="radial mt-8 self-start" >
                    <span className="font-bold text-md tracking-tight text-white">Learn More</span>
                </button>
            </div>
        </div>
     );
}
 
export default InfoLanding;