import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Delete, File, Pencil, Trash2Icon } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { format } from 'date-fns'
interface FolderProps {
  id: string
  title: string
  description: string
  createdAt: string
}

const Folder = ({ id, title, description, createdAt }: FolderProps) => {
  const formatDate = format(createdAt, 'd MMM yyyy')
  return (
    <>
      <div className="h-64 w-60 bg-white rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-xl hover:shadow-2xl relative border-[1px] border-slate-200 ">
        <Sheet>
          <SheetTrigger>
            <div className="  h-32 w-52  flex flex-col justify-start items-center">
              <Image
                src="/folder-svgrepo-com.svg"
                alt="folder"
                width={50}
                height={50}
              />
              <div className="text-center mt-2 text-black">{title}</div>
            </div>
          </SheetTrigger>
          <SheetContent className="bg-white text-black font-mokoto">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3   justify-start">
                {' '}
                <File className="h-4 w-4" />
                <p>Folder Preview</p>
              </SheetTitle>
              <Separator />
              <SheetDescription className="flex flex-col gap-4 relative">
                <div className=" text-lg flex flex-col items-center justify-center ">
                  <Image
                    src="/folder-svgrepo-com.svg"
                    alt="folder"
                    width={100}
                    height={100}
                  />
                </div>
                <Separator />
                <div className=" text-2xl leading-5 flex flex-col items-start gap-2 text-gray-700 font-bold">
                  <span>{title}</span>
                  <span className="text-xs font-light text-gray-500">
                    {formatDate}
                  </span>
                </div>
                <Separator />
                <div className=" text-lg leading-5 flex flex-col items-start gap-2">
                  <span className="font-semibold text-xs text-black">
                    {' '}
                    Folder Description{' '}
                  </span>
                  <span className="text-base">{description}</span>
                </div>
                <Separator />
                <div className="flex justify-between mt-5 ">
                  <Button>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive">
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </div>
                {/* 
                <Separator />
               
                <div className="  leading-5 flex flex-col gap-3">
                  <span className="font-semibold text-xs text-black">
                    {' '}
                    Created At
                  </span>
                  <span className="text-xs"> </span>
                </div> */}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="border-t-2 border-t-gray-300 w-5/6 bg-white flex justify-between rounded-b-md py-2   items-center absolute bottom-0 ">
          <div className="text-black flex flex-col text-xs ">
            {' '}
            <span className="font-bold"> Creted at:</span>{' '}
            <span className="text-xs text-gray-700">{formatDate}</span>{' '}
          </div>
          <Link href={`/dashboard/folder/${id}`}>
            <Button variant="open" className="h-9 w-16">
              Open
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Folder

export const FolderSkeleton = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      <div>
        <Skeleton className=" relative h-64 w-60 p-2 bg-gray-200">
          <Skeleton className="absolute h-20 w-32 top-[50px] right-[60px] bg-gray-300" />
          <Skeleton className="absolute h-8 w-40 top-[150px] right-[40px] bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
        </Skeleton>
      </div>
      <div>
        <Skeleton className=" relative h-64 w-60 p-2 bg-gray-200">
          <Skeleton className="absolute h-20 w-32 top-[50px] right-[60px] bg-gray-300" />
          <Skeleton className="absolute h-8 w-40 top-[150px] right-[40px] bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
        </Skeleton>
      </div>
      <div>
        <Skeleton className=" relative h-64 w-60 p-2 bg-gray-200">
          <Skeleton className="absolute h-20 w-32 top-[50px] right-[60px] bg-gray-300" />
          <Skeleton className="absolute h-8 w-40 top-[150px] right-[40px] bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
        </Skeleton>
      </div>{' '}
      <div>
        <Skeleton className=" relative h-64 w-60 p-2 bg-gray-200">
          <Skeleton className="absolute h-20 w-32 top-[50px] right-[60px] bg-gray-300" />
          <Skeleton className="absolute h-8 w-40 top-[150px] right-[40px] bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
        </Skeleton>
      </div>{' '}
      <div>
        <Skeleton className=" relative h-64 w-60 p-2 bg-gray-200">
          <Skeleton className="absolute h-20 w-32 top-[50px] right-[60px] bg-gray-300" />
          <Skeleton className="absolute h-8 w-40 top-[150px] right-[40px] bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
        </Skeleton>
      </div>{' '}
      <div>
        <Skeleton className=" relative h-64 w-60 p-2 bg-gray-200">
          <Skeleton className="absolute h-20 w-32 top-[50px] right-[60px] bg-gray-300" />
          <Skeleton className="absolute h-8 w-40 top-[150px] right-[40px] bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
          <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
        </Skeleton>
      </div>
    </div>
  )
}
