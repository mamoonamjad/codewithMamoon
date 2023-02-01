import React,{useState} from 'react';

import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

let expense=  [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
  title: 'New TV',
  amount: 799.49, 
  date: new Date(2021, 2, 12)
 },
 {
  id: 'e3',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
];
function App() {

const [expenses,setExpense] = useState(expense);
const[year,setYear]=useState('');


  const expenseAddHandler = (expense) =>
  {
    setExpense((prevExpense) => {
      return [...prevExpense, expense];
    })
  }

  const DateChangeHandler = (date) =>{
    console.log(expenses)
    const filter= expenses.filter((item) => {
    const year = item.date.getFullYear().toString();
    return  year;
    })
      console.log(filter())
    }
    let filteredExpenses = expenses;
    if(expenses.getFullYear === year){
    }

  return (
    <div>
    <NewExpense  onAdd={expenseAddHandler}/>
    <ExpenseFilter onDateChange={DateChangeHandler} />
    {filteredExpenses.length===0 && <p>No record</p>}
    {filteredExpenses.map((expense) => {
        return <ExpenseItem
        key ={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
      })}

    </div>
  );
}

export default App;
