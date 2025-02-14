import { BsCreditCardFill } from "react-icons/bs"
import { IoIosSettings } from "react-icons/io"
import { IoHome, IoStatsChart } from "react-icons/io5"
import { NavLink } from "react-router"
import logo from "../../assets/images/logo-creative-tim-black.svg"
const Sidebar = () => {
  return (
    <aside className="sidebar w-[90px] md:w-[246px] h-screen bg-[#F8F9FA]">
      <div className="flex items-center justify-center flex-col md:flex-row gap-3 p-3">
        <img src={logo} alt="Logo" />
        <h1 className="hidden md:block text-center text-sm md:text-xl font-medium">UI Dashboard</h1>
      </div>
      <div className="h-px w-44 bg-gray-100 mx-auto"></div>
      <div className="flex flex-col gap-4 px-3 py-3 md:px-5 md:py-5">
        <div>
          <NavLink to='dashboard' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <IoHome className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Dashboad</p>
          </NavLink>
          <NavLink to='/tables' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <IoStatsChart className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Tables</p>
          </NavLink>
          <NavLink to='/billing' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <BsCreditCardFill className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Billing</p>
          </NavLink>
          <NavLink to='/' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <IoIosSettings className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">RTL</p>
          </NavLink>
        </div>
      </div>
      <h2 className="flex items-center justify-center uppercase text-[#2D3748] text-xs font-bold">Account Pages</h2>
      <div className="flex flex-col gap-4 px-3 py-3 md:px-5 md:py-5">
        <div>
          <NavLink to='/profile' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <IoStatsChart className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Profile</p>
          </NavLink>
          <NavLink to='/signIn' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <BsCreditCardFill className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Sign In</p>
          </NavLink>
          <NavLink to='/signUp' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <IoIosSettings className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Sign Up</p>
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
