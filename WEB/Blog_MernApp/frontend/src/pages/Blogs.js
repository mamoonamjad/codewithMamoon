import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import classes from '../components/UI/styles.module.css'

const Blogs = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const params = useParams()
    console.log(params.id)
    const [clickBlog,setClickBlog] = useState({})
    useEffect(()=>{
        const token = localStorage.getItem('authToken');
        if(!token){
            navigate('/login',{state:{from:location.pathname}})
        }
    },[])
    
    useEffect(()=>{
        const fetchBlog = async()=>{
            const response = await axios.get(`http://localhost:4000/api/blogs/${params.id}`)
            .then((response)=>{
                setClickBlog(response.data)
            })
        }
        fetchBlog();
    },[])

    console.log(clickBlog)
    return (
        <> 

        
        <div className={classes.blogpage}>
                <h1>{clickBlog.title}</h1>
                <p><span>Date: </span>{clickBlog.date}</p>
                <p>{clickBlog.content}</p>
        </div>
        </>
    );
}
 
export default Blogs;