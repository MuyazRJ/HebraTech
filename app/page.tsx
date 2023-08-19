"use client"

import { Landing, Navbar, Preloader, Brief, FoundersLanding, InfoLanding, Contact, Footer } from '@/components'
import { useState } from 'react'

export default function Home() {
  const [loading, isLoading] = useState(true)
  const [doneLoading, isDoneLoading] = useState(false)
  const [enterLanding, setEnterLanding] = useState(false)

  setTimeout(() => {
    isLoading(false)

    setTimeout(() => {
      setEnterLanding(true)

      setTimeout(() => {
        isDoneLoading(true)
      }, 1000)
    }, 1350)
  }, 5000)

  return (
    <main className='overflow-hidden'>
        {!doneLoading && <Preloader key="preloader" loading={loading} doneLoading={doneLoading}/>}
        
        {enterLanding && 
        <>
        <Navbar/>
        <Landing key="landing" doneLoading={doneLoading}/>
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
