import React from 'react';
import './styles.scss';
function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <a className='nav__logo--link' href='/'>cta@ctaservices.ca</a>
            </div>
            <ul className='nav__menu'>
                <li className='nav__menu--item'><a className='nav__menu--link' href="/">Home</a></li>
                <li className='nav__menu--item'><a className='nav__menu--link' href="/">About</a></li>
                <li className='nav__menu--item'><a className='nav__menu--link' href="/">Services</a></li>
                <li className='nav__menu--item'><a className='nav__menu--link' href="/">Contact</a></li>
            </ul>
            
        </nav>
    )
}

export default Navbar
