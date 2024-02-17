"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
interface YoutubeProps{
    URL : string;
    title : string;

}
const Youtube = ({URL, title } : YoutubeProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
  return (
    <div className='flex flex-col gap-2 items-center justify-center mt-10'> 
      <ReactPlayer className="border-4 border-black rounded-2xl p-2" url={URL} height={300} width={600} controls={true}/>
      <div className='text-2xl font-jakarta font-bold '> {title} </div>
    </div>
  )
}

export default Youtube
