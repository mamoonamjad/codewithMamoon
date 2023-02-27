import React,{useEffect, useState} from 'react';
import { json, useLocation, useNavigate } from 'react-router-dom';
import classes from './Blog.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import jwt_decode from "jwt-decode";


const Blog = () => {
    const navigate = useNavigate()
    const location=useLocation()
    const [isTitle,setIsTitle] = useState('')
    const [isDate,setIsDate] = useState('')
    const [isContent,setIsContent] = useState('')
    const [decode,setDecode] = useState('')
    
    useEffect(()=>{
        const token = localStorage.getItem('authToken')
        if(token){
            setDecode(jwt_decode(token))
        }
        if(!token){
            navigate('/login',{state:{from:location.pathname}})
        }
    },[])
    const titleChangeHandler = (event)=>{
        event.preventDefault()
        setIsTitle(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        event.preventDefault()
        setIsDate(event.target.value)
    }
    const contentChangeHandler = (event)=>{
        event.preventDefault()
        setIsContent(event.target.value)
    }
    
    const blogData ={
        title:isTitle,
        date:isDate,
        content:isContent
    }

    console.log(decode._id)

    const blogSubmitHandler = async()=>{
        const res = axios.post(`http://localhost:4000/api/blogs/add/${decode._id}` , blogData)
        .then((res)=>{
            toast.success('Blog Added Successfully',{
                position:toast.POSITION.TOP_CENTER
            })
            setTimeout(()=>{
                navigate('/')
            },2000)
        }).catch((err)=>{
            console.log("9787");
            json({message:"Error Occured "});
            navigate('/')
        })
        
    }
    return ( 
        <>
           
           <div className={classes.form}>
            <div>
                <label>Title: </label> <br />
                {/* <input type="text" onChange={titleChangeHandler} placeholder='Add Title' value={isTitle}/> */}
                <input type="text" onChange={(e)=>{setIsTitle(e.target.value)}} placeholder='Add Title' value={isTitle}/>
            </div>
            <div>
                <label>Date: </label> <br />
                {/* <input type="date" onChange={dateChangeHandler} value={isDate} /> */}
                <input type="date" onChange={(e)=>{setIsDate(e.target.value)}} value={isDate} />
            </div>
            <div>
                <label>Add Blog Comtent: </label> <br />
                <input type="description" className={classes.description} onChange={(e)=>{setIsContent(e.target.value)}}
                placeholder='Add Your Blog Here' value={isContent} />
            </div>
            <button onClick={blogSubmitHandler}>Add Blog</button>
           </div>
           <ToastContainer />
        </>
     );
}
 
export default Blog;