import { UserButton } from '@clerk/nextjs'
import { FoldHorizontal, Folder, WalletCards } from 'lucide-react'
import Mobliebottombar from './mobile'
import Link from 'next/link'
import Image from 'next/image'

const DashboardSidebar = () => {
  return (
    <>
      <aside className="fixed hidden left-0 py-3 px-1  text-muted-foreground bg-white h-full shadow-lg  w-28 lg:flex flex-col gap-y-3 items-center">
        <div className="text-black h-8 w-28 text-center flex justify-center items-center">
          DEVSCRIBE
        </div>
        <div className=" w-28 h-[1px] flex bg-gray-400 items-center justify-center"></div>
        <Link
          href="/"
          className="flex flex-col gap-4 p-1 items-center justify-start  cursor-pointer mt-5 hover:bg-opacity-40 w-28  border-r-4 border-blue-600 text-blue-600"
        >
          <Image
            src="/folder-svgrepo-com.svg"
            alt="folder"
            width={25}
            height={25}
          />
          Folders
        </Link>
        <Link
          href="/"
          className="flex flex-col gap-4 p-1 items-center justify-start  cursor-pointer mt-5 "
        >
          <WalletCards className="h-5 w-5 " fill="" /> Cards
        </Link>
        <div className="flex flex-col p-1 items-center cursor-pointer absolute bottom-5 left-10">
          <UserButton afterSignOutUrl='/' />
        </div>
      </aside>
      <Mobliebottombar />
    </>
  )
}

export default DashboardSidebar
