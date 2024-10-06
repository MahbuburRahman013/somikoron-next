import { FaUserPlus } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";

function StairsSec({ color, number, title, des }) {
    return (
        <div className="px-3">
            <h1 className="font-mono text-[56px] text-center mb-5 font-semibold leading-[56px] text-white/[0.1]">{number}</h1>
            <div className="relative">
                <div className="w-[70px] text-white h-[70px] flex justify-center items-center  rounded-full " style={{ backgroundColor: color }}>
                    {
                        number == 1 ?
                            <FaUserPlus size={30} /> :
                            number == 2 ?
                                <IoSettings size={30} /> :
                                <FaPaintBrush size={30} />
                    }
                </div>
                <div className="absolute rounded-tr-lg -z-20 w-full h-full top-10 border-white/[0.3] border-t-2 border-r-2 md:left-[60px] border-dashed">
                </div>
            </div>
            <div className="mt-10">
                <h1 className="header-font text-[24px] font-[500] leading-[38px] text-white lg:text-[32px]">{title}</h1>
                <p className="font-inter mt-[8px] text-[16px] font-[400] leading-[20px] text-white/[0.6] lg:mt-[16px]">{des}</p>
            </div>
        </div>
    )
}

export default StairsSec