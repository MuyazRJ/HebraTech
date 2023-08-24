import { Founders, Landing, Navbar, Team } from "@/components";

const about = () => {
    return ( 
        <main className="overflow-hidden">
            <Navbar/>
            <Landing landing={false}/>
            <Founders/>
            <Team/>
        </main>
     );
}
 
export default about;