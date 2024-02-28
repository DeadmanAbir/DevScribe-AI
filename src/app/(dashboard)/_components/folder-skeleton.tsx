import { Skeleton } from "@/components/ui/skeleton"
export const FolderSkeleton = () => {
    return (
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:pl-32  p-3 pb-10 w-11/12 mt-3  ">
        <div>
          <Skeleton className=" relative h-64 w-full p-2 bg-gray-200">
            <Skeleton className="absolute h-20 w-32 top-[50px] right-[100px] bg-gray-300" />
            <Skeleton className="absolute h-8 w-40 top-[150px] right-[85px] bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
          </Skeleton>
        </div>
        <div>
          <Skeleton className=" relative h-64 w-full p-2 bg-gray-200">
            <Skeleton className="absolute h-20 w-32 top-[50px] right-[100px] bg-gray-300" />
            <Skeleton className="absolute h-8 w-40 top-[150px] right-[85px] bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
          </Skeleton>
        </div>{" "}
        <div>
          <Skeleton className=" relative h-64 w-full p-2 bg-gray-200">
            <Skeleton className="absolute h-20 w-32 top-[50px] right-[100px] bg-gray-300" />
            <Skeleton className="absolute h-8 w-40 top-[150px] right-[85px] bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
          </Skeleton>
        </div>{" "}
        <div>
          <Skeleton className=" relative h-64 w-full p-2 bg-gray-200">
            <Skeleton className="absolute h-20 w-32 top-[50px] right-[100px] bg-gray-300" />
            <Skeleton className="absolute h-8 w-40 top-[150px] right-[85px] bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
          </Skeleton>
        </div>{" "}
        <div>
          <Skeleton className=" relative h-64 w-full p-2 bg-gray-200">
            <Skeleton className="absolute h-20 w-32 top-[50px] right-[100px] bg-gray-300" />
            <Skeleton className="absolute h-8 w-40 top-[150px] right-[85px] bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
          </Skeleton>
        </div>{" "}
        <div>
          <Skeleton className=" relative h-64 w-full p-2 bg-gray-200">
            <Skeleton className="absolute h-20 w-32 top-[50px] right-[100px] bg-gray-300" />
            <Skeleton className="absolute h-8 w-40 top-[150px] right-[85px] bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 right-5 bg-gray-300" />
            <Skeleton className="absolute h-10 w-16 bottom-4 left-5 bg-gray-300" />
          </Skeleton>
        </div>
      </div>
    );
  };