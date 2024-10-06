import Button from "./Button"


function YouTube() {
    return (
        <div className="lg:container px-3 mx-auto lg:px-28 mt-20">
            <h1 className="header-font font-lexend mx-auto text-center mb-[16px] w-full text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]">Манай 2 YouTube үйлчилгээ</h1>


            <div className="mt-20 xl:gap-28 gap-10 md:gap-16 flex md:flex-row flex-col items-center justify-between">
                <div className="md:w-[50%]">
                    <h1 className="header-font mb-[20px] text-[20px] font-[500] text-white/[0.9] lg:text-[40px]">Шилдэг орчуулга</h1>
                    <p className="font-inter text-[16px] text-white/[0.55] lg:text-[20px]">
                        Манай шилдэг орчуулгын үйлчилгээгээр хэлний хөрвүүлэлтийн оргил үеийг мэдрээрэй. Нарийвчлалтай, ойлгомжтой байхаар бүтээгдсэн энэхүү үйлчилгээ нь таны агуулгыг хамгийн дээд түвшний нарийвчлалтайгаар орчуулж, эх мессежийн зорилго, өнгө аясыг хадгалан орчуулах боломжийг олгодог.
                    </p>
                    <Button className='mt-12'>
                        Одоо үзээрэй
                    </Button>
                </div>
                <div className="md:w-[50%] xl:p-10">
                    <img className="w-full h-fit" src='https://mona-ai.mn/youtube-service-right.png' alt="" />
                </div>
            </div>

            <div className="mt-20 xl:gap-28 gap-10 md:gap-16 flex md:flex-row-reverse flex-col items-center justify-between">
                <div className="md:w-[50%]">
                    <h1 className="header-font mb-[20px] text-[20px] font-[500] text-white/[0.9] lg:text-[40px]">Стандарт орчуулга</h1>
                    <p className="font-inter text-[16px] text-white/[0.55] lg:text-[20px]">
                        Манай Стандарт орчуулгын үйлчилгээ нь өдөр тутмын хэрэгцээнд найдвартай, үр дүнтэй орчуулгыг санал болгодог. Ерөнхий зорилгоор ашиглахад тохиромжтой энэхүү үйлчилгээ нь мэдээллийг хялбархан ойлгож, дамжуулахад тань туслах ойлгомжтой бөгөөд үнэн зөв орчуулгатай.
                    </p>
                    <Button className='mt-12'>
                        Одоо үзээрэй
                    </Button>
                </div>
                <div className="md:w-[50%] xl:p-10">
                    <img className="w-full h-fit" src='https://mona-ai.mn/youtube-service-left.png' alt="" />
                </div>
            </div>
        </div>
    )
}

export default YouTube