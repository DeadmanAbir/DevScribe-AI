import Image from 'next/image'

const DashboardSection = () => {
  return (
    <>
      <div className="  md:m-0 m-4 flex flex-col items-center justify-center pt-20 w-full rounded-lg p-2">
        <Image src="/hero.svg" alt="dashboard" width={600} height={500} className='rounded-lg' />
      </div>
    </>
  )
}

export default DashboardSection
