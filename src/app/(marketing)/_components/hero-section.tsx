import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const Hero = () => {
    return ( <>
        <div className="relative items-center justify-center flex mx-auto">
        <div className="absolute top-0  w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
<div className="absolute top-0 -right-16 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob"></div>
        </div>

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
      <div className="text-white  flex gap-2 rounded-full bg-black p-3 text-sm items-center"> <CreditCard className="h-4 w-4"/> No credit card required</div>
    </> );
}
 
export default Hero;