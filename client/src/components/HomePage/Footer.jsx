
function Footer() {
    return (
        <div className='2xl:mx-16 pt-16'>
            <div className='grid grid-cols-4 gap-2'>
                <div className='flex flex-col space-y-10'>
                    <div className='flex space-x-3'>
                        <p>LOGO</p>
                        <h1>SoFI</h1>
                    </div>
                    <div>
                        <p>Philippines, Bicol Albay</p>
                        <h2>
                            maltoace9@gmail.com
                        </h2>
                    </div>
                    <div>
                        <button className="text-white font-sans py-2 px-4 rounded-full bg-black">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className=''>
                        <h1 className=" font-sans font-bold">Contact Us</h1>
                    </div>
                    <div className="space-y-3">
                        <p>+63 920 692 8571</p>
                        <p>
                            Monday - Friday<br/> 8AM - 5PM
                        </p>
                        <p>Saturday - Sunday<br/> 9AM - 3PM</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className=''>
                        <h1 className=" font-sans font-bold">Delivery</h1>
                    </div>
                    <div className="space-y-3">
                        <p>
                            How it works
                        </p>
                        <p>Free delivery</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className=''>
                        <h1 className=" font-sans font-bold">Customer Service</h1>
                    </div>
                    <div className="space-y-3">
                        <p>Orders</p>
                        <p>
                            Cart
                        </p>
                        <p>Account</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="absolute mt-10">
                <div className="flex justify-center bg-[#e0e5f2] rounded-tl-xl rounded-tr-xl lg:h-10 2xl:h-52 lg:w-[1140px] xl:w-[1200px] xxl:w-[1200px] 2xl:w-[1350px]">
                    <h1 className="text-sm">
                        Copyright © SOFI. All Rights Reserved. -DEV _ACE_M.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Footer