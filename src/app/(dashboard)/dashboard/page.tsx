'use client'
import { useEffect } from 'react'
import Folder from '../_components/folder'
import { PlusCircle } from 'lucide-react'
import {
  Dialog,

  DialogTrigger,
} from '@/components/ui/dialog'

import CreateFolderModal from '../_components/folderModal/createFolderModal'
import { trpc } from '@/app/_trpc/client'

interface Folder {
  id: string,
  name: string,
  description: string,
  createdAt: string

}
const Dashboard = () => {
  const { data: Folders, isLoading: folderLoading, refetch: refetchFolder } = trpc.folder.getFolders.useQuery();
  let count = 0;
  useEffect(() => {
    refetchFolder();
  }, [Folders]);
  if (folderLoading || Folders?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <p className="text-2xl font-semibold">Loading files...</p>
      </div>
    )
  }

  return (
    <div className="h-full   lg:ml-24 flex flex-col items-center  w-full text-white max-w-screen-2xl   ">
      <div className="md:text-4xl text-3xl p-10 flex justify-between lg:w-[750px] w-[350px] items-center">
        <div className='md:text-2xl text-xl'>Recent Files</div>
        <Dialog>
          <DialogTrigger>
            <div className="flex gap-2 text-lg bg-purple-700 text-destructive-foreground hover:bg-purple-600 rounded-lg p-2 items-center">
              {' '}
              <PlusCircle className="h-6 w-6" /> Create
            </div>
          </DialogTrigger>
          <CreateFolderModal />
        </Dialog>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {Folders?.map((projects : Folder) => (
          <Folder
            key={count++}
            id={projects.id}
            title={projects.name}
            description={projects.description}
            createdAt={projects.createdAt}
          />

        ))}

       
      </div>
    </div>
  )
}

export default Dashboard
