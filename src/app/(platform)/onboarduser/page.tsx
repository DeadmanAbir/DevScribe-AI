"use client"
import {BeatLoader }from 'react-spinners'
const OnboardPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-indigo-950 to-black">
      <div className="text-white text-xl text-center flex flex-col items-center justify-center gap-5 ">
        <div>Setting up your account</div>
        <p className='text-xs'>You will be redirected automatically.</p>
        <BeatLoader color='white' />
      </div>
    </div>
  )
}

export default OnboardPage
