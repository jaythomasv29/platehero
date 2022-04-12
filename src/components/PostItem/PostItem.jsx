import React from 'react'
import { Link } from 'react-router-dom'

import './PostItem.css'


function PostItem({id, title, caption, imgSrc, category}) {
  return (
    <div className='post-container'>
      <Link className="post-link" to={`/posts/${id}`}>
        <img src={imgSrc} alt={title}/>
      <div className="post-info">
        <h4 className="post-title">{title}</h4>
        <p className="post-caption">{caption} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi totam voluptates delectus veritatis quaerat, incidunt deserunt. Fuga blanditiis error.</p>
        <p className="post-timestamp">1 hour ago </p>
        <p className="category">#{category}</p>
      </div>
    </Link>
    </div>
  )
}

export default PostItem