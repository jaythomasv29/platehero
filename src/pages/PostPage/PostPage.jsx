import React from 'react'
import { useParams } from 'react-router-dom';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar'


// import '../../components/Sidebar/Sidebar.css'
import './PostPage.css'
function PostPage() {
  let urlParams = useParams();
  console.log(urlParams)

  return (
    <div className='container'>
      <Post />
      <Sidebar />
    </div>
  )
}

export default PostPage