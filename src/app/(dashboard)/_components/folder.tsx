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
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

interface FolderProps {
  title: string
}

const Folder = ({ title }: FolderProps) => {
  return (
    <>
      <div className="bg-indigo-500 aspect-video rounded-md ">
        <div className="aspect-video bg-purple-400 rounded-md flex flex-col items-center justify-center cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-transform">
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
                <SheetTitle className="flex items-center gap-3 text-white  justify-center">
                  {' '}
                  <p>Folder Preview</p>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                  <div className="text-white text-lg flex flex-col items-center justify-center">
                    <Image
                      src="/folder-svgrepo-com.svg"
                      alt="folder"
                      width={100}
                      height={100}
                    />
                    <span>{title}</span>
                  </div>
                  <Separator />
                  <div className="text-white text-lg leading-5 flex flex-col items-start gap-2">
                    <span className="font-semibold"> Folder Description </span>
                    <span className="text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae, suscipit ipsa provident porro iste hic quasi
                      delectus maiores nam ex?
                    </span>
                  </div>
                  <Separator />
                  <div className="text-white text-lg leading-5">
                    <span className="font-semibold"> Created At- </span>
                  </div>
                  <div className="text-white text-lg leading-5">
                    <span className="font-semibold"> Updated At- </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between mt-5">
                    <Button>Edit</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="border-t-2 border-t-black w-full bg-slate-200 flex justify-between rounded-b-md p-2 items-center ">
            <div className="text-black flex flex-col text-xs">
              {' '}
              <span> Creted at:</span> <span>date</span>{' '}
            </div>
            <Link href="/dashboard/folder/1">
              {' '}
              <Button variant="open">Open</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Folder
