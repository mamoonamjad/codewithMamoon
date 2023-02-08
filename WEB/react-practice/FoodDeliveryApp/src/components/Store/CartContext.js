import React from "react";
import CartProvider from "./CartProvider";
const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}

})

export default CartContext;