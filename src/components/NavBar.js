import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-light p-3" id="navBar" >
            <span className="navbar-brand mb-0 h1 text-white"><strong>YouTube</strong></span>
            <ul className="navbar-nav mr-auto"> 
            <Link to='/'><span className='text-white navLink'>Home</span></Link>
            </ul>
        </nav>
    )
}

export default NavBar;