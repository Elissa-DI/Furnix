import React from 'react'

const Footer = () => {
    return (
        <footer className='py-7 w-full px-14'>
            <div className='w-full grid md:grid-cols-3 gap-5 border-b'>
                <div className='w-full p-5'>
                    <h3 className='font-bold text-2xl mb-12'>Furniro.</h3>
                    <p>400 University Drive Suite 200 Coral <br />
                        Gables, <br /> FL 33134 USA</p>
                </div>
                <div className='flex justify-around'>
                    <div>
                        <p className='mb-6 text-slate-400'>Links</p>
                        <ul className='flex flex-col gap-5'>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className='mb-6 text-slate-400'>Help</p>
                        <ul className='flex flex-col gap-5'>
                            <li><a href="/home">Payment options</a></li>
                            <li><a href="/shop">Returns</a></li>
                            <li><a href="/about">Privacy policies</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='mb-6 text-slate-400'>Newsletter</p>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='Your email address' className='' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className='px-2 py-5'>
                <p>2024 Furniro. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer