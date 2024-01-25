import { Button } from '@/components/ui/button'
import Navitems from './navitems'
import Mobilesidebar from './mobile-sidebar'

const Navbar = () => {
  return (
    <nav className=" text-sm flex items-center justify-between  backdrop-blur-md  p-3 backdrop-filter bg-opacity-10 bg-white fixed  top-10  md:w-4/6  w-11/12 z-10 rounded-full  ">
      <div className="text-white">DEvScribeAi</div>
      <div className="hidden md:flex">
        <Navitems />
      </div>

      <div className=" flex gap-2">
        <Button variant="outline">Login</Button>
        <Mobilesidebar />
      </div>
    </nav>
  )
}

export default Navbar
