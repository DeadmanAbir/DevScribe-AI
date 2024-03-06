import { getFolderById } from '@/actions/get-folder-by-id'

export async function generateMetadata({
  params,
}: {
  params: { folderId: string }
}) {
  const folderId = params.folderId

  const folderbyid = await getFolderById(folderId)

  const foldername = folderbyid?.name
  const folderDescription = folderbyid?.description

  return {
    title: foldername || 'Folder',
    description: folderDescription || 'Folder Description',
  }
}
const FileLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default FileLayout
