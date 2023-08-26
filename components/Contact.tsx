"use client"

import { useState, Fragment } from "react"
import { Dialog, Transition } from '@headlessui/react'

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [emptyName, setEmptyName] = useState(false)
    const [emptyPhone, setEmptyPhone] = useState(false)
    const [emptyEmail, setEmptyEmail] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [useAnimation, setAnimation] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isError, setIsError] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
      }

    function resetInputs() {
        setName('')
        setPhone('')
        setEmail('')
    }

    function resetErrors() {
        setEmptyName(false)
        setEmptyPhone(false)
        setEmptyEmail(false)
    }

    const handleSubmit = ( e: any ) => {
        let err = false;

        e.preventDefault()
        resetErrors()
        setIsDisabled(true)
        setIsError(false)

        if (name.trim().length === 0) {
            setEmptyName(true)
            err = true
            setAnimation(true)
        }

        if (phone.trim().length === 0) {
            setEmptyPhone(true)
            err = true
            setAnimation(true)
        }

        if (email.trim().length === 0) {
            setEmptyEmail(true)
            err = true
            setAnimation(true)
        }
        
        if (!err) {
            resetInputs()
            setIsDisabled(false)
            setIsError(true)
            openModal()
        } else {
          setTimeout(() => {
            setAnimation(false)
            setIsDisabled(false)
          }, 750)
        }
    }

    return ( 
        <div className="w-full bg-[#F2F2F2] pt-8 flex flex-col items-center z-0 relative lg:flex-row-reverse justify-center lg:gap-16 2xl:gap-24" id="contact">
            <div className="relative flex flex-col items-center lg:mb-16 lg:items-start">
                <h2 className="text-[2rem] font-bold leading-[2.3rem] z-[1] sm:text-[2.9rem] md:text-[3.3rem] lg:text-[3.7rem] xl:text-[4rem] 2xl:text-[4.4rem]">SPEAK WITH US</h2>
                <span className="font-bold text-md z-[1] sm:text-lg md:text-xl md:mt-2 lg:tracking-wide lg:text-2xl lg:mt-4 xl:text-3xl 2xl:text-[2.1rem] 2xl:mt-6">we'll get back to you</span>

                <div className="flex gap-[1rem] w-screen absolute translate-y-[-18px] lg:translate-y-[-24px] xl:translate-y-[-33px] -z-[1] 3xl:translate-y-[-44px]" aria-hidden="true">
                    <span className="marquee">GET IN TOUCH</span>
                    <span className="marquee">GET IN TOUCH</span>
                </div>
            </div>

            <form className="mt-6 flex flex-col" onSubmit={e => handleSubmit(e)}>
                <div className="flex justify-between gap-4">
                    <input type="text" name="name" placeholder="name" className={`input-box box_sizing ${emptyName ? 'border-2 border-red-500': ''} ${(emptyName && useAnimation) ? 'animate-wiggle': ''}`} maxLength={50} value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" name="phone" placeholder="phone" className={`input-box box_sizing ${emptyPhone ? 'border-2 border-red-500': ''} ${(emptyPhone && useAnimation) ? 'animate-wiggle': ''}`} maxLength={13} value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>

                <input type="text" name="email" placeholder="email" className={`input-box w-full mt-4 ${emptyEmail ? 'border-2 border-red-500': ''} ${(emptyEmail && useAnimation) ? 'animate-wiggle': ''}`} maxLength={60} value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="submit" className="bg-main-gold text-black px-[3.25rem] py-2 rounded-full font-bold shadow-lg hover:scale-110 duration-200 cursor-pointer self-center justify-self-end mt-4 mb-10 lg:mt-6 2xl:text-lg 2xl:mt-8" disabled={isDisabled}/>
            </form>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-70"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-70"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 font-[jost]"
                  >
                    {!isError ? "Enquiry Sent": "Enquiry failed"}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-500 font-[jost]">
                      {!isError ? "Your enquiry has been successfully submitted. We'll respond as soon as we have reviewed your request.": "There was an issue submitting your enquiry. Please try again."}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex font-[jost] justify-center rounded-md border border-transparent bg-[#171717] px-4 py-2 text-sm font-medium text-white hover:bg-[#252525] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
                </div>
            </div>
                </Dialog>
            </Transition>
        </div>
     );
}
 
export default Contact;