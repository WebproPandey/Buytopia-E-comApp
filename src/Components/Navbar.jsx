import React, { useContext } from 'react'
import  {assets}  from '../assets/frontend_assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible , setVisible] =  useState(false)
    const {setShowSearch , getcartCounts} = useContext(ShopContext)

  return (
    <div className='flex items-center  justify-between py-5 font-medium'>
      <Link  to="/" className=''>
        <img src={assets.logo} className='w-40  filter invert '  alt="" />
      </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
             <NavLink to="/" className='flex items-center  flex-col gap-1'>
                <p>Home</p>
                <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
             <NavLink to="/collection" className='flex items-center  flex-col gap-1'>
                <p>Collection</p>
                <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
             <NavLink to="/about" className='flex items-center  flex-col gap-1 '>
                <p>About</p>
                <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
             <NavLink to="/contact" className='flex items-center  flex-col gap-1'>
                <p>Contact</p>
                <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
         </ul>
         <div className='flex items-center  gap-6'>
           <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer  ' alt="" />
           <div className='group relative'>
            <Link to='/login'>
            <img src={assets.profile_icon}  className =" w-5 cursor-pointer" alt="" />
            </Link>
              <div className='group-hover:block  hidden  absolute  dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                  <p className='cursor-pointer hover:text-black'> My Profile</p>
                  <p className='cursor-pointer hover:text-black'> Orders</p>
                  <p className='cursor-pointer hover:text-black'> Logout</p>
                </div>
              </div>
           </div>
           <Link to="/cart" className='relative'>
             <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
             <p className='w-4 absolute right-[-5px] bottom-[-5px] text-center leading-4 bg-black text-white aspect-square rounded-full  text-[8px]'>{getcartCounts()}</p>
           </Link>
           <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
         </div>

         {/* Mobile Menu */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-slate-100 transition-all delay-75 duration-700 ease-in-out ${visible ? "w-1/2" : "w-0"}`}>   
             <div className='flex flex-col  text-gray-600'>
                <div onClick={()=> setVisible(false)} className='flex items-center  gap-4 p-3 cursor-pointer'>
                   <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                   <p>Back</p>
                </div>
                <div className='flex flex-col gap-4'>

                <NavLink onClick={()=> setVisible(false)} to="/" className=' flex items-center flex-col  gap-3 px-3 py-2'>
                   <p>Home</p>
                   <hr className='w-1/2  border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink onClick={()=> setVisible(false)} to="/collection" className='  flex items-center flex-col  gap-3 px-3 py-2'>
                   <p>Collection</p>
                   <hr className='w-1/2  border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink onClick={()=> setVisible(false)}  to="/about" className=' flex items-center flex-col  gap-3 px-3 py-2'>
                   <p>About</p>
                   <hr className='w-1/2  border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink onClick={()=> setVisible(false)} to="/contact" className='  flex items-center flex-col  gap-3 px-3 py-2'>
                   <p>Contact</p>
                   <hr className='w-1/2  border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                </div>

             </div>
            </div>  


    </div>
  )
}

export default Navbar