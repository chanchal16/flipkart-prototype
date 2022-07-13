import React,{createContext,useContext,useReducer,useEffect,useState} from 'react'
import { cartReducer } from '../reducers/cart-reducer';

const cartContext = createContext();
const initialState = {
  cart:[],
  totalItems:0,
  savedItems:[],
  selectedCoupon:''
}

const CartContextProvider = ({children}) => {
    const[cartState,cartDispatch]= useReducer(cartReducer,initialState)
  return (
    <div>
        <cartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </cartContext.Provider>
    </div>
  )
}
const useCart = ()=> useContext(cartContext);
export {CartContextProvider, useCart}