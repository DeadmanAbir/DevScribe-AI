import Navbar from '../_components/navbar'
import DashboardSidebar from '../_components/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen overflow-y-auto bg-gradient-to-b from-indigo-950 to-black ">
        <DashboardSidebar />

        {children}
      </div>
    </>
  )
}

export default DashboardLayout
