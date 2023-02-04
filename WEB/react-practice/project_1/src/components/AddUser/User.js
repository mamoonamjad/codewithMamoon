import React from 'react';
import Card from '../UI/Card'
import classes from "./user.module.css"

const User = (props) =>{
    return(
        <>
        <Card className={classes.users}>

            <ul>
                {props.users.map((user) =>(
            <li> 
                {user.name} ({user.age} years old)
            </li>
            )
            )}
            </ul>
            
        </Card>
        </>
    );
}
export default User;