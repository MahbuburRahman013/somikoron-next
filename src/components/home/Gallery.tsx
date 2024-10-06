import Image from "next/image";

function Gallery() {
  return (
    <div className="bg-[url('https://mona-ai.mn/about-picture.jpg')] bg-center bg-no-repeat object-cover bg-cover mt-20 py-10">
      <div className="xl:container mx-auto md:px-10 px-3 xl:px-28">
        <h1 className="header-font font-lexend mx-auto text-center mb-[16px] w-full text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]">
          Made With MAZALA.AI
        </h1>
        <p className="font-inter mx-auto w-full text-[16px] text-white/[0.7] lg:w-[665px] lg:text-[18px] text-center">
          Mazala.AI ашиглан бүтээсэн шинэлэг төсөл, шийдлүүдийн үзэсгэлэнд
          тавтай морилно уу! Бүтээлч байдал ба технологийн огтлолцлыг бид хиймэл
          оюун ухаанаар дэмжигдсэн олон төрлийн хэрэглээг танилцуулж байгаарай.
        </p>

        <div className="grid sm:grid-cols-6 grid-cols-2 lg:gap-10 gap-5 my-16">
          <Image
            width={1000}
            height={1000}
            className="w-full h-full xl:rounded-3xl rounded-2xl sm:col-span-2 sm:row-span-2 col-span-2"
            src="https://mona-ai.mn/rec-1.jpg"
            alt=""
          />
          <Image
            width={1000}
            height={1000}
            className="w-full h-full xl:rounded-3xl rounded-2xl "
            src="https://mona-ai.mn/rec-3.jpg"
            alt=""
          />
          <Image
            width={1000}
            height={1000}
            className="w-full h-full xl:rounded-3xl rounded-2xl "
            src="https://mona-ai.mn/rec-4.jpg"
            alt=""
          />
          <Image
            width={1000}
            height={1000}
            className="w-full h-full xl:rounded-3xl rounded-2xl sm:col-span-2 sm:row-span-2 col-span-2"
            src="https://mona-ai.mn/rec-6.jpg"
            alt=""
          />
          <Image
            width={1000}
            height={1000}
            className="w-full h-full xl:rounded-3xl rounded-2xl sm:col-span-2 sm:row-span-2"
            src="https://mona-ai.mn/rec-5.jpg"
            alt=""
          />
          <Image
            width={1000}
            height={1000}
            className="w-full h-full xl:rounded-3xl rounded-2xl sm:col-span-2"
            src="https://mona-ai.mn/rec-2.jpg"
            alt=""
          />
          <Image
            width={1000}
            height={1000}
            className="w-full h-full xl:rounded-3xl rounded-2xl sm:col-start-5"
            src="https://mona-ai.mn/rec-7.jpg"
            alt=""
          />
          <Image
            width={1000}
            height={1000}
            className="w-full h-full xl:rounded-3xl rounded-2xl "
            src="https://mona-ai.mn/rec-8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
