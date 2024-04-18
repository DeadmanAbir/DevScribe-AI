import { api } from "@/trpc/react";
import MarkdownRenderer from "./markdown-renderer";
import { FadeLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import markdownToTxt from "markdown-to-txt";
const MySummary = ({ id }: { id: string }) => {
  const { data, isLoading } = api.file.getVideoSummary.useQuery({ fileId: id });
  const [copied, setCopied] = useState<boolean>(false);
  const onCopy = () => {
    const copiedSummary = markdownToTxt(data as string);
    navigator.clipboard.writeText(copiedSummary);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-sky-400">
          Generating the summary. This can take upto a min.
        </p>
        <FadeLoader color="#2563EB" loading={true} />
      </div>
    );
  }
  return (
    <div className="mt-2   break-words">
      <div className="flex flex-col items-end ">
        <div className=" items-end justify-end flex gap-2  rounded-lg p-2 mb-2 text-right ">
          <Button
            variant="link"
            onClick={onCopy}
            className="rounded-md border-[2px] border-gray-200 items-center flex justify-center px-2 py-1 hover:bg-gray-200 cursor-pointer  w-10"
            disabled={copied}
          >
            {" "}
            {copied ? (
              <Check className="h-5 w-6" />
            ) : (
              <Copy className="h-5 w-6" />
            )}
          </Button>
        </div>
        <MarkdownRenderer content={data as string} isVideoDescription={false} />
      </div>
    </div>
  );
};

export default MySummary;
