import Image from 'next/image'

const DashboardSection = () => {
  return (
    <>
      <div className="  md:m-0 m-4 flex flex-col items-center justify-center pt-20 w-full rounded-lg">
        <Image src="/dashboard.png" alt="dashboard" width={900} height={600} className='rounded-lg' />
      </div>
    </>
  )
}

export default DashboardSection
