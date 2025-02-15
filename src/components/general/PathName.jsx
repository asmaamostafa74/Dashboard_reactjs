import { CiSearch } from "react-icons/ci"
import { FaUser } from "react-icons/fa"
import { IoIosNotifications, IoMdSettings } from "react-icons/io"
import { useLocation } from "react-router"

const PathName = () => {
    const location = useLocation()
    return (
        <div className="container mx-auto flex items-center justify-between">
            <p className="text-gray-400">
                Pages / <span className="capitalize text-black">{location.pathname.split("/")[1]}</span>
            </p>
            <div className="md:flex hidden items-center gap-5">
                <form className="w-[250px] mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <CiSearch />
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[25px] bg-white focus:ring-0 focus:outline-0" placeholder="Type here ..." required />
                    </div>
                </form>
                <div className="flex items-center gap-1">
                    <FaUser className="text-[#718096]" />
                    <p className="text-[#718096]">Sign In</p>
                </div>
                <IoMdSettings className="text-[#718096]" />
                <IoIosNotifications className="text-[#718096]" />
            </div>
        </div>
    )
}

export default PathName
