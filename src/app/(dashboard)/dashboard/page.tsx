"use client";
import { useEffect } from "react";
import Folder from "../_components/folder";
import { FolderSkeleton } from "../_components/folder-skeleton";
import { useUser } from "@clerk/nextjs";
import CreateFolderModal from "../_components/folderModal/create-folder-modal";
import { api } from "@/trpc/react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Folder as FolderTypes } from "@/types/folder/folder-types";

const Dashboard = () => {
  const {
    data: Folders,
    isLoading: folderLoading,
    refetch: refetchFolder,
  } = api.folder.getFolders.useQuery<FolderTypes[]>();
  let count = 0;
  useEffect(() => {
    refetchFolder();
  }, [Folders, refetchFolder]);
  const user = useUser();
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("imgUrl", user?.user?.imageUrl as string);
  }
  return (
    <div className="h-full     flex flex-col md:items-center items-center w-full mx-auto text-black max-w-screen-2xl   ">
      <div className="md:text-4xl text-3xl py-[7px] md:px-3 md:pl-10 px-2 lg:pl-32  flex justify-between w-11/12 items-center ">
        <div className="md:text-2xl font-bold text-xl">Folders</div>

        {!folderLoading ? (
          <CreateFolderModal />
        ) : (
          <Skeleton className="h-10 w-40 bg-gray-400 m-[3.7px]" />
        )}
      </div>
      <Separator className="bg-gray-400 w-full" />
      {Folders?.length === 0 ? (
        <div className="text-xl text-black mt-10 flex text-center items-center justify-center h-28 bg-white border-2 border-gray-400 rounded-lg shadow-xl md:w-[82%] w-[90%] mx-auto lg:ml-44">
          👋 Welcome to DevcribeAI create a folder
        </div>
      ) : (
        ""
      )}
      {folderLoading ? (
        <FolderSkeleton />
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:pl-32  p-3 md:pb-10 pb-20 w-11/12 mt-3  ">
          {Folders?.map((projects: FolderTypes) => (
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
  );
};

export default Dashboard;
