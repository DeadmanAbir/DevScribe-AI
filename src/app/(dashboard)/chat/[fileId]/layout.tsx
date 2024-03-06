import { getFileById } from '@/actions/get-file-by-id'

export async function generateMetadata({
  params,
}: {
  params: { fileId: string }
}) {
  const fileId = params.fileId
  const getFile = await getFileById(fileId)

  const filename = getFile?.name

  return {
    title: filename || 'Folder',
  }
}
const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default ChatLayout
