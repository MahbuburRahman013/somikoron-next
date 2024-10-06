"use client";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { RiMenu5Fill } from "react-icons/ri";
import Link from "next/link";

function Navbar({ position }: { position: string }) {
  const [open, setOpen] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navitems = [
    {
      navLink: "Үйлчилгээ",
    },
    {
      navLink: "Бидний тухай",
    },
    {
      navLink: "Түгээмэл асуултууд",
    },
    {
      navLink: "Бидэнтэй холбоо барина уу",
    },
    {
      navLink: "ҮйлчилгээN",
    },
    {
      navLink: "Бидний тухайE",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={` transition-all z-30 duration-500 ease-in-out  ${
          scrollY > 200
            ? "bg-opacity-20 backdrop-blur-md shadow-lg sticky top-0 "
            : scrollY > 50
            ? "-top-20 h-0"
            : `right-0 left-0 ${position}`
        }`}
      >
        <div className="flex gap-5 justify-between items-center py-6 container mx-auto px-3">
          <Link href="/">
            <h1 className="font-serif text-2xl font-semibold uppercase text-nowrap">
              Mona <span className="text-[#2D9F89]">ai</span>
            </h1>
          </Link>
          <div className="xl:flex justify-between items-center 2xl:gap-10 gap-5 hidden ">
            {navitems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="2xl:text-xl text-lg relative text-gray-300"
                >
                  <button
                    onClick={() =>
                      item.navLink === "Үйлчилгээ" && setOpen(!open)
                    }
                    className={`hover:text-gray-50 transition duration-100 ${
                      item.navLink === "Үйлчилгээ"
                        ? "flex items-end gap-2"
                        : "block"
                    }`}
                  >
                    {item.navLink}{" "}
                    {item.navLink === "Үйлчилгээ" && <IoMdArrowDropdown />}
                  </button>

                  {item.navLink === "Үйлчилгээ" && open === true && (
                    <div className="2xl:text-xl text-lg absolute  top-10 px-10 py-3 bg-[#19233A] text-gray-300">
                      <button className="block text-nowrap hover:text-gray-50 transition duration-300">
                        Үйлчилгээ
                      </button>
                      <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">
                        Бидний тухай
                      </button>
                      <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">
                        Бидэнтэй холбоо барина
                      </button>
                      <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">
                        Түгээмэл асуултууд
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="/login">
              <button className=" lg:py-3 py-2  2xl:text-xl text-lg text-[#2D9F89] lg:px-12 px-6 border rounded-md border-[#2D9F89]">
                Sign In
              </button>
            </Link>
          </div>

          <div className="xl:hidden block">
            <RiMenu5Fill onClick={() => setDoorOpen(true)} size={25} />
          </div>
        </div>
      </div>

      <div
        className={`bg-[#131a2c] z-40 transition duration-500  ${
          doorOpen ? "-translate-x-0" : "-translate-x-[1500px]"
        }  w-full gap-5 xl:hidden top-0  py-10 px-5  h-screen fixed flex justify-between`}
      >
        <div className="flex  flex-col gap-5 ">
          {navitems.map((item, index) => {
            return (
              <div
                key={index}
                className="2xl:text-xl text-lg relative text-gray-300"
              >
                <button
                  onClick={() => item.navLink === "Үйлчилгээ" && setOpen(!open)}
                  className={`hover:text-gray-50 transition duration-100 ${
                    item.navLink === "Үйлчилгээ"
                      ? "flex items-end gap-2"
                      : "block"
                  }`}
                >
                  {item.navLink}{" "}
                  {item.navLink === "Үйлчилгээ" && <IoMdArrowDropdown />}
                </button>

                {item.navLink === "Үйлчилгээ" && open === true && (
                  <div className="2xl:text-xl text-lg absolute z-50 border border-gray-600 rounded-lg top-10 px-10 py-3 bg-[#12192a] text-gray-300">
                    <button className="block text-nowrap hover:text-gray-50 transition duration-300">
                      Үйлчилгээ
                    </button>
                    <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">
                      Бидний тухай
                    </button>
                    <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">
                      Бидэнтэй холбоо барина
                    </button>
                    <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">
                      Түгээмэл асуултууд
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/login">
            <button className=" lg:py-3 py-2  2xl:text-xl text-lg text-[#2D9F89] px-15 border rounded-md border-[#2D9F89]">
              Sign In
            </button>
          </Link>
        </div>
        <div>
          <RxCross2 onClick={() => setDoorOpen(false)} size={20} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
