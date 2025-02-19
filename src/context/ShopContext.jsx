import { createContext, useEffect } from 'react';
import {products}  from "../assets/frontend_assets/assets"
import { useState } from 'react';
import { toast } from 'react-toastify';
 
export const ShopContext = createContext();

 const ShopContextProvider = ({ children }) => {
    const currency = "₹";
    const delevery_fee = 10;
    const [search , setSearch] =  useState('')
    const [showSearch ,setShowSearch] = useState(false)
    const [cartItems , setCartItems] =  useState({});
    const addToCart = async (iitemId , size) =>
      {
         if(!size) {
          toast.error('Select Product Size')
          return
         }

        let CartData = structuredClone(cartItems);
        if(CartData[iitemId]){
          if(CartData[iitemId][size]){
            CartData[iitemId][size] += 1;
          }
          else{
            CartData[iitemId][size] = 1;
          }
        }
        else{
          CartData[iitemId] = {}
          CartData[iitemId][size] = 1
        }
        setCartItems(CartData)
      }

      const  getcartCounts = () =>{
        let totalCount =   0
        for(const iteams in cartItems){
          for(const  iteam in cartItems[iteams]){
            try {
              if(cartItems[iteams][iteam]  > 0 ){
                totalCount += cartItems[iteams][iteam]
              }
            } catch (error) {
              
            }
          }
        }
        return totalCount
      }
   

       const value = {
       products,currency,delevery_fee ,
       search,setSearch,showSearch, setShowSearch,
       cartItems,addToCart,
       getcartCounts

    }
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;