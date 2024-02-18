"use client";
import { YoutubeTranscript } from "youtube-transcript";
import { trpc } from "@/app/_trpc/client";
import { BounceLoader } from "react-spinners";
import { InfoIcon, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
interface Filefields {
  url: string;
  name: string;
}
interface FileUploadModalProps {
  folderId: string;
  isFileLoading: boolean;
}

function FileUploadModal({ folderId, isFileLoading }: FileUploadModalProps) {
  const [showUploadingModal, setShowUploadingModal] = useState<boolean>(false);

  const { mutate: createFile } = trpc.file.createFile.useMutation({
    onSuccess: () => {
      setShowUploadingModal(false);
    },

    onError: () => {
      setShowUploadingModal(false);
      alert("Error creating file");
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Filefields>();
  const validateYouTubeUrl = (url: string): boolean => {
    // try {
    //   const info = await YoutubeTranscript.fetchTranscript(url);
    //   if (info) {
    //     return true;
    //   }
    //   return false;
    // } catch (e) {
    //   return false;
    // }
    return true;
  };
  const onSubmit: SubmitHandler<Filefields> = async (data: any) => {
    const { url, name } = data;
    setShowUploadingModal(true);
    await createFile({
      folderId: folderId,
      url: url,
      name: name,
    });
    reset();
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="">
          {isFileLoading ? (
            <Skeleton className="h-10 w-40 bg-gray-400 m-[3.7px]" />
          ) : (
            <Button variant="open">
              <PlusCircle className="mr-2 h-4 w-4" /> Create File
            </Button>
          )}
        </DialogTrigger>

        <DialogContent className="lg:w-[30%] ">
          {showUploadingModal ? (
            <DialogHeader>
              <div className="text-center text-xl font-semibold text-[#6F9DFF]">
                Uploading
              </div>
              <DialogDescription className="flex flex-col items-center justify-center py-10">
                <BounceLoader color="#6F9DFF" />
                <div className="mt-10 text-blue-400">
                  Your file is uploading
                </div>
              </DialogDescription>
            </DialogHeader>
          ) : (
            <DialogHeader>
              <div className="text-center text-xl font-semibold">
                Create File
              </div>
              <DialogDescription>
                <form
                  action=""
                  className="flex flex-col gap-3 mt-2 "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>Name</div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Name"
                    className="h-7 p-2 text-black rounded-none outline-2 outline-zinc-600 border-2 border-black"
                  />
                  {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                  )}
                  <div>Url</div>

                  <input
                    {...register("url", {
                      required: "Url is required",
                      validate: validateYouTubeUrl,
                    })}
                    type="text"
                    placeholder="Url"
                    className="h-7 p-2 text-black rounded-none outline-2 outline-zinc-600 border-2 border-black"
                  />
                  {errors.url && (
                    <div className="text-red-500">{errors.url.message}</div>
                  )}
                  {errors.url && errors.url.type === "validate" && (
                    <p className="text-red-300">Invalid YouTube URL.</p>
                  )}
                  <div className="bg-amber-300 rounded-xl text-xs p-[2px] text-center gap-3 text-black border-[1px] flex items-center border-black">
                    <InfoIcon className="h-5 w-5" />{" "}
                    <span>
                      {" "}
                      beta mode - try to video which has transcription{" "}
                    </span>{" "}
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                  >
                    {isSubmitting ? "Creating" : "Create"}
                  </button>
                </form>
              </DialogDescription>
            </DialogHeader>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default FileUploadModal;
