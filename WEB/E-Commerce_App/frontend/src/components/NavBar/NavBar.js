import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './NavBar.module.css'
import CartButton from './CartButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const NavBar = () => {
    return ( 
        <>
            <div className={classes.container}>
                <div className={classes.logo} >
                <img src="/logo.png" alt="" />
                </div>
                
                 <div className={classes.search}>
                    {/* <input type="text" placeholder='Search' />
                    <button> <SearchRoundedIcon/> </button> */}
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>

                <div className={classes.heads}>
                    <NavLink>                   
                         Account 
                         <span>
                            <ArrowDropDownIcon />
                         </span>
                    </NavLink>

                </div>

                <div className={classes.cart}>
                    <CartButton/>
                </div>
            </div>
        </>
     );
}
 
export default NavBar;