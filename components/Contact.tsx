"use client"

import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return ( 
        <div className="w-full bg-[#F2F2F2] pt-8 flex flex-col items-center z-0 relative lg:flex-row-reverse justify-center lg:gap-16 2xl:gap-24">
            <div className="relative flex flex-col items-center lg:mb-16 lg:items-start">
                <h2 className="text-[2rem] font-bold leading-[2.3rem] z-[1] sm:text-[2.9rem] md:text-[3.3rem] lg:text-[3.7rem] xl:text-[4rem] 2xl:text-[4.4rem]">SPEAK WITH US</h2>
                <span className="font-bold text-md z-[1] sm:text-lg md:text-xl md:mt-2 lg:tracking-wide lg:text-2xl lg:mt-4 xl:text-3xl 2xl:text-[2.1rem] 2xl:mt-6">we'll get back to you</span>

                <div className="flex gap-[1rem] w-screen absolute translate-y-[-18px] lg:translate-y-[-24px] xl:translate-y-[-33px] -z-[1] 3xl:translate-y-[-44px]" aria-hidden="true">
                    <span className="marquee">GET IN TOUCH</span>
                    <span className="marquee">GET IN TOUCH</span>
                </div>
            </div>

            <form className="mt-6 flex flex-col">
                <div className="flex justify-between gap-4">
                    <input type="text" name="name" placeholder="name" className="input-box box_sizing" maxLength={50} value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" name="phone" placeholder="phone" className="input-box box_sizing" maxLength={13} value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>

                <input type="text" name="email" placeholder="email" className="input-box w-full mt-4" maxLength={60} value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="submit" className="bg-main-gold text-black px-[3.25rem] py-2 rounded-full font-bold shadow-lg hover:scale-110 duration-200 cursor-pointer self-center justify-self-end mt-4 mb-10 lg:mt-6 2xl:text-lg 2xl:mt-8"/>
            </form>
        </div>
     );
}
 
export default Contact;