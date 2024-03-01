import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { toast } from "sonner";
import { File, FolderClosed, Trash2Icon } from "lucide-react";
import { format } from "date-fns";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { FolderProps } from "@/types/folder/folder-types";
import { api } from "@/trpc/react";
import EditModal from "./folderModal/edit-modal";
const Folder = ({ id, title, description, createdAt }: FolderProps) => {
  const { mutate: deleteFolder } = api.folder.deleteFolder.useMutation({
    onSuccess: () => {
      toast.success("Folder Deleted successfully");
      window.location.reload();
    },

    onError: () => {
      toast.error("Error while deleting folder");
    },
  });

  const formatDate = format(createdAt, "d MMM yyyy");
  return (
    <div className="h-64 w-full bg-white rounded-md flex flex-col items-center justify-center cursor-pointer shadow-xl hover:shadow-2xl relative border-[1px] border-gray-400 mx-auto ">
      <Sheet>
        <SheetTrigger>
          <div className="  h-32 w-auto  flex flex-col justify-start items-center">
            <Image src="/blue-folder.svg" alt="folder" width={50} height={50} />
            <div className="text-center mt-2 text-black">{title}</div>
          </div>
        </SheetTrigger>

        <SheetContent className="bg-white text-black ">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-6   justify-start">
              {" "}
              <File className="h-4 w-4" />
              <p>Folder Preview</p>
            </SheetTitle>
            {/* <Separator /> */}
            <SheetDescription className="flex flex-col gap-4 relative">
              <div className=" text-lg flex flex-col items-center justify-center ">
                <div className="p-6 bg-gray-100 rounded-lg">
                  <FolderClosed className="text-red-500 h-16 w-16" />
                </div>
              </div>
              {/* <Separator /> */}
              <div className=" text-2xl leading-5 flex flex-col items-start gap-2 text-black font-semibold">
                <span>{title}</span>
                <span className="text-xs font-light text-gray-500">
                  {formatDate}
                </span>
              </div>
              {/* <Separator /> */}
              <div className=" text-lg leading-5 flex flex-col items-start gap-2">
                <span className="font-semibold text-lg text-black">
                  {" "}
                  Folder Description{" "}
                </span>
                <span className="text-base">{description}</span>
              </div>
              <Separator />
              <div className="flex justify-between mt-5 ">
                <EditModal title={title} description={description} id={id} />

                <ConfirmModal
                  onConfirm={() => {
                    deleteFolder({ folderId: id });
                  }}
                >
                  <Button variant="destructive">
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </ConfirmModal>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="border-t-2 border-t-gray-300 w-5/6 bg-white flex justify-between rounded-b-md py-2   items-center absolute bottom-1 ">
        <div className="text-black flex flex-col text-xs ">
          {" "}
          <span className="font-bold"> Created at:</span>{" "}
          <span className="text-xs text-gray-700">{formatDate}</span>{" "}
        </div>
        <Link href={`/dashboard/folder/${id}`}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg" />
            <div className="px-4 py-1  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:text-white hover:bg-transparent">
              Open
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Folder;
