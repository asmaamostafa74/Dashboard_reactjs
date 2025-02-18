import billingBG from '../../assets/images/billingBG.webp'
import todayMoney from '../../assets/images/todayMoney.svg'
import mastercard from '../../assets/images/Mastercard.svg'
import Visa from '../../assets/images/Visa.svg'
import pdf from '../../assets/images/pdf.svg'
const Step1 = () => {
    const data = new Array(5).fill({
        date: "March, 01, 2020",
        amount: "$180",
        pdfImage: pdf,
    });

    return (
        <section className="flex xl:flex-row flex-col gap-6 relative mt-5 animate__animated animate__slideInDown">
            <div>
                <div className='flex flex-wrap gap-6'>
                    <section>
                        <img src={billingBG} className='w-[461.5px] h-[240px]' alt="Background" />
                        <div className='absolute top-[10px] py-3 px-8 text-white font-bold'>
                            <h2 className="">Purity UI</h2>
                            <p className='mt-20'>7012 1451 1214 XXXX</p>
                            <div className='mt-5 flex gap-5'>
                                <div>
                                    <p className='uppercase font-normal'>valid thru</p>
                                    <p>05/24</p>
                                </div>
                                <div>
                                    <p className='uppercase font-normal'>cvv</p>
                                    <p>09X</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='flex sm:flex-row flex-col md:gap-5 gap-2'>
                        <section className='md:w-60 w-72 h-60 flex flex-col items-center justify-center gap-3 bg-white rounded-2xl'>
                            <img src={todayMoney} className='w-[64px] h-[64px]' alt="Icon" />
                            <p className='capitalize font-bold text-lg text-[#2D3748]'>salary</p>
                            <p className='capitalize font-bold text-xs text-[#A0AEC0]'>belong interactive</p>
                            <div className='h-px md:w-44 w-20 bg-gray-200'></div>
                            <p className='capitalize font-bold text-lg text-[#2D3748]'>+$2000</p>
                        </section>
                        <section className='md:w-60 w-72 h-60 flex flex-col items-center justify-center gap-3 bg-white rounded-2xl'>
                            <img src={todayMoney} className='w-[64px] h-[64px]' alt="Icon" />
                            <p className='capitalize font-bold text-lg text-[#2D3748]'>paypal</p>
                            <p className='capitalize font-bold text-xs text-[#A0AEC0]'>freelance payment</p>
                            <div className='h-px md:w-44 w-20 bg-gray-200'></div>
                            <p className='capitalize font-bold text-lg text-[#2D3748]'>+$455.00</p>
                        </section>
                    </div>
                </div>
                <section className='xl:w-[989.5px] lg:h-[172px] bg-white rounded-2xl mt-5 p-5'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[#2D3748] font-bold text-sm'>Payment Method</p>
                        <button className='uppercase text-white bg-gradient-to-r from-[#313860] to-[#000000] w-[134.5px] h-[35px] rounded-xl'>Add a new card</button>
                    </div>
                    <div className='flex flex-wrap gap-8'>
                        <div className="relative mt-5">
                            <input type="text" name="number" id="number" className="md:w-[458.5px] h-[65px] border border-[#E2E8F0] rounded-2xl focus:outline-0 p-2 pl-12" placeholder="1234 5678 1599 XXXX" />
                            <img src={mastercard} alt="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6" />
                        </div>
                        <div className="relative mt-5">
                            <input type="text" name="number" id="number" className="md:w-[458.5px] h-[65px] border border-[#E2E8F0] rounded-2xl focus:outline-0 p-2 pl-12" placeholder="1234 5678 1599 XXXX" />
                            <img src={Visa} alt="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6" />
                        </div>
                    </div>
                </section>
            </div>
            <div className='md:w-[584.5px] h-[436px] bg-white rounded-2xl p-5'>
                <div className='flex items-center justify-between'>
                    <p className='capitalize font-bold text-lg text-[#2D3748]'>Invoices</p>
                    <button className='upppercase text-[#4FD1C5] w-[110.5px] h-[35px] border border-[#4FD1C5] rounded-xl'>view all</button>
                </div>
                <div>
                    {data.map((item, index) => (
                        <div className='flex items-center justify-between mt-10' key={index}>
                            <p className='text-[#2D3748] font-bold text-lg'>{item.date}</p>
                            <div className='flex gap-2'>
                                <p className='text-[#A0AEC0]'>{item.amount}</p>
                                <img src={item.pdfImage} alt="PDF" />
                                <p>PDF</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Step1
