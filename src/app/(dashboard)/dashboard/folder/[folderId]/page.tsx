"use client";

import { useEffect } from "react";

import { api } from "@/trpc/react";
import FileUploadModal from "../_components/FileUploadModal";
import { Separator } from "@/components/ui/separator";
import FileTable from "../_components/table";
import { FileSkeleton } from "../_components/file-skeleton";


const FolderPage = ({ params }: any) => {
  const {
    data: Files ,
    isLoading: fileLoading,
    refetch: refetchFile,
  } = api.file.getFiles.useQuery({ folderId: params.folderId });
  useEffect(() => {
    refetchFile();
  }, [Files]);

  return (
    <div className="h-full flex flex-col md:items-center items-center w-full mx-auto text-black max-w-screen-2xl   ">
      <div className="md:text-4xl text-3xl py-[7px] md:px-3 md:pl-10 px-2 lg:pl-32  flex justify-between w-11/12 items-center ">
        <div className="md:text-2xl font-bold text-xl ">Files</div>

        <FileUploadModal
          folderId={params.folderId}
          isFileLoading={fileLoading}
        />
      </div>
      <Separator className="bg-gray-400 w-full" />

      {fileLoading  ? (
        <FileSkeleton />
      ) : (
        <div className="lg:w-5/6 w-full mt-4 p-2 lg:ml-28 ">
          <FileTable data={Files as any} />
        </div>
      )}
    </div>
  );
};

export default FolderPage;
