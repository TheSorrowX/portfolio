import React,{useState} from 'react';
import {HiMenu} from 'react-icons/hi';
import {FaTimes} from 'react-icons/fa';
import './styles.scss';

function Navbar() {
    
    const [clicked, setClicked] = useState(false);
    
    
    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <a className='nav__logo--link' href='/'>cta@ctaservices.ca</a>
            </div>
            <div className="nav__icon" onClick={() => {setClicked(!clicked)}}>
            {clicked ? <FaTimes className='icons'/> : <HiMenu className='icons'/>}
            </div>
            <ul className={clicked ? 'nav__menu active' : 'nav__menu'}>
                <li className='nav__menu--item'><a className='nav__menu--link' href="/">Home</a></li>
                <li className='nav__menu--item'><a className='nav__menu--link' href="/">About</a></li>
                <li className='nav__menu--item'><a className='nav__menu--link' href="/">Projects</a></li>
                <li className='nav__menu--item'><a className='nav__menu--link' href="/">Contact</a></li>
            </ul>
            
        </nav>
    )
}

export default Navbar
