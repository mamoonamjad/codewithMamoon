import React,{useContext} from "react";
import classes from './HeaderButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/CartContext";

const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((currentNumber,item) =>{
            return currentNumber + item.amount;
    },0)

    return ( 
        <>
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
        </>
     );
}
 
export default HeaderButton;