// import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoMdBasket } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Nav = () => {
    return (
        <div className="fixed top-0 w-full bg-white shadow-md z-10">
            {/*margin for navigation */}
            {/* <div className='m-3'> 
                <div className="flex justify-between">
                
                    <div className=" flex items-center space-x-4">
                        <div>
                            logo
                        </div>
                        <div>
                            <h1>SoFI</h1>
                        </div>
                    </div>

                    <div className="bg-[#eff3fa] w-auto px-3 py-1 rounded-full">
                        <div className="text-sm font-sans text-[#0d0a0a]">
                            <ul className="flex space-x-5 inline-block">
                                <li className="bg-white rounded-full px-2 py-0.5">Home</li>
                                <li className="">About</li>
                                <li className="">Store</li>
                                <li className="">Sale</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="flex space-x-5">
                            <div className="border border-gray-300 p-2 rounded-full ">
                                <CiHeart />
                                <span className="absolute ml-3 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            </div>
                            <div className="border border-gray-300 p-2 rounded-full">
                                <CiShoppingCart/>
                                <span className="absolute ml-3 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            </div>
                            <div className="border border-gray-300 p-2 rounded-full">
                                <CiUser />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="flex justify-end py-2 border border-b-2">
                <ul className="inline-flex space-x-5 mx-9">
                    <li className="text-gray-400 hover:text-gray-500 transition ease-in-out cursor-pointer">Home BeliBeli</li>
                    <li className="text-gray-400 hover:text-gray-500 transition ease-in-out cursor-pointer">Abot BeliBeli</li>
                    <li className="text-gray-400 hover:text-gray-500 transition ease-in-out cursor-pointer">Promo</li>
                    <li>|</li>
                    <li className="hover:text-gray-500 transition ease-in-out cursor-pointer font-medium">Sign Up</li>
                    <li>|</li>
                    <li className="hover:text-gray-500 transition ease-in-out cursor-pointer font-medium">Login</li>
                </ul>
            </div>
            <div className="flex items-center justify-evenly py-3">
                <div>
                    <h1 className=" text-2xl font-medium">BeliBeli.com</h1>
                </div>
                <div className="flex">
                    <div className="border-t-l-2 border rounded-tl-lg rounded-bl-lg">
                        <select name="" id="" className="outline-none px-5 py-1">
                            <option value="" disabled>All Category</option>
                            <option value="" >T-Shirt</option>
                            <option value="" >Jacket</option>
                            <option value="" >Shirt</option>
                            <option value="" >Jeans</option>
                            <option value="" >Bag</option>
                            <option value="" >Shoes</option>
                            <option value="" >Watches</option>
                            <option value="" >Cap</option>
                        </select>
                    </div>
                    <div className="relative">
                        <input type="text"  className="pl-10 py-1 border outline-none w-[850px] rounded-tr-lg rounded-br-lg" placeholder="Search product or brand here..."/>
                        <HiMagnifyingGlass className="absolute top-2 left-3"/>
                    </div>
                </div>
                <div className="space-x-5">
                    <button className="p-2 text-2xl text-gray-400 hover:text-gray-500 transition ease-in-out"><IoMdBasket/></button>
                    <button className="p-2 text-2xl text-gray-400 hover:text-gray-500 transition ease-in-out"><BiSolidBell/></button>
                </div>
            </div>
        </div>
    )
}

export default Nav