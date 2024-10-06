import { RiMenu5Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

function SubNav({ navitems, setDoorOpen, open, setOpen }) {
    return (
        <div className="flex gap-5 justify-between items-center py-6 container mx-auto px-3">
            <h1 className="font-serif text-2xl font-semibold uppercase text-nowrap">Mona <span className="text-[#2D9F89]">ai</span></h1>
            <div className="xl:flex justify-between items-center 2xl:gap-10 gap-5 hidden ">
                {
                    navitems?.map((item, index) => {
                        return (
                            <div key={index} className="2xl:text-xl text-lg relative text-gray-300">
                                <button onClick={() => item.navLink === 'Үйлчилгээ' && setOpen(!open)} className={`hover:text-gray-50 transition duration-100 ${item.navLink === 'Үйлчилгээ' ? 'flex items-end gap-2' : 'block'}`}>{item.navLink} {item.navLink === 'Үйлчилгээ' && <IoMdArrowDropdown />}</button>

                                {item.navLink === 'Үйлчилгээ' && open === true &&

                                    <div className="2xl:text-xl text-lg absolute  top-10 px-10 py-3 bg-[#19233A] text-gray-300">
                                        <button className="block text-nowrap hover:text-gray-50 transition duration-300">Үйлчилгээ</button>
                                        <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">Бидний тухай</button>
                                        <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">Бидэнтэй холбоо барина</button>
                                        <button className="block text-nowrap my-3 hover:text-gray-50 transition duration-100">Түгээмэл асуултууд</button>
                                    </div>


                                }

                            </div>
                        )
                    })
                }
                <button className=" lg:py-4 py-2  2xl:text-xl text-lg text-[#2D9F89] lg:px-12 px-6 border rounded-md border-[#2D9F89]">Бүртгүүлэх</button>
            </div>

            <div className="xl:hidden block">
                <RiMenu5Fill onClick={() => setDoorOpen(true)} size={25} />
            </div>

        </div >
    )
}

export default SubNav