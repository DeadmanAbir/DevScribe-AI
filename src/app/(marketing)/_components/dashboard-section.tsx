import Image from 'next/image'

const DashboardSection = () => {
  return (
    <>
      <div className="bg-[url('/chatty4.png')] bg-cover md:m-0 m-4 flex flex-col items-center justify-center pt-20 w-full">
        <Image src="/dashboard.png" alt="dashboard" width={700} height={600} />
      </div>
    </>
  )
}

export default DashboardSection
