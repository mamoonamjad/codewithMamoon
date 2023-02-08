import React,{useContext,useEffect,useState} from "react";
import classes from './HeaderButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/CartContext";

const HeaderButton = (props) => {
    const[btnBump,setBtnBump] = useState(false)
    const cartCtx = useContext(CartContext)
    const {items}= cartCtx;
    const numberOfCartItems = items.reduce((currentNumber,item) =>{
            return currentNumber + item.amount;
    },0)

    const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`;
     useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnBump(true);
        const timer = setTimeout(()=>{
            setBtnBump(false)
        },300)

        return ()=>{
            clearTimeout(timer)
        }
     },[items])
     
    return ( 
        <>
        <button className={btnClasses} onClick={props.onClick}>
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