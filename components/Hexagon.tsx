import Image from "next/image";

const Hexagon = ({ imgPath, alt, size, click, currentMember, memberNumber }: { imgPath: string, alt: string, size: string, click:any, currentMember: number, memberNumber: number}) => {
    return ( 
        <div className={`w-[${size}px] h-[${size}px] relative overflow-hidden group`} onClick={click}>
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