"use client"

import { Landing, Navbar, Preloader, Brief, FoundersLanding, InfoLanding, Contact, Footer } from '@/components'
import { useState } from 'react'
import Image from 'next/image'

import { AnimatePresence } from "framer-motion"

export default function Home() {
  const [loading, isLoading] = useState(true)
  const [doneLoading, isDoneLoading] = useState(false)

  setTimeout(() => {
    isLoading(false)

    setTimeout(() => {
      isDoneLoading(true)
    }, 2000)
  }, 2000)

  return (
    <main className='overflow-hidden'>
        <AnimatePresence mode="wait">
          <Navbar/>
          {<Preloader key="preloader" loading={loading} doneLoading={doneLoading}/>}
          {!loading && <Landing key="landing" doneLoading={doneLoading}/>}
        </AnimatePresence>

        {doneLoading && 
        <>
        <Brief/>
        <FoundersLanding/>
        <InfoLanding/>
        <Contact/>
        <Footer/>
        </>
        }
    </main>
  )
}
