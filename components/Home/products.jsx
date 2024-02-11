'use client'

import Image from "next/image"
import { useState } from "react"

import { FaHeart, FaShareAlt, FaArrowsAlt, FaArrowsAltV } from 'react-icons/fa'
const Products = () => {
    const products = [
        { image: '/assets/images/product1.png', name: "Syltherine", title: "Stylish cafe chairs", money: "Rp 2, 500.00", old: "Rp 3,500.00", discount: "-30%" },
        { image: '/assets/images/product7.png', name: "Leviosa", title: "Stylish chair and stool", money: "Rp 2, 500.00", old: "Rp 3,500.00", discount: "-30%" },
        { image: '/assets/images/product3.png', name: "Lolito", title: "Luxury big sofa", money: "Rp 2, 500.00", old: "Rp 3,500.00", discount: "-30%" },
        { image: '/assets/images/product4.png', name: "Respira", title: "Outdoor bar table and stool", money: "Rp 2, 500.00", old: "Rp 3,500.00", discount: "New", isNew: true },
        { image: '/assets/images/product5.png', name: "Syltherine", title: "Stylish cafe chair", money: "Rp 2, 500.00", old: "Rp 3,500.00", discount: "-30%" },
        { image: '/assets/images/product6.png', name: "Leviosa", title: "Stylish chair", money: "Rp 2, 500.00", old: "Rp 3,500.00", discount: "New", isNew: true },
        { image: '/assets/images/product7.png', name: "Lolito", title: "Luxury bigger sofa", money: "Rp 2, 500.00", old: "Rp 3,500.00", discount: "-30%" },
        { image: '/assets/images/product8.png', name: "Respira", title: "Outdoor bar table and stool", money: "Rp 2, 500.00", old: "Rp 3,500.00", discount: "New", isNew: true }

    ]

    const [hoveredProduct, setHoveredProduct] = useState(null);
    return (
        <div className='md:px-16 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {products.map((product, index) => (
                <div
                    key={product.title}
                    className="relative bg-[#F4F5F7]"
                    onMouseEnter={() => setHoveredProduct(index)} // Set the hovered product index
                    onMouseLeave={() => setHoveredProduct(null)}  // Reset when mouse leaves
                >
                    <div className='relative'>
                        <Image
                            src={product.image}
                            alt={product.title}
                            height={40}
                            width={260}
                        />
                        <div
                            className="absolute top-4 right-4 rounded-full w-10 h-10 flex items-center justify-center text-white text-sm"
                            style={{ backgroundColor: product.isNew ? 'green' : 'red' }}
                        >
                            {product.discount}
                        </div>
                    </div>
                    <div className='px-3 mt-3'>
                        <p className='font-bold py-2'>{product.name}</p>
                        <p className='z-0'>{product.title}</p>
                        <div className='flex justify-between text-sm py-3'>
                            <div className='font-bold text-base'>{product.money}</div>
                            <div className='z-0 line-through'>{product.old}</div>
                        </div>
                    </div>
                    {/* Conditionally render the "Hello" div based on hover state */}
                    {hoveredProduct === index && (
                        <div className="absolute flex flex-col top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 justify-center items-center">
                            <div>
                                <button className='bg-white hover:bg-[#fffce7] text-[#B88E2F] hover:text-black px-14 py-3 font-bold'>
                                    Add to cart
                                </button>
                            </div>
                            <div className="flex gap-x-5 mt-5">
                                <p className="flex justify-items-center items-center gap-1 cursor-pointer text-white">
                                    <FaShareAlt />Compare
                                </p>
                                <p className="flex justify-items-center items-center gap-1 cursor-pointer text-white">
                                    <FaArrowsAltV />Share
                                </p>
                                <p className="flex justify-items-center items-center gap-1 cursor-pointer text-white">
                                    <FaHeart />Like
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Products