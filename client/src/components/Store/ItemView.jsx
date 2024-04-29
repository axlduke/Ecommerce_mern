import React from 'react'
import Nav from '../Route/Nav'
import { Link } from 'react-router-dom'

import img1 from '../../assets/ProdImage/1.png'
import img2 from '../../assets/ProdImage/2.png'
import img3 from '../../assets/ProdImage/3.png'
import img4 from '../../assets/ProdImage/4.png'
import img5 from '../../assets/ProdImage/5.png'
import img6 from '../../assets/ProdImage/6.png'
import img7 from '../../assets/ProdImage/7.png'
import img8 from '../../assets/ProdImage/8.png'
import img9 from '../../assets/ProdImage/9.png'
import img10 from '../../assets/ProdImage/10.png'


function ItemView() {
    const ProdImage = [
        {name: 'img1', src: img1},
        {name: 'img2', src: img2},
        {name: 'img3', src: img3},
        {name: 'img4', src: img4},
        {name: 'img5', src: img5},
        {name: 'img6', src: img6},
        {name: 'img7', src: img7},
    ]

    const setColorImage = [
        {name: 'Pink White', src: img1},
        {name: 'Gray Black', src: img8},
        {name: 'Green Black', src: img9},
        {name: 'Gray White', src: img10},
    ]

    const VisibleProdImage = ProdImage.slice(0, 5)
    const SetColorProdImage = setColorImage.slice(0, 4)

    const ListSize = [
        {name: 'XS'},
        {name: 'S'},
        {name: 'M'},
        {name: 'L'},
        {name: 'XL'},
        {name: '2XL'},
        {name: '3XL'},
    ]

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
                                <li key={index} className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-22 2xl:h-20 border rounded-lg'>
                                    <img src={image.src} alt="" className='2xl:w-20 2xl:h-20'/>
                                </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='2xl:flex 2xl:justify-center 2xl:items-center border rounded-lg 2xl:w-[600px] 2xl:h-[430px]'>
                        <img src={img1} alt="" className='2xl:w-[600px] 2xl:h-[430px]'/>
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
                                        <li key={index} className='2xl:w-14 border flex justify-center rounded-lg'>
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
                        <div className='flex justify-between'>
                            <button>Chat </button>
                            <button>| Wishlist |</button>
                            <button>Share</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                sdfsdfs
            </div>
        </div>
    )
}

export default ItemView