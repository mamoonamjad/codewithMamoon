import React from 'react';
import './CSS/ExpenseDate.css'
const ExpenseData = (props) => {
        const month = props.date.toLocaleString('en-US', {month:'long'});
        const day = props.date.toLocaleString('en-US', {day:'2-digit'});
        const year = props.date.getFullYear();
        
    return ( 
        <>
        <div className='date'>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        </div>
        </>
     );
}
 
export default ExpenseData;