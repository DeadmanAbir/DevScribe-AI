import Image from 'next/image'
import Hero from './_components/hero-section'
import DashboardSection from './_components/dashboard-section'
import Faq from './_components/faq-section'
import Footer from './_components/footer'
export default function Home() {
  return (
    <main className="flex pt-36  flex-col items-center justify-center bg-gradient-to-r from-indigo-950 to-black ">
      <Hero />
      <DashboardSection />
      <Faq/>
      <Footer/>
    </main>
  )
}
