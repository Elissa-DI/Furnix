import ImageSlider from "./imageSlider"

import Image from "next/image"
import { FaArrowRight } from 'react-icons/fa'

const Slider = () => {
    const images = [
        '/assets/images/slide_1.png',
        '/assets/images/slide_2.png',
    ]
    return (
        <div className='w-full grid md:grid-cols-3 gap-5 bg-[#FCF8F3] pl-40 pr-10'>
            <div className="flex flex-col justify-center items-center">
                <h3 className='font-bold text-2xl'>Browse The Range</h3>
                <p>Here are the best available rooms at the moment!</p>
                <button className="px-14 py-5 bg-[#B88E2F] hover:border hover:border-[#B88E2F] hover:bg-white hover:text-[#b88e2f] font-bold mt-10">
                    Explore more
                </button>
            </div>
            <div className="relative">
                <Image
                    src='/assets/images/slider_1.png'
                    alt="slider_1"
                    width={300}
                    height={100}
                />
                <div className="absolute flex justify-center items-center left-3 bottom-3">
                    <div className="bg-white p-4">
                        <p>01  -  Bed Room</p>
                        <h3 className='font-bold text-xl'>Inner peace</h3>
                    </div>
                    <div>
                        <button className="p-2 bg-[#B88E2F] hover:border hover:border-[#B88E2F] hover:bg-white hover:text-[#b88e2f] font-bold mt-10 bottom-0">
                            <FaArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <ImageSlider images={images} />
            </div>
        </div>
    )
}

export default Slider