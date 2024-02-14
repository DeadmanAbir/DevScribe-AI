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
import {
  File as FileIcon,
  FileText,
  MessageSquare,
  MessageSquareText,
  MessagesSquare,
  MoreHorizontal,
  Trash2,
} from 'lucide-react'
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
      {data?.length === 0 ? (
        <div className="text-center h-40 flex items-center justify-center shadow-xl bg-white rounded-md">
          👋 Welcome to devcribeAI create a file
        </div>
      ) : (
        <Table className="rounded-md ">
          <TableHeader className="bg-slate-200">
            <TableRow>
              <TableHead className="w-[50%]">File name</TableHead>
              <TableHead> Chat </TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="">
            {data?.map((file) => (
              <TableRow key={file.id} className="border-t-2 border-gray-400">
                <TableCell className="flex items-center   gap-1 ">
                  <FileText /> <span>{file.name} </span>{' '}
                </TableCell>

                <TableCell>
                  <Link
                    href={`/chat/${file.id}`}
                    className="hover:text-blue-700 cursor-pointer"
                  >
                    <MessagesSquare />
                  </Link>
                </TableCell>
                <TableCell>{formatDate(file.createdAt)}</TableCell>
                <Popover>
                  <PopoverTrigger>
                    <TableCell>
                      <MoreHorizontal className="cursor-pointer" />
                    </TableCell>
                  </PopoverTrigger>
                  <PopoverContent className="flex gap-2 items-center justify-center w-full">
                    <Button variant="outline">
                      <Trash2 />
                    </Button>
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
    <div className="lg:w-5/6 w-full mt-4 p-2 lg:ml-28  ">
      <Skeleton className="bg-gray-200 h-96 w-full flex flex-col gap-1 rounded-lg">
        <Skeleton className="bg-gray-300 w-full h-10 rounded-none relative">
          <Skeleton className="absolute top-3 h-5 w-20 left-2 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-16 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-56 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-96 bg-gray-400" />
        </Skeleton>
        <Skeleton className="bg-gray-100 w-full h-10 rounded-none relative">
          <Skeleton className="absolute top-3 h-5 w-20 left-2 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-16 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-56 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-96 bg-gray-300" />
        </Skeleton>
        <Skeleton className="bg-gray-300 w-full h-10 rounded-none relative">
          <Skeleton className="absolute top-3 h-5 w-20 left-2 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-16 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-56 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-96 bg-gray-400" />
        </Skeleton>
        <Skeleton className="bg-gray-100 w-full h-10 rounded-none relative">
          <Skeleton className="absolute top-3 h-5 w-20 left-2 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-16 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-56 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-96 bg-gray-300" />
        </Skeleton>
        <Skeleton className="bg-gray-300 w-full h-10 rounded-none relative">
          <Skeleton className="absolute top-3 h-5 w-20 left-2 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-16 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-56 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-96 bg-gray-400" />
        </Skeleton>
        <Skeleton className="bg-gray-100 w-full h-10 rounded-none relative">
          <Skeleton className="absolute top-3 h-5 w-20 left-2 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-16 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-56 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-96 bg-gray-300" />
        </Skeleton>
        <Skeleton className="bg-gray-300 w-full h-10 rounded-none relative">
          <Skeleton className="absolute top-3 h-5 w-20 left-2 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-16 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-56 bg-gray-400" />
          <Skeleton className="absolute top-3 h-5 w-20 right-96 bg-gray-400" />
        </Skeleton>
        <Skeleton className="bg-gray-100 w-full h-10 rounded-none relative">
          <Skeleton className="absolute top-3 h-5 w-20 left-2 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-16 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-56 bg-gray-300" />
          <Skeleton className="absolute top-3 h-5 w-20 right-96 bg-gray-300" />
        </Skeleton>
      </Skeleton>
    </div>
  )
}
