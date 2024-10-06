import { ImPower } from "react-icons/im";
import Button from "./Button";
import Image from "next/image";

type TabComProps = {
  title: string;
  subTitle: string;
  item1: string;
  item2: string;
  buttonText: string;
  imgLink: string;
};

function TabCom({
  title,
  subTitle,
  item1,
  item2,
  buttonText,
  imgLink,
}: TabComProps) {
  return (
    <div className="my-20 2xl:min-h-[800px] 2xl:pl-[290px] xl:pl-[150px] md:px-16 px-3 lg:gap-28 gap-10 flex sm:flex-row flex-col justify-between">
      <div className="sm:w-[50%]">
        <h1 className="header-font mb-[20px] text-[20px] font-[500] text-white/[0.9] lg:text-[40px]">
          {title}
        </h1>
        <p className="font-inter text-[16px] text-white/[0.55] lg:text-[20px]">
          {subTitle}
        </p>

        <div className="flex items-center gap-3 mt-12">
          <ImPower color="#2D9F89" size={30} />
          <p className="font-inter text-[16px] text-white/[0.85] lg:text-[20px]">
            {item1}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <ImPower color="#2D9F89" size={30} />
          <p className="font-inter text-[16px] text-white/[0.85] lg:text-[20px]">
            {item2}
          </p>
        </div>

        <Button className="mt-12">{buttonText}</Button>
      </div>
      <div className="sm:w-[50%]">
        <Image width={1000} height={500} src={imgLink} alt="image.png" />
      </div>
    </div>
  );
}

export default TabCom;
