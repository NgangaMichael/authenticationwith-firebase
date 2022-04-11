// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   enter your api key here 
  apiKey: "",
  authDomain: "authentication-ea553.firebaseapp.com",
  projectId: "authentication-ea553",
  storageBucket: "authentication-ea553.appspot.com",
  messagingSenderId: "775632011194",
  appId: "1:775632011194:web:b751c64ba91c72c55b6783",
  measurementId: "G-0CWNBKTYRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signinwithgoogle = () => {
    signInWithPopup(auth, provider)
    .then(result => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilepic = result.user.photoURL;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilepic', profilepic);
        
    })
    .catch(err => {
        console.log(err)
    })
}