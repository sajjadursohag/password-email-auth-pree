// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DANGER--- SO NOT SHARE CONFIG IN PUBLIC
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVx38pQLdMx_T-ZkkyVpGnhKTTs-Yh7_Y",
  authDomain: "password-email-auth-pre.firebaseapp.com",
  projectId: "password-email-auth-pre",
  storageBucket: "password-email-auth-pre.firebasestorage.app",
  messagingSenderId: "450068129000",
  appId: "1:450068129000:web:b1eccdcaa73ac9e1aa155d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);