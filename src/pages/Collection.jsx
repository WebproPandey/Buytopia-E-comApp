import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'

const Collection = () => {
  const {products}  = useContext(ShopContext)
  const [showfilter , setShowfilter] = useState(false)
  const [filterProduct , setFilterProduct] = useState([])
  const [subCategory , setSubCategory] = useState([])
  const [catrgory , setCategory] =  useState([])
  const [sortType ,setSortType] =  useState('relevant')

  const toggleCategory = (e) =>{
    if(catrgory.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))      
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const Applyfilter = () =>{
    let productsCopy =  products.slice()
    if(catrgory.length > 0){
      productsCopy = productsCopy.filter(product => catrgory.includes(product.category))
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(product => subCategory.includes(product.subCategory))
      
    }
    setFilterProduct(productsCopy)
  }

   const sortProduct =  (e) =>{
      let fpcopy = filterProduct.slice();
      switch (sortType){
        case 'low-high':
          setFilterProduct(fpcopy.sort((a,b) => a.price - b.price))
        break;
        case 'high-low':
          setFilterProduct(fpcopy.sort((a,b) => b.price - a.price))
        break;
        default:
          Applyfilter();
          break;
      }
   }

  useEffect(() =>{
    Applyfilter()
  },[catrgory, subCategory])
  useEffect(() =>{
  sortProduct()
  },[sortType])

 


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
       {/* Filter Opetion */}
        <div className='min-w-60'>
          
            <p  onClick={() => setShowfilter(!showfilter)} className='text-center cursor-pointer gap-2 flex  items-center py-2 text-xl'>Filters
              <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showfilter ? " rotate-90" : "" } `} alt="" />
            </p>
            {/* catrgory filter */}
            <div className={`border border-gray-300  pl-5 py-3 mt-6 ${showfilter ? "" : "hidden"} sm:block`}>
               <p className='mb-3 text-sm font-medium'>Category</p>
               <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                 <div className='flex gap-3'>
                  <input type="checkbox" value={'Men'} className='w-3 ' name="" id="" onChange={toggleCategory} />Men
                 </div>
                 <div className='flex gap-3'>
                  <input type="checkbox" value={'Women'} className='w-3 ' name="" id="" onChange={toggleCategory} />Women
                 </div>
                 <div className='flex gap-3'>
                  <input type="checkbox" value={'Kids'} className='w-3 ' name="" id="" onChange={toggleCategory} />Kids
                 </div>
               </div>
            </div>
            {/* SunCatrgory filter */}
            <div className={`border border-gray-300  pl-5 py-3 my-6 ${showfilter ? "" : "hidden"} sm:block`}>
               <p className='mb-3 text-sm font-medium'>Types</p>
               <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                 <div className='flex gap-3'>
                  <input type="checkbox" value={'Topwear'} className='w-3 ' name="" id="" onChange={toggleSubCategory} />TopWear
                 </div>
                 <div className='flex gap-3'>
                  <input type="checkbox" value={'Bottomwear'} className='w-3 ' name="" id="" onChange={toggleSubCategory} />BottomWear
                 </div>
                 <div className='flex gap-3'>
                  <input type="checkbox" value={'Winterwear'} className='w-3 ' name="" id="" onChange={toggleSubCategory} />WinterWear
                 </div>
               </div>
            </div>

        </div>
        {/* Right Side  */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTION'}  />
            {/* Product sort */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 text-sm px-2 border-gray-300' name="" id="">
              <option  value="relevant">Sort by :Relevent</option>
              <option  value="low-high">Sort by :Low to High</option>
              <option  value="high-low">Sort by :High to Low</option>
            </select>
          </div>
          {/* Map products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
             {
              filterProduct.map((item , index) => (
                <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
              ))
             }

          </div>

        </div>
    </div>
  )
}

export default Collection