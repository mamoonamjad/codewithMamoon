import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/NavBar/AppBar';
import Footer from '../components/Footer/Footer';


const RootLayout = () => {
    return ( 
        <>
            <AppBar/>
            <Outlet/>
            <Footer/>
        </>
     );
}
 
export default RootLayout;