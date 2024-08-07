import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <Link to="/" className="title"><h1>Website</h1></Link>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/service">Service</Link>
            </li>
            <li>
                <Link to="/contactus">Contact Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar