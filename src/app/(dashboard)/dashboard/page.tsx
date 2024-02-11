'use client'
import { Suspense, useEffect } from 'react'
import Folder, { FolderSkeleton } from '../_components/folder'
import { PlusCircle } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import CreateFolderModal from '../_components/folderModal/createFolderModal'
import { trpc } from '@/app/_trpc/client'
import { Separator } from '@/components/ui/separator'

interface Folder {
  id: string
  name: string
  description: string
  createdAt: string
}
const Dashboard = () => {
  const {
    data: Folders,
    isLoading: folderLoading,
    refetch: refetchFolder,
  } = trpc.folder.getFolders.useQuery()
  let count = 0
  useEffect(() => {
    refetchFolder()
  }, [Folders])

  return (
    <div className="h-full     flex flex-col md:items-center items-center w-full mx-auto text-black max-w-screen-2xl   ">
      <div className="md:text-4xl text-3xl py-2 md:px-3 md:pl-10 px-2 lg:pl-32  flex justify-between w-11/12 items-center ">
        <div className="md:text-2xl font-bold text-xl">Folders</div>

        <Dialog>
          <DialogTrigger>
            <div className="flex gap-2 text-lg bg-blue-600 text-destructive-foreground hover:bg-blue-500 rounded-lg p-2 items-center justify-center">
              {' '}
              <PlusCircle className="h-6 w-6" /> <span>Create Folder </span>
            </div>
          </DialogTrigger>
          <CreateFolderModal />
        </Dialog>
      </div>
      <Separator className='bg-gray-400 w-full'/>
      {folderLoading || Folders?.length === 0 ? (
        <FolderSkeleton />
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:pl-32  p-3 pb-10 w-11/12 mt-3  ">
          {Folders?.map((projects: Folder) => (
            <Folder
              key={count++}
              id={projects.id}
              title={projects.name}
              description={projects.description}
              createdAt={projects.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard
