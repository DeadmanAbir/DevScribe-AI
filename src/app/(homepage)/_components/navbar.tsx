
import { currentUser, auth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button'
import Navitems from './navitems'
import Mobilesidebar from './mobile-sidebar'
import Link from 'next/link';
const Navbar = async () => {
  const { userId }: { userId: string | null } = auth();
  return (
    <nav className=" text-sm flex items-center justify-between  backdrop-blur-md  p-3 backdrop-filter bg-opacity-10 bg-white fixed  top-10  md:w-4/6  w-11/12 z-10 rounded-full  ">
      <div className="text-white">DEvScribeAi</div>
      <div className="hidden md:flex">
        <Navitems />
      </div>

      <div className=" flex gap-2">
        {userId ? (<Link href="/dashboard"><Button variant="outline">Dashboard</Button></Link>) : (<Link href="/sign-in"><Button variant="outline">Login</Button></Link>)}
        <Mobilesidebar />
      </div>
    </nav >
  )
}

export default Navbar


