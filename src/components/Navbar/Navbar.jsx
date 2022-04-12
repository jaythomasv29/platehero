import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Avatar from '../../images/avatar.jpeg'

import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <p>platehero</p>
          <i className="logo-icon fa-solid fa-utensils"></i>
        </div>
        <ul className="navbar-links center">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/create">WRITE</Link>
          </li>
        </ul>
        <div className="navbar-links right">
          <Link className="signup-btn" to="/signup">SIGN UP</Link>
          <img className="avatar-img" src={Avatar} alt="avatar" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar