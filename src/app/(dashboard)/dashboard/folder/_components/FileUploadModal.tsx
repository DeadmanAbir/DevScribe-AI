"use client"
import { trpc } from "@/app/_trpc/client";
import { create } from "domain";
function FileUploadModal({ folderId }: any) {
    const { mutate: createFile } = trpc.file.createFile.useMutation({
        onSuccess: () => {
            alert('File created successfully');
        },

        onError: () => {
            alert("Error creating file")
        }
    })
    const handleButtonClick = () => {
        // Use window.prompt to take two inputs
        const input1 = window.prompt('Enter the URL:');
        const input2 = window.prompt('Enter the Project Name:');
        createFile({
            folderId: folderId as string,
            url: input1,
            name: input2
        })

    };
    return (
        <button
        onClick={handleButtonClick}
        className="flex gap-2 text-lg bg-purple-700 text-destructive-foreground hover:bg-purple-600 rounded-lg p-2 items-center"
      >
        Create
      </button>
    
  )
}

export default FileUploadModal