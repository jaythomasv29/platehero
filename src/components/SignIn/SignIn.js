import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(response.user)
    console.log(userDocRef);
  }
  return (
    <div>
      <h2>SignIn Component</h2>
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  )
}

export default SignIn