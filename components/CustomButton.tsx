"use client"

const CustomButton = ({ text, styles, boxShadow }: { text:string, styles?:string, boxShadow: string }) => {
    return ( 
        <button type="button" className={`bg-[#FFB800] pl-4 pr-2 py-1 lg:py-[0.35rem] rounded-full flex gap-[0.5rem] items-center justify-center relative shadow-[#FFB800] duration-300 origin-bottom before:bg-white before:absolute before:inset-0 before:rounded-full before:-z-10 z-[1] before:scale-y-0 before:hover:scale-y-100 before:translate-y-[100%] before:hover:translate-y-0 before:ease-in overflow-hidden before:duration-[250ms] before:origin-bottom ${styles}`} style={{boxShadow: `${boxShadow}`}}>
            <span className="font-semibold text-lg lg:text-xl tracking-tight">{text}</span>

            <div className="circle">
                <div className="arrow"/>
                <div className="w-[0.9rem] h-[1.5px] bg-[#FFB800] absolute -translate-x-[0.12rem] translate-y-[-0.1px] ml-[3px]"></div>
            </div>
        </button>
     );
}
 
export default CustomButton;