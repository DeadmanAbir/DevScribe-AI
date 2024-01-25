import Navbar from './_components/navbar'

const MarketingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full  ">
      <div className="flex w-full items-center justify-center">
        <Navbar />
      </div>

      {children}
    </div>
  )
}

export default MarketingPageLayout
