import { UserButton } from '@clerk/nextjs'
import Mobilesidebar from './mobile-sidebar'

const Navbar = () => {
  return (
    <nav className="fixed hidden top-0 w-full h-16 z-[49] backdrop-filter bg-opacity-10 bg-white px-2 lg:px-4 justify-between items-center shadow-sm">
      <div className="text-white ">DevScribe</div>
      <div className="flex items-center gap-6 text-white">
        <div className="md:flex flex-row gap-4 hidden">
          <div>How to use?</div>
          <div>FAQ</div>
          <div>Dashboard</div>
        </div>
        <div>
         <Mobilesidebar/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
