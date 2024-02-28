"use client";
import { api } from "@/trpc/react";

import { ConversationProps } from "@/types/chat/chat-types";

function Conversation({
  setAiThinking,
  fileId,
  collection,
  refetchMessages,
}: ConversationProps) {
  const { mutate: createMessage } = api.chat.createMessage.useMutation({
    onSuccess: (result: string) => {},
    onSettled: () => {
      refetchMessages();
      setAiThinking(false);
    },
    onError: () => {
      alert("Error creating message");
      setAiThinking(false);
    },
  });

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3  w-5/6 mt-10">
      <div
        className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-blue-400 text-center outline-offset-2 rounded-lg text-xs hover:shadow-lg"
        onClick={(event) => {
          const messageText = event.currentTarget.textContent;
          createMessage({ fileId, collection, message: messageText as string });
          setAiThinking(true);
        }}
      >
        Summarise the video
      </div>
      <div
        className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-blue-400 text-center outline-offset-2 rounded-lg text-xs hover:shadow-lg"
        onClick={(event) => {
          const messageText = event.currentTarget.textContent;

          createMessage({ fileId, collection, message: messageText as string });
          setAiThinking(true);
        }}
      >
        Key concepts of the video
      </div>
      <div
        className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-blue-400 text-center  outline-offset-2 rounded-lg text-xs hover:shadow-lg"
        onClick={(event) => {
          const messageText = event.currentTarget.textContent;

          createMessage({ fileId, collection, message: messageText as string });
          setAiThinking(true);
        }}
      >
        Overview of the video
      </div>
      <div
        className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center text-center outline outline-2 outline-blue-400 outline-offset-2 rounded-lg text-xs hover:shadow-lg"
        onClick={(event) => {
          const messageText = event.currentTarget.textContent;

          createMessage({ fileId, collection, message: messageText as string });
          setAiThinking(true);
        }}
      >
        What are the 5 main points of the video
      </div>
    </div>
  );
}

export default Conversation;
