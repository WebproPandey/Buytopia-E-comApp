import React from 'react'

const NewletterBox = () => {

    const onSubmithander = (e) =>{
        e.preventDefault()
    }
  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-500 mt-3'>
            Sign up for our newsletter and receive exclusive offers and promotions.
        </p>

        <form onSubmit={onSubmithander} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
            <input className='w-full sm:flex-1  outline-none' type="email" placeholder='Enter Your Email' name="" id="" required />
            <button type='submit' className='bg-black text-sm px-10 py-4 text-white uppercase'>Subscribe</button>
        </form>

    </div>
  )
}

export default NewletterBox