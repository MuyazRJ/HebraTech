"use client"

import { Landing, Navbar, Preloader, Brief, FoundersLanding, InfoLanding, Contact, Footer } from '@/components'
import { PreloaderStates } from '@/context/PreloadState'
import { useState, useEffect } from 'react'

export default function Home() {
  const [loading, isLoading] = useState(true)
  const [enterLanding, setEnterLanding] = useState(false)
  const { doneLoadingPre, setDoneLoadingPre } = PreloaderStates()
  
  useEffect(() => {
    if (!doneLoadingPre){
      setTimeout(() => {
        isLoading(false)
    
        setTimeout(() => {
          setEnterLanding(true)
    
          setTimeout(() => {
            setDoneLoadingPre(true)
          }, 1000)
        }, 1350)
      }, 2000)
    } else {
      setEnterLanding(true)
    }

  
  }, [])

  return (
    <main className='overflow-hidden'>
        {!doneLoadingPre && <Preloader key="preloader" loading={loading}/>}
        
        {enterLanding && 
        <>
        <Navbar landing={true}/>
        <Landing landing={true}/>
        <Brief/>
        <FoundersLanding/>
        <InfoLanding/>
        <Contact/>
        <Footer landing={true}/>
        </>
        }
    </main>
  )
}
