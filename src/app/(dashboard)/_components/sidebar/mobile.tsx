import { UserButton } from '@clerk/nextjs'
import { Folder, WalletCards } from 'lucide-react'
import Link from 'next/link'

const Mobliebottombar = () => {
  return (
    <div className="backdrop-filter lg:hidden bg-opacity-10 text-white bg-white bottom-0 fixed h-16  w-full z-10 flex justify-between p-4 items-center">
      <Link href="/" className="flex flex-col items-center">
        <Folder className="h-5 w-5" fill='yellow' /> Folder{' '}
      </Link>{' '}
      <Link href="/" className="flex flex-col items-center">
        <WalletCards className="h-5 w-5" />
        Cards
      </Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default Mobliebottombar
