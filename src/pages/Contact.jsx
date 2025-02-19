import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewletterBox from '../Components/NewletterBox'

const Contact = () => {
  return (
    <div>
       <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
       </div>
       <div className='flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center  items-start gap-6'>
           <p className='font-semibold text-xl text-gray-700'>Our Store</p>
           <p className='text-gray-500'>Address: 123 Main Street, City, State, ZIP Code</p>
           <p className='text-gray-500'>
            Phone: +1 (123) 456-7890 <br />
            Email:  info@example.com
           </p>
           <p className='font-semibold text-gray-700 text-xl'>
             Careers at Primintra
           </p>
           <p className='text-gray-500'>Learn more about our teams and job openings.</p>
           <button className='border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-500  ease-in-out'>Explore Jobs</button>
        </div>
       </div>
       <NewletterBox />

    </div>
  )
}

export default Contact