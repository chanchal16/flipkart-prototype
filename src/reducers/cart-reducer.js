const cartReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: state.cart.concat(action.payload),
                totalItems:state.totalItems +1,
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart: state.cart.filter(item=>item.id !== action.payload),
                totalItems: state.totalItems - 1,
            }
        case 'INCREASE_QTY':
            return{
                ...state,
                cart:state.cart.map((item)=>{
                    return item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 }  : item
                }),               
                totalPrice:state.totalPrice + parseInt(action.payload.price,10)
            }
        case 'DECREASE_QTY':
            return {
                ...state,
                cart:state.cart.map((item)=>{
                    return item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 }  : item
                }),
                totalPrice:state.totalPrice - parseInt(action.payload.price,10)
            }
        case 'SAVE_LATER':
            return {
                ...state,
                totalItems:state.totalItems - 1,
                savedItems:state.savedItems.concat(action.payload)
            }
        case 'REMOVE_FROM_SAVE':
            return{
                ...state,
                savedItems: state.savedItems.filter(item=>item.id !== action.payload)
            }
    }
}
export{cartReducer}