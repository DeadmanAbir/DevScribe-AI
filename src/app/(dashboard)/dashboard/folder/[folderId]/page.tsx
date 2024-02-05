"use client";
import { useEffect } from "react";
import FileCard from "../_components/FileCard";
import { trpc } from "@/app/_trpc/client";
import FileUploadModal from "../_components/FileUploadModal";
interface FileProps {

  id: string;
  folderId: string;
  name: string;
  url: string;
  createdAt: string;

}
const FolderPage = ({ params }: any) => {
  const { data: Files, isLoading: fileLoading, refetch: refetchFile } = trpc.file.getFiles.useQuery({ folderId: params.folderId });
  let count = 0;
  useEffect(() => {
    refetchFile();
  }, [Files]);
  if (fileLoading || Files?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <p className="text-2xl font-semibold">Loading files...</p>
      </div>
    )
  }



  return (
    <div className="h-full lg:ml-44 flex flex-col items-center w-full text-white max-w-screen-2xl">
      <div className="md:text-4xl text-3xl p-10 flex justify-between lg:w-[750px] w-[350px] items-center">
        <div className='md:text-2xl text-xl'>Recent Files</div>
        <FileUploadModal folderId={params.folderId} /></div>
      <div className="flex justify-center items-center">

        {Files?.map((projects: FileProps) => (
          <FileCard
            key={count++}
            id={projects.id}
            url={projects.url}
            folderId={projects.folderId}
            createdAt={projects.createdAt}
            fileName={projects.name}
          />

        ))}
      </div>
    </div>
  );
}

export default FolderPage;