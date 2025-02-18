import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center  py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
        <div className=''>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold ' >Easy Exchange Policy</p>
            <p className='text-gray-500'>We Offer hassle free exchange Policy.</p>
        </div>
        <div className=''>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold ' >7 Day Return Policy</p>
            <p className='text-gray-500'>We Provide 7 day  free return Policy </p>
        </div>
        <div className=''>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold ' >Best customer Support</p>
            <p className='text-gray-500'>We Provide 24/7 customer support</p>
        </div>
        
    </div>
  )
}

export default OurPolicy