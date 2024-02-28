import Link from "next/link"
import { auth } from '@clerk/nextjs'
export default function Banner() {
  const { userId } = auth();
  return (
    <div key="1" className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-500 text-black py-12 px-2 flex justify-between items-center w-full mt-96 md:mt-20">
      <div className="flex justify-between max-w-7xl w-full mx-auto items-center p-2 ">
      <div>
        <p className="text-sm text-black pb-2">Start your journey today</p>
        <h1 className="text-2xl font-bold text-black pb-4">Unlock the power of communication - seamlessly communicate with youtube videos!</h1>
      </div>
     {userId? ( <Link href="/dashboard" className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 hover:-translate-y-[2px] transition-transform shadow-sm text-white p-2 text-sm rounded-lg'>Dashboard</Link>) 
     : 
     ( <Link href="/sign-in" className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 hover:-translate-y-[2px] transition-transform shadow-sm text-white p-2 text-sm rounded-lg w-full md:w-[120px] items-center text-center'>Try it for free </Link>)}
      </div>
 
    </div>
  )
}

