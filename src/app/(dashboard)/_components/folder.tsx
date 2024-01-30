import { FolderArchiveIcon, FolderCog, FolderKanban } from "lucide-react";


interface FolderProps{
    title:string
}


const Folder = ({title}:FolderProps) => {
    return ( <div className="h-48 w-44 bg-slate-300 rounded-md flex flex-col justify-center p-2 cursor-pointer">
        <div className="border-2 border-black h-4/5 w-full flex justify-center items-center">
            <FolderKanban className="h-10 w-10" fill="yellow"/>
        </div>
        <div className="text-center mt-2 text-black">
           {title}
        </div>
    </div> );
}
 
export default Folder;