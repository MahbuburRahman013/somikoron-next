import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[url('https://mona-ai.mn/footer-bg.jpg')] bg-center bg-no-repeat object-cover bg-cover pt-20">
      <div className="flex xl:flex-row flex-col gap-14 justify-between lg:container mx-auto lg:px-28 px-3">
        <div className="xl:w-[30%]">
          <h1 className="font-serif text-2xl font-semibold uppercase text-nowrap">
            Mona <span className="text-[#2D9F89]">ai</span>
          </h1>
          <p className="font-inter mt-[12px] text-[17px] text-[#D2D2D5] lg:mt-[24px]">
            Бид хиймэл оюун ухаан ашиглан хэлний бэрхшээлийг арилгаж, дэлхийн
            мэдээлэл болон боловсролын контентыг бүх Монголчуудад хүртээмжтэй
            болгохыг зорилгоо болгосон. Бидний хиймэл оюун ухаанаар ажилладаг
            хэрэгслүүд нь сурагчид, судлаачид болон сониуч хүмүүст бүгдэнд нь
            зориулагдсан бөгөөд хэлний саад тотгороос болж өмнө нь хүрч чадахгүй
            байсан мэдлэгийн ертөнц рүү нэвтрэхэд туслах болно
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 xl:w-[70%]">
          <ul className="text-white/[0.8] text-xl">
            <li className="font-inter mb-[12px] text-[24px] font-medium text-[#E9E9EA] lg:mb-[32px]">
              Холбоосууд
            </li>
            <li className="py-[8px]">Нүүр хуудас</li>
            <li className="py-[8px]">Бидний тухай</li>
            <li className="py-[8px]">Үнийн мэдээлэл</li>
            <li className="py-[8px]">Түгээмэл асуултууд</li>
            <li className="py-[8px]">холбоо барих</li>
            <li className="py-[8px]">Үйлчилгээний нөхцөл</li>
          </ul>
          <ul className="text-white/[0.8] text-xl">
            <li className="font-inter mb-[12px] text-[24px] font-medium text-[#E9E9EA] lg:mb-[32px]">
              Багаж хэрэгсэл
            </li>
            <li className="py-[8px]">AI видео хадмал</li>
            <li className="py-[8px]">YouTube translation</li>
            <li className="py-[8px]">YouTube видео өрөө</li>
            <li className="py-[8px]">Зураг үүсгэх</li>
            <li className="py-[8px]">AI туслах</li>
          </ul>
          <ul className="text-white/[0.8] text-xl">
            <li className="font-inter mb-[12px] text-[24px] font-medium text-[#E9E9EA] lg:mb-[32px]">
              Get in touch
            </li>
            <li className="flex gap-2 items-center">
              <FaLocationDot size={20} />
              <ul>
                <li className="py-[8px] xl:text-nowrap">
                  Times Square Office Building
                </li>
              </ul>
            </li>
            <li className="flex gap-2 items-center">
              <MdEmail size={20} />
              <ul>
                <li className="py-[8px]">info@mona-ai.mn</li>
              </ul>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt size={20} />
              <ul>
                <li className="py-[8px]">+976</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#000613] border-t border-white/[.2] mt-10  py-6">
        <div className="lg:container mx-auto lg:px-28 px-3 flex lg:flex-row flex-col gap-3 justify-between items-center">
          <p className="text-white/[.8] text-center text-xl">
            Зохиогчийн эрх © 2024 MAZAL.AI . Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <Image
            width={300}
            height={100}
            src="https://mona-ai.mn/card.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
