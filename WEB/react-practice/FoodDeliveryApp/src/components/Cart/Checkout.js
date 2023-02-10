import React,{useRef} from "react";
import classes from './checkout.module.css'

const isEmpty = value => value.trim() === '';
const isFiveChar = value => value.trim().length === 5;


const Checkout = (props) => {

    const nameInputRef = useRef()
    const AddressInputRef = useRef()
    const cityInputRef = useRef()
    const postalCodeInputRef = useRef()

    const checkoutHandler = (event) =>{
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAddress = AddressInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;

        const enteredNameIsValid = isEmpty(enteredName);
        const enteredAddressIsValid = isEmpty(enteredAddress);
        const enteredCityIsValid = isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);

        const formIsValid =
        enteredNameIsValid &&
        enteredAddressIsValid &&
        enteredCityIsValid &&
        enteredPostalCodeIsValid;

        if(formIsValid){
            props.onOrderClick({
                name:enteredName,
                address:enteredAddress,
                city:enteredCity,
                postalCode:enteredPostalCode

            })
        }
    }
    console.log(props)

    return ( 
        <form onSubmit={checkoutHandler}>
            <div className={classes.control} >
            <label htmlFor="label" className={classes.controllabel}>Full Name:: </label>
                <input type="text" id="label"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="Address">Address:</label>
                <input type="text" id="address"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="City">City</label>
                <input type="text"  id="city"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="Postal">Postal Code: </label>
                <input type="text" id="postal" />
            </div>
            <div className={classes.actions}>
            <button className={classes.submit} onClick={props.onOrderClick}>Confirm</button>
            <button onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
     );
}
 
export default Checkout;