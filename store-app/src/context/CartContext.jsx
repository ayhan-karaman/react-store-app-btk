/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { createContext, useContext, useState } from "react"


export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(null)
  return (
    <CartContext.Provider value={{cart, setCart}}>
         {children}
    </CartContext.Provider>
  )
}


export const useCartContext = () => {
     const context = useContext(CartContext);
     return context;
}