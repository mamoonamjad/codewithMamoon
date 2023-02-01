import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import '../CSS/NewExpense.css'

const NewExpense = (props) => {
const [isEditing,setIsEditing] = useState(false)

const onSubmitHandler = (enteredExpenseData)=>{
    const expenseData= {
        ...enteredExpenseData,
        id:'e'+ Math.random().toString()
    }
    props.onAdd(expenseData);
    setIsEditing(false);
}

const formControlHandler = () => 
{
    setIsEditing(true)
}
const cancelHandler = () =>{
    setIsEditing(false)
}
    return ( 
        <div className='container_form'>   
           {!isEditing && <button className='formDisplay' onClick={formControlHandler}>Add New Expense</button>}
           {isEditing && <ExpenseForm onSubmit={onSubmitHandler} onCancel={cancelHandler}/>}
        </div>

     );
}
 
export default NewExpense;