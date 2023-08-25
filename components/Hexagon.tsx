import Image from "next/image";

const Hexagon = ({ imgPath, alt, size="100", click, currentMember, memberNumber }: { imgPath: string, alt: string, size: string, click:any, currentMember: number, memberNumber: number}) => {
    return ( 
        <div className={`relative group overflow-hidden w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[140px] lg:h-[140px] xl:w-[155px] xl:h-[155px] 2xl:w-[185px] 2xl:h-[185px]`} onClick={click}>
            <Image
                src="/hexagon.png"
                alt={alt}
                fill={true}
                className='object-contain duration-300 opacity-100 group-hover:opacity-0'
            />

            <Image
                src={"/" + imgPath}
                alt={alt}
                fill={true}
                className='object-contain z-[1] cursor-pointer'
            />

            <Image
                src="/hexagon_highlight_bg.png"
                alt={alt}
                fill={true}
                className={`object-contain duration-300 group-hover:opacity-100 ${currentMember === memberNumber ? 'opacity-100': 'opacity-0'}`}
            />
        </div>
     );
}
 
export default Hexagon;