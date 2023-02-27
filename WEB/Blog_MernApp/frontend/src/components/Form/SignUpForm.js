import axios from 'axios';
import React from 'react';
import { Form, redirect, Link } from 'react-router-dom';
import classes from "./SignUpForm.module.css"

const SignUpForm = () => {
    
    return ( 
        <>
            <div className={classes.back}>
                <div className={classes.inner}>
               
                </div>
                <Form method= 'post' className={classes.form}>
                     <h1>Register Here</h1>
                    <div className='p-2'>
                        <label htmlFor="">Name:</label>
                        <br />
                        <input type="text" name='name' placeholder='Enter Name'/>
                    </div>
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
                    <div className='p-2'>
                        <label htmlFor="">Confirm Password:</label>
                        <br />
                        <input type="password" name="confirmPassword" placeholder='Confirm Password'/>
                    </div>
                    <p>Have An Account? <Link to={'/login'}>Login Now</Link></p>
                    <div className='p-2'>
                        <button type='submit' className='btn btn-outline-warning'>Sign In</button>
                    </div>
                </Form>
            </div>

        
        </>
     );
}
 
export default SignUpForm;

export async function action({request}){

    const data = await request.formData();
    const userData ={
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
        confirmPassword: data.get('confirmPassword'),
    }
    await axios.post('http://localhost:4000/api/auth/sign-up',userData);
    return redirect('/login')

}

