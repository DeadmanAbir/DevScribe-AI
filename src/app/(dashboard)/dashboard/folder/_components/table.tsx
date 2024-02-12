import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { File } from '@prisma/client'
import Link from 'next/link'
import { File as FileIcon, FileText, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

interface FileTableProps {
  data: File[]
}

const FileTable = ({ data }: FileTableProps) => {
  const formatDate = (date: Date | string): string => {
    if (date instanceof Date) {
      return date.toLocaleDateString()
    } else {
      const parsedDate = new Date(date)
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toLocaleDateString()
      } else {
        return 'Invalid Date'
      }
    }
  }
  console.log(data)

  return (
    <div className="border-2 border-gray-400 w-full rounded-md">
      {data?.length===0 ? (
        <div className='text-center h-40 flex items-center justify-center' >👋 Welcome to devcribe create a file</div>
      ) : (
        <Table className="rounded-md ">
          <TableHeader className="bg-slate-200">
            <TableRow>
              <TableHead className="w-[50%]">File name</TableHead>
              <TableHead>Updated At</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="">
            {data?.map((file) => (
              <TableRow key={file.id} className="border-t-2 border-gray-400">
                <Link href={`/chat/${file.id}`}>
                  <TableCell className="flex items-center hover:underline cursor-pointer gap-1 hover:text-blue-700">
                    <FileText /> <span>{file.name} </span>{' '}
                  </TableCell>
                </Link>

                <TableCell>{formatDate(file.createdAt)}</TableCell>
                <TableCell>{formatDate(file.createdAt)}</TableCell>
                <Popover>
                  <PopoverTrigger>
                    <TableCell>
                      <MoreHorizontal className="cursor-pointer" />
                    </TableCell>
                  </PopoverTrigger>
                  <PopoverContent className="flex gap-2 items-center justify-center w-full">
                    <Button variant="destructive">Delete</Button>
                  </PopoverContent>
                </Popover>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

export default FileTable

export const FileSkeleton = () => {
  return (
    <div className="lg:w-5/6 w-full mt-4 p-2 lg:ml-28 ">
      <Skeleton className="bg-gray-200 h-96 w-full flex flex-col gap-1">
        <Skeleton className="bg-gray-500 h-10 w-full rounded-none" />
        <Skeleton className="bg-gray-300 h-10 w-full rounded-none" />
        <Skeleton className="bg-gray-500 h-10 w-full rounded-none" />
        <Skeleton className="bg-gray-300 h-10 w-full rounded-none" />{' '}
        <Skeleton className="bg-gray-500 h-10 w-full rounded-none" />
        <Skeleton className="bg-gray-300 h-10 w-full rounded-none" />{' '}
        <Skeleton className="bg-gray-500 h-10 w-full rounded-none" />
        <Skeleton className="bg-gray-300 h-10 w-full rounded-none" />{' '}
        <Skeleton className="bg-gray-500 h-10 w-full rounded-none" />
        <Skeleton className="bg-gray-300 h-10 w-full rounded-none" />
      </Skeleton>
    </div>
  )
}
