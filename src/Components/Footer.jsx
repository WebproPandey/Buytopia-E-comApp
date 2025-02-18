import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
    <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
         <div>
            <img src={assets.logo} className='mb-5 w-32 ' alt="" />
            <p className='w-full md:w-2/3 text-gray-700'>
                Buytopia is an online retail platform that connects consumers with the best deals and products from various brands.
            </p>
         </div>
         <div>
            <p className='text-xl font-medium mb-5 uppercase'>company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
         </div>
         <div>
            <p className='text-xl font-medium mb-5 uppercase'>help & support</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>FAQ</li>
                <li>Contact us</li>
                <li>Returns and exchanges</li>
                <li>Terms & Conditions</li>
            </ul>
         </div>
        
    </div>
    <div className='w-full  items-center justify-center '>
            <hr className='w-full'/>
            <p className='text-center text-sm py-5'>
                Copyright © 2025 Buytopia. All rights reserved
            </p>
         </div>
    </div>
  )
}

export default Footer