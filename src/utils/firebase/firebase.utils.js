import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc,  } from "firebase/firestore";
import {
  getAuth,
  
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7X8UldFBJALCYr3olEJC77gPHKDkypOY",
  authDomain: "anyplateblog.firebaseapp.com",
  projectId: "anyplateblog",
  storageBucket: "anyplateblog.appspot.com",
  messagingSenderId: "508783428291",
  appId: "1:508783428291:web:e6ce8f39e9df1a4a1dd876",
  measurementId: "G-HDVH7B4ZC6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// Specify additional custom OAuth provider parameters that you want to send with the OAuth request.
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists());
    if(!userSnapshot.exists()){
      // if user data does NOT exist
      const { displayName, email } = userAuth;
      const createdAt = new Date()
      try {
        // set user data in collection
        await setDoc(userDocRef, {
          displayName, 
          email,
          createdAt
        })
      } catch (err) {
        console.log('error created user ', err.message)
      }
    }
    return userDocRef

}
