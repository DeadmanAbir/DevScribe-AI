import Navbar from './_components/navbar'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DevScribe AI: Make learing path easy",
  description:
    'Revolutionize your study habits with Kirak, the leading AI-powered learning assistant. Tailored to your unique learning style, Kirak offers personalized guidance, interactive study tools, and adaptive learning paths across various subjects. Embrace a smarter way to learn, track progress, and achieve academic success with Kirak – your partner in education. Ideal for students seeking a more engaging, efficient, and customized study experience."',
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
