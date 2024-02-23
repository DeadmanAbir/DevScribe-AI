"use client"
import { UserButton } from '@clerk/nextjs'
import { FoldHorizontal, Folder, WalletCards } from 'lucide-react'
import Mobliebottombar from './mobile'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Logo from '@/components/logo'

const DashboardSidebar = () => {
  const pathname=usePathname()
  useEffect(()=>{

  },[pathname])
  return (
    <>
      <aside className="fixed hidden left-0 py-3 px-1  text-muted-foreground bg-white h-full shadow-lg  w-28 lg:flex flex-col gap-y-3 items-center">
        <Link href="/" className="text-black h-9 w-28 text-center flex justify-center items-center p-2">
          <Logo/>
        </Link>
        <div className=" w-28 h-[1px] flex bg-gray-400 items-center justify-center"></div>
        <Link
          href="/dashboard"
          className={`flex flex-col gap-4 p-1 items-center justify-start  cursor-pointer mt-5 hover:bg-opacity-40 w-28  ${pathname==="/dashboard"? "border-r-4 border-blue-600 text-blue-600 ":""}  `}
        >
          <Image
            src="/blue-folder.svg"
            alt="folder"
            width={25}
            height={25}
          />
          Folders
        </Link>
        {/* <Link
          href="/"
          className="flex flex-col gap-4 p-1 items-center justify-start  cursor-pointer mt-5 "
        >
          <WalletCards className="h-5 w-5 " fill="" /> Cards
        </Link> */}
        <div className="flex flex-col p-1 items-center cursor-pointer absolute bottom-5 left-10">
          <UserButton afterSignOutUrl='/' />
        </div>
      </aside>
      <Mobliebottombar />
    </>
  )
}

export default DashboardSidebar
