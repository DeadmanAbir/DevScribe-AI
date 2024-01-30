import { PlusCircleIcon } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className=" mt-16 lg:ml-24 flex flex-col items-center  w-full text-white max-w-screen-2xl  ">
      <div className="md:text-4xl text-3xl p-10 ">All Folders</div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="h-28 w-56 aspect-square flex justify-center  backdrop-filter bg-opacity-10 text-white bg-white items-center border-2 text-center">
          <PlusCircleIcon className="h-12 w-12 cursor-pointer" />
        </div>
      
      </div>
    </div>
  )
}

export default Dashboard
