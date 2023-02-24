import {NavLink, redirect } from 'react-router-dom';
import {useState} from 'react'
import classes from './NavBar.module.css';

const NavBar= () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const token = localStorage.getItem('authToken');

    const logoutHandler=()=>{
        localStorage.removeItem('authToken')
        redirect('/')
        window.location.reload(true)
    }

  return (
    <header className={classes.header}>
            <div className={classes.image}>
            <img src='/images/logo.png' alt='Logo.png' width='15%' />
            </div>

            <div className={classes.listItem}>
            <ul className={classes.list}>  
                <li>
                    <NavLink to={'/'} className={({isActive})=> isActive ? classes.active : undefined} end >Home</NavLink>
                </li>
                <li>
                    <NavLink to={'about'} className={({isActive})=> isActive ? classes.active : undefined} end >About US</NavLink>
                </li>
            </ul>
            </div>

            <div>
                {!token && <NavLink to={'/login'}>
                <button type="button" class="btn btn-outline-warning" >
                    Sign In
                </button>
                </NavLink>}
                {token && <NavLink to={'/'}>
                <button type="" class="btn btn-outline-warning" onClick={logoutHandler}>
                    Logout
                </button>
                </NavLink>}
            </div>
    </header>
  );
}

export default NavBar;
