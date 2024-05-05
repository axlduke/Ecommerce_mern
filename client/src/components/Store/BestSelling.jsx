import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const BestSelling = ({ BestSellings }) => {
    const ITEMS_PER_PAGE = 7;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === BestSellings.length - 1 ? 0 : prevIndex - 1 === 0 ? 1 : prevIndex + 1))
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? BestSellings.length - 1 : prevIndex - 1));
    };
    

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 3000); // Change slide every 3 seconds
    
    //     return () => clearInterval(interval);
    // }, [currentIndex]);
    
    
    return (
        <div>
            <div className='flex justify-between 2xl:mt-10 2xl:mx-5'>
                <div>
                    <h1 className='font-semibold'>Best Selling</h1>
                </div>
                <div className='flex space-x-2'>
                    <button onClick={prevSlide} disabled={currentIndex === 0} className='flex rounded-md justify-center hover:shadow-lg py-1 w-10 border border-black'><FiArrowLeft/></button>
                    <button onClick={nextSlide} disabled={currentIndex === BestSellings.length - 1} className='flex rounded-md justify-center hover:shadow-lg py-1 w-24 border bg-black text-white'><FiArrowRight/></button>
                </div>
            </div>

            <div className='2xl:mt-5 2xl:mx-5 grid 2xl:grid-cols-7'>
                {BestSellings.slice(currentIndex * ITEMS_PER_PAGE, (currentIndex + 1) * ITEMS_PER_PAGE).map((filter, index) => (
                    <div key={index} className='w-52 border rounded-tl-xl rounded-tr-xl'>
                        <div className='relative'>
                            {/* Your TbBadgeFilled and other elements */}
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
    );
};

// Add prop validation
BestSelling.propTypes = {
    BestSellings: PropTypes.array.isRequired // Validate that BestSellings is an array and is required
};

export default BestSelling;
