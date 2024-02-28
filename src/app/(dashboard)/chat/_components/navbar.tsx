import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import BreadCrumbs from './bread-crumbs'
import Logo from '@/components/logo'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 h-16 bg-slate-100 border-sky-100 border-b-2">
    
      <BreadCrumbs/>
      <Link href={"/"}>
      <Logo/>
      </Link>
    
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Navbar
