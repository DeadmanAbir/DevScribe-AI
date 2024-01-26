import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-950 to-black">
      <SignUp />
    </div>
  )
}