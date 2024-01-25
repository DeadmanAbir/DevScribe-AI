import Navbar from './_components/navbar'

const MarketingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 to-black">
      <div className="flex w-full items-center justify-center">
        <Navbar />
      </div>

      {children}
    </div>
  )
}

export default MarketingPageLayout
