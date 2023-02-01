import React,{useState} from 'react';
import Card from './card';
import './CSS/ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
 const [title,setTitle] =useState(props.title)

const clickHandler = () => {
    setTitle('Updated')
    console.log(title)
}

    return ( 
        <Card className='container'>
            <div>
                <ExpenseDate date={props.date} />   
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <h2>${props.amount}</h2>
            </div>

            <button onClick={clickHandler} className='btn'>Click Me</button>

        </Card>
     );
}
 
export default ExpenseItem ;