import { UserButton } from '@clerk/nextjs'
import { FoldHorizontal, Folder, WalletCards } from 'lucide-react'
import Mobliebottombar from './mobile'
import Link from 'next/link'

const DashboardSidebar = () => {
  return (
    <>
     <aside className="fixed hidden left-0 py-3 px-1 backdrop-filter bg-opacity-10 text-white bg-white h-full mt-16 w-44 border-r-[1px] border-gray-600 lg:flex flex-col gap-y-3">
      <Link href="/" className="flex gap-4 p-1 items-center justify-start hover:text-gray-100/90 cursor-pointer mt-10 pl-5 ">
        <Folder className="h-5 w-5" /> Folders
      </Link>
      <Link href="/" className="flex gap-4 p-1 items-center justify-start hover:text-gray-100/90 cursor-pointer mt-10 pl-5 ">
        <WalletCards className="h-5 w-5" /> Cards
      </Link>
      <Link href="/" className="flex flex-col p-1 items-center hover:text-gray-100/90 cursor-pointer absolute bottom-20 left-14">
        <UserButton/>
      </Link>
    </aside>
    <Mobliebottombar/>
    </>
   
  )
}

export default DashboardSidebar
