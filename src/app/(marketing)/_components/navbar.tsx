import { Button } from "@/components/ui/button";
import Navitems from "./navitems";
import Mobilesidebar from "./mobile-sidebar";

const Navbar = () => {
    return ( <nav className=" text-sm flex items-center justify-between  backdrop-blur-sm p-3 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950 to-black  fixed w-full top-0 border-b-[1px] z-10  ">
      
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