"use client"
import { UserButton } from '@clerk/nextjs'
import { Folder, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const Mobliebottombar = () => {
  const pathname=usePathname()
  useEffect(()=>{

  },[pathname])
  return (
    <div className="backdrop-filter lg:hidden bg-white bottom-0 fixed h-16  w-full z-10 flex justify-between p-4 items-center">
      <Link
          href="/dashboard"
          className={`flex flex-col gap-1 p-1 items-center justify-start  cursor-pointer mt-2 hover:bg-opacity-40 w-28  ${pathname==="/dashboard"? "border-t-4 border-blue-600 text-blue-600 ":""}  `}
        >
          <Image
            src="/blue-folder.svg"
            alt="folder"
            width={25}
            height={25}
          />
          Folders
        </Link>{' '}
      {/* <Link href="/" className="flex flex-col items-center">
        <WalletCards className="h-5 w-5" />
        Cards
      </Link> */}
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default Mobliebottombar
