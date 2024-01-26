"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
const navbar = () => {
    return (
        <nav className="flex w-full mb-10 pt-3">
            <Link href="/" className="flex gap-1">
                <Image
                    src='/assets/icons/logo.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p className="hidden md:block font-bold text-sm md:text-2xl">Furniro</p>
            </Link>
        </nav>
    )
}

export default navbar