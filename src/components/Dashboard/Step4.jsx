import check from '../../assets/images/check.svg'
import charkaIcon from '../../assets/images/chakraIcon.svg'
import addTrack from '../../assets/images/addTrack.svg'
import fixPlatform from '../../assets/images/fixPlatform.svg'
import mobileApp from '../../assets/images/spotify.svg'
import pricePage from '../../assets/images/pricing.svg'
import onlineShop from '../../assets/images/onlineShop.svg'
import member from '../../assets/images/member.svg'
import { FaBell } from 'react-icons/fa'
import newOrder from '../../assets/images/newOrder.svg'
import cart from '../../assets/images/cart.svg'
import card from '../../assets/images/newCard.svg'
import unlock from '../../assets/images/unlock.svg'
import xd from '../../assets/images/xd.svg'
const Step4 = () => {
    return (
        <div className="mt-10 flex lg:flex-row flex-col gap-4">
            <div className="xl:w-[1057px] md:w-[500px] h-[519px] bg-white rounded-[25px]">
                <div className='px-6 py-5'>
                    <h2 className="text-[#2D3748] text-lg font-bold">Projects</h2>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={check} alt="Check" />
                        <p className='text-[#A0AEC0] text-sm font-bold'>30 done this month</p>
                    </div>
                </div>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 overflow-auto">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">
                                    companies
                                </th>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">
                                    Members
                                </th>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">
                                    budget
                                </th>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">
                                    completion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img src={charkaIcon} alt="Icon" />
                                    <p>Chakra Soft UI Version</p>
                                </th>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-[#2D3748]">
                                    $14,000
                                </td>
                                <td className="px-6">
                                    <div className='flex flex-col gap-1'>
                                        <span className="text-sm font-medium text-gray-500">10%</span>
                                        <div className="w-32 h-1 bg-gray-200 rounded-sm">
                                            <div className="h-1 bg-[#4FD1C5] rounded-sm w-[10%]"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img src={addTrack} alt="Icon" />
                                    <p>Add Progrss Track</p>
                                </th>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-[#2D3748]">
                                    $3000
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex flex-col gap-1'>
                                        <span className="text-sm font-medium text-gray-500">70%</span>
                                        <div className="w-32 h-1 bg-gray-200 rounded-sm">
                                            <div className="h-1 bg-[#4FD1C5] rounded-sm w-[70%]"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img src={fixPlatform} alt="Icon" />
                                    <p>Fix Platform Errors</p>
                                </th>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-[#2D3748]">
                                    No set
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex flex-col gap-1'>
                                        <span className="text-sm font-medium text-gray-500">100%</span>
                                        <div className="w-32 h-1 bg-gray-200 rounded-sm">
                                            <div className="h-1 bg-[#4FD1C5] rounded-sm w-full"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img src={mobileApp} alt="Icon" />
                                    <p>Lanuch Mobile App</p>
                                </th>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-[#2D3748]">
                                    $32,000
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex flex-col gap-1'>
                                        <span className="text-sm font-medium text-gray-500">100%</span>
                                        <div className="w-32 h-1 bg-gray-200 rounded-sm">
                                            <div className="h-1 bg-[#4FD1C5] rounded-sm w-full"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img src={pricePage} alt="Icon" />
                                    <p>Add The New Price Page</p>
                                </th>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-[#2D3748]">
                                    $400
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex flex-col gap-1'>
                                        <span className="text-sm font-medium text-gray-500">50%</span>
                                        <div className="w-32 h-1 bg-gray-200 rounded-sm">
                                            <div className="h-1 bg-[#4FD1C5] rounded-sm w-[50%]"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img src={onlineShop} alt="Icon" />
                                    <p>Redesign New Online Shop</p>
                                </th>
                                <td className="px-6 py-4">
                                    <div className='flex'>
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                        <img src={member} alt="Members" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-[#2D3748]">
                                    $7,600
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex flex-col gap-1'>
                                        <span className="text-sm font-medium text-gray-500">30%</span>
                                        <div className="w-32 h-1 bg-gray-200 rounded-sm">
                                            <div className="h-1 bg-[#4FD1C5] rounded-sm w-[30%]"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='md:w-[519px] md:h-[519px] bg-white rounded-[25px] p-5'>
                <h2 className="text-[#2D3748] text-lg font-bold">Orders Overview</h2>
                <p className='text-[#68D391] font-bold text-sm'>+30% <span className='text-[#A0AEC0] font-normal'>this month</span></p>
                <div className="mt-6 grow sm:mt-8 lg:mt-0">
                    <div className="rounded-lg mt-5">
                        <ol className="relative ms-3 border-s border-gray-200">
                            <li className="mb-6 ms-6">
                                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                    <FaBell className='text-[#68D391]' />
                                </span>
                                <h4 className="mb-0.5 text-base font-semibold text-[#2D3748]">$2400, Design changes</h4>
                                <p className="text-sm font-normal text-[#A0AEC0]">22 DEC 11:21 PM</p>
                            </li>
                            <li className="mb-6 ms-6">
                                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                    <img src={newOrder} alt="Icon" />
                                </span>
                                <h4 className="mb-0.5 text-base font-semibold text-[#2D3748]">New order</h4>
                                <p className="text-sm font-normal text-[#A0AEC0]">22 DEC 11:21 PM</p>
                            </li>
                            <li className="mb-6 ms-6">
                                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                    <img src={cart} alt="Icon" />
                                </span>
                                <h4 className="mb-0.5 text-base font-semibold text-[#2D3748]">Server payment</h4>
                                <p className="text-sm font-normal text-[#A0AEC0]">22 DEC 11:21 PM</p>
                            </li>
                            <li className="mb-6 ms-6">
                                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                    <img src={card} alt="Icon" />
                                </span>
                                <h4 className="mb-0.5 text-base font-semibold text-[#2D3748]">New card added for the order</h4>
                                <p className="text-sm font-normal text-[#A0AEC0]">22 DEC 11:21 PM</p>
                            </li>
                            <li className="mb-6 ms-6">
                                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                    <img src={unlock} alt="Icon" />
                                </span>
                                <h4 className="mb-0.5 text-base font-semibold text-[#2D3748]">Unlock packages for Development</h4>
                                <p className="text-sm font-normal text-[#A0AEC0]">22 DEC 11:21 PM</p>
                            </li>
                            <li className="mb-6 ms-6">
                                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                    <img src={xd} alt="Icon" />
                                </span>
                                <h4 className="mb-0.5 text-base font-semibold text-[#2D3748]">New order</h4>
                                <p className="text-sm font-normal text-[#A0AEC0]">22 DEC 11:21 PM</p>
                            </li>

                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step4
