"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { trpc } from "@/app/_trpc/client";
import { CpuIcon, User2Icon, UserCircle2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Conversation from "./Conversation";
interface questionProps {
  id: string;
  collection: string;
}
type Message = {
  id: string;
  text: string;
  createdAt: Date;
  isUserMessage: boolean;

  fileId: string;
};
const Question = ({ id, collection }: questionProps) => {
  const {
    data: messages,
    isLoading: isMessageLoading,
    refetch: refetchMessages,
  } = trpc.chat.getRecentChat.useQuery({
    fileId: id,
  });
  const [input, setInput] = useState<string>("");
  const [isAiThinking, setAiThinking] = useState<boolean>(false);

  const { mutate: createMessage } = trpc.chat.createMessage.useMutation({
    onSuccess: (result: string) => {
      refetchMessages();
    },
    onSettled: () => {
      setAiThinking(false);
    },
    onError: () => {
      alert("Error creating message");
      setAiThinking(false);
    },
  });
  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    const question = input;
    setInput("");
    setAiThinking(true);
    createMessage({ fileId: id, message: question, collection });
  };

  return (
    <div className="md:w-5/12 w-full flex flex-col items-center justify-center relative">
      <div className="absolute w-9/12 top-8 items-center justify-center">
        <form className="w-full flex h-10" onSubmit={handleSendMessage}>
          <Textarea
            placeholder="Ask a question about your upload"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
            rows={0}
            maxRows={4}
            autoFocus
            className="w-full text-sm p-5 rounded-full bg-gray-300 z-20 relative items-center outline outline-2 outline-cyan-500 outline-offset-2 focus:outline-none focus:ring focus:border-blue-500 resize-none scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch rounded-full"
          />
          <button
            disabled={isMessageLoading}
            type="submit"
            className="rounded-full z-20 bg-gradient-to-r from-cyan-500 to-pink-500 p-2 w-16 absolute right-0 text-white"
          >
            Ask
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col items-center justify-center h-full ">
        {messages?.length === 0 && !isAiThinking && (
          <>
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
          <Conversation setAiThinking={setAiThinking} />
          </>

        )}
       

        <div className="px-5 absolute top-24 left-0 overflow-y-auto overscroll-y-auto h-full pb-48 w-full ">
          {isMessageLoading ? (
            // Load your skeleton here
            <p>hello there</p>
          ) : null}

          {isAiThinking ? <p>Ai is seraching for your answer...</p> : null}
          {messages?.map((message: any, index: number) => (
            <div
              key={index}
              className={`text-gray-600 mb-2 flex gap-1 items-start p-2 rounded-lg ${
                message.isUserMessage ? " bg-gray-200 " : "bg-gray-50"
              }`}
            >
              {message.isUserMessage ? <UserCircle2 /> : <CpuIcon />}
              <span>{message.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
