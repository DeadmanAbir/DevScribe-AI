import Navbar from './_components/navbar'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevscribeAI",
  description: "App that let you chat with youtube videos.",
};
const MarketingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full font-inter ">
      <div className="flex w-full items-center justify-center">
        <Navbar />
      </div>

      {children}
    </div>
  )
}

export default MarketingPageLayout
