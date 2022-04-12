import React from 'react'
import Button from '../../components/Button/Button'

import './CreatePostPage.css'
function CreatePostPage() {
  return (
    <div className="create-container">
      <img className="img-upload" src="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
      <div className="create-form">
        <div className="create-form-group">
          <label htmlFor="fileInput">
         
          </label>
          <input type="file" id="fileInput" style={{display: "none"}}/>
          <input type="text" placeholder="Title" className="create-input" autoFocus={true}/>
        </div>
        <div className="create-form-group">
          <textarea className="write-area" placeholder="Tell your story..." cols="30" rows="5"></textarea>
        </div>
        <div className="create-form-group">
        <i className="create-icon fa-regular fa-image"></i>
        </div>
        <div className="create-form-group">
          <Button className="submit-post">Publish</Button>
          
        </div>
      </div>
    </div>
  )
}

export default CreatePostPage