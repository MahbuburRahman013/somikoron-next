import StairsSec from "./StairsSec"
import { FaBookmark } from "react-icons/fa";


function Stairs() {
    return (
        <div className="lg:container mx-auto xl:px-28 px-3">
            <h1 className="header-font font-lexend mx-auto text-center mb-[16px] w-full text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]">mona-ai.mn сайтын үйлчилгээг хэрхэн ашиглах <br /> талаар</h1>
            <p className="font-inter mx-auto w-full text-[16px] text-white/[0.7] lg:w-[665px] lg:text-[18px] text-center">Mazala.AI нь уран сэтгэмжийн хязгааргүй орон зайг бий болгож, хамгийн сүүлийн үеийн технологийг бүтээлч сэтгэлгээтэй хослуулан бүтээсэн.</p>

            <div className="grid md:grid-cols-4 sm:gap-0 gap-y-10 mt-10 md:h-[700px]">
                <StairsSec color={'#2D9F89'} number={1} title={'Бүртгэл үүсгэх'} des={'Бүтээлч байдлаа нээж, төсөөллийн гүнийг судлах платформ болох Mazala.AI дээр бүртгэл үүсгэхийн тулд'} />
                <div className="md:mt-[100px]">
                    <StairsSec color={'#FFB806'} title={'Хэрэгслийг сонгодог'} des={'Mazala.AI-д бүртгүүлсний дараа урам зориг, хэрэгжилтийг өдөөх янз бүрийн бүтээлч хэрэгслүүдийг судлаарай.'} number={2} />
                </div>
                <div className="md:mt-[200px]">
                    <StairsSec color={'#FF6F06'} title={'Мөрөөдөл бий болго'} des={'Mazala.AI-д өөрийн хүслийг оруулаад, төсөөлөл, бүтээлч эрэл хайгуулыг бадрааж, мөрөөдлөө хараарай.'} number={3} />
                </div>
                <div className="md:mt-[300px] px-3">
                    <h1 className="font-mono text-[56px] text-center mb-5 font-semibold leading-[56px] text-white/[0.1]">4</h1>
                    <div className="relative">
                        <div className="w-[70px] text-white flex justify-center items-center h-[70px]  rounded-full bg-[#59CA00] ">
                            <FaBookmark size={30} />
                        </div>
                        <div className="absolute md:hidden rounded-tr-lg -z-20 w-full h-full top-10 border-white/[0.3] border-t-2 border-r-2 md:left-[70px] border-dashed">
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="header-font text-[24px] font-[500] leading-[38px] text-white lg:text-[32px]">Хадгалаад хуваалцаарай</h1>
                        <p className="font-inter mt-[8px] text-[16px] font-[400] leading-[20px] text-white/[0.6] lg:mt-[16px]">Өөрийн уран сэтгэмжийг хялбархан хадгалж, бусадтай хуваалцах замаар бүтээлээ хадгалж, урам зоригийг түгээгээрэй.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stairs