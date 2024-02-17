'use client'
import Image from 'next/image'
import { useState } from 'react'
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
const Question = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input])
      setInput('')
    }
  }

  return (
    <div className="md:w-5/12 w-full flex flex-col items-center justify-center relative     ">
      <div className="absolute w-9/12 top-8 items-center justify-center">
        <div className="w-full flex h-10     ">
          <input
            type="text"
            placeholder="Ask a question about your upload"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full text-sm p-5 rounded-full bg-gray-300 z-20 relative items-center outline outline-2 outline-cyan-500 outline-offset-2 focus:outline-none focus:ring focus:border-blue-500 "
          />
          <button
            className="rounded-full z-20 bg-gradient-to-r from-cyan-500 to-pink-500  p-2 w-16 absolute right-0  text-white"
            onClick={handleSendMessage}
          >
            Ask
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center h-full ">
        {messages.length === 0 && (
          <div className=" w-1/3 text-xs text-center text-slate-500 flex flex-col items-center ">
            <Image
              src="/message-chat-1.svg"
              alt="chat"
              width={50}
              height={50}
            />
            You can ask qustion about your upload and your answer will appear
            here
          </div>
    
        )}
        {messages.length === 0 && (
          <div className='grid md:grid-cols-2 grid-cols-1 gap-3  w-5/6 mt-10'>
            <div className='bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-cyan-500 outline-offset-2 rounded-lg text-xs hover:shadow-lg'>What is 5 main point of video</div>
            <div className='bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-cyan-500 outline-offset-2 rounded-lg text-xs hover:shadow-lg'>What is 5 main point of video</div>
            <div className='bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-cyan-500 outline-offset-2 rounded-lg text-xs hover:shadow-lg'>What is 5 main point of video</div>
            <div className='bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-cyan-500 outline-offset-2 rounded-lg text-xs hover:shadow-lg'>What is 5 main point of video</div>

          </div>
        )}

        <div className="px-5 absolute top-24 left-0 overflow-y-auto overscroll-y-auto h-full pb-48 w-full">
          {messages.map((message, index) => (
            <div key={index} className="text-gray-600 mb-2 flex gap-1 items-start text-left ">
             <Image src="/q.svg" alt='question ' height={15} width={15} className='m-1'/>
             <span>{message}</span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Question
