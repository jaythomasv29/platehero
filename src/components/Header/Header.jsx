import React from 'react'
import Button from '../Button/Button'
// import dishImg from '../images/hero-img.jpeg'
import { Link  } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="info">
          <h1>Platehero</h1>
          <h2>Discover the latest foods that foodies talking about</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nisi. Sit sed mollitia vero soluta nam, beatae impedit, culpa reiciendis molestiae quod consequuntur voluptatibus cumque eaque eum omnis quidem laborumo...</p>
          <div className="hero-buttons">
          <Button buttonStyle="btn--primary--outline">Explore More Plates</Button>
          <Link className="btn btn--primary--solid" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header