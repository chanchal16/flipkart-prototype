import React from 'react'
import { CartItemCard } from '../components/CartItemCard';
import { useCart } from '../contexts/CartContext'

export const Cart = () => {
    const{cartState,cartDispatch} = useCart();
    const{cart,savedItems} = cartState
  return (
    // <section className='flex justify-between'>
        <div className="grid grid-cols-6 grid-gap-4">
            <div className="col-span-4 pt-4">
                {/* cart */}
                <div className="p-2">
                    <h3 className="mb-2">Cart {cart.length ? `(${cart.length} )`: "items"}</h3>
                    {
                        cart.length > 0 ?
                        cart.map(item => {
                            return (
                                <CartItemCard key={item.id} product={item} />
                            )
                        })
                        :
                        <div className=""> Your cart is empty</div>
                    }
                </div>

                {/* saved */}
                <div className=" mt-4 bg-gray-1 p-2 rounded">
                    <h3 className="mb-2">Saved {savedItems.length ? `(${savedItems.length} items)` : ""}</h3>
                    {
                        savedItems.length > 0 ?
                        savedItems.map(item => {
                            return (
                                <CartItemCard key={item.id} product={item} />
                            )
                        })
                        :
                        <div className="flex rounded pt-2 pb-2"> No saved items here</div>
                    }
                </div>
            </div>
            <div className="pt-4 col-span-2">
                <h3 className="mb-2">Order Summary</h3>
                {
                    cart.length > 0 ?
                    <div className=" flex flex-col grid-gap-3 p-2 border border-gray-3 rounded mt-4">
                        <ul className="list-no-style flex flex-col grid-gap-4">
                            {
                                cart.map(item => {
                                    return(
                                        <li key={item.id} className="flex flex-col rounded">
                                            <strong className="text-gray-4 font-medium mb-2">{item.name} {item.quantity > 1 ? `(x ${item.quantity})`: ""}</strong>
                                            <small>Price: {item.price * item.quantity}</small>
                                           {item.discount && <small>Discount: ₹{item.discount}</small>}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <hr />
                        {/* <div>
                        Discount: {
                                cart.reduce((acc,value)=>{
                                    return parseInt(acc.discount,10) + parseInt(value.discount,10)
                                })
                            }
                        </div> */}
                            <hr/>
                        <div className="">
                            Total: {
                                cart.reduce((acc, value) => {
                                    return value.discount ? acc + (value.price * value.quantity) - value.discount : acc + (value.price * value.quantity)
                                }, 0)
                            }
                        </div>
                    </div>
                    :
                    <div className="">
                        Cart is empty
                    </div>
                }

            </div>
        </div>
        

    // </section>
  )
}