import React, { useEffect, useState } from 'react'
import Nav from '../Route/Nav'
import { Link } from 'react-router-dom'
import { TbReportAnalytics, TbBadgeFilled } from "react-icons/tb";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { ProdImage, setColorImage, ListSize, Reviews, CustomerRev, BestSelling } from './productInfo'


function ItemView() {
    

    const VisibleProdImage = ProdImage.slice(0, 5)

    const SetColorProdImage = setColorImage.slice(0, 4)

    const VisibleReviews = CustomerRev.slice(0, 7)

    const FilteringTopProd = BestSelling.slice(0,7)

    // const getBadgeColor = (standing) => {
    //     switch (standing) {
    //         case '1':
    //             return 'bg-yellow-400'
    //         case '2':
    //             return '#C0C0C0'
    //         case '3':
    //             return 'bg-yellow-400'
    //         default:
    //             return
    //     }
    // }


    const [ currentIndex, setCurrentIndex ] = useState(0)
    const ITEMS_PER_PAGE = 7
    const maxIndex = Math.ceil(FilteringTopProd.length / ITEMS_PER_PAGE ) - 1

    const handleNext = () => {
        console.log('Next button clicked');
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
    }

    const handlePrev = () => {
        console.log('Prev button clicked');
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    }

    useEffect(() => {
        console.log('Current index:', currentIndex);
    }, [currentIndex]);

    return (
        <div className=''>
            <Nav/>
            <div className='2xl:mx-12 2xl:mt-20'>
                <ol className='inline-flex items-center space-x-1 text-sm'>
                    <li className='text-gray-400'>
                        <Link>
                            home /
                        </Link>
                    </li>
                    <li className='text-gray-400'>
                        <Link>
                            Product /
                        </Link>
                    </li>
                    <li>
                        <Link className='font-semibold'>
                            This Ben Hogan Mens Solid Ottoman GOlf Polo Shirt
                        </Link>
                    </li>
                </ol>
            </div>

            {/* fetching Image for Product */}
            <div className='flex 2xl:justify-between 2xl:mx-32 2xl:mt-5 '>
                <div className='2xl:inline-flex 2xl:space-x-5 '>
                    <div>
                        <ul className='space-y-2'>
                            {
                                VisibleProdImage.map((image, index) => (
                                <li key={index} className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-22 2xl:h-20'>
                                    <img src={image.src} alt="" className='2xl:w-20 2xl:h-20 border border-gray-300 rounded-lg'/>
                                </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-[600px] 2xl:h-[430px]'>
                        <img src={ProdImage[1]} alt="" className='2xl:w-[600px] 2xl:h-[430px] border border-gray-300 rounded-lg'/>
                    </div>
                </div>

                <div className='space-y-3'>
                    <h1 className='border 2xl:text-4xl 2xl:w-[500px] h-auto'>
                        This Ben Hogan Mens Solid Ottoman Golf Polo Shirt
                    </h1>
                    <div>
                        <span>
                            10k+ SOld • ⭐⭐⭐⭐⭐ • 188 Reviews
                        </span>
                    </div>
                    <div className=''>
                        <h1 className='text-2xl font-bold'>
                            Php 2,000.00
                        </h1>
                        <p className='text-red-500 text-sm'>Php 500.00 <strong className='text-green-400'>25% OFF</strong></p>
                    </div>

                    {/* set color or set color image */}
                    <div>
                        <ul className='inline-flex space-x-2'>
                            {
                                SetColorProdImage.map((color, index) => (
                                    <li key={index} className='w-16 h-16 rounded-lg'>
                                        <img src={color.src} alt={color.name} className='rounded-lg'/>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h1>Select Size</h1>
                            <h1>Size Guide</h1>
                        </div>
                        <div>
                            <ol className='flex space-x-2'>
                                {
                                    ListSize.map((size, index) => (
                                        <li key={index} className='2xl:w-14 border border-gray-300 font-medium flex justify-center rounded-lg'>
                                            {size.name}
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between'>
                            <h1>Quantity</h1>
                            <p>- 1 +</p>
                            <span>14418 pieces avaible</span>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <div className='border flex justify-center text-white font-medium bg-slate-950 py-2 rounded-lg'>
                            <button>
                                Buy this Item
                            </button>
                        </div>
                        <div className='border border-gray-700 flex justify-center text-black font-medium py-2 rounded-lg'>
                            <button>
                                Add to Cart
                            </button>
                        </div>
                        <div className='flex justify-between font-medium'>
                            <button>Chat </button>
                            <button>| Wishlist |</button>
                            <button>Share</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-5 2xl:mx-32 border border-gray-300 rounded-xl 2xl:w-[700px] 2xl:-mt-12'>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <img src={ProdImage[11]} alt="" className='w-10 h-10 rounded-full border border-gray-400'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Nike Mall</h1>
                            <span className='text-green-500 text-sm'>Online</span>
                        </div>
                    </div>
                    <div className='space-x-3'>
                        <button className='2xl:font-medium 2xl:w-28 border border-gray-600 p-1 rounded-lg'>Follow</button>
                        <button className='2xl:font-medium 2xl:w-28 border border-gray-600 p-1 rounded-lg'>Visit Store</button>
                    </div>
                </div>
                <div>
                    <ol className='flex justify-between'>
                        <li className='text-gray-600'>
                            Rating Store : <strong>96%</strong>
                        </li>
                        <li>
                            Location Store : <strong>Manila Makati</strong>
                        </li>
                        <li>
                            Chat Reply : <strong>98%</strong>
                        </li>
                    </ol>
                </div>
            </div>

            <div className='2xl:mx-32 2xl:mt-10'>
                <div>
                    <div className='flex justify-between'>
                        <div className='space-x-3'>
                            <button className='font-medium w-auto py-2 px-5 rounded-lg border bg-slate-950 text-white'>Description</button>
                            <button className='font-medium w-auto py-2 px-5 rounded-lg border border-gray-400'>Review</button>
                        </div>
                        <div>
                            <button className='font-medium flex items-center'><TbReportAnalytics/> Report Product</button>
                        </div>
                    </div>

                    <div className='2xl:mt-10 space-y-5'>
                        <h1 className='text-xl font-semibold'>Products Details</h1>
                        <p className='w-full h-auto text-justify text-gray-700'>
                            This Ben Hogan Mens Solid Ottoman Golf Polo Shirt makes for versatile casual wear or golf apparel. Buil-in moisture
                            wicking and sun protection keep you feeling dry while blocking out harmful UV rays. Durable texture Ottoman fabric and a
                            ribbed collar with three-button placket give it classic polo style. The color makes this golf top easy to pair up with any pants
                            or short for style that looks great both on and off the course.
                        </p>
                        
                        <div>
                            <div className='flex 2xl:space-x-5'>
                                <p className='w-52'>Package Dimensions</p>
                                <p> : </p>
                                <strong>27.3 x 24.8 x 4.9 cm 180g</strong>
                            </div>
                            <div className='flex 2xl:space-x-5'>
                                <p className='w-52'>Specification </p>
                                <p> : </p>
                                <strong>Moisture Wicking, Stretchy, SPF/UV Protection, Easy Care</strong>
                            </div>
                            <div className='flex 2xl:space-x-5'>
                                <p className='w-52'>Date First Available</p>
                                <p> : </p>
                                <strong>August 08, 2023</strong>
                            </div>
                            <div className='flex 2xl:space-x-5'>
                                <p className='w-52'>Department</p>
                                <p> : </p>
                                <strong>Mens</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* bundle promo discound */}
            <div className='2xl:mt-12 2xl:h-96 w-full bg-slate-200'>
                <div className='2xl:mx-12 space-y-3'>
                    <div className='2xl:flex 2xl:justify-between pt-2 2xl:space-x-3'>
                        <div>
                            <h1 className='font-medium'>Current Discount Items</h1>
                        </div>
                        <div>
                            <button className='text-gray-500'>See More</button>
                        </div>
                    </div>
                    <div className='w-52 h-auto bg-white border border-gray-900 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl'>
                        <img src={ProdImage[10]} alt="" className='w-52 h-44 rounded-tl-xl rounded-tr-xl'/>
                        <div className='py-2 px-3'>
                            <h1 className='border border-black w-full truncate'>
                                Product Name asdasdasd dasdsa
                            </h1>
                            <h2 className=' font-medium'>
                                Php 2,500.00
                            </h2>
                            <span className='text-red-500'>
                                Php 350
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Reviews */}
            <div className='2xl:mt-10 2xl:mx-10'>
                <div className=''>
                    <h1 className=' font-medium text-3xl my-5'>
                        Customer Reviews
                    </h1>
                    <div className='flex justify-evenly w-full border border-gray-400 rounded-lg p-5'>
                        <div className='flex items-center space-x-5'>
                            <div>
                                <h1 className='border-4 border-black p-4 rounded-full font-medium text-lg'>4.8</h1>
                            </div>
                            <div>
                                <p>⭐⭐⭐⭐⭐</p>
                                <p className=' text-sm font-bold'>95% of buyers are satisfied</p>
                                <span className='text-xs'>98 rating • 125 Reviews</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <hr className='w-28 rotate-90 border border-black' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center space-x-3'>
                                <div>
                                ⭐ 5
                                </div>
                                <div className="w-44 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                                    <div className="bg-black h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                                <p className='text-sm font-medium'>136</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div>
                                ⭐ 4
                                </div>
                                <div className="w-44 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                                    <div className="bg-black h-2.5 rounded-full" style={{ width: '50%' }}></div>
                                </div>
                                <p className='text-sm font-medium'>33</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div>
                                ⭐ 3
                                </div>
                                <div className="w-44 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                                    <div className="bg-black h-2.5 rounded-full" style={{ width: '25%' }}></div>
                                </div>
                                <p className='text-sm font-medium'>9</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div>
                                ⭐ 2
                                </div>
                                <div className="w-44 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                                    <div className="bg-black h-2.5 rounded-full" style={{ width: '14%' }}></div>
                                </div>
                                <p className='text-sm font-medium'>10</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div>
                                ⭐ 1
                                </div>
                                <div className="w-44 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                                    <div className="bg-black h-2.5 rounded-full" style={{ width: '5%' }}></div>
                                </div>
                                <p className='text-sm font-medium'>2</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <hr className='w-28 rotate-90 border border-black' />
                        </div>
                        <div className='grid grid-cols-3 gap-1'>
                            {
                                Reviews.map((reviews, index) => (
                                    <div key={index} className='flex justify-center rounded-lg h-10 min-w-max items-center border border-gray-400'>
                                        <h1 className='px-3 py-2'>{reviews.name} ( {reviews.value} )</h1>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='2xl:mt-10 2xl:mx-10 grid grid-cols-2 gap-2'>
                {
                    VisibleReviews.map((customrev, index) => (
                        <div key={index} className='border border-gray-300 p-5 rounded-lg shadow-lg'>
                            <div className='flex justify-between'>
                                <span>{customrev.star}</span>
                                <p>{customrev.date}</p>
                            </div>
                            <h1>{customrev.title}</h1>
                            <h3>{customrev.productName}</h3>
                            <p>{customrev.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className='2xl:mt-10 flex justify-center items-center'>
                <div className='border-2 border-slate-600 px-10 py-2 rounded-lg'>
                    <button className='font-medium'>See All Reviews</button>
                </div>
            </div>

            <div className='flex justify-between 2xl:mt-10 2xl:mx-5'>
                <div>
                    <h1 className=' font-semibold'>Best Selling</h1>
                </div>
                <div className='flex space-x-2'>
                    <button onClick={handlePrev} className='flex rounded-md justify-center hover:shadow-lg py-1 w-10 border border-black'><FiArrowLeft/></button>
                    <button onClick={handleNext} className='flex rounded-md justify-center hover:shadow-lg py-1 w-24 border bg-black text-white'><FiArrowRight/></button>
                </div>
            </div>

            {/* Best Selling Products */}
            <div className='2xl:mt-5 2xl:mx-5 grid 2xl:grid-cols-7'>
                {FilteringTopProd.slice(currentIndex * ITEMS_PER_PAGE, (currentIndex + 1) * ITEMS_PER_PAGE).map((filter, index) => (
                    <div key={index} className='w-52 border rounded-tl-xl rounded-tr-xl'>
                        <div className='relative'>
                            <TbBadgeFilled className='absolute top-1 text-5xl rotate-90' color={filter.standing === '1' ? 'gold' : filter.standing === '2' ? 'silver' : filter.standing === '3' ? 'CD7F32' : 'gray'} /> <p className='absolute top-4 left-4 text-white'>{filter.standing}</p>
                            <div className='absolute flex justify-center items-center bg-white top-4 right-3 w-8 p-2 rounded-full'>
                                <button><FaHeart className='text-gray-400'/></button>
                            </div>
                        </div>
                        <img src={filter.src} alt="" className='w-full h-44 rounded-tl-xl rounded-tr-xl' />
                        <div className='2xl:mt-4 px-2'>
                            <h1 className=' font-medium w-full h-12 line-clamp-2'>{filter.productName}</h1>
                            <p className='text-gray-400 text-sm'><strong className='text-black'>⭐ {filter.starRating}</strong> • {filter.soldItem}+ Sold</p>
                            <h2 className='font-bold'>Php {parseFloat(filter.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemView