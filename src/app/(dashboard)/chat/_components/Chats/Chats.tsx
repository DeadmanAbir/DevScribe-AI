import { CpuIcon, UserCircle2 } from 'lucide-react'
import { PropagateLoader, RiseLoader, SyncLoader } from 'react-spinners'

interface ChatsProps {
  id: string
  text: string
  createdAt: Date
  isUserMessage: boolean
  fileId: string
}
export default function Chats({
  messages,
  isMessageLoading,
  isAiThinking,
}: {
  messages: any
  isMessageLoading: boolean
  isAiThinking: boolean
}) {
  return (
    <>
      <div className="grid grid-rows-[auto auto] rounded-lg border px-5 absolute top-24 left-0 overflow-y-auto overscroll-y-auto  pb-48 w-full max-h-full shadow-inner bg-gradient-to-br from-white to-blue-100 ">
        {isMessageLoading ? (
          <div className="text-black flex flex-col gap-3 items-center justify-center mt-10">
            {' '}
            <PropagateLoader color="#6F9DFF" />

            <p className="text-lg font-900 p-10"> Loading your chats...</p>
          </div>
        ) : null}
        {isAiThinking ? (
          <div className="text-black flex flex-row gap-3 items-start justify-start mt-4 ml-4">
            {' '}
            <p className="text-xs">
              {' '}
            <p className="text-lg "> Devscrie AI is thinking...</p>

              <CpuIcon className="h-6 w-6" />
            </p>
            <SyncLoader color="#6F9DFF" size={5} />
          </div>
        ) : null}
        {messages?.map((message: ChatsProps) => {
          if (message.isUserMessage) {
            return <HumanMessage message={message.text} />
          } else {
            return <AiMessage message={message.text} />
          }
        })}
      </div>
    </>
  )
}

function AiMessage({ message }: { message: string }) {
  return (
    <div className="p-4 flex items-start space-x-4 w-full ">
      <div>
        {' '}
        <CpuIcon className="h-6 w-6 " />{' '}
      </div>

      <div className="grid grid-rows-auto gap-0.5">
        <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4 text-sm border border-gray-800 ">
          {message}
        </div>
      </div>
    </div>
  )
}

function HumanMessage({ message }: { message: string }) {
  return (
    <div className="p-4 flex items-start justify-end space-x-4 w-full ">
      <div className="grid grid-rows-auto gap-0.5 ">
        <div className="rounded-lg bg-slate-200 dark:bg-gray-800 p-4 text-sm border border-[#0000FF]">
          {message}
        </div>
      </div>
      <div>
        <UserCircle2 className="h-6 w-6" />
      </div>
    </div>
  )
}
