// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyHtpYr315kHOyT2A6Xlj1A6InNE-XzPI",
  authDomain: "gym-center-d1db7.firebaseapp.com",
  projectId: "gym-center-d1db7",
  storageBucket: "gym-center-d1db7.appspot.com",
  messagingSenderId: "740762931762",
  appId: "1:740762931762:web:3e441d4e272b8a4455a22b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth