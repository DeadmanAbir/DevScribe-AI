import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <div key="1" className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-500 text-black py-12 px-10 flex justify-between items-center w-full md:mt-20">
      <div className="flex justify-between max-w-7xl w-full mx-auto items-center p-2 ">
      <div>
        <p className="text-sm text-black pb-2">Get started today</p>
        <h1 className="text-2xl font-bold text-black pb-4">Create a free account and build your first newsletter!</h1>
      </div>
      <Button className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 hover:-translate-y-[2px] transition-transform shadow-sm '>Try it for free</Button>
      </div>
 
    </div>
  )
}

