import background from '../../assets/images/signUpBG.avif';
import profile from '../../assets/images/alexa.svg'
import overview from '../../assets/images/overview.svg'
import teams from '../../assets/images/teams.svg'
import projects from '../../assets/images/projects.svg'
const Step1 = () => {
    return (
        <div className='animate__animated animate__backInDown'>
            <img src={background} className='lg:block hidden lg:mt-[-70px] z-0' alt="Background" />
            <section className='container mx-auto'>
                <div className='mx-auto lg:w-[1350px] lg:h-[113px] flex lg:flex-row flex-col items-center justify-between bg-gray-100 backdrop-blur-sm rounded-2xl lg:mt-[-60px] mt-5 z-10 relative p-5'>
                    <div className='flex flex-wrap items-center justify-center text-center md:text-start gap-2'>
                        <img src={profile} className='w-14 h-14' alt="Image" />
                        <div>
                            <h1 className='text-[#2D3748] text-xl font-medium'>Asmaa Mostafa</h1>
                            <p className='text-[#718096]'>asmaamostafa@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col items-center gap-3 mt-3 md:mt-0'>
                        <div className='flex items-center justify-center gap-2 w-[134.5px] h-[35px] bg-white rounded-xl'>
                            <img src={overview} alt="Icon" />
                            <p className='uppercase'>overview</p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={teams} alt="Icon" />
                            <p className='uppercase'>teams</p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={projects} alt="Icon" />
                            <p className='uppercase'>projects</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Step1
