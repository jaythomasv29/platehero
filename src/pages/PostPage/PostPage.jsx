import React from 'react'
import { useParams } from 'react-router-dom';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar'
import postsData from '../../data';

import './PostPage.css'

function PostPage() {
  let { postId } = useParams();
  // Filter through data from data.js based on urlParam postId
  // Send data as props
  const postObjData = postsData.find(post => post.id === Number(postId))
    return (
    <div className='container'>
      <Post {...postObjData} />
      <Sidebar />
    </div>
  )
}

export default PostPage