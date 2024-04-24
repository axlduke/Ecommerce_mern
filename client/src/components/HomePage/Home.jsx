import Nav from "../Route/Nav"
import furniture1 from '../../assets/furniture1.png'
import furniture2 from '../../assets/furniture2.png'
import chair from '../../assets/Options/chair.png'
import sofa from '../../assets/Options/sofa.png'
import cabinet from '../../assets/Options/cabinet.png'
import wardrobe from '../../assets/Options/wardrobe.png'
import armchair from '../../assets/Options/armchair.png'
import chair2 from '../../assets/chair2.png'
import table from '../../assets/table.png'
import sofas from '../../assets/sofas.png'
import sofa3 from '../../assets/sofa3.png'
import chair3 from '../../assets/chair3.png'
import LeatherChair from '../../assets/LeatherChair.png'
import woodenarmchair from '../../assets/woodenarmchair.png'
import yellowsofa from '../../assets/yellowsofa.png'
import wardrobe2 from '../../assets/wardrobe2.png'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react"
import { CiShoppingCart } from "react-icons/ci";


function Home() {

    const OptionImage = [
        { name: 'Chair', src: chair},
        { name: 'sofa', src: sofa},
        { name: 'cabinet', src: cabinet},
        { name: 'wardrobe', src: wardrobe},
        { name: 'armchair', src: armchair},
    ]

    const [isClicked, setIsClicked] = useState(false)
    const handleClickHeart = () => {
        setIsClicked(prevState => !prevState)
    }

    return (
        <div>
            <Nav />
            <div className="relative mx-5 mt-16 sm:space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-5 2xl:space-y-7">

                <div className="min-w-min lg:h-80 bg-[rgb(88,115,190)] rounded-md">
                    <div className="flex justify-center">
                        <h1 className="text-white font-sans font-bold mt-8 text-2xl md:text-6xl lg:text-7xl xxl:text-7xl 2xl:text-8xl">
                            Modern Minimalist Furniture
                        </h1>
                    </div>
                    <div className="absolute mt-6 lg:right-6 xl:right-24 xxl:right-5">
                        <p className="text-white xs: md:w-[100px] lg:w-[450px] xl:w-[550px] xxl:w-[530px] 2xl:w-[630px] text-justify">
                            Discover a curated collection of handcrafted pieces designed to transform your
                            living spaces into expressions of your unique taste and lifestyle.
                        </p>
                        <button className="lg:mt-6 xl:mt-7 text-[#0d0a0a] bg-[#ffd873] px-6 py-2 rounded-full">
                            Explore More
                        </button>
                    </div>
                </div>

                <div className="flex relative justify-between space-x-3">
                    <div className="bg-[#dee5f5] lg:h-64 lg:w-[660px] xl:w-[750px] 2xl:w-[850px] rounded-md relative flex justify-center items-center">
                        <div className="absolute lg:-top-72 2xl:-top-80">
                            <img src={furniture1}
                            className="lg:mt-16 lg:h-[420px] lg:w-[620px] xl:w-[500px] 2xl:w-[670px] 2xl:h-[450px] -rotate-6 "
                            alt="prevImage"/>
                        </div>
                        <div className="absolute bottom-2">sds</div>
                    </div>

                    {/* 2nd div for discount */}

                    <div className="bg-[#ffd873] min-w-min w-5/12 rounded-md relative flex justify-between items-center">
                        <div className="ml-12 space-y-20">
                            <div>
                                <h1 className=" font-semibold font-sans text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#836a22]">Wooden Chair<br/>50% OFF</h1>
                            </div>
                            <div>
                                <button className="bg-white rounded-full py-1 px-1 md:px-2 lg:px-3 xl:px-4">
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

                {/* middle option */}

                <div className="flex justify-evenly items-center mb-10">
                    {
                        OptionImage.map((image, index) => (
                            <div key={index} className={`flex justify-center lg:h-[120px] lg:w-[220px] 2xl:h-[120px] 2xl:w-[280px] rounded-md p-1 ${index === 0 ? 'bg-[#ffd873]' : 'bg-[#e0e5f2]'}`}>
                                <img src={image.src} alt={createImageBitmap.src} className="w-[100px] aspect-square"/>
                            </div>
                        ))
                    }
                </div>

                <div className="flex justify-between">
                    <div className="p-10 space-y-8">
                        <h1 className=" 2xl:text-5xl font-extrabold font-sans">
                            Daily Offer
                        </h1>
                        <p className=" text-sm font-sans w-96 text-justify">
                            check out our daily offers that can combine big discount on some products. Offers may change every day,
                            do not miss your chance :)
                        </p>
                        <button className=" font-sans py-2 px-4 rounded-full bg-[#ffd873]">
                            Open Store
                        </button>
                    </div>
                    <div className="absolute 2xl:left-[680px] bg-[#e0e6f4] p-8 rounded-md h-80 w-80">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-extrabold">
                                Chair
                            </h1>
                            <span className="bg-white text-xs font-bold py-2 px-3 rounded-full ">
                                30%<br/>OFF
                            </span>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={chair2} className=" w-[300px]" />
                        </div>
                    </div>
                    <div className="bg-[#feeed6] p-8 rounded-lg h-[360px] w-[450px]">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-extrabold">
                                Tables
                            </h1>
                            <span className="bg-white text-xs font-bold py-2 px-3 rounded-full ">
                                50%<br/>OFF
                            </span>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={table} className=" w-[300px]" />
                        </div>
                    </div>
                </div>

                <div className="flex space-x-20 mt-20 p-10">
                    <div className="">
                        <img src={sofas} className="w-[300px] aspect-square rounded-lg"/>
                    </div>
                    <div className="mt-5 space-y-10">
                        <div>
                            <h1 className="text-3xl font-sans font-bold">
                                Get read for<br/> winter
                            </h1>
                        </div>
                        <div>
                            <span>
                                Curl up with loved ones on our plush <strong>sofas</strong> and sink into
                                the soft embrance of <strong>winter-ready</strong> fabrics.<br/>
                                <strong>Enjoy</strong> the season&apos;s festivities surrounded by our <strong>stylish</strong> and<br/> inviting living room <strong>furniture</strong>
                            </span>
                        </div>
                        <div>
                            <button className="text-sm font-sans py-1 px-3 rounded-full bg-[#ffd873]">
                                Open Store
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="ml-10 space-y-5">
                        <div className="">
                            <h1 className="text-3xl font-sans font-bold">Our Latest arrivals</h1>
                        </div>
                        <div className="text-gray-600">
                            <p className="text-sm">Introducing Our Latest Arrivals -Elevate Your Space<br/>with Contemporary Elegances!</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <div className="bg-[#feeed6] w-[700px] h-72 rounded-xl relative">
                        <div className="m-5">
                            <div onClick={handleClickHeart} className="text-lg">
                                { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <img src={sofa3} alt="" className="w-96 h-46" />
                            </div>
                            <div className="">
                                <p className="absolute text-xs bottom-2">Beige Sofa #345<br/>$ 1570</p>
                            </div>
                            <div className="absolute bottom-4 right-3">
                                <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#e0e5f2] flex justify-center items-center w-96 h-72 rounded-xl relative">
                        <div className="m-5">
                            <div onClick={handleClickHeart} className="absolute top-5 left-5 text-lg">
                                { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                            </div>
                            <img src={chair3} alt="" className="w-52 h-52" />
                            <div className="">
                                <p className="absolute text-xs bottom-2 left-3">Gray armchair #345<br/>$ 1570</p>
                            </div>
                            <div className="absolute bottom-4 right-3">
                                <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#e0e5f2] flex justify-center items-center w-96 h-72 rounded-xl relative">
                        <div onClick={handleClickHeart} className="absolute top-5 left-5 text-lg">
                            { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                        </div>
                        <img src={LeatherChair} alt="" className="w-52 h-52" />
                        <div className="">
                            <p className="absolute text-xs bottom-2 left-3">Leather chair #345<br/>$ 1570</p>
                        </div>
                        <div className="absolute bottom-4 right-3">
                            <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <div className="bg-[#e0e5f2] flex justify-center items-center w-96 h-72 rounded-xl relative">
                        <div className="m-5">
                            <div onClick={handleClickHeart} className="absolute top-5 left-5 text-lg">
                                { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                            </div>
                            <img src={woodenarmchair} alt="" className="w-52 h-52" />
                            <div className="">
                                <p className="absolute text-xs bottom-2 left-3">Wooden armchair #345<br/>$ 1570</p>
                            </div>
                            <div className="absolute bottom-4 right-3">
                                <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#feeed6] w-[700px] h-72 rounded-xl relative">
                        <div className="m-5">
                            <div onClick={handleClickHeart} className="text-lg">
                                { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                            </div>
                            <div className="flex justify-center items-center mt-10">
                                <img src={yellowsofa} alt="" className="w-96 h-46" />
                            </div>
                            <div className="">
                                <p className="absolute text-xs bottom-2">Yellow Sofa #345<br/>$ 1570</p>
                            </div>
                            <div className="absolute bottom-4 right-3">
                                <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#e0e5f2] flex justify-center items-center w-96 h-72 rounded-xl relative">
                        <div onClick={handleClickHeart} className="absolute top-5 left-5 text-lg">
                            { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                        </div>
                        <img src={wardrobe2} alt="" className="w-52 h-52" />
                        <div className="">
                            <p className="absolute text-xs bottom-2 left-3">Wardrobe #345<br/>$ 1570</p>
                        </div>
                        <div className="absolute bottom-4 right-3">
                            <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home