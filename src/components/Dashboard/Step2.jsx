import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router"
import image from '../../assets/images/chakra.webp'
import sImage from '../../assets/images/brooke-cagle.webp'

const Step2 = () => {
    return (
        <div className="flex flex-wrap gap-2 mt-5 animate__animated animate__backInDown">
            <div className="flex lg:flex-row flex-col items-center justify-between lg:w-[922px] md:h-[290px] bg-white rounded-[25px] p-5">
                <div className>
                    <p className="text-[#A0AEC0] text-xs font-bold">Built by developers</p>
                    <h2 className="text-lg text-[#2D3748] font-bold">Purity UI Dashboard</h2>
                    <p className="text-sm text-[#A0AEC0] md:w-[329.5px]">From colors, cards, typography to complex elements,you will find the full documentation.</p>
                    <div>
                        <Link to='./' className="flex items-center gap-2 lg:mt-36 my-4">
                            <p className="text-gray-900 text-xs font-medium">Read more</p>
                            <FaArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <img src={image} alt="Image" />
            </div>
            <div className="md:w-[600px] md:h-[290.5px] p-5 flex items-center justify-center bg-white rounded-[25px]">
                <img src={sImage} className="w-[550px]" alt="" />
            </div>
        </div>
    )
}

export default Step2
