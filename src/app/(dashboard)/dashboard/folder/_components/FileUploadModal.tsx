'use client'
import { trpc } from '@/app/_trpc/client'
import { PlusCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SubmitHandler, useForm } from 'react-hook-form'
interface Filefields {
  url: string
  name: string
}

function FileUploadModal({ folderId }: any) {
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
        <DialogTrigger className="flex gap-2 text-lg bg-blue-600 text-destructive-foreground hover:bg-blue-500 rounded-lg p-2 items-center">
          <PlusCircle />
          <span>Create File </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <form
                action=""
                className="flex flex-col gap-3 mt-5 "
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
