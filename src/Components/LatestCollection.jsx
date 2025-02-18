import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useState } from 'react';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
   const [latestProduct ,setLatestProduct ] =  useState([])
   useEffect(() => {
   setLatestProduct(products.slice(0,10))
   },[])
  return (
    <div className='my-10  '>
        <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTION'} />
          <p className='w-3/4  m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Explore our latest products from our wide range of brands, featuring innovative designs and superior quality.
            Enjoy free shipping on orders over ₹500 and access exclusive deals and promotions.
          </p>
        </div>
        {/* Rendering Products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
            {latestProduct.map((items ,index) => (
              <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}  />
            ))}

        </div>
    </div>
  )
}

export default LatestCollection