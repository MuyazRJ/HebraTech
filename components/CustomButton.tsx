"use client"

interface CustomButtonProps {

}

const CustomButton = () => {
    return ( 
        <button type="button" className="bg-[#FFB800] rounded-full pl-4 pr-2 mt-10 py-1 text-md flex gap-[0.5rem] items-center justify-center relative shadow-[#FFB800] duration-300 origin-bottom before:bg-white before:absolute before:inset-0 before:rounded-full before:-z-10 z-[1] before:translate-y-[100%] before:hover:translate-y-0 before:ease-in overflow-hidden before:duration-300 before:origin-bottom" style={{boxShadow: '0 0 7em 0 #FFB800'}}>
            <span className="font-bold text-xl tracking-tight">Learn More</span>

            <div className="circle">
                <div className="arrow"/>
                <div className="w-[0.9rem] h-[1.5px] bg-[#FFB800] absolute -translate-x-[0.12rem] translate-y-[-0.1px] ml-[3px]"></div>
            </div>
        </button>
     );
}
 
export default CustomButton;