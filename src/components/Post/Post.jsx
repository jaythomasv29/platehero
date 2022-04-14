import React from 'react'


import './Post.css'

function Post({id, title, caption, imgSrc}) {
  
  
  return (
    // duplicate css style coming from Posts / PostItem
    <div className='post-section'>
      
      <img src={imgSrc} alt={caption} />
      <div className="post-body">
      <div className="post-controls">
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
      </div>
        <h1 className='post-title'>{title}</h1>
        <p className='post-page-caption'>{caption} Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur temporibus voluptate quas at similique laborum odit aliquam, totam assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum voluptatibus quas recusandae quae fugiat sapiente, voluptas ullam non quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse accusantium ipsam et dignissimos. Quis qui asperiores illum? Nisi, quod non beatae omnis velit unde voluptatem eos maiores soluta necessitatibus aliquam harum modi. Nisi officia reiciendis fuga. Eligendi laboriosam aperiam commodi totam eaque corrupti ad placeat quia, veniam dignissimos optio?</p>
      </div>
    
      
    </div>
  )
}

export default Post