import { CpuIcon, UserCircle2 } from "lucide-react";

interface ChatsProps {
  id: string;
  text: string;
  createdAt: Date;
  isUserMessage: boolean;
  fileId: string;
}
export default function Chats({ messages, isMessageLoading, isAiThinking}: {messages: any, isMessageLoading: boolean, isAiThinking : boolean}) {
    return (
      <>
        <div className="grid grid-rows-[auto auto] rounded-lg border px-5 absolute top-24 left-0 overflow-y-auto overscroll-y-auto h-full pb-48 w-full shadow-inner ">
        {isMessageLoading ? (
            // Load your skeleton here
            <p className="text-black text-9xl">hello there</p>
          ) : null}
           {isAiThinking ? <p>Ai is seraching for your answer...</p> : null}
          {messages?.map((message: ChatsProps) => {
         
            if (message.isUserMessage) {
              return <HumanMessage message={message.text} />;
            } else {
              return <AiMessage message={message.text} />;
            }
          })}
        </div>
      </>
    );
  }

function AiMessage({ message }: { message: string }) {
  return (
    <div className="p-4 flex items-center space-x-4">
      <CpuIcon />
      <div className="grid grid-rows-auto gap-0.5">
        <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4 text-sm border border-gray-800">
          {message}
        </div>
      </div>
    </div>
  );
}

function HumanMessage({ message }: { message: string }) {
  return (
    <div className="p-4 flex items-center justify-end space-x-4 ">
      <div className="grid grid-rows-auto gap-0.5 ">
        <div className="rounded-lg bg-gray-200 dark:bg-gray-800 p-4 text-sm border border-[#0000FF]">
          {message}
        </div>
      </div>
      <UserCircle2 />
    </div>
  );
}
