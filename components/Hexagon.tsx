import Image from "next/image";

const Hexagon = ({ imgPath, alt, size="100", click, currentMember, memberNumber }: { imgPath: string, alt: string, size: string, click:any, currentMember: number, memberNumber: number}) => {
    return ( 
        <div className={`relative group overflow-hidden`} onClick={click}>
            <Image
                src="/hexagon.png"
                alt={alt}
                height={Number(size)}
                width={Number(size)}
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