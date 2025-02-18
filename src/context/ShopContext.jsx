import { createContext } from 'react';
import {products}  from "../assets/frontend_assets/assets"
 
export const ShopContext = createContext();

 const ShopContextProvider = ({ children }) => {
    const currency = "₹";
    const delevery_fee = 10;

    const value = {
       products,currency,delevery_fee
    }
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;