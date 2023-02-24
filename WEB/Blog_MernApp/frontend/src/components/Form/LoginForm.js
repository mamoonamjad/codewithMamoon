import React from 'react';
import { useActionData, Form, redirect, Link } from 'react-router-dom';
import axios from 'axios'
import classes from "./Form.module.css"

const LoginForm = () => {

    const data = useActionData();
    return ( 
        <>
        <div className={classes.back}>
            <div className={classes.inner}>
               
            </div>
            <Form method= 'post' className={classes.form}>
            <h1>LOGIN HERE</h1>
            <div className='p-2'>
                <label htmlFor="">Email:</label>
                <br />
                <input type="text" name='email' placeholder='Enter Email'/>
            </div>
            <div className='p-2'>
                <label htmlFor="">Password:</label>
                <br />
                <input type="password" name="password" placeholder='Enter Password'/>
            </div>
            <p>Don't Have An Account? <Link to={'/register'}>Register Now</Link></p>
            <div className='p-2'>
                <button type='submit' className='btn btn-outline-warning'>Sign In</button>
            </div>
            </Form>
        </div>
        </>
     );
}
export default LoginForm;

export async function action({request}){
    const data = await request.formData();
    const user = {
        email:data.get('email'),
        password:data.get('password'),
    }
    axios.post('http://localhost:4000/api/auth/sign-in',user)
    .then((res)=>{
        console.log(res)
        localStorage.setItem('authToken',res.data);
        return redirect('/')
    }).catch((err)=>{
        console.log(err);
        return redirect('/login')
    })
    return null

}

export function checkAuthLoader(){
    const token = localStorage.getItem('authToken')
    if(!token){
       return redirect('/login')
    }
}