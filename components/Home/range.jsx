import '../../styles/globals.css';

const Range = () => {
  return (
    <div>
      <div className='w-full'>
        <img
          src='/assets/images/scandinavian-interior-mockup-wall-decal-background 1.png'
          alt='interior-mockup'
          className='hidden md:block w-full'
        />
        <img
          src="/assets/images/phone1.jpg"
          alt="Phone intro image"
          className='md:hidden block w-full'
        />
        <div className="buy-it">
          <p className="font-bold text-xl mb-5 tracking-wide">New Arrival</p>
          <p className="font-extrabold tracking-wide text-4xl text-[#C09A45] mb-5">Discover Our <br />New Collection</p>
          <p className='hidden md:block'>Discover a world of style and comfort with our exquisite furniture collection – where every room becomes a masterpiece.</p>
          <button className="px-14 py-5 bg-[#B88E2F] hover:border hover:border-[#B88E2F] hover:bg-white hover:text-[#b88e2f] font-bold mt-10">
            Buy now
          </button>
        </div>

      </div>
      <div className='py-6'>
        <div className='w-full flex flex-col justify-center items-center mb-6'>
          <h3 className='font-bold text-2xl'>Browse The Range</h3>
          <p>Here are the best available rooms at the moment!</p>
        </div>
        <div className='flex flex-col md:flex-row gap-2 md:gap-7 px-3 md:px-48 '>
          <div className='flex flex-col justify-center items-center'>
            <img
              className='range-img'
              src="/assets/images/dining.png"
              alt="Dining image"
            />
            <h4 className='font-semibold text-2xl'>Dining</h4>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img
              className='range-img'
              src="/assets/images/living.png"
              alt="Living image"
            />
            <h4 className='font-semibold text-2xl'>Living</h4>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img
              className='range-img'
              src="/assets/images/bedroom.png"
              alt="Bedroom image"
            />
            <h4 className='font-semibold text-2xl'>Bedroom</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Range