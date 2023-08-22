import TextReveal from "@/motion/Reveal";
import { CustomButton } from ".";


const Brief = () => {
    return ( 
        <div className="bg-main-black xl:pt-10 pt-6">
            <div className="flex w-[85%] 3xl:w-[75%] mx-auto items-center justify-center flex-col max-w-[1470px] z-[1]">
                <TextReveal>
                <h2 className="text-white md:text-3xl z-[1] text-2xl 2xl:text-8xl lg:text-7xl lg:text-[4.3rem] font-semibold text-center mb-8 before:absolute relative before:border-b-[1px] before:border-[#A3A3A3] before:w-[110%] before:right-[-5%] before:top-10 before:bottom-0 before:opacity-50 lg:before:hidden">HEBRA TECHNOLOGIES</h2></TextReveal>

                <p className="text-[#C3C3C3] md:text-lg 2xl:pt-10 xl:pt-4 2xl:text-xl z-[1]">HeBra Technologies specializes in photon-based  technology, focusing on quantum-powered computing devices and superpowered communication networks through long-range laser communications.<br/><br/>At HeBra Technologies, we have invented and patented two versions of our tech devices. One will quantum power all computing devices, with the equivalent of 2 million qubits, and the other will superpower all communications networks, using long-range laser communications through the atmosphere. Both use virtually no energy, making them extremely climate friendly.</p>

                <div className="self-start xl:pt-10"><CustomButton text="Meet Our Team" styles="mt-10" boxShadow="0 0 12.5em 0 #FFB800"/></div>
            </div>
        </div>
     );
}
 
export default Brief;