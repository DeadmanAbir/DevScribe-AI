import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Star } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center  mx-auto mt-96 md:mt-20 rounded-none bg-gradient-to-r from-slate-100 to-blue-50">
      <Separator className="bg-blue-200" />
      <div className=" flex md:flex-row flex-col justify-between p-4 w-full max-w-7xl  rounded-full">
        <div className="md:w-1/2 w-full flex flex-col gap-2 text-black ">
          <div className=" font-semibold">Devscribe</div>
          <div className="text-2xl font-bold">Transform you knowledge with Devscribe</div>
        </div>
        <div className="flex gap-4 text-gray-900 w-1/2">
          <div>
            <div className="font-semibold text-xl md:mt-0 mt-5">Main Pages</div>
            <div>
              <div>About</div>
              <div>Features</div>
              <div>Explore</div>
              <div>Pricing</div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-blue-200" />
      <div className="text-white  flex w-full justify-center p-4 text-center items-center max-w-7xl ">
        {/* <div>
          Made by{' '}
          <Link
            href="https://github.com/DeadmanAbir"
            className="hover:underline"
            target="_blank"
          >
            Abir
          </Link>{' '}
          &{' '}
          <Link
            href="https://github.com/faisal004"
            target="_blank"
            className="hover:underline"
          >
            Faisal
          </Link>{' '}
        </div> */}
        <Link
          href="https://github.com/DeadmanAbir/DevScribe-AI"
          target="_blank"
          className="flex bg-gradient-to-b from-slate-800 to-black p-2 rounded-3xl text-white group hover:-translate-y-[2px] transition-transform "
        >
          {' '}
          <Star className="pr-2 group-hover:fill-yellow-400" /> Star us on
          Github{' '}
        </Link>
      </div>
    </div>
  )
}

export default Footer
