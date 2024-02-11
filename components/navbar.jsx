'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navIcons = [
        { name: "profile", icon: FaUser, path: "/profile" },
        { name: "search", icon: FaSearch, path: "/search" },
        { name: "favorite", icon: FaHeart, path: "/favorite" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex-between w-full py-5 px-16">
            {/* Logo and brand */}
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

            {/* Desktop navigation */}
            <div className="w-96 ml-10 hidden md:block">
                <ul className="flex gap-16 font-semibold">
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/about">About</Link>
                    <Link href="/account">Account</Link>
                </ul>
            </div>

            {/* Icons and Cart for desktop */}
            <div className="w-[198px] hidden md:block">
                <ul className="flex gap-x-9">
                    {navIcons.map((navIcon, index) => (
                        <Link key={index} href={navIcon.path}>
                            <navIcon.icon size={18} />
                        </Link>
                    ))}
                    <button>
                        <FaShoppingCart size={22} />
                    </button>
                </ul>
            </div>
            {/* Mobile toggle button */}
            <button className="block md:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Mobile navigation */}
            {isMobileMenuOpen && (
                <div
                    className={`absolute top-16 rounded-lg px-10 pb-12  border-2 z-40 left-0 w-full pl-1  transition-all duration-500 bg-transparent h-auto ease-in ${isMobileMenuOpen ? 'left-0' : '-left-[100px]'}`}
                >
                    <div className="bg-white rounded-lg ml-8 py-2">
                        <div className="flex items-center justify-center">
                            <ul className="flex flex-col gap-2 font-semibold">
                                <Link href="/">Home</Link>
                                <Link href="/shop">Shop</Link>
                                <Link href="/about">About</Link>
                                <Link href="/account">Account</Link>
                            </ul>
                        </div>
                        <div className="w-full flex items-center justify-center mt-2 py-4">
                            <ul className="flex gap-x-9">
                                {navIcons.map((navIcon, index) => (
                                    <Link key={index} href={navIcon.path}>
                                        <navIcon.icon size={18} />
                                    </Link>
                                ))}
                                <button>
                                    <FaShoppingCart size={22} />
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
