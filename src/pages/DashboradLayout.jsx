import { Outlet } from "react-router"
import Sidebar from "../components/general/Sidebar"
import PathName from "../components/general/PathName"

const DashboradLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="flex-grow p-4 max-h-[100vh] overflow-auto">
        <PathName />
        <Outlet />
      </div>
    </div>
  )
}

export default DashboradLayout
