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


function Home() {

    const OptionImage = [
        { name: 'Chair', src: chair},
        { name: 'sofa', src: sofa},
        { name: 'cabinet', src: cabinet},
        { name: 'wardrobe', src: wardrobe},
        { name: 'armchair', src: armchair},
    ]

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

                <div className="flex mt-20">
                    <div className="border">
                        asds
                    </div>
                    <div>
                        asdasda
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home