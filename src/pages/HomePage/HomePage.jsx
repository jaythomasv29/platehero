import React from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'

import './HomePage.css'

function HomePage() {
  return (
    <div>
      <Header />
      <main className="main-container">
        <Posts />
        <Sidebar />
      </main>
    </div>
  )
}

export default HomePage