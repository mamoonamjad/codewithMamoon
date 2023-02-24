import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HomeBlogList.module.css'

const HomeBlogList = (props) => {

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
    </li>
    </> 
    );
}
 
export default HomeBlogList;