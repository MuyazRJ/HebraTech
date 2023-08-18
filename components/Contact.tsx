"use client"

import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return ( 
        <div className="w-full bg-[#F2F2F2] pt-8 flex flex-col items-center z-0 relative">
            <h2 className="text-[2rem] font-bold leading-[2.3rem] z-[1]">SPEAK WITH US</h2>
            <span className="font-bold text-md z-[1]">we'll get back to you</span>
            <span className="absolute text-white text-[5.2rem] tracking-normal font-bold w-[180%] translate-y-[-35px] translate-x-[5.7rem] over">GET IN TOUCH</span>

            <form className="mt-6 flex flex-col">
                <div className="flex justify-between gap-4">
                    <input type="text" name="name" placeholder="name" className="input-box w-[9.5rem]" maxLength={50} value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" name="phone" placeholder="phone" className="input-box w-[9.5rem]" maxLength={13} value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>

                <input type="text" name="email" placeholder="email" className="input-box w-full mt-4" maxLength={60} value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="submit" className="bg-main-gold text-black px-[3.25rem] py-2 rounded-full font-bold shadow-lg hover:scale-110 duration-200 cursor-pointer self-center justify-self-end mt-4 mb-10"/>
            </form>
        </div>
     );
}
 
export default Contact;