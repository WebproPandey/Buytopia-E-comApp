import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Search from './Components/Search'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='px-4  sm:px-[5vw] md:px-[7vw] lg:px-[8vw]  '>
       {/* toast notification */}
      <ToastContainer position="top-right" autoClose={5000} /> 
      <Navbar/>
      <Search/>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/collection' element={<Collection/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/product/:productId' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/place-order' element={<PlaceOrder/>} />
         </Routes>
       <Footer/>  
    </div>
  )
}

export default App