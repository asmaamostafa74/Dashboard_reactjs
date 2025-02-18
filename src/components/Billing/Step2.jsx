import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import redArrow from '../../assets/images/redArrow.svg'
import greenArrow from '../../assets/images/greenArrow.svg'
const Step2 = () => {
    const data = new Array(3).fill({
        Title: "Oliver Liam",
        companyTitle: "Company Name: ",
        companyData: "hogwarts",
        emailAddress: "Email Address: ",
        companyEmail: "hogwarts@gmail.com",
        vatNumber: "VAT Number: ",
        number: "FRB1234567"
    })
    return (
        <section className="mt-5 flex xl:flex-row flex-col gap-6">
            <div className="lg:w-[900px] md:h-[538.5px] bg-white rounded-2xl p-5">
                <h1 className="text-[#2D3748] font-bold text-lg">Billing Information</h1>
                {data.map((item, index) => {
                    return (
                        <div className="lg:w-[855px] md:h-[132.5px] bg-[#F8F9FA] rounded-2xl mt-3 p-5 flex flex-wrap items-center justify-between" key={index}>
                            <div className="text-[#718096]">
                                <h2 className="font-bold text-sm">{item.Title}</h2>
                                <p className="capitalizwd">{item.companyTitle}<span className="font-bold"> {item.companyData} </span></p>
                                <p className="capitalizwd">{item.emailAddress}<span className="font-bold">{item.companyEmail}</span></p>
                                <p className="capitalizwd">{item.vatNumber}<span className="font-bold">{item.number}</span></p>
                            </div>
                            <div className="flex items-center gap-4 mt-5 md:mt-0">
                                <div className="text-[#E53E3E] flex items-center gap-1">
                                    <MdDeleteForever />
                                    <p>Delete</p>
                                </div>
                                <div className="text-[#2D3748] flex items-center gap-1">
                                    <FaPen />
                                    <p>Edit</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="lg:w-[647px] md:h-[538.5px] bg-white rounded-2xl p-5">
                <div className="flex flex-wrap justify-between">
                    <h1 className="text-[#2D3748] font-bold text-lg">Your Transactions</h1>
                    <div className="flex items-center gap-1">
                        <SlCalender />
                        <p className="text-[#A0AEC0] font-bold">23 - 30 March 2020</p>
                    </div>
                </div>
                <p className="text-[#A0AEC0] mt-3 uppercase">NEWEST</p>
                <div className="flex md:flex-row flex-col items-center justify-between font-bold">
                    <div className="mt-5 flex items-center md:gap-5 gap-2">
                        <img src={redArrow} alt="Arrow" />
                        <div>
                            <h2 className="text-[#2D3748]">Netflix</h2>
                            <p className="text-[#A0AEC0]">27 March 2020, at 12:30 PM</p>
                        </div>
                    </div>
                    <p className="text-[#E53E3E]">-$2500</p>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-between font-bold">
                    <div className="mt-5 flex items-center md:gap-5 gap-2">
                        <img src={greenArrow} alt="Arrow" />
                        <div>
                            <h2 className="text-[#2D3748]">Apple</h2>
                            <p className="text-[#A0AEC0]">27 March 2020, at 12:30 PM</p>
                        </div>
                    </div>
                    <p className="text-[#48BB78]">-$2500</p>
                </div>
                <p className="text-[#A0AEC0] mt-10 uppercase">Yesterday</p>
                <div className="flex md:flex-row flex-col items-center justify-between font-bold">
                    <div className="mt-5 flex items-center md:gap-5 gap-2">
                        <img src={redArrow} alt="Arrow" />
                        <div>
                            <h2 className="text-[#2D3748]">Netflix</h2>
                            <p className="text-[#A0AEC0]">27 March 2020, at 12:30 PM</p>
                        </div>
                    </div>
                    <p className="text-[#E53E3E]">-$2500</p>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-between font-bold">
                    <div className="mt-5 flex items-center md:gap-5 gap-2">
                        <img src={greenArrow} alt="Arrow" />
                        <div>
                            <h2 className="text-[#2D3748]">Apple</h2>
                            <p className="text-[#A0AEC0]">27 March 2020, at 12:30 PM</p>
                        </div>
                    </div>
                    <p className="text-[#48BB78]">-$2500</p>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-between font-bold">
                    <div className="mt-5 flex items-center md:gap-5 gap-2">
                        <img src={greenArrow} alt="Arrow" />
                        <div>
                            <h2 className="text-[#2D3748]">Apple</h2>
                            <p className="text-[#A0AEC0]">27 March 2020, at 12:30 PM</p>
                        </div>
                    </div>
                    <p className="text-[#48BB78]">-$2500</p>
                </div>
            </div>
        </section>
    )
}

export default Step2
