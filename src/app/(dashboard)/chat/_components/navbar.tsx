import { UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import BreadCrumbs from './bread-crumbs'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 h-16 bg-slate-100 border-sky-100 border-b-2">
    
      <BreadCrumbs/>
      <div>DEVSCRIBE AI</div>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Navbar
