import { fileProps } from '@/types/file/file-types';
import { useRouter } from 'next/navigation'


const FileCard = ({ fileName, id, folderId, url, createdAt} : fileProps) => {
  const router = useRouter()
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
      <div className="text-lg text-black font-bold mb-2">{fileName}</div>
      <div className="flex space-x-2">
        <button
         onClick={()=>{
          router.push(`/chat/${id}`);
         }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Open
        </button>
        <button
       
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FileCard;
