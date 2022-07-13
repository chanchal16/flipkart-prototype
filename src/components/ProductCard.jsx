import React from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../contexts/CartContext'

export const ProductCard = ({product}) => {
  const {cartState,cartDispatch} = useCart()
  const {cart} = cartState

  const ItemExists = cart?.find(item=>item.id === product.id)
  
  const cartHandler = (product)=>{
    if(!ItemExists){
      product.quantity = 1;
      cartDispatch({type:'ADD_TO_CART',payload:product})
    }  
    console.log(cartState)
  }
  return (
    <div className="bg-white w-52 flex flex-col rounded border border-gray-3 shadow-md-gray-1 mb-4 p-2">
        <h3 className="text-gray-5 font-medium mb-2">{product.name}</h3>
        <img src={product.imgsrc} alt="product" className="w-24 h-32" style={{margin: "auto"}} />

        <div className="mt-2 mb-2 flex justify-between items-center">
            <h4 className="text-gray-5 mt-2">₹ {product.price}</h4>
            <small className='my-auto'>Brand: {product.brand}</small>
        </div>
        <div className="mt-2 mb-2 flex justify-between items-center">
            <small className="text-gray-5">Size: {product.size}</small>
            {
              ItemExists ? 
              <Link to='/cart'><button className='text-sm py-0.5 px-1 border-[1.5px] border-amber-400 bg-amber-400  rounded text-white  hover:bg-amber-500 hover:text-white'>
                Go to Cart</button> </Link> 
              :
              <button className='text-sm py-0.5 px-1 border-[1.5px] border-orange-400 rounded text-orange-400  hover:bg-orange-500 hover:text-white'
              onClick={()=>cartHandler(product)}>
                Add to Cart
              </button>
            }
            
        </div>
    </div>
  )
}
