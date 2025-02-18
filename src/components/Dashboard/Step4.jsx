import { FaBell } from 'react-icons/fa'
import newOrder from '../../assets/images/newOrder.svg'
import cart from '../../assets/images/cart.svg'
import card from '../../assets/images/newCard.svg'
import unlock from '../../assets/images/unlock.svg'
import xd from '../../assets/images/xd.svg'
import ProjectsTable from '../general/ProjectsTable'
const Step4 = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-4">
            <ProjectsTable />

            <div className='md:w-[519px] md:h-[519px] bg-white rounded-[25px] p-5 mt-5'>
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
