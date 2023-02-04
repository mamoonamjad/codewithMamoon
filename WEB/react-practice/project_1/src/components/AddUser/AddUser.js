import React,{useState} from 'react';
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"

const AddUser=(props)=>{

const [userName,setUserName]= useState('')
const [age,setAge]= useState('')
const [error,setError] = useState()

const SubmissionHandler = event=>{
    event.preventDefault();
    if(userName.trim().length === 0 || age.trim().length === 0)
    {
        setError({
            title:"Error Has Been Encountered",
            message:"Please Enter Valid Inputs"
        }
        )
        return;
    }
    if(+age<1)
    {
        setError({
            title:"Error Has Been Encountered",
            message:"Please Enter Valid Age"
        }
        )
        return;
    }
    console.log(userName,age)
    props.onAddUser(userName,age)

}

const userNameHandler = event =>{
event.preventDefault();
setUserName(event.target.value);
};

const ageHandler = event =>{
event.preventDefault();
setAge(event.target.value);
};

const errorHandler = () =>{
    setError(null)
}

    return(
        <>
        {error && <ErrorModal  title={error.title} message={error.message} onAddHandler={errorHandler}/>}
        <Card className={classes.input}>
            <form action="" onSubmit={SubmissionHandler}>
                    <label htmlFor="" >UserName:</label>
                    <input id='userName' value={userName} type="text" onChange={userNameHandler} />
                    <label htmlFor="">Age(In Years)</label>
                    <input id='age' type="text" value={age} onChange={ageHandler} />
                    <Button type='submit'>Add Me</Button>
            </form>
        </Card>
        </>
    );
}
export default AddUser;