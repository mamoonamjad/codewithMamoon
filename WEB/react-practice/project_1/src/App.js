import React,{useState} from 'react';
import AddUser from './components/AddUser/AddUser'
import User from './components/AddUser/User'

function App() {
  const [userList,setUsers]=useState([])

  const onAddHandler= (userName,userAge)=>{
      setUsers((prevUsers)=>{
          return[...prevUsers,{name:userName ,age:userAge}];     
      });
  }
  return (
    <>
        <AddUser onAddUser={onAddHandler} />
        <User users={userList} />
    </>
  );
}

export default App;
