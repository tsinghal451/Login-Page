import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9Hndns52WHSgWuznv1rwoVouKaOA5OEI",
  authDomain: "login-81027.firebaseapp.com",
  projectId: "login-81027",
  storageBucket: "login-81027.appspot.com",
  messagingSenderId: "613965722829",
  appId: "1:613965722829:web:b881e8d098981140246584",
  measurementId: "G-7GZXQ4EVNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app , auth};