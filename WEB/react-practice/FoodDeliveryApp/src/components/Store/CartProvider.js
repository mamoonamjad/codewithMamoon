import { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState ={
    items:[],
    totalAmount:0,
}
const cartReducer =(state,action) =>{
if(action.type === 'ADD')
{
    const updatedItem = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    console.log(updatedTotalAmount)
    return{
        items:updatedItem,
        totalAmount:updatedTotalAmount
    }
}
    return defaultCartState

}

const CartProvider = (props) => {

    const[cartState, dispatchCartAction]=useReducer(cartReducer,defaultCartState)
    
    const addItemToCart = item => {
        dispatchCartAction(
            {
                type:'ADD',
                item:item,
            }
        )
    }
    const removeItemFromCart = id => {
        dispatchCartAction(
            {
                type:'REMOVE',
                id:id

            }
        )
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.Amount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }
return ( 
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;