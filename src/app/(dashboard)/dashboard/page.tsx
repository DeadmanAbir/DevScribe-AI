'use client'
import Folder from '../_components/folder'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Divide, PlusCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'

interface Formfields {
  name: string
  description: string
}

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<Formfields>()
  const onSubmit: SubmitHandler<Formfields> = (data) => {
    console.log(data)
    resetField("name")
    resetField("description")

  }
  return (
    <div className="h-full  mt-16 lg:ml-24 flex flex-col items-center  w-full text-white max-w-screen-2xl   ">
      <div className="md:text-4xl text-3xl p-10 flex justify-between lg:w-[750px] w-[350px] items-center">
        <div>Recent Files</div>
        <Dialog>
          <DialogTrigger>
            <div className="flex gap-2 text-lg bg-purple-700 text-destructive-foreground hover:bg-purple-600 rounded-lg p-2 items-center">
              {' '}
              <PlusCircle className="h-6 w-6" /> Create
            </div>
          </DialogTrigger>
          <DialogContent className="bg-indigo-900 text-slate-300">
            <DialogHeader>
              <DialogTitle className='flex items-center gap-2'>  <Image
                    src="/folder-svgrepo-com.svg"
                    alt="folder"
                    width={30}
                    height={30}
                  />Create new folder </DialogTitle>
              <DialogDescription>
                <form
                  action=""
                  className="flex flex-col gap-3 mt-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Name"
                    className="h-7 p-2 text-black"
                  />
                  {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                  )}
                  <input
                    {...register('description', {
                      required: 'Description is required',
                    })}
                    type="text"
                    placeholder="Description"
                    className="h-7 p-2 text-black"
                  />
                  {errors.description && (
                    <div className="text-red-500">
                      {errors.description.message}
                    </div>
                  )}
                  <button disabled={isSubmitting} type="submit" className='bg-purple-700 text-white p-2'>
                    {isSubmitting ? 'Creating' : 'Create'}
                  </button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <Folder title="DSA" />
        <Folder title="WEB DEVELOPMENT" />
        <Folder title="Some other" />
      </div>
    </div>
  )
}

export default Dashboard
