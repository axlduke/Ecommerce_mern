import React, { useState } from 'react'
import { ProdImages, ProdImage } from './productInfo'


const Thumbnail = ({ setMainImage }) => {

    const VisibleProdImage = ProdImage.slice(0, 5)

    const defaultMainImage = ProdImages

    const [ mainImage, setLocalMainImage ] = useState(defaultMainImage)

    const handleThumbnailHover = (imageSrc) => {
        setLocalMainImage(imageSrc)
        setMainImage(imageSrc)
    }

    return (
        <div>
            <ul className='space-y-2'>
                {
                    VisibleProdImage.map((image, index) => (
                    <li key={index} className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-22 2xl:h-20'>
                        <img src={image.src} alt="" className='2xl:w-20 2xl:h-20 border border-gray-300 rounded-lg'
                            onMouseEnter={() => handleThumbnailHover(image.src)}
                        />
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Thumbnail