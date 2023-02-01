import React,{useState} from 'react';
import '../CSS/ExpenseForm.css'


const ExpenseForm = (props) => {
const [enteredTitle,setEnteredTitle] = useState('');
const [enteredAmount,setEnteredAmount] =useState('');
const [enteredDate,setEnteredDate] =useState('');

const titleChangeHandler =(event) =>{
    setEnteredTitle(event.target.value);
    console.log(enteredTitle)
}

const amountChangeHandler =(event) =>{
    setEnteredAmount(event.target.value);   
}

const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value)
}

const formSubmission = (event) =>{
    event.preventDefault();

    const expenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
    props.onSubmit(expenseData);
}

    return ( 
        <form className='container-form'>
            <div>
                <label className='title'>Title</label>
                <input className='field' type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div>
                <label className='title'>Amount</label>
                <input className='field' type="number" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div>
                <label className='title'>Date</label>
                <input className='field'type="date" value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div className='btn-div'>
            <button className='submit_btn' onClick={formSubmission}>Add Expense</button>
            <button className='submit_btn' onClick={props.onCancel}>Cancel</button>
            </div>

        </form>
     );
}
 
export default ExpenseForm;