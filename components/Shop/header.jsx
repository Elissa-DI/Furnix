import Image from 'next/image'
import { FaFilter } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <div className='w-full relative'>
        <Image
          src='/assets/images/shop.png'
          alt='Shop header_img'
          width='1000'
          height='70'
          className='w-full'
        />
        <div className='absolute top-2/4 w-full flex items-center justify-center'>
          <h3 className='font-bold text-2xl mb-12'>Shop here</h3>
        </div>
      </div>
      <div className='flex justify-between py-6 px-10 bg-[#F9F1E7]'>
        <div className='flex'>
          <p className='flex'>
            <span><FaFilter size={18} /></span> Filter
          </p>
          <p>|</p>
          <p>Showing 1 - 12 of 32 results</p>
        </div>
        <div className='flex'>
          <div className='flex'>
            <p>Show</p>
            <input type="text" value='12' />
          </div>
          <div className='flex'>
            <p>Sort by</p>
            <input type="text" value='Default' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header