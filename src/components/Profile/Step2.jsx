import account from '../../assets/images/alexa.svg'
const Step2 = () => {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div className="mt-5 flex flex-wrap gap-4">
            <div className="md:w-[501px] w-full md:h-[377.5px] bg-white rounded-2xl p-5">
                <h1 className="text-[#2D3748] font-bold text-lg">Plateform Setting</h1>
                <p className="uppercase text-[#A0AEC0] mt-3">account</p>

                <label className="flex items-center cursor-pointer mt-5">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#4FD1C5]"></div>
                    <span className="ms-3 text-xs text-[#A0AEC0]">Email me when someone follows me</span>
                </label>
                <label className="flex items-center cursor-pointer mt-5">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#4FD1C5]"></div>
                    <span className="ms-3 text-xs text-[#A0AEC0]">Email me when someone answers my posts</span>
                </label>
                <label className="flex items-center cursor-pointer mt-5">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#4FD1C5]"></div>
                    <span className="ms-3 text-xs text-[#A0AEC0]">Email me when someone mentions me</span>
                </label>
                <label className="flex items-center cursor-pointer mt-5">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#4FD1C5]"></div>
                    <span className="ms-3 text-xs text-[#A0AEC0]">New launches and projects</span>
                </label>
                <label className="flex items-center cursor-pointer mt-5">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#4FD1C5]"></div>
                    <span className="ms-3 text-xs text-[#A0AEC0]">Monthly product updates</span>
                </label>
                <label className="flex items-center cursor-pointer mt-5">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#4FD1C5]"></div>
                    <span className="ms-3 text-xs text-[#A0AEC0]">Subscribe to newsletter</span>
                </label>
            </div>

            <div className="md:w-[501px] w-full md:h-[377.5px] bg-white rounded-2xl p-5">
                <h1 className="text-[#2D3748] font-bold text-lg">Profile Information</h1>
                <p className="text-[#A0AEC0] mt-3">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                <div className="mx-auto h-px md:w-[450px] bg-[#D9D9D9] mt-4 opacity-20"></div>
                <div>
                    <p className="font-bold text-[#2D3748] mt-5">Full Name: <span className="font-normal">Asmaa Mostafa</span></p>
                    <p className="font-bold text-[#2D3748] mt-5">Mobile: <span className="font-normal">01234567891</span></p>
                    <p className="font-bold text-[#2D3748] mt-5">Email:  <span className="font-normal">asmaamostafa@yahoo.com</span></p>
                    <p className="font-bold text-[#2D3748] mt-5">Location:  <span className="font-normal">Egypt</span></p>
                </div>
            </div>

            <div className="md:w-[501px] w-full md:h-[377.5px] bg-white rounded-2xl p-5">
                <h1 className="text-[#2D3748] font-bold text-lg">Conversations</h1>
                <div>
                    {profiles.map((profile, index) => (
                        <div key={index} className='mt-2 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={account} className='w-14 h-14' alt="Image" />
                                <div>
                                    <h1 className='text-[#2D3748] text-xl font-medium'>Asmaa Mostafa</h1>
                                    <p className='text-[#718096]'>Hi, I need the information ...</p>
                                </div>
                            </div>
                            <p className='text-[#4FD1C5] font-bold'>Replay</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Step2
