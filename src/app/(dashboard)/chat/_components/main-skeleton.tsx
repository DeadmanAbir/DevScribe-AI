import { Skeleton } from '@/components/ui/skeleton'

const MainscreenSkeleton = () => {
  return (
    <Skeleton className="h-screen w-screen bg-slate-300 rounded-none relative ">
      <Skeleton className="absolute w-full bg-slate-400 top-0 h-16 p-2 rounded-none flex justify-between items-center px-2">
        <Skeleton className=" w-20 bg-slate-500  h-6 p-2 rounded-none" />
        <Skeleton className="w-20 bg-slate-500  h-6 p-2 rounded-none" />
        <Skeleton className=" w-7 rounded-full bg-slate-500 h-7 p-2 " />
      </Skeleton>
      <div className="flex justify-between w-full">
        <Skeleton className="bg-gray-500 absolute top-16 md:block hidden w-1/2 h-full rounded-none ">
        <Skeleton className='bg-gray-300  h-72 absolute  top-6 left-16 w-3/4 mx-auto mt-10'/>
        <Skeleton className='bg-gray-300  h-7 absolute  top-[340px] left-16 w-7/12 mx-auto mt-10'/>
        <Skeleton className='bg-gray-300  h-7 absolute  top-96 left-16 w-2/4 mx-auto mt-10'/>
        </Skeleton>
        <Skeleton className="bg-gray-500 absolute items-start justify-start top-16 right-0 md:w-1/2 w-full h-full rounded-none flex flex-col leading-3 ">
            <Skeleton className='bg-gray-400 h-12 w-3/4 mx-auto mt-10 rounded-xl'/>
            <Skeleton className='bg-gray-400 h-5 w-1/4 mx-auto mt-10 rounded-xl '/>
            <Skeleton className='bg-gray-400 h-5 w-1/2 mx-auto mt-3 rounded-xl '/>
            <Skeleton className='bg-gray-400 h-5 w-1/4 mx-auto mt-3 rounded-xl '/>
            <Skeleton className='bg-gray-400 h-5 w-1/2 mx-auto mt-3 rounded-xl '/>
            <Skeleton className='bg-gray-400 h-5 w-1/4 mx-auto mt-3 rounded-xl '/>
            <Skeleton className='bg-gray-400 h-5 w-1/2 mx-auto mt-3 rounded-xl '/>
            <Skeleton className='bg-gray-400 h-5 w-1/4 mx-auto mt-3 rounded-xl '/>
            <Skeleton className='bg-gray-400 h-5 w-1/2 mx-auto mt-3 rounded-xl '/>
        </Skeleton>
        
      </div>
    </Skeleton>
  )
}

export default MainscreenSkeleton
