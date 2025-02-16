import profile from '../../assets/images/alexa.svg'
const AuthorsTables = () => {
    return (
        <div className="mt-5 container mx-auto">
            <div className="w-full h-[519px] bg-white rounded-[25px]">
                <div className='px-6 py-5'>
                    <h2 className="text-[#2D3748] text-lg font-bold">Authors Table</h2>
                </div>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">
                                    Function
                                </th>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">
                                    status
                                </th>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">
                                    employed
                                </th>
                                <th scope="col" className="px-6 py-3 text-[#A0AEC0]">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex gap-2 px-6 py-4 whitespace-nowrap">
                                    <img src={profile} className='w-14 h-14' alt="Image" />
                                    <div>
                                        <h1 className='text-[#2D3748] text-xl font-medium'>Asmaa Mostafa</h1>
                                        <p className='text-[#718096]'>asmaamostafa@gmail.com</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <div className=''>
                                        <h1 className="text-[#2D3748] font-bold text-xl">Manager</h1>
                                        <p className="text-[#718096] text-sm">Organization</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex items-center justify-center bg-[#CBD5E0] w-[65px] h-[25px] rounded-lg text-white">
                                        Online
                                    </div>
                                </td>
                                <td className="px-6">
                                    14/06/24
                                </td>
                                <td className="px-6 font-bold cursor-pointer">
                                    Edit
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex gap-2 px-6 py-4 whitespace-nowrap">
                                    <img src={profile} className='w-14 h-14' alt="Image" />
                                    <div>
                                        <h1 className='text-[#2D3748] text-xl font-medium'>Asmaa Mostafa</h1>
                                        <p className='text-[#718096]'>asmaamostafa@gmail.com</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <div className=''>
                                        <h1 className="text-[#2D3748] font-bold text-xl">Programmer</h1>
                                        <p className="text-[#718096] text-sm">Developer</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex items-center justify-center bg-[#48BB78] w-[65px] h-[25px] rounded-lg text-white">
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    14/06/24
                                </td>
                                <td className="px-6 font-bold cursor-pointer">
                                    Edit
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex gap-2 px-6 py-4 whitespace-nowrap">
                                    <img src={profile} className='w-14 h-14' alt="Image" />
                                    <div>
                                        <h1 className='text-[#2D3748] text-xl font-medium'>Asmaa Mostafa</h1>
                                        <p className='text-[#718096]'>asmaamostafa@gmail.com</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <div className=''>
                                        <h1 className="text-[#2D3748] font-bold text-xl">Executive</h1>
                                        <p className="text-[#718096] text-sm">Projects</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex items-center justify-center bg-[#CBD5E0] w-[65px] h-[25px] rounded-lg text-white">
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    14/06/24
                                </td>
                                <td className="px-6 font-bold cursor-pointer">
                                    Edit
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex gap-2 px-6 py-4 whitespace-nowrap">
                                    <img src={profile} className='w-14 h-14' alt="Image" />
                                    <div>
                                        <h1 className='text-[#2D3748] text-xl font-medium'>Asmaa Mostafa</h1>
                                        <p className='text-[#718096]'>asmaamostafa@gmail.com</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <div className=''>
                                        <h1 className="text-[#2D3748] font-bold text-xl">Manager</h1>
                                        <p className="text-[#718096] text-sm">Organization</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex items-center justify-center bg-[#48BB78] w-[65px] h-[25px] rounded-lg text-white">
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    14/06/24
                                </td>
                                <td className="px-6 font-bold cursor-pointer">
                                    Edit
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th scope="row" className="flex gap-2 px-6 py-4 whitespace-nowrap">
                                    <img src={profile} className='w-14 h-14' alt="Image" />
                                    <div>
                                        <h1 className='text-[#2D3748] text-xl font-medium'>Asmaa Mostafa</h1>
                                        <p className='text-[#718096]'>asmaamostafa@gmail.com</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <div className=''>
                                        <h1 className="text-[#2D3748] font-bold text-xl">Programmer</h1>
                                        <p className="text-[#718096] text-sm">Developer</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex items-center justify-center bg-[#CBD5E0] w-[65px] h-[25px] rounded-lg text-white">
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    14/06/24
                                </td>
                                <td className="px-6 font-bold cursor-pointer">
                                    Edit
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className="flex gap-2 px-6 py-4 whitespace-nowrap">
                                    <img src={profile} className='w-14 h-14' alt="Image" />
                                    <div>
                                        <h1 className='text-[#2D3748] text-xl font-medium'>Asmaa Mostafa</h1>
                                        <p className='text-[#718096]'>asmaamostafa@gmail.com</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <div className=''>
                                        <h1 className="text-[#2D3748] font-bold text-xl">Designer</h1>
                                        <p className="text-[#718096] text-sm">UI/Ux Developer</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex items-center justify-center bg-[#48BB78] w-[65px] h-[25px] rounded-lg text-white">
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    14/06/24
                                </td>
                                <td className="px-6 font-bold cursor-pointer">
                                    Edit
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AuthorsTables
