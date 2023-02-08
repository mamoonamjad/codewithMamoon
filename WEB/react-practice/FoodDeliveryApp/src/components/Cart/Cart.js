import React, { useContext } from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
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




    return ( 
        <>
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{Amount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {checkAmount && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
        </>
     );
}
 
export default Cart;