import React from 'react'
import FoodProfile from '../../images/food-profile.jpeg'
import './Sidebar.css'

function Sidebar() {
  return (
    <section className='sidebar-container'>
      <div className="sidebar-item">
        <span className='sidebar-title'>About Me</span>
        <img src={FoodProfile} className="sidebar-profile" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, autem!</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="list-item">Asian</li>
          <li className="list-item">Pasteries</li>
          <li className="list-item">Breakfast</li>
          <li className="list-item">Asian</li>
          <li className="list-item">Fine Dining</li>
          <li className="list-item">Contemporary</li>
        </ul>
      </div>
      <div className="sidebar-item">
      <span className="sidebar-title">Follow Us</span>
        <div className="social-icons">
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-twitter-square"></i>
          <i className="fa-brands fa-pinterest-square"></i>
          <i className="fa-brands fa-instagram-square"></i>


        </div>
      </div>

    </section>
  )
}

export default Sidebar