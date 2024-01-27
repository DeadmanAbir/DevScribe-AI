import { UserButton } from '@clerk/nextjs'
import { FoldHorizontal, Folder, WalletCards } from 'lucide-react'

const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 py-3 px-1 backdrop-filter bg-opacity-10 text-white bg-white h-full mt-16 w-24 border-r-[1px] border-gray-600 flex flex-col gap-y-3">
      <div className="flex flex-col p-1 items-center hover:text-gray-100/90 cursor-pointer  ">
        <Folder className="h-5 w-5" /> Folders
      </div>
      <div className="flex flex-col p-1 items-center hover:text-gray-100/90 cursor-pointer ">
        <WalletCards className="h-5 w-5" /> Cards
      </div>
      <div className="flex flex-col p-1 items-center hover:text-gray-100/90 cursor-pointer absolute bottom-20 left-6 ">
        <UserButton/>
      </div>
    </aside>
  )
}

export default DashboardSidebar
