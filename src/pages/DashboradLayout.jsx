import { Outlet } from "react-router"
import Sidebar from "../components/general/Sidebar"
import PathName from "../components/general/PathName"
import Footer from "../components/general/Footer"

const DashboradLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="flex-grow p-4 max-h-[100vh] overflow-auto bg-gray-50">
        <PathName />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default DashboradLayout
