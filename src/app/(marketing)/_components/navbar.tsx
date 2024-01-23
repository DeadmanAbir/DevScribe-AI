import { Button } from "@/components/ui/button";
import Navitems from "./navitems";
import Mobilesidebar from "./mobile-sidebar";

const Navbar = () => {
    return ( <nav className=" text-sm flex items-center justify-between   p-3 bg-purple-100   bg-opacity-5 sticky top-0  ">
      
        <div className="text-white">Logo</div>
        <div className="hidden md:flex">
        <Navitems />
        </div>
        
        <div className=" flex gap-2"><Button variant="outline">Login</Button>
        <Mobilesidebar/>
        </div>
    </nav> );
}
 
export default Navbar;