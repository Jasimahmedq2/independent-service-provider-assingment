// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTFvM-Am7ZLUw_TV1S4CLlw8ASl9u9aNQ",
  authDomain: "sports-photographer-31e1a.firebaseapp.com",
  projectId: "sports-photographer-31e1a",
  storageBucket: "sports-photographer-31e1a.appspot.com",
  messagingSenderId: "172969687230",
  appId: "1:172969687230:web:4f9abad2ab7001983286ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;