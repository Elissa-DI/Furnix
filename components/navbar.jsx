"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'

const navbar = () => {

    const navIcons = [
        { name: "profile", icon: FaUser, path: "/profile" },
        { name: "search", icon: FaSearch, path: "/search" },
        { name: "favorite", icon: FaHeart, path: "/favorite" },
    ];

    return (
        <nav className="flex-between w-full py-5 px-16">
            //Desktop navigation
            <div>
                <Link href="/" className="flex gap-1">
                    <Image
                        src='/assets/icons/logo.svg'
                        alt='logo'
                        width={30}
                        height={30}
                        className='object-contain'
                    />
                    <p className="hidden md:block font-bold text-sm md:text-2xl">Furnix</p>
                </Link>

                <div className="w-96 ml-10 hidden md:block">
                    <ul className="flex gap-16 font-semibold">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/about">About</Link>
                        <Link href="/account">Account</Link>
                    </ul>
                </div>

                <div className="w-[198px] hidden md:block">
                    <ul className="flex gap-x-9">
                        {navIcons.map((navIcon, index) => (
                            <Link key={index} href={navIcon.path}>
                                <navIcon.icon
                                    size={18}
                                />
                            </Link>
                        ))}
                        <button>
                            <FaShoppingCart
                                size={22}
                            />
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar