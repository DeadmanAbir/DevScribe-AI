"use client";
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { trpc } from "@/app/_trpc/client";
import FileUploadModal from "../_components/FileUploadModal";
import { Separator } from "@/components/ui/separator";
import FileTable, { FileSkeleton } from "../_components/table";
import { Button } from "@/components/ui/button";
interface FileProps {
  id: string;
  folderId: string;
  name: string;
  url: string;
  createdAt: string;
}
const FolderPage = ({ params }: any) => {
  const[isFileModalOpen, setIsFileModalOpen] = useState<boolean>(false)
  const {
    data: Files,
    isLoading: fileLoading,
    refetch: refetchFile,
  } = trpc.file.getFiles.useQuery({ folderId: params.folderId });
  let count = 0;
  useEffect(() => {
    refetchFile();
  }, [Files]);

  return (
    <div className="h-full     flex flex-col md:items-center items-center w-full mx-auto text-black max-w-screen-2xl   ">
      <div className="md:text-4xl text-3xl py-[7.5px] md:px-3 md:pl-10 px-2 lg:pl-32  flex justify-between w-11/12 items-center ">
        <div className="md:text-2xl font-bold text-xl ">Files</div>
       
        <FileUploadModal folderId={params.folderId} isFileLoading={fileLoading}/>
      </div>
      <Separator className="bg-gray-400 w-full" />

      {fileLoading && Files?.length !== 0 ? (
        <FileSkeleton />
      ) : (
        <div className="lg:w-5/6 w-full mt-4 p-2 lg:ml-28 ">
          <FileTable data={Files} />
        </div>
      )}
    </div>
  );
};

export default FolderPage;
