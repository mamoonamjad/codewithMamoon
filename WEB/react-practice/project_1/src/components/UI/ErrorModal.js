import React from 'react'
import Card from "./Card"
import classes from "./ErrorModal.module.css"
import Button from "./Button"

const ErrorModal = (props) => {
    return ( 
        <>
        {/* <div className={classes.backdrop} onClick={props.onAddHandler}></div> */}
        <Card classname={classes.modal}>
            <header className={classes.header}> 
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.action}>
                <Button onClick={props.onAddHandler}>Cancel</Button>
            </footer>

        </Card>
        </>
     );
}
 
export default ErrorModal ;