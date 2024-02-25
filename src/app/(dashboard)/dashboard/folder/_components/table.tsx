import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import Link from "next/link";
import {
  File as FileIcon,
  FileText,
  MessageSquare,
  MessageSquareText,
  MessagesSquare,
  MoreHorizontal,
  Trash2,
  YoutubeIcon,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { api } from "@/trpc/react";
import { toast } from "sonner";
interface FileTableProps {
  data: File[];
}


type File = {
  id     :     string     
  name    :    string
  url     :    string
  collection : string 
  createdAt  : Date
  summary   :  string     
 
  folderId  :  string
}



const FileTable = ({ data }: FileTableProps) => {
  const { mutate: deleteFile } = api.file.deleteFile.useMutation({
    onSuccess: () => {
      toast.success("File Deleted successfully");
    },

    onError: () => {
      toast.error("Error deleting file");
    },
  });

  const formatDate = (date: Date | string): string => {
    if (date instanceof Date) {
      return date.toLocaleDateString();
    } else {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toLocaleDateString();
      } else {
        return "Invalid Date";
      }
    }
  };

  return (
    <div className="border-2 border-gray-400 w-full rounded-md">
      {data?.length === 0 ? (
        <div className="text-center h-40 flex items-center justify-center shadow-xl bg-white rounded-md">
          👋 Welcome to DevcribeAI create a file
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
                  <YoutubeIcon className="text-gray-700" />{" "}
                  <span>{file.name} </span>{" "}
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
                <TableCell>
                  <ConfirmModal
                    onConfirm={() => {
                      deleteFile({ fileId: file.id });
                    }}
                  >
                    <Trash2 className="h-5 w-5 ml-2 text-red-500 hover:text-red-600 cursor-pointer" />
                  </ConfirmModal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default FileTable;

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
  );
};
