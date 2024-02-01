import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface FolderProps {
  title: string
}

const Folder = ({ title }: FolderProps) => {
  return (
    <>
      <div className="bg-red-500 h-48 w-52 rounded-md ">
        <div className="h-48 w-52 bg-white rounded-md flex flex-col items-center justify-center p-2 cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-transform">
          <Sheet>
            <SheetTrigger>
              <div className=" pt-4 h-32 w-52  flex flex-col justify-center items-center">
                <Image
                  src="/folder-svgrepo-com.svg"
                  alt="folder"
                  width={50}
                  height={50}
                />
                <div className="text-center mt-2 text-black">{title}</div>
              </div>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-b from-indigo-950 to-black text-white">
              <SheetHeader>
                <SheetTitle>
                  {' '}
                  <Image
                    src="/folder-svgrepo-com.svg"
                    alt="folder"
                    width={50}
                    height={50}
                  />
                </SheetTitle>
                <SheetDescription className="flex flex-col gap-4">
                  <div className="text-white text-lg">
                    <span className="font-semibold"> Folder Name - </span>
                    {title}
                  </div>
                  <div className="text-white text-lg leading-5">
                    <span className="font-semibold">
                      {' '}
                      Folder Description -{' '}
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni necessitatibus officia tempore, ullam earum ipsum
                    alias, nisi iure aspernatur veniam sit laudantium vel. Dicta
                    officiis magni, voluptatem eaque nulla quae?
                  </div>
                  <div className="text-white text-lg leading-5">
                    <span className="font-semibold"> Created At- </span>
                  </div>
                  <div className="text-white text-lg leading-5">
                    <span className="font-semibold"> Updated At- </span>
                  </div>
                  <div className="flex justify-between mt-10">
                    <Button>Edit</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="border-t-2 border-t-black w-52 bg-white flex justify-between rounded-b-md p-2 items-center">
            <div className="text-black flex flex-col text-xs">
              {' '}
              <span> Creted at:</span> <span>date</span>{' '}
            </div>
            <Button variant="open">Open</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Folder
