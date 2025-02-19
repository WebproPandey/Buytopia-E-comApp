import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Components/Title'

const Orders = () => {

  const {products , currency  } = useContext(ShopContext)
  return (
    <div className='border-t pt-16'>
       <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
       </div>
       <div className=''>
          {
            products.slice(0,4).map((iteam, index) => (
             <div className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
             <div className='flex items-start gap-6 text-sm'>
              <div className=''>
                 <img src={iteam.image[0]} className='w-16 sm:w-26' alt="" />
              </div>
              <div>
                <p className='sm:text-base font-medium'>{iteam.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                 <p className='text-lg'>{currency}{iteam.price}</p>
                 <p>Qunatity: 1</p>
                 <p>Size :M</p>
                </div>
                <p>Date: <span className='text-gray-400'>25,  july 2025</span></p>
              </div>
             </div>
             <div className='md:w-1/2 flex justify-between'>
               <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base'>Ready to Ship</p>
               </div>
               <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>

             </div>
             </div>
            ))
          }
       </div>
    </div>
  )
}

export default Orders