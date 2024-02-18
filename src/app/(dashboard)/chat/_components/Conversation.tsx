"use client";
import { trpc } from "@/app/_trpc/client";
interface ConversationProps {
  setAiThinking: React.Dispatch<React.SetStateAction<boolean>>;
}
function Conversation({ setAiThinking }: ConversationProps) {
  const { mutate: createMessage } = trpc.chat.createMessage.useMutation({
    onSuccess: (result: string) => {},
    onSettled: () => {
      setAiThinking(false);
    },
    onError: () => {
      alert("Error creating message");
      setAiThinking(false);
    },
  });
  function handleClick() {
    alert("clicked");
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3  w-5/6 mt-10">
      <div
        className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-cyan-500 outline-offset-2 rounded-lg text-xs hover:shadow-lg"
        onClick={handleClick}
      >
        Summarise the video
      </div>
      <div className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-cyan-500 outline-offset-2 rounded-lg text-xs hover:shadow-lg">
        Key concepts of the video
      </div>
      <div className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-cyan-500 outline-offset-2 rounded-lg text-xs hover:shadow-lg">
        Overview of the video
      </div>
      <div className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-cyan-500 outline-offset-2 rounded-lg text-xs hover:shadow-lg">
        What are the 5 main points of video
      </div>
    </div>
  );
}

export default Conversation;
