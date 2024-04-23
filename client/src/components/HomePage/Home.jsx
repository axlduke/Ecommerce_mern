import Nav from "../Route/Nav"
import furniture1 from '../../assets/furniture1.png'
import furniture2 from '../../assets/furniture2.png'

function Home() {
    return (
        <div>
            <Nav />
            <div className="relative mx-5 mt-16 sm:space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-5">

                <div className="min-w-min lg:h-80 bg-[rgb(88,115,190)] rounded-md">
                    <div className="flex justify-center">
                        <h1 className="text-white font-sans font-bold mt-8 text-2xl md:text-6xl lg:text-7xl xl:text-8xl">
                            Modern Minimalist Furniture
                        </h1>
                    </div>
                    <div className="absolute mt-6 right-24">
                        <p className="text-white">
                            Discover a curated collection of handcrafted pieces designed<br/>to transform your
                            living spaces into expressions of your<br/>unique taste and lifestyle.
                        </p>
                        <button className="lg:mt-6 xl:mt-7 text-[#0d0a0a] bg-[#ffd873] px-6 py-2 rounded-full">
                            Explore More
                        </button>
                    </div>
                </div>

                <div className="flex relative justify-between space-x-3">
                    <div className="bg-[#dee5f5] sm: md:h-56 lg:h-64 xl:h-72 min-w-min md:w-5/12 lg:w-6/12 xl:w-7/12 rounded-md relative flex justify-center items-center">
                        <div className="absolute -top-72">
                            <img src={furniture1}
                            className="-rotate-6"
                            alt="prevImage"/>
                        </div>
                        <div className="absolute bottom-2">sds</div>
                    </div>
                    <div className="bg-[#ffd873] min-w-min w-5/12 rounded-md relative flex justify-between items-center">
                        <div className="ml-12 space-y-20">
                            <div>
                                <h1 className=" font-semibold font-sans text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#836a22]">Wooden Chair<br/>50% OFF</h1>
                            </div>
                            <div>
                                <button className="bg-white rounded-full py-1 px-1 md:px-2 lg:px-2 xl:px-3">
                                    Explore More
                                </button>
                            </div>
                        </div>
                        <div className="absolute right-1">
                            <img src={furniture2}
                            className=" w-80"
                            alt="prevImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home