import Image from "next/image";
import Button from "./Button";

function Hero() {
  return (
    <div className="bg-[url('https://i.ibb.co.com/zxgVGM1/vector.jpg')] bg-center bg-no-repeat bg-cover object-cover md:min-h-screen">
      <div className="md:container mx-auto px-3">
        <div className="md:pt-36 pt-28 transition-all">
          <h1 className="header-font font-400 text-center text-[32px] leading-[38px] text-white/[0.8] lg:text-[80px] lg:leading-[104px]">
            Монголын шилдэг хиймэл
          </h1>
          <h1 className="header-font block bg-gradient-to-r from-[#24DDB9] to-[#0189A7] bg-clip-text text-center text-[43px] font-[700] leading-[51px] text-transparent lg:text-[80px] lg:leading-[96px]">
            оюун ухааны хэрэгслүүд
          </h1>
          <p className="font-inter mt-[20px] hidden text-center text-[20px] font-[400] text-white/[0.7] lg:block">
            Энэхүү хиймэл оюун ухааны хэрэгслийн нэг онцлог шинж чанар нь монгол
            хэлний дэмжлэгийг саадгүй нэгтгэсэн явдал юм
          </p>
        </div>

        <div className="w-full lg:mt-20 mt-14">
          <Image
            width={1320}
            placeholder="blur"
            blurDataURL="https://i.ibb.co.com/vx3GC2j/banner.png"
            height={1000}
            className="mx-auto"
            src="https://i.ibb.co.com/vx3GC2j/banner.png"
            alt="banner.png"
          />
        </div>

        <div className="flex justify-center items-center">
          <Button className="mt-14">Үнэгүй туршаад үзээрэй</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
