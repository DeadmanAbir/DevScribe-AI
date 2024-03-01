'use client'
import { Key, useEffect } from 'react'
import MainScreen from '../_components/mainscreen'
import Navbar from '../_components/navbar'
import { api } from '@/trpc/react'
import MainscreenSkeleton from '../_components/main-skeleton'
import { FileDetails , KeyConceptProps} from '@/types/chat/chat-types'
import { useRouter } from 'next/navigation'
const Interaction = ({ params }: any) => {
  const router = useRouter();
  const {
    data: File,
    isLoading: fileLoading,
    refetch: refetchFolder,
  } = api.chat.getFileDetails.useQuery({
    fileId: params.fileId,
  })

  useEffect(() => {
    refetchFolder()
   
  }, [File])
  if (!fileLoading && !File) {
   
    router.push('/404'); 
    return null; 
  }
  return (
    <div className="h-screen overflow-hidden max-w-full mx-auto font-inter">
      {fileLoading ? (
           <MainscreenSkeleton/>
      ) : (
        <>
     
          <Navbar />
          <MainScreen
            url={File?.url as string}
            detailedSummary={File?.summary as string}
            concepts={File?.concepts as KeyConceptProps[]}
            title={File?.title as string}
            description={File?.description as string}
            id={File?.id as string}
            collection={File?.collection  as string}
          
          />
        </>
      )}
    </div>
  )
}

export default Interaction
