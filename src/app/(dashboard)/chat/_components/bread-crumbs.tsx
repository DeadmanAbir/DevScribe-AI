'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const BreadCrumbs = () => {
  const router = useRouter()

  return (
    <div className="md:flex gap-1 hidden">
      <Link
        href="/dashboard"
        className="flex items-center justify-center hover:text-blue-500 hover:underline gap-[4px]"
      >
        Folders
      </Link>
      &gt;
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center hover:text-blue-500 hover:underline gap-[4px]"
      >
        File
      </button>
      &gt;
      <button className="flex items-center justify-center text-blue-500 gap-[4px]">
        Chat
      </button>
    </div>
  )
}

export default BreadCrumbs
