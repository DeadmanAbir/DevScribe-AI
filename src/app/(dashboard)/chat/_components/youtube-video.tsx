"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
interface YoutubeProps{
    URL : string;
    title : string;

}
const Youtube = ({URL, title } : YoutubeProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
  return (
    <div className='flex flex-col gap-2 items-center justify-center mt-2'> 
      <ReactPlayer className="border-4 border-black rounded-2xl p-2" url={URL} height={400} width={700} controls={true}/>
      <div className='text-2xl  font-bold p-2 '> {title} </div>
      <div className='w-full bg-slate-200 rounded-lg p-2 border-2 border-slate-400'>
      <p className={`${showMore ? 'block' : 'truncate'}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nisi quis mauris faucibus hendrerit. Duis quis mauris velit. Phasellus nec odio sed odio sagittis euismod. Ut eleifend ultricies arcu, a facilisis metus efficitur a. Mauris nec augue vitae justo ullamcorper gravida a ut arcu. Nulla facilisi. Nullam id tortor vitae felis pulvinar efficitur. In hac habitasse platea dictumst. Phasellus volutpat, arcu et rutrum consectetur, risus libero posuere velit, sed pharetra neque odio eget nisi. Donec id nunc lacus. Donec scelerisque mi id nisl ullamcorper, vel bibendum lorem eleifend. Sed placerat orci eu libero tincidunt lobortis. Pellentesque dapibus eget magna sit amet feugiat.
      </p>
      {!showMore && (
        <button className="text-blue-500 mt-2" onClick={() => setShowMore(true)}>
          ...more
        </button>
      )}
      {showMore && (
        <button className="text-blue-500 mt-2" onClick={() => setShowMore(false)}>
          Show less
        </button>
      )}
    </div>
    </div>
  )
}

export default Youtube
