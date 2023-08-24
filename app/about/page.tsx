import { Founders, Landing, Navbar } from "@/components";

const about = () => {
    return ( 
        <main className="overflow-hidden">
            <Navbar/>
            <Landing landing={false}/>
            <Founders/>
        </main>
     );
}
 
export default about;