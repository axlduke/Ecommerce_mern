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
import wintersofa from '../../assets/wintersofa.png'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react"
import { CiShoppingCart } from "react-icons/ci";
import Footer from "./Footer"


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
            <div className="relative mx-5 mt-16 sm:space-y-3 xs:space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-5 2xl:space-y-7">

                <div className="min-w-min xs:h-56 md:h-64 lg:h-80 bg-[rgb(88,115,190)] rounded-md">
                    <div className="flex justify-center">
                        <h1 className="text-white font-sans font-bold mt-8 xs:text-2xl sm:text-2xl md:text-5xl lg:text-6xl xxl:text-7xl 2xl:text-8xl">
                            Modern Minimalist Furniture
                        </h1>
                    </div>
                    <div className=" lg:absolute xl:absolute xxl:absolute 2xl:absolute mt-6 xs:space-y-5 md:space-y-5 md:flex md:flex-col md:justify-center md:items-center lg:right-6 xl:right-24 xxl:right-5">
                        <div className="xs:flex xs:justify-center">
                            <p className="text-white xs:text-sm xs:w-[350px] sm:w-[380px] md:w-[400px] lg:w-[450px] xl:w-[550px] xxl:w-[530px] 2xl:w-[630px] text-justify">
                                Discover a curated collection of handcrafted pieces designed to transform your
                                living spaces into expressions of your unique taste and lifestyle.
                            </p>
                        </div>
                        <div className="xs:flex xs:justify-center">
                            <button className="xs:text-xs lg:mt-6 xl:mt-7 text-[#0d0a0a] bg-[#ffd873] px-6 py-2 rounded-full">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex relative justify-between space-x-3 xs:h-44 md:h-72 lg:h-64">
                    <div className="bg-[#dee5f5] xs:w-[240px] sm:w-[350px] md:w-[440px] lg:w-[680px] xl:w-[750px] 2xl:w-[850px] rounded-md relative flex justify-center items-center">
                        <div className="absolute lg:-top-72 2xl:-top-72">
                            <img src={furniture1}
                            className="xs:-mt-20 md:-mt-20 lg:mt-24 xs:h-[110px] lg:h-[400px] xs:w-[180px] md:w-[400px] lg:w-[500px] xl:w-[500px] xxl:w-[600px] 2xl:w-[670px] 2xl:h-[400px] -rotate-6 border border-black"
                            alt="prevImage"/>
                        </div>
                        <div className="absolute bottom-2">selector</div>
                    </div>

                    {/* 2nd div for discount */}

                    <div className="bg-[#ffd873] min-w-min w-5/12 rounded-md relative flex justify-between items-center">
                        <div className="xs:ml-3 md:ml-5 2xl:ml-12 xs:space-y-20 md:space-y-36 lg:space-y-32 2xl:space-y-20">
                            <div>
                                <h1 className=" font-semibold font-sans xs:text-sm sm:text-xl md:text-3xl lg:text-3xl xl:text-5xl xxl:text-4xl text-[#836a22]">Wooden Chair<br/>50% OFF</h1>
                            </div>
                            <div>
                                <button className="bg-white xs:text-xs rounded-full xs:p-2 md:px-2 lg:px-3 xl:px-4">
                                    Explore More
                                </button>
                            </div>
                        </div>
                        <div className="absolute md:right-0 2xl:right-1">
                            <img src={furniture2}
                            className="xs:w-72 md:w-96 2xl:w-80"
                            alt="prevImage"/>
                        </div>
                    </div>
                </div>

                {/* middle option */}

                <div className="flex justify-evenly items-center mb-10">
                    {
                        OptionImage.map((image, index) => (
                            <div key={index} className={`flex justify-center items-center xs:h-[90px] md:h-[160px] lg:h-[120px] xs:w-[70px] md:w-[130px] lg:w-[180px] 2xl:h-[120px] xxl:w-[250px] 2xl:w-[280px] rounded-md p-1 ${index === 0 ? 'bg-[#ffd873]' : 'bg-[#e0e5f2]'}`}>
                                <img src={image.src} alt={createImageBitmap.src} className="md:w-[120px] lg:w-[100px] 2xl:w-[100px] xs:h-14 md:h-32 lg:h-28"/>
                            </div>
                        ))
                    }
                </div>

                <div className="xs:space-y-4 md:space-y-5 lg:flex lg:justify-between 2xl:flex 2xl:justify-between">
                    <div className="p-10 space-y-8">
                        <h1 className="xs:text-2xl md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl 2xl:text-5xl font-extrabold font-sans">
                            Daily Offer
                        </h1>
                        <p className=" text-sm xxl:text-xl font-sans lg:w-64 xxl:w-[550px] 2xl:w-96 text-justify">
                            check out our daily offers that can combine big discount on some products. Offers may change every day,
                            do not miss your chance :)
                        </p>
                        <button className="xs:text-xs font-sans py-2 px-4 rounded-full bg-[#ffd873]">
                            Open Store
                        </button>
                    </div>
                    <div className="lg:absolute 2xl:absolute lg:left-[320px] xxl:left-[650px] 2xl:left-[680px] bg-[#e0e6f4] p-8 rounded-md h-80 w-80">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-extrabold">
                                Chair
                            </h1>
                            <span className="bg-white text-xs font-bold py-2 px-3 rounded-full ">
                                30%<br/>OFF
                            </span>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={chair2} className="2xl:w-[300px]" />
                        </div>
                    </div>
                    <div className="bg-[#feeed6] p-8 rounded-lg h-[360px] lg:w-[320px] 2xl:w-[450px]">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-extrabold">
                                Tables
                            </h1>
                            <span className="bg-white text-xs font-bold py-2 px-3 rounded-full ">
                                50%<br/>OFF
                            </span>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={table} className="2xl:w-[300px]" />
                        </div>
                    </div>
                </div>

                <div className="md:flex lg:flex xl:flex xxlflex 2xl:flex md:space-x-20 lg:space-x-20 xl:space-x-20 xxl:space-x-20 2xl:space-x-20 mt-20 p-10">
                    <div className="">
                        <img src={sofas} className="md:h-80 md:w-[800px] md:text-justify xxl:w-[650px] 2xl:w-[560px] aspect-square rounded-lg"/>
                    </div>
                    <div className="mt-5 space-y-10">
                        <div>
                            <h1 className="md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl 2xl:text-6xl font-sans font-bold">
                                Get read for<br/> winter
                            </h1>
                        </div>
                        <div>
                            <span className=" md:text-base lg:text-lg xl:text-xl xxl:text-2xl 2xl:text-3xl">
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

                <div className="">
                    <div className="ml-10 xs:space-y-4 md:space-y-5 lg:space-y-5 xl:space-y-5 xxl:space-y-5 2xl:space-y-5">
                        <div className="">
                            <h1 className="xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl 2xl:text-6xl font-sans font-bold">Our Latest arrivals</h1>
                        </div>
                        <div className="text-gray-600">
                            <p className="text-sm md:text-base lg:text-lg xl:text-lg xxl:text-xl 2xl:text-2xl">Introducing Our Latest Arrivals -Elevate Your Space<br/>with Contemporary Elegances!</p>
                        </div>
                    </div>
                </div>

                <div className="flex xs:grid xs:grid-cols-1 md:flex lg:flex-row xl:justify-center xl:flex xxl:justify-center xxl:flex 2xl:flex 2xl:justify-center gap-3">
                    <div className="bg-[#feeed6] xs:w-96 sm:w-96 w-[700px] h-72 rounded-xl relative">
                        <div className="m-5">
                            <div onClick={handleClickHeart} className="text-lg">
                                { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <img src={sofa3} alt="" className="w-96 h-46" />
                            </div>
                            <div className="">
                                <p className="absolute text-xs bottom-2 xxl:w-96 xxl:truncate 2xl:truncate">Beige Sofa #345<br/>$ 1570</p>
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
                            <img src={chair3} alt="" className="md:h-46 w-52 xxl:h-44 2xl:h-52" />
                            <div className="">
                                <p className="absolute text-xs bottom-2 left-3 md:w-28 lg:w-36 xl:w-44 xxl:w-52 2xl:w-64 md:truncate lg:truncate xl:truncate xxl:truncate 2xl:truncate">Gray armchair #345<br/>$ 1570</p>
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
                        <img src={LeatherChair} alt="" className="md:h-44 w-52 2xl:h-52" />
                        <div className="">
                            <p className="absolute text-xs bottom-2 left-3 md:w-28 lg:w-36 xl:w-44 xxl:w-52 2xl:w-64 md:truncate lg:truncate xl:truncate xxl:truncate 2xl:truncate">Leather chair #345<br/>$ 1570</p>
                        </div>
                        <div className="absolute bottom-4 right-3">
                            <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                        </div>
                    </div>
                </div>

                <div className="flex xs:grid xs:grid-cols-1 md:justify-center md:flex lg:justify-center lg:flex xl:justify-center xl:flex xxl:justify-center xxl:flex 2xl:flex 2xl:justify-center gap-3">
                    <div className="bg-[#e0e5f2] flex justify-center items-center sm:w-96 w-96 h-72 rounded-xl relative">
                        <div className="m-5">
                            <div onClick={handleClickHeart} className="absolute top-5 left-5 text-lg">
                                { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                            </div>
                            <img src={woodenarmchair} alt="" className="w-52 md:h-44 2xl:h-52" />
                            <div className="">
                                <p className="absolute text-xs bottom-2 left-3 md:w-28 lg:w-36 xl:w-44 xxl:w-52 2xl:w-64 md:truncate lg:truncate xl:truncate xxl:truncate 2xl:truncate">Wooden armchair #345<br/>$ 1570</p>
                            </div>
                            <div className="absolute bottom-4 right-3">
                                <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#feeed6] xs:w-96 sm:w-80 w-[700px] h-72 rounded-xl relative">
                        <div className="m-5">
                            <div onClick={handleClickHeart} className="text-lg">
                                { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                            </div>
                            <div className="flex justify-center items-center mt-10">
                                <img src={yellowsofa} alt="" className="w-96 2xl:h-46" />
                            </div>
                            <div className="">
                                <p className="absolute text-xs bottom-2 md:w-28 lg:w-36 xl:w-44 xxl:w-52 2xl:w-64 md:truncate lg:truncate xl:truncate xxl:truncate 2xl:truncate">Yellow Sofa #345<br/>$ 1570</p>
                            </div>
                            <div className="absolute bottom-4 right-3">
                                <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#e0e5f2] flex justify-center items-center sm:w-80 w-96 h-72 rounded-xl relative">
                        <div onClick={handleClickHeart} className="absolute top-5 left-5 text-lg">
                            { isClicked ? <FaHeart className="text-red-500" /> : <FaRegHeart /> }
                        </div>
                        <img src={wardrobe2} alt="" className="w-52 md:h-44 2xl:h-52" />
                        <div className="">
                            <p className="absolute text-xs bottom-2 left-3 md:w-28 lg:w-36 xl:w-44 xxl:w-52 2xl:w-64 md:truncate lg:truncate xl:truncate xxl:truncate 2xl:truncate">Wardrobe #345<br/>$ 1570</p>
                        </div>
                        <div className="absolute bottom-4 right-3">
                            <button className="text-xl text-white p-2 rounded-full bg-[rgb(88,115,190)]"><CiShoppingCart/></button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-12">
                    <button className=" font-sans py-2 px-4 rounded-full bg-[#ffd873]">
                        Open Store
                    </button>
                    <div className="">
                        <h1 className="font-sans text-3xl font-semibold">
                            Subscribe to our newsletter and<br/> grab <strong className="font-extrabold">30% OFF!</strong>
                        </h1>
                    </div>
                    <div className="md:flex lg:flex xl:flex xxl:flex 2xl:flex space-x-3">
                        <input type="email" className="w-96 border-2 border-[#e0e6f4] rounded-full py-2 pl-5" placeholder="Your Email..."/>
                        <button className=" font-sans py-2 px-4 rounded-full bg-black text-white">
                            Open Store
                        </button>
                    </div>
                </div>
                {/* special Offer */}
                <div className="flex justify-between xs:px-4 md:px-10 lg:px-10 xl:px-10 xxl:px-10 2xl:px-10 rounded-xl items-center relative bg-[#ffd873] xs:h-64 md:h-80 lg:h-80 xl:h-80 xxl:h-80 2xl:h-80">
                    <div className="flex flex-col space-y-6">
                        <h1 className="xs:text-2xl text-4xl font-sans font-extrabold">
                            Winter offer
                        </h1>
                        <span className="xs:text-sm md:text-lg lg:text-xl 2xl:text-3xl font-sans">
                            10 hours : 20 min : 40 sec
                        </span>
                        <button className=" text-sm w-28 font-sans py-2 px-4 rounded-full bg-white">
                            Open Item
                        </button>
                    </div>
                    <div className="pt-20">
                        <img src={wintersofa} alt="" className="xs:w-[200px] md:w-[400px] lg:w-[600px] 2xl:w-[800px] xs:h-44 md:h-64 lg:h-64 xl:h-64 xxl:h-64 2xl:h-64" />
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home