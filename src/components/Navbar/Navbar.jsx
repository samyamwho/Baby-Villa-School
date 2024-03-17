import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Events</li>
                <Link to='/contact' style={{textDecoration:'none', color:'black'}}><li style={{textDecoration:'none'}}>Contact Us</li></Link>
                
                <li>Facilities</li>
                <button>Join Now</button>
                <button>Apply to Program</button>

            </ul>

            


        </div>
    )
}

export default Navbar
