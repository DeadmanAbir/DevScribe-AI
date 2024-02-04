"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
const Youtube = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
  return (
    <div className='flex flex-col gap-2 items-center justify-center'> 
      <ReactPlayer url="https://youtu.be/q34bD9NicFM?si=N5C6HDNa3paFyvKR" height={300} width={600} />
      <div className='text-2xl font-jakarta font-bold'> Title of the Video </div>
    </div>
  )
}

export default Youtube
