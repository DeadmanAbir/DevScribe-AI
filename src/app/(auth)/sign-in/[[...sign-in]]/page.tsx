import { SignIn } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
 
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white to-blue-100">
       <Link href="/">
        <div className="text-black w-96 flex pb-3 hover:text-black/80">
          <ArrowLeft />
          Back to home
        </div>
      </Link>
      <SignIn />
    </div>
  );
}