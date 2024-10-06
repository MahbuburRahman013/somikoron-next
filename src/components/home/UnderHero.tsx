"use client";
import { useState } from "react";
import TabCom from "./TabCom";

function UnderHero() {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className="lg:container mx-auto lg:px-28 px-3 sm:mt-28 mt-16">
        <h1 className="header-font text-center font-lexend mx-auto mb-[16px] w-full text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]">
          MAZALA.AI 5 гайхалтай хэрэгсэл
        </h1>

        <div className="flex hide-scrollbar overflow-x-auto xl:grid grid-cols-5 justify-between items-center gap-3">
          <button
            onClick={() => setActive(1)}
            className={`${
              active === 1 ? "bg-[#2D9F89]" : "bg-[#19233A]"
            } lg:py-4  py-3  2xl:text-xl text-xl font-semibold  px-5  text-gray-200 hover:bg-[#2D9F89] rounded-md  text-nowrap  transition-all duration-300 cursor-pointer`}
          >
            Чатлах өрөө
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${
              active === 2 ? "bg-[#2D9F89]" : "bg-[#19233A]"
            } lg:py-4  py-3  2xl:text-xl text-xl font-semibold  px-5  text-gray-200 hover:bg-[#2D9F89] rounded-md  text-nowrap  transition-all duration-300 cursor-pointer`}
          >
            YouTube translation
          </button>
          <button
            onClick={() => setActive(3)}
            className={`${
              active === 3 ? "bg-[#2D9F89]" : "bg-[#19233A]"
            } lg:py-4  py-3  2xl:text-xl text-xl font-semibold  px-5  text-gray-200 hover:bg-[#2D9F89] rounded-md  text-nowrap transition-all duration-300 cursor-pointer`}
          >
            AI видео хадмал
          </button>
          <button
            onClick={() => setActive(4)}
            className={`${
              active === 4 ? "bg-[#2D9F89]" : "bg-[#19233A]"
            } lg:py-4  py-3  2xl:text-xl text-xl font-semibold  px-5  text-gray-200 hover:bg-[#2D9F89] rounded-md  text-nowrap  transition-all duration-300 cursor-pointer`}
          >
            Зураг үүсгэх
          </button>
          <button
            onClick={() => setActive(5)}
            className={`${
              active === 5 ? "bg-[#2D9F89]" : "bg-[#19233A]"
            } lg:py-4  py-3  2xl:text-xl text-xl font-semibold  px-5  text-gray-200 hover:bg-[#2D9F89] rounded-md  text-nowrap  transition-all duration-300 cursor-pointer`}
          >
            AI туслах
          </button>
        </div>
      </div>

      <div>
        {active === 1 ? (
          <TabCom
            title={
              "Хиймэл оюун ухаанаар ажилладаг чат өрөөгөөр дэлхий даяар холбогдоорой"
            }
            subTitle={
              "Манай Chatroom функцээр дэлхийн хэмжээнд холбогдож, AI орчуулгыг ашиглан саадгүй, утга учиртай яриа өрнүүлээрэй."
            }
            item1={"Дэлхий даяарх хүмүүстэй төрөлх хэлээрээ чатлаарай."}
            item2={
              "Тохиромжтой харилцахын тулд хиймэл оюун ухаанаар ажилладаг орчуулгыг ашигла."
            }
            buttonText={"Үнэгүй туршаад үзээрэй"}
            imgLink={"https://i.ibb.co.com/zFHJMqz/chatroom.png"}
          />
        ) : active === 2 ? (
          <TabCom
            title={
              "Автомат хадмал орчуулгатай, хувиргах хиймэл оюун ухааныг өсгөх видеонууд"
            }
            subTitle={
              "Манай хиймэл оюун ухаанд суурилсан хадмал орчуулгын хэрэгслээр хамгийн сүүлийн үеийн видеог сайжруулах талбарт орж, контентын хүртээмжийг өөрчил."
            }
            item1={
              "AI-ийн дэвшилтэт алгоритмаар хялбархан бүтээсэн үнэн зөв, цаг тухайд нь хадмал орчуулгатайгаар контентоо хүчирхэгжүүлээрэй."
            }
            item2={
              "Автомат орчуулгын тусламжтайгаар олон хэл дээр хадмал орчуулга хийснээр үзэгчдийн хадгалалт, ойлголтыг сайжруулаарай."
            }
            buttonText={"Үнэгүй туршаад үзээрэй"}
            imgLink={"https://i.ibb.co.com/wz4zKqF/tab-1.png"}
          />
        ) : active === 3 ? (
          <TabCom
            title={"AI видео хадмал орчуулгаар хүртээмжид хувьсгал хий"}
            subTitle={
              "Хиймэл оюун ухаанд суурилсан хадмал орчуулгын тусламжтайгаар видеоны хүртээмжийг өөрчлөн, саадгүй, үнэн зөв хадмал орчуулгыг санал болго."
            }
            item1={
              "Нарийвчилсан AI ашиглан автоматаар үнэн зөв монгол хадмал үүсгэх."
            }
            item2={"Видеоны хүртээмж, оролцоог сайжруулах."}
            buttonText={"Үнэгүй туршаад үзээрэй"}
            imgLink={"https://i.ibb.co.com/JxKKxwG/video.png"}
          />
        ) : active === 4 ? (
          <TabCom
            title={"Зураг үүсгэх тусламжтайгаар гайхалтай визуал бүтээгээрэй"}
            subTitle={
              "Манай хиймэл оюун ухаанаар ажилладаг Зураг үүсгэх хэрэглүүрийг ашиглан гайхалтай дүрслэлийг хялбархан бүтээж, бүтээлч санаагаа бодитоор хэрэгжүүлээрэй."
            }
            item1={
              "Таны санал хүсэлт дээр үндэслэн өндөр чанартай зураг бүтээгээрэй."
            }
            item2={"AI-ийн тусламжтайгаар санаагаа төсөөлөн бодоорой."}
            buttonText={"Үнэгүй туршаад үзээрэй"}
            imgLink={"https://i.ibb.co.com/WFsw9qn/image.png"}
          />
        ) : (
          <TabCom
            title={"AI Assistant-ийн тусламжтайгаар бүтээмжийг нэмэгдүүлээрэй"}
            subTitle={
              "Монгол хэлээр ухаалаг, үр дүнтэй тусламж, интернет хайлтыг санал болгож, манай хиймэл оюун ухааны туслахын тусламжтайгаар бүтээмжээ нэмэгдүүлээрэй."
            }
            item1={
              "AI тусламжтайгаар үнэн зөв хариулт авч, даалгавраа гүйцэтгээрэй."
            }
            item2={"Монгол хэлээр холбогдох хайлтын илэрцэд хандах."}
            buttonText={"Үнэгүй туршаад үзээрэй"}
            imgLink={"https://i.ibb.co.com/k2FND2J/assistant.png"}
          />
        )}
      </div>
    </div>
  );
}

export default UnderHero;
