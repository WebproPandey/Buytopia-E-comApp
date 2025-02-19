import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewletterBox from '../Components/NewletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
       <Title text1={'ABOUT'}  text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px] ' alt="" />
        <div className='flex flex-col justify-center  gap-6 md:w-2/4 text-gray-600'>
         <p >
           Primintra is an innovative online shopping platform dedicated to providing customers with the best deals, lowest prices, and exclusive access to the latest trends in fashion and lifestyle. We strive to offer our customers the best possible shopping experience and help them make informed purchasing decisions.
         </p>
         <p>
           Our mission is to create a community where everyone can express their love for fashion and lifestyle, and to foster a sense of camaraderie and support among our customers. We believe that everyone deserves to have a chance at experiencing the beauty and uniqueness of the fashion world, and that's why we're committed to providing our customers with the best shopping experience possible.
         </p>
         <b>Our Mission</b>
         <p>
           To create a community where everyone can express their love for fashion and lifestyle, and to foster a sense of camaraderie and support among our customers.
         </p>
        </div>

      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'}  text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-8 md:px-11 py-8 sm:py-14 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We strive to provide our customers with the highest-quality products, and we always follow strict quality control measures to ensure that our products meet all of our customers' expectations.
          </p>
        </div>
        <div className='border px-8 md:px-11 py-8 sm:py-14 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Primintra offers a wide range of products, including clothing, accessories, and home décor, and we strive to make it easy for our customers to find and purchase their desired items.
          </p>
        </div>
        <div className='border px-8 md:px-11 py-8 sm:py-14 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            We are committed to providing our customers with exceptional customer service, and we strive to make our shopping experience as enjoyable and convenient as possible for our customers.
          </p>
        </div>

      </div>
      <NewletterBox />
    </div>
  )
}

export default About