import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'
import Link from 'next/link'
import { auth } from '@clerk/nextjs'
const Hero = () => {
  const { userId }: { userId: string | null } = auth()
  return (
    <>
      <div className="relative items-center justify-center flex mx-auto">
        <div className="absolute top-0  w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 -right-16 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply  filter blur-3xl opacity-60 animate-blob"></div>
      </div>

      <div className="md:text-5xl text-3xl text-black md:text-center text-center font-semibold p-3 ">
        Chat with videos <br /> Don&apos;t have time to watch full videos? <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700'>Devscribe</span>   got you covered.
      </div>
      <div className="md:text-xl text-lg text-slate-600 md:text-center text-center font-semibold md:px-40 w-full p-4 mx-auto">
        An AI-assisted chatbot for faster learning and better communication.
      </div>
      {userId ? null : (
        <div className="flex gap-4 flex-col md:flex-row p-4 w-full max-w-7xl mx-auto items-center justify-center cursor-pointer">
          <Link href="/sign-in" className="w-full md:w-1/5  h-10">
            <Button className="w-full bg-gradient-to-b from-blue-500 to-blue-600  ">
              Get Started
            </Button>
          </Link>
          <Link href="/sign-up" className="w-full md:w-1/5  h-10">
            <button className="p-[3px] relative w-full h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg" />
              <div className="px-4 py-1  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:text-white hover:bg-transparent">
                Sign Up
              </div>
            </button>
          </Link>
        </div>
      )}
      <div className="text-white  flex gap-2 rounded-full bg-gradient-to-b from-slate-800 to-black p-3 text-sm items-center">
        {' '}
        <CreditCard className="h-4 w-4" /> No credit card required
      </div>
    </>
  )
}

export default Hero
