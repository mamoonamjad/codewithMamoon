import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
const RootLayout = () => {
    return ( 
        <>
        <NavBar/>
        <main>
            <Outlet />
        </main>
        <Footer/>
        
        </>
     );
}
 
export default RootLayout;