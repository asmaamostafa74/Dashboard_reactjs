import { BsCreditCardFill } from "react-icons/bs"
import { useState, useEffect } from "react"
import { IoIosRocket, IoIosSettings } from "react-icons/io"
import { IoHome, IoStatsChart } from "react-icons/io5"
import { NavLink } from "react-router"
import logo from "../../assets/images/logo-creative-tim-black.svg"
import { FaFile } from "react-icons/fa"
const Sidebar = () => {
  const [isRTL, setIsRTL] = useState(localStorage.getItem("direction") === "rtl");

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    localStorage.setItem("direction", isRTL ? "rtl" : "ltr");
  }, [isRTL]);

  const toggleDirection = () => {
    setIsRTL((prev) => !prev);
  };
  return (
    <aside className="sidebar w-[70px] md:w-[246px] h-screen bg-[#F8F9FA]">
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
          <div to="#" className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4 cursor-pointer" onClick={toggleDirection}>
            <IoIosSettings className="p-2 rounded-full text-[#4fd1c5]" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">{isRTL ? "LTR" : "RTL"}</p>
          </div>
        </div>
      </div>
      <h2 className="md:flex items-center justify-center uppercase text-[#2D3748] text-xs font-bold hidden">Account Pages</h2>
      <div className="flex flex-col gap-4 px-3 py-3 md:px-5 md:py-5">
        <div>
          <NavLink to='/profile' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <IoStatsChart className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Profile</p>
          </NavLink>
          <NavLink to='/signIn' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <FaFile className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Sign In</p>
          </NavLink>
          <NavLink to='/signUp' className="flex items-center justify-center md:justify-start gap-2 rounded-[15px] h-[54px] md:px-4">
            <IoIosRocket className="p-2 rounded-full" size={35} />
            <p className="hidden md:block text-[#A0AEC0]">Sign Up</p>
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
