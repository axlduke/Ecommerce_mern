import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const Nav = () => {
    return (
        <div>
            {/*margin for navigation */}
            <div className='m-3'> 
                <div className="flex justify-between">
                
                    <div className=" flex items-center space-x-4">
                        <div>
                            logo
                        </div>
                        <div>
                            <h1>SoFI</h1>
                        </div>
                    </div>

                    <div className="bg-gray-300 w-auto px-3 py-1 rounded-full">
                        <div className="text-sm">
                            <ul className="flex space-x-5 inline-block">
                                <li className="bg-white rounded-full px-2 py-0.5">Home</li>
                                <li className="">About</li>
                                <li className="">Store</li>
                                <li className="bg-white rounded-full px-2">Sale</li>
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
            </div>
        </div>
    )
}

export default Nav