import { Contact, Footer, Founders, Landing, Navbar, Team } from "@/components";

const about = () => {
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