import Image from 'next/image'
import Hero from './_components/hero-section'
import DashboardSection from './_components/dashboard-section'
import Intro from './_components/intro-section'
export default function Home() {
  return (
    <main className="flex pt-36 flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 to-black ">
      <Hero />
      <DashboardSection />
    </main>
  )
}
