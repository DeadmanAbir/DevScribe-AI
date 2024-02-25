'use client'
import { useEffect } from 'react'
import MainScreen from '../_components/mainscreen'
import Navbar from '../_components/navbar'
import { trpc } from '@/trpc/client'
import MainscreenSkeleton from '../_components/main-skeleton'
const Interaction = ({ params }: any) => {
  const {
    data: File,
    isLoading: fileLoading,
    refetch: refetchFolder,
  } = trpc.chat.getFileDetails.useQuery({
    fileId: params.fileId,
  })

  useEffect(() => {
    refetchFolder()
   
  }, [File])
  return (
    <div className="h-screen overflow-hidden max-w-full mx-auto font-inter">
      {fileLoading ? (
           <MainscreenSkeleton/>
      ) : (
        <>
     
          <Navbar />
          <MainScreen
            url={File.url}
            detailedSummary={File.summary}
            concepts={File.concepts}
            title={File.title}
            description={File.description}
            id={File.id}
            collection={File.collection}
          
          />
        </>
      )}
    </div>
  )
}

export default Interaction
