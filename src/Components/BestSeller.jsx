import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestseller , setBestSeller] = useState([])  

    useEffect(() => {
        const bestProduct = products.filter((items) => (items.bestseller))
        setBestSeller(bestProduct.slice(0,6))
        
    },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8  text-3xl '>
           <Title text1={'BEST'} text2={'SELLERS'}/>
           <p className='w-3/4  m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Explore our bestsellers from our wide range of brands, featuring innovative designs and superior quality.
            Enjoy free shipping on orders over ₹500 and access exclusive deals and promotions.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  gap-y-6'>
            {
               bestseller.map((items, index) => (
                   <ProductItem id={items._id} key={index} image={items.image} price={items.price} name={items.name}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller