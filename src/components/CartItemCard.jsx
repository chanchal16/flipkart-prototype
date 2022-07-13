import React from 'react'
import { useCart } from '../contexts/CartContext';

export const CartItemCard = ({product}) => {
    const{cartState,cartDispatch} = useCart();
    const{cart} = cartState

    function checkExistanceInArray(array, id){
        // returns true or false
        return !!array.find((item) => item.id === id);
    };

    const saveLaterHandler = (product)=>{
        cartDispatch({type:'SAVE_LATER',payload:product})
        cartDispatch({type:'REMOVE_FROM_CART',payload:product.id})
    }

    const moveToCartHandler = (product)=>{
        cartDispatch({type:'ADD_TO_CART',payload:product})
        cartDispatch({type:'REMOVE_FROM_SAVE',payload:product.id})
    }
  return (
    <div className=" flex border border-gray-3 rounded w-full p-2 grid-gap-4  mb-4">
        <img src={product.imgsrc} alt="product image" className="w-32 h-32 object-contain" />
        
        <div className="flex flex-col flex-grow">
            <strong className="font-medium">{product.name}</strong>
            {/* {product.discount && <small className="mr-2">Discount: ₹{product.discount}</small> } */}
            <div className="flex grid-gap-4 pt-4">
                
                {
                    checkExistanceInArray(cart, product.id) ? 
                    <div className="flex items-center justify-between">
                        <button onClick={()=>cartDispatch({type:'DECREASE_QTY',payload:product})} disabled={product.quantity < 2} className="border pl-1 pr-1 rounded">-</button>
                        &nbsp;&nbsp;<small className="">{product.quantity}</small>&nbsp;&nbsp;
                        <button onClick={()=>cartDispatch({type:'INCREASE_QTY',payload:product})}  className="border pl-1 pr-1 rounded">+</button>
                    </div>
                    :
                    null
                }
            </div>

            <div className="flex justify-between">
                <span>₹ {product.price * product.quantity}</span>
                <div >
                {
                    checkExistanceInArray(cart, product.id) ?(
                        <>
                    <button onClick={()=>saveLaterHandler(product)} className="p-1 border border-gray-4 rounded">Save item</button>
                    <button onClick={()=>cartDispatch({type:'REMOVE_FROM_CART',payload:product.id})} className="p-1 border border-gray-4 rounded ml-2">Remove</button></>
                    ):
                    <button onClick={()=>moveToCartHandler(product)} className="p-1 border border-gray-4 rounded">Move to cart</button>
                }
                
                </div>
            </div>
        </div>
    </div>
  )
}
