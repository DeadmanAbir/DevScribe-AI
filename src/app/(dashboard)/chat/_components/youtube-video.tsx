"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import MarkdownRenderer from "./Markdown";
interface YoutubeProps {
  URL: string;
  title: string;
  description: string;
}
const Youtube = ({ URL, title, description }: YoutubeProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center mt-2">
      <ReactPlayer
        className="border-4 border-black rounded-2xl p-2"
        url={URL}
        height={400}
        width={700}
        controls={true}
      />
      <div className="text-2xl  font-bold p-2 "> {title} </div>
      <div className="w-full bg-slate-200 rounded-lg p-2 border-2 border-slate-400">
        {/* <p className={`${showMore ? "block" : "truncate"}`}>{description}</p> */}
        <div className={`${showMore ? "block" : "truncate"} text-justify`}>
        <MarkdownRenderer content={description} isVideoDescription={true}  />

        </div>
        {!showMore && (
          <button
            className="text-blue-500 mt-2"
            onClick={() => setShowMore(true)}
          >
            ...more
          </button>
        )}
        {showMore && (
          <button
            className="text-blue-500 mt-2"
            onClick={() => setShowMore(false)}
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default Youtube;
