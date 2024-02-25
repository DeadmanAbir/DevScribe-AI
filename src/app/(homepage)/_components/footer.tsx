import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRightFromSquare, Star } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center  mx-auto mt-0 md:mt-0 rounded-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 to-blue-50">
      <Separator className="bg-blue-200" />
      <div className=" flex md:flex-row flex-col justify-between p-4 w-full max-w-7xl   rounded-full">
        <div className="md:w-1/2 w-full flex flex-col gap-2 text-black ">
          <Logo />
          <div className="text-2xl font-bold mt-3 ">
            Transform you knowledge with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
              {" "}
              Devscribe
            </span>{" "}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-xl md:mt-0 mt-5">
            Know the architecture
          </div>
          <div className="flex   gap-1 font-medium mt-2">
            <Link
              href="https://deadmanabir.hashnode.dev/building-a-chatbot-with-chat-history-using-langchain-jsts-a-step-by-step-guide"
              target="_blank"
              className="flex gap-2 items-center text-gray-700 hover:text-slate-900"
            >
              {" "}
              <span>Read the Blog </span>{" "}
              <ArrowUpRightFromSquare className="h-4 w-4" />{" "}
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-xl md:mt-0 mt-5">
            Important Links
          </div>
          <div className="flex flex-col  gap-1 font-medium mt-2">
            <Link href="#teams">About</Link>
            <Link href="#features">Features</Link>
            <Link href="#demo">Demo</Link>
            <Link href="#contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <Separator className="bg-blue-200" />
      <div className="text-white  flex w-full justify-center p-4 text-center items-center max-w-7xl ">
        <Link
          href="https://github.com/DeadmanAbir/DevScribe-AI"
          target="_blank"
          className="flex bg-gradient-to-b from-slate-800 to-black p-2 rounded-3xl text-white group hover:-translate-y-[2px] transition-transform "
        >
          {" "}
          <Star className="pr-2 group-hover:fill-yellow-400" /> Star us on
          Github{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
