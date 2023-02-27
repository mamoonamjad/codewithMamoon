import React from 'react';
import LoginForm from '../components/Form/LoginForm';
import { redirect } from 'react-router-dom';

const Login = () => {
    return ( 
        <LoginForm />
     );
}
 
export default Login;

export function checkAuthLoader(){
    const token = localStorage.getItem('authToken')
    if(!token){
       return redirect('/login')
    }
    return null;
}