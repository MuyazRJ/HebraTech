import TextReveal from "@/motion/Reveal";
import { CustomButton } from ".";


const Brief = () => {
    return ( 
        <div className="bg-main-black pt-10 -z-[100]">
            <div className="flex w-[75%] mx-auto items-center justify-center flex-col max-w-[1470px]">
                <TextReveal>
                <h2 className="text-white text-2xl lg:text-8xl font-semibold text-center mb-8 before:absolute relative  before:border-b-[1px] before:border-[#A3A3A3] before:w-[110%] before:right-[-5%] before:top-10 before:bottom-0 before:opacity-50 lg:before:hidden">HEBRA TECHNOLOGIES</h2></TextReveal>

                <p className="text-[#C3C3C3] lg:text-2xl pt-10">HeBra Technologies specializes in photon-based  technology, focusing on quantum-powered computing devices and superpowered communication networks through long-range laser communications.<br/><br/>At HeBra Technologies, we have invented and patented two versions of our tech devices. One will quantum power all computing devices, with the equivalent of 2 million qubits, and the other will superpower all communications networks, using long-range laser communications through the atmosphere. Both use virtually no energy, making them extremely climate friendly.</p>

                <div className="justify-self-start self-start pt-10"><CustomButton text="Meet Our Founders" styles="mt-10" boxShadow="0 0 12.5em 0 #FFB800"/></div>
            </div>
        </div>
     );
}
 
export default Brief;