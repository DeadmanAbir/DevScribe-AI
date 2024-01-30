import { Switch } from '@/components/ui/switch'
import { PlusCircleIcon } from 'lucide-react'
import Folder from '../_components/folder'

const Dashboard = () => {
  return (
    <div className="h-full  mt-16 lg:ml-24 flex flex-col items-center  w-full text-white max-w-screen-2xl   ">
      <div className="md:text-4xl text-3xl p-10 flex justify-center lg:w-[800px] w-[350px] items-center">
        <div>Recent Files</div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <Folder title="DSA" />
        <Folder title="WEB DEVELOPMENT" />
        <Folder title="Some other" />
      </div>
    </div>
  )
}

export default Dashboard
