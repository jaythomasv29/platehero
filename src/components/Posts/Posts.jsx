import React from 'react'
import PostItem from '../PostItem/PostItem'

import './Posts.css'
import postsData from '../../data'
function Posts() {
 
  return (
    <div className='posts-container'>
      {
        postsData.map(post => (

          <PostItem key={post.id} {...post} />
        ))
      }
    </div>
  )
}

export default Posts