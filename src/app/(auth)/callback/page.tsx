"use client"
import {FadeLoader }from 'react-spinners'
import { trpc } from '@/app/_trpc/client'
import { useRouter } from 'next/navigation'
const OnboardPage = () => {
  const router=useRouter();
  const response=trpc.callback.authCallback.useQuery(undefined, {
    onSuccess: ({ success }: { success: boolean }) => {
      if (success) {
        // user is synced to db
        router.push( '/dashboard');
      }
    },
    onError: (err : any) => {
     console.log(err);
    },
    retry: true,
    retryDelay: 500
  })

  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-indigo-950 to-black">
      <div className="text-white text-xl text-center flex flex-col items-center justify-center gap-5 ">
        <div>Setting up your account</div>
        <p className='text-xs'>You will be redirected automatically.</p>
        <FadeLoader color='white' />
      </div>
    </div>
  )
}

export default OnboardPage
