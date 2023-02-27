import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './HomeBlogList.module.css'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import jwt_decode from "jwt-decode";

const HomeBlogList = (props) => {
    const [isToken,setIsToken] = useState('')

    useEffect(()=>{
        const token = localStorage.getItem('authToken')
        if(token){     
             setIsToken(jwt_decode(token))
            }
    },[])
    const deleteBlogHandler = async() =>{
         await axios.delete(`http://localhost:4000/api/blogs/delete/${props.ID}`)
        .then(()=>{
            window.location.reload()
        }).catch(()=>{
            console.log("error")
        })
    }
    console.log(isToken._id)
    console.log(props.user_ID)

    return ( 
    <>
    <li className={classes.textColor}>
        <Link to={`/blogs/${props.ID}`} >
        <div className={classes.head}>
            <h3>  <span>Title:</span> &nbsp;
            {props.title}
            </h3>
        </div>
        <div>
            <span>Date: {props.date}</span>
        </div>
        <div className={classes.end}>
            <p>{props.content.substr(0,20).concat('...')}</p>
            
        </div>
        </Link>   
        <div>
            <IconButton onClick={deleteBlogHandler} disabled = {isToken._id === props.user_ID ? false : true}> <DeleteIcon sx={ {color:'white'} }/>  </IconButton>
        </div>
    </li>

    </> 
    );
}
 
export default HomeBlogList;