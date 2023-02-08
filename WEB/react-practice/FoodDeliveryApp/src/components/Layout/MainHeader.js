import React from "react";
import classes from "./MainHeader.module.css"
import HeaderButton from "./HeaderButton";

const MainHeader = (props) => {

    return ( 
        <>
        <header className={classes.header}>
            <h1>REACTMeals</h1>
            <HeaderButton onClick={props.onShowCart}/>
        </header>

        <div className={classes['main-image']}>
            <img src="../meals.jpg" alt="TableOfFood" />
        </div>
        </>
     );
}
 
export default MainHeader;