import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return ( 
        <>
            <div className={classes.back}>
                    <img src="/images/me.jpg" alt="My Picture" width='10%' />
                <div className={classes.description}>
                    <div><h2>Mamoon Amjad</h2></div>
                    <div>
                        <p className={classes.center}>
                            A Computer Science Student Of Comsats
                        </p>     
                        <p>
                            <i>
                                <q>
                                I am thriving to be the Best Mern Stack Developer 
                                </q>
                                  
                            </i>
                            
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Footer;