import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <>
            <h1>HELLO from Home</h1>
            <NavLink to={'/contact'}> Contact Us</NavLink>
        </>
     );
}
 
export default HomePage;