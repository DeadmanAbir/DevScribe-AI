import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <div key="1" className="bg-[#4C5B9E] py-12 px-10 flex justify-between items-center">
      <div>
        <p className="text-sm text-white pb-2">Get started today</p>
        <h1 className="text-2xl font-bold text-white pb-4">Create a free account and build your first newsletter!</h1>
      </div>
      <Button className="bg-white text-[#4C5B9E] py-3 px-6">Try it for free</Button>
    </div>
  )
}

