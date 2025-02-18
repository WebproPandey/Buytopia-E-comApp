import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id , image , name , price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray-700  cursor-pointer '>
        <div className='overflow-hidden  '>
          <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" />
        </div>
        <div className=''>
          <div className='pt-3 pb-1 text-sm  whitespace-nowrap overflow-hidden text-ellipsis'>{name}</div>
          <div className='text-gray-700 text-sm font-medium'   >{currency}{price}</div>
        </div>
         
    </Link>
  )
}

export default ProductItem