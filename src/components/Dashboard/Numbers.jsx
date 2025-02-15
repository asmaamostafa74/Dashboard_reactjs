import todayMoney from '../../assets/images/todayMoney.svg'
const Numbers = () => {
    return (
        <div className='flex flex-wrap gap-4 mt-10'>
            <div className="flex w-[370px] items-center justify-between px-5 h-20 bg-white rounded-2xl">
                <div>
                    <p className="text-[#A0AEC0] font-bold text-xs">Today&apos;s Money</p>
                    <p className="text-[#2D3748] font-bold text-lg">$53.000 <span className="text-[#48BB78]">+55%</span></p>
                </div>
                <img src={todayMoney} className='w-[45px] h-[45px]' alt="Icon" />
            </div>
            <div className="flex w-[370px] items-center justify-between px-5 h-20 bg-white rounded-2xl">
                <div>
                    <p className="text-[#A0AEC0] font-bold text-xs">Today&apos;s Money</p>
                    <p className="text-[#2D3748] font-bold text-lg">$53.000 <span className="text-[#48BB78]">+55%</span></p>
                </div>
                <img src={todayMoney} className='w-[45px] h-[45px]' alt="Icon" />
            </div>
            <div className="flex w-[370px] items-center justify-between px-5 h-20 bg-white rounded-2xl">
                <div>
                    <p className="text-[#A0AEC0] font-bold text-xs">Today&apos;s Money</p>
                    <p className="text-[#2D3748] font-bold text-lg">$53.000 <span className="text-[#48BB78]">+55%</span></p>
                </div>
                <img src={todayMoney} className='w-[45px] h-[45px]' alt="Icon" />
            </div>
            <div className="flex w-[370px] items-center justify-between px-5 h-20 bg-white rounded-2xl">
                <div>
                    <p className="text-[#A0AEC0] font-bold text-xs">Today&apos;s Money</p>
                    <p className="text-[#2D3748] font-bold text-lg">$53.000 <span className="text-[#48BB78]">+55%</span></p>
                </div>
                <img src={todayMoney} className='w-[45px] h-[45px]' alt="Icon" />
            </div>
        </div>
    )
}

export default Numbers
