import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

export const NavBar = () => {
    const [click, setClick] = useState(false);
    const  [button, setButton] = useState(true);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    useEffect(() =>{
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link className="navbar-logo" onClick={closeMobileMenu}>
                        home
                </Link>
                <div className="menu-icon" onClick={() => setClick(!click)}>
    {/*                 <img src={Like}/>
    */}                <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Signup</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}
