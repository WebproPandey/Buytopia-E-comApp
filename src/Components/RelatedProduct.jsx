import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProduct = ({category , subCategory}) => {
    const  {products} = useContext(ShopContext)
    const [Related, setRelated] = useState([])

    useEffect(() =>{
        if (products.length > 0 ){
          let productCopy =  products.slice();
          productCopy = productCopy.filter((iteam) => category ===  iteam.category)
          productCopy = productCopy.filter((iteam) => subCategory ===  iteam.subCategory)
          setRelated(productCopy.slice(0,5));
          
        }
    },[products])
  return (
    <div className='my-24' >
        <div className='text-center text-3xl py-2'>
          <Title text1={'RELATED'} text2={'PRODUCT'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 gap-y-6'>
            {Related.map((items, index) => (
             <ProductItem key={index}  name={items.name} id={items._id} image={items.image} price={items.price} />
            ))}
        </div>
    </div>
  )
}

export default RelatedProduct