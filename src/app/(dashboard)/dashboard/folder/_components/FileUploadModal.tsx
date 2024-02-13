'use client'
import { trpc } from '@/app/_trpc/client'
import { InfoIcon, PlusCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
interface Filefields {
  url: string
  name: string
}

function FileUploadModal({ folderId }: any) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { mutate: createFile } = trpc.file.createFile.useMutation({
    onSuccess: () => {
      alert('File created successfully')
    },

    onError: () => {
      alert('Error creating file')
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Filefields>()
  const onSubmit: SubmitHandler<Filefields> = async (data: any) => {
    const { url, name } = data
    console.log(folderId)
    await createFile({
      folderId: folderId,
      url: url,
      name: name,
    })
    reset()
  }

  return (
    <>
      <Dialog>
        <DialogTrigger className="">
          {isClient ? (
            <Button variant="open">
              <PlusCircle className="mr-2 h-4 w-4" /> Create File
            </Button>
          ) : (
            <Skeleton className="h-10 w-40 bg-gray-400 m-[3.7px]" />
          )}
        </DialogTrigger>

        <DialogContent className="lg:w-[30%] ">
          <DialogHeader>
            <div className="text-center text-xl font-semibold">Create File</div>
            <DialogDescription>
              <form
                action=""
                className="flex flex-col gap-3 mt-2 "
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>Name</div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Name"
                  className="h-7 p-2 text-black rounded-none outline-2 outline-zinc-600 border-2 border-black"
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
                <div>Url</div>

                <input
                  {...register('url', {
                    required: 'Url is required',
                  })}
                  type="text"
                  placeholder="Url"
                  className="h-7 p-2 text-black rounded-none outline-2 outline-zinc-600 border-2 border-black"
                />
                {errors.url && (
                  <div className="text-red-500">{errors.url.message}</div>
                )}
                <div className='bg-amber-300 rounded-xl text-xs p-[2px] text-center gap-3 text-black border-[1px] flex items-center border-black'><InfoIcon className='h-5 w-5'/> <span> beta mode - try to video which has transcription </span> </div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-blue-700 text-white p-2 rounded-lg mt-5"
                >
                  {isSubmitting ? 'Creating' : 'Create'}
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default FileUploadModal
