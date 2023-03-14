import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';


const RootLayout = () => {
    return ( 
        <>
            <NavBar/>
            <Outlet/>
        </>
     );
}
 
export default RootLayout;