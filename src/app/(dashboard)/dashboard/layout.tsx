import Navbar from '../_components/navbar'
import DashboardSidebar from '../_components/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen overflow-y-auto bg-slate-100  ">
        <DashboardSidebar />

        {children}
      </div>
    </>
  )
}

export default DashboardLayout
