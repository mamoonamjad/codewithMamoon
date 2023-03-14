import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './NavBar.module.css'

const CartButton = () => {
  return ( 
    <>
      <button className={classes.button}>
          <ShoppingCartIcon/>
              Cart
          <span className={classes.badge}>1</span>
      </button>
    </>
   );
}
 
export default CartButton;