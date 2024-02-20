import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card'
import { CheckIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
const MeetTheCreator = () => {
  return (
    <div className="mt-20 h-full  w-full flex flex-col items-center justify-center p-2 max-w-7xl ">
      <div className="md:text-4xl text-3xl font-semibold">
        Meet the Creators
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-10 md:w-1/2 w-full items-center justify-center  h-72 ">
        <div className="w-full h-72 relative bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-white to-blue-100 mx-auto flex flex-col items-center  pt-10 gap-3 rounded-xl shadow-lg hover:shadow-2xl shadow-slate-300">
          <div>
            <Image
              src="/faisal.png"
              alt="dashboard"
              width={60}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="text-xl font-semibold">Abir Dutta</div>
          <div className="text-sm font-semibold">Abir Dutta</div>
          <div className="flex gap-2 absolute bottom-6">
            <Link href="https://github.com/DeadmanAbir" target='_blank' className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center ">
              <Image
                src="/icons8-github.svg"
                alt="twitter"
                height={25}
                width={25}
              />
            </Link>{' '}
            <Link href="https://twitter.com/ItsDutta99" target='_blank' className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center ">
              <Image
                src="/icons8-twitterx (1).svg"
                alt="twitter"
                height={25}
                width={25}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/abir-dutta-408759223" target='_blank' className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center ">
              <Image
                src="/linkedin.svg"
                alt="twitter"
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>
        <div className="w-full h-72 relative bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-white to-blue-100 mx-auto flex flex-col items-center  pt-10 gap-3 rounded-xl shadow-lg hover:shadow-2xl shadow-slate-300">
          <div>
            <Image
              src="/faisal.png"
              alt="dashboard"
              width={60}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="text-xl font-semibold">Faisal Husain</div>
          <div className="text-sm font-semibold">Faisal Husain</div>
          <div className="flex gap-2 absolute bottom-6">
            <Link href="https://github.com/faisal004" target='_blank' className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center ">
              <Image
                src="/icons8-github.svg"
                alt="twitter"
                height={25}
                width={25}
              />
            </Link>{' '}
            <Link href="https://twitter.com/faisalh004" target='_blank' className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center ">
              <Image
                src="/icons8-twitterx (1).svg"
                alt="twitter"
                height={25}
                width={25}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/faisal004" target='_blank' className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center ">
              <Image
                src="/linkedin.svg"
                alt="twitter"
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetTheCreator
