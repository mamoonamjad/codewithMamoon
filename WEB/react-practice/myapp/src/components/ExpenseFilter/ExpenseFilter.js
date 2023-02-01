import React,{useState} from 'react';
import '../CSS/ExpenseFilter.css'


const ExpenseFilter = (props) => {
const[year,setYear]=useState('');

const dateHandler = (event) =>{
    setYear(event.target.value)
    props.onDateChange(year);

}
    return ( 
        <div>
            <div className='expense-filter'>
                <label className='text'>Filter By Year</label>
                <select className='options' onChange={dateHandler} >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                </select>
                
                
            </div>
        </div>
     );
}
 
export default ExpenseFilter;