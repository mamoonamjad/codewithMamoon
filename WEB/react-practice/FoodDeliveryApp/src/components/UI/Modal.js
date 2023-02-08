import React from "react";
import classes from './modal.module.css'
import  ReactDOM from "react-dom";
const Backdrop = (props) => {
    return ( 
        <div className={classes.backdrop} onClick={props.onHideCart} />
     );
}
 
const ModalOverlay = (props) => {
    return ( 
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
         </div>
     );
}
 
const portal =document.getElementById('overlays')
const Modal = (props) => {
    return ( 
        <>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/> , portal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,portal)}
        </>
     );
}
 
export default Modal;