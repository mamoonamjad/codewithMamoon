import React, { useContext, useState } from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";
import axiosInstance from "../BaseUrl/axios";
import Checkout from "./Checkout";

const Cart = (props) => {

    const [isCheckout,setIsCheckout] = useState(false)
    
    const cartCtx = useContext(CartContext);
    const Amount = `${cartCtx.totalAmount?.toFixed(2)}`;
    console.log(Amount);
    const checkAmount = cartCtx.items.length > 0;

    const cartItemRemoveHanlder = id =>{
        cartCtx.removeItem(id)
    }

    const addingToCart = item =>{
        cartCtx.addItem(item)
    }


    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => 
        <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHanlder.bind(null,item.id)}
        onAdd={addingToCart.bind(null,item)}
        />)}</ul> 

        const onOrder = ()=>{
            setIsCheckout(true)
        }

        const orderHandler = (userData) =>{

            axiosInstance.post('order.json',{
                OrderedItem:cartCtx.items,userData

            })
            .then(console.log("Hit Sent"));      
        }

    return ( 
        <>
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{Amount}</span>
            </div>
            {isCheckout && <Checkout onCacnel={props.onHideCart} onConfirm={orderHandler}/>}
            {!isCheckout &&
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {checkAmount && <button className={classes.button} onClick={onOrder}>Order</button>}
            </div>
            }
        </Modal>
        </>
     );
}
 
export default Cart;