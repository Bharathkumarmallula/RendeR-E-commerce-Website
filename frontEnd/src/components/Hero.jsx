// eslint-disable-next-line no-unused-vars
import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero Left side */}
        <img className='w-full sm:w-1/2' src={assets.display_pic} alt="" />
        {/* Hero Right side */}
        
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className="text-[#414141]]">
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'> </p>
                    <p className='font-medium text-sm md:text-base'>Our Best Seller</p> 
            </div>
            <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leaading-realxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font:semibold text-sm md:text-base'>Shop Now</p>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'> </p>

            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Hero