'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider-container relative">
            <div className='absolute top-[50%] right-[24%] flex items-center justify-between bg-white rounded-full border border-[#B88E2F] p-1'>
                <button onClick={nextSlide} className="slider-button next">
                    <FaArrowRight size={16} />
                </button>
            </div>
            <div className="slider">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={index === currentIndex ? 'slide active' : 'slide'}
                    >
                        {index === currentIndex && (
                            // <img src={image} alt={`Slide ${index + 1}`} />
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                width={300}
                                height={100}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
