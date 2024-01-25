import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex mt-20 flex-col items-center justify-center ">
      <div className="md:text-6xl text-3xl text-white md:text-center text-left font-semibold p-3">
        Live chat seamlessly integrated with <br /> your Marketing Automation.
      </div>
      <div className="md:text-xl text-lg text-slate-600 md:text-center text-left font-semibold md:px-40 p-4">
        Centralize all customer interactions in the Talk Inbox, streamlining
        management for both individual and large-scale engagements while keeping
        a clear focus on marketing efforts.
      </div>
      <div className="flex gap-4 flex-col md:flex-row p-4 w-full items-center justify-center">
        <Button variant="home" className='w-full md:w-1/6'>Get Started</Button>
        <Button variant="outline"  className='w-full md:w-1/6'>Sign up</Button>
      </div>
    </main>
  )
}
