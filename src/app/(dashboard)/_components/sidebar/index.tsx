import { UserButton } from '@clerk/nextjs'
import { FoldHorizontal, Folder, WalletCards } from 'lucide-react'
import Mobliebottombar from './mobile'
import Link from 'next/link'
import Image from 'next/image'

const DashboardSidebar = () => {
  return (
    <>
      <aside className="fixed hidden left-0 py-3 px-1 backdrop-filter bg-opacity-10 text-white bg-white h-full  w-44 border-r-[1px] border-gray-600 lg:flex flex-col gap-y-3 items-center">
        <div className="text-white  h-8 w-40 text-center flex justify-center items-center">
          DEVSCRIBE
        </div>
        <div className=" bg-white w-44 h-[1px] flex  items-center justify-center"></div>
        <Link
          href="/"
          className="flex flex-col gap-4 p-1 items-center justify-start hover:text-gray-100/90 cursor-pointer mt-5 hover:bg-opacity-40 rounded-xl w-40 "
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
          className="flex flex-col gap-4 p-1 items-center justify-start hover:text-gray-100/90 cursor-pointer mt-5 "
        >
          <WalletCards className="h-5 w-5 " fill="" /> Cards
        </Link>
        <Link
          href="/"
          className="flex flex-col p-1 items-center hover:text-gray-100/90 cursor-pointer absolute bottom-5 left-16"
        >
          <UserButton />
        </Link>
      </aside>
      <Mobliebottombar />
    </>
  )
}

export default DashboardSidebar
