import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Github, Star } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=" w-full  flex flex-col items-center justify-center max-w-7xl md:w-5/6 mx-auto  rounded-xl">
 <Separator />
      <div className=" flex md:flex-row flex-col justify-between p-4 w-full rounded-full">
        <div className="md:w-1/2 w-full flex flex-col gap-2 text-white">
          <div>Devscribe</div>
          <div className="text-2xl">Transform you knowledge with Devscribe</div>
         
        </div>
        <div className='flex gap-4 text-gray-300'>
            <div><div className='font-semibold md:mt-0 mt-5'>Main Pages</div>
            <div>
                <div>About</div>
                <div>Features</div>
                <div>Explore</div>
                <div>Pricing</div>
            </div>
            </div>
            
        </div>
      </div>
      <Separator />
      <div className='text-white  flex w-full justify-between p-4 text-center items-center'>
        <div>Made by <Link href="https://github.com/DeadmanAbir" className='hover:underline' target='_blank'>Abir</Link>  & <Link href="https://github.com/faisal004"  target='_blank' className='hover:underline'>Faisal</Link> </div>
        <Link href="https://github.com/DeadmanAbir/DevScribe-AI" target='_blank' className='flex bg-pink-600 p-2 rounded-3xl'> <Star className='pr-2' /> Star us on Github </Link>
      </div>
    </div>
  )
}

export default Footer
