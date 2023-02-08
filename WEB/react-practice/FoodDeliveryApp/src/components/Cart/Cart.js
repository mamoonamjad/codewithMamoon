import React, { useContext } from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => <li>{item.name}</li>)}</ul> 

const Amount = `${cartCtx.totalAmount.toFixed(2)}`;
console.log(Amount);


    return ( 
        <>
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>2</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
        </>
     );
}
 
export default Cart;