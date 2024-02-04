import { UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 h-16 bg-slate-100 border-sky-100 border-b-2">
      <Link
        href="/dashboard"
        className="flex items-center justify-center hover:text-muted-foreground gap-[4px]"
      >
        <ArrowLeft className="h-5 w-5 bg-black  rounded-full text-white" />{' '}
        <span className="hidden md:block">Go Back </span>{' '}
      </Link>
      <div>DEVSCRIBE AI</div>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Navbar
