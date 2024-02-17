'use client'
import { Suspense, useEffect, useState } from 'react'
import Folder, { FolderSkeleton } from '../_components/folder'
import { File, PlusCircle } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import CreateFolderModal from '../_components/folderModal/createFolderModal'
import { trpc } from '@/app/_trpc/client'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

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
      <div className="md:text-4xl text-3xl py-[7.5px] md:px-3 md:pl-10 px-2 lg:pl-32  flex justify-between w-11/12 items-center ">
        <div className="md:text-2xl font-bold text-xl">Folders</div>

        <Dialog>
          <DialogTrigger>
            {!folderLoading ? (
              <Button variant="open" >
                <PlusCircle className="mr-2 h-4 w-4"  /> Create Folder
              </Button>
            ) : (
              <Skeleton className="h-10 w-40 bg-gray-400 m-[3.7px]" />
            )}
          </DialogTrigger>
          <CreateFolderModal />
        </Dialog>
      </div>
      <Separator className="bg-gray-400 w-full" />
      {Folders?.length === 0 ? (
        <div className="text-xl text-black mt-10 flex text-center items-center justify-center h-28 bg-white border-2 border-gray-400 rounded-lg shadow-xl md:w-[82%] w-[90%] mx-auto lg:ml-44">
          👋 Welcome to devcribeAI create a folder
        </div>
      ) : (
        ''
      )}
      {folderLoading && Folders?.length !== 0 ? (
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
