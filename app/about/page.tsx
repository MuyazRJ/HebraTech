"use client"
import { Contact, Footer, Founders, Landing, Navbar, Team } from "@/components";
import { PreloaderStates } from '@/context/PreloadState'
import { useEffect } from 'react'
const about = () => {
    const { doneLoadingPre, setDoneLoadingPre } = PreloaderStates()
    
    useEffect(() => {
        setDoneLoadingPre(true)
    }, [])

    return ( 
        <main className="overflow-hidden">
            <Navbar landing={false}/>
            <Landing landing={false}/>
            <Founders/>
            <Team/>
            <Contact/>
            <Footer landing={false}/>
        </main>
     );
}
 
export default about;