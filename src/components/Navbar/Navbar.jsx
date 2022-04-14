import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Avatar from '../../images/avatar.jpeg'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../Button/Button'
import './Navbar.css'

function Navbar() {

  const logGoogleUser = async () => {
     const response = await signInWithGooglePopup()
     const userDocRef = await createUserDocumentFromAuth(response.user)
     console.log(userDocRef);
   }
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
          {/* <Link className="signup-btn" onClick={logGoogleUser}>SIGN IN</Link> */}
          <div className="signup-btn" onClick={logGoogleUser}>SIGN IN</div>
          <img className="avatar-img" src={Avatar} alt="avatar" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar