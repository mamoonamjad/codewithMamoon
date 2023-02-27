import React, { useEffect, useState } from 'react';
import { redirect, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import classes from "./Form.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
    const navigate = useNavigate()
    const {state}= useLocation()
    const[email,setEmail]= useState('')
    const[password,setPassword] = useState('')
    
    const emailInputHandler =(event)=>{
        event.preventDefault();
        setEmail(event.target.value)
    }

    const passwordInputHandler =(event) =>{
        event.preventDefault();
        setPassword(event.target.value)
    }

    const userData ={
        email:email,
        password:password,
    }

    const submitHandler =async()=>{
        const res = await axios.post('http://localhost:4000/api/auth/sign-in',userData)
        .then((res)=>{
            localStorage.setItem('authToken',res.data)
            if(state){
                toast.success('Successfully Logged In',
                {
                    position:toast.POSITION.TOP_CENTER
                })
                setTimeout(()=>{
                    navigate(state.from)
                    window.location.reload()
                },1000)

            }
            else{
                toast.success('Successfully Logged In',
                {
                    position:toast.POSITION.TOP_CENTER
                })
                setTimeout(()=>{
                    navigate('/')
                    window.location.reload()
                },1500)
            }
        }).catch((err)=>{
            toast.error(err.response.data, {
                position:toast.POSITION.TOP_CENTER
            })
        })
    }
    return ( 
        
        <>
        <div className={classes.back}>
            <div className={classes.inner}>
            </div>
            <form  className={classes.form}>
            <h1>LOGIN HERE</h1>
            <div className='p-2'>
                <label htmlFor="">Email:</label>
                <br />
                <input type="text" name='email' placeholder='Enter Email' onChange={emailInputHandler}/>
            </div>
            <div className='p-2'>
                <label htmlFor="">Password:</label>
                <br />
                <input type="password" name="password" placeholder='Enter Password' onChange={passwordInputHandler}/>
            </div>
            <p>Don't Have An Account? <Link to={'/register'}>Register Now</Link></p>
            <div className='p-2'>
                <button type='button' className='btn btn-outline-warning' onClick={submitHandler} >Sign In</button>
            </div>
            </form>
        </div>
        <ToastContainer/>
        </>
     );
}
export default LoginForm;

