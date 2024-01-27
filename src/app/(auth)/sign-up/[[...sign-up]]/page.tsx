import { SignUp } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-950 to-black">
      <Link href="/">
        <div className="text-white w-96 flex pb-3 hover:text-white/80">
          <ArrowLeft />
          Back to home
        </div>
      </Link>

      <SignUp />
    </div>
  )
}
