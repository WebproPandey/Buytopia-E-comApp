import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import RelatedProduct from '../Components/RelatedProduct'

const Product = () => {
  const {productId} =  useParams()
  const {products ,currency ,addToCart} =  useContext(ShopContext) 
  const [productData , setProductData] = useState(false)
  const [ image , setImage] =  useState('')
  const [size , setSize] = useState('')

  const  fetchProductData = async  () =>
    {
       products.map((iteam) =>{
         if(iteam._id === productId ){
          setProductData(iteam)
          setImage(iteam.image[0])
          return null
          
         }
       })
    } 
    useEffect(() =>{
       fetchProductData()
    },[productId ,products])
  return productData ?  (
    <div className='border-t pt-10 transition-opacity ease-in-out duration-500  opacity-100'>
      {/* product Data */}
     <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      {/* product images */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal
         sm:w-[18.6%] w-full'>
           {
            productData.image.map((iteam ,index) => (
              <img  onClick={() => setImage(iteam)} src={iteam} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'  alt="" />
            ))
           } 
        </div>
        <div className='w-full sm:w-[80%] '>
          <img src={image} alt="" className=' w-full h-auto ' />
        </div>
      </div>
      {/* product Info  */}
      <div className='flex-1 '>
        <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className='w-3 ' />
              <img src={assets.star_icon} alt="" className='w-3 ' />
              <img src={assets.star_icon} alt="" className='w-3 ' />
              <img src={assets.star_icon} alt="" className='w-3 ' />
              <img src={assets.star_dull_icon} alt="" className='w-3 ' />
              <p className='pl-2'>(122)</p>
              
        </div>
         <p className='mt-4 text-3xl font-medium'>{currency} {productData.price}</p>
         <p className='mt-4 text-gray-500 md:w-4/5'>{productData.description}</p>
         <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
             {productData.sizes.map((iteam,index) =>(
              <button onClick={() => setSize(iteam)} key={index} className={`border py-2 px-4 bg-gray-100 ${iteam ===  size ? 'border-orange-500' : ''}`}>{iteam}</button>
             ))}
          </div>

         </div>
         <button onClick={() => addToCart(productData._id , size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
         <hr  className='mt-4 sm:w-4/5 '/>
         <div className='text-sm text-gray-500 mt-4 flex flex-col gap-1'>
               <p>100% Original Products</p>
               <p>Cash  on Delivery is available on this Product</p>
               <p>Easy return And Exchange policy within 7 days.  </p>
         </div>

      </div>
     </div>
     {/* Description & review Section */}
     <div className=' mt-20'> 
        <div className='flex'> 
          <p className='border px-5 py-3 text-sm font-medium'>Description</p>
          <p className='border px-5 py-3 text-sm font-medium'>Review (122)</p>
        </div>
        <div className='flex flex-col gap-2 border px-6 text-sm py-6 text-gray-500'>
              <p>
              This product exceeded my expectations! The quality is top-notch and the delivery was super fast. Highly recommend to anyone looking for a reliable purchase.
              </p>
              <p>
              I am very satisfied with my purchase. The product matches the description perfectly and the customer service was very helpful.
              </p>
              <p>
              Great value for the price. The product is well-made and durable. I will definitely be buying from this site again.
              </p>
              <p>
              The product arrived in perfect condition and works as described. The website is easy to navigate and the checkout process was smooth.
              </p>

        </div>
     </div>

     {/* display Related Products */}
     <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
      
    </div>
  ): <div className='opacity-0'></div>
}

export default Product