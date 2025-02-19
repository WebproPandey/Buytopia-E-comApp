import React, { useState } from 'react'

const Login = () => {
  const [currectState , setCurrectState] = useState('Sign Up')
  const  onSubmitHandler  = async (e) =>{
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currectState}</p>
        <hr  className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currectState === 'Login' ? '' :
       <input type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name'   required/>      
      }
        <input type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required />
        <input type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password'  required/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
         <p className='cursor-pointer'>Forgot your Password ?</p>
         {
          currectState === 'Login'? 
           <p className='cursor-pointer' onClick={()=> setCurrectState('Sign Up')}>Don't have an account? Sign up</p> : 
           <p className='cursor-pointer' onClick={()=> setCurrectState('Login')}>Already have an account? Login</p>
         }
        </div>
        <button className='w-full px-3 py-2 text-white bg-black hover:bg-gray-500 transition-all duration-300'>
          {currectState}
        </button>

    </form>
  )
}

export default Login