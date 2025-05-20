// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZepSMRQg58ddfcP44csbY1D1LAfgqYRA",
  authDomain: "coffee-store-b033e.firebaseapp.com",
  projectId: "coffee-store-b033e",
  storageBucket: "coffee-store-b033e.firebasestorage.app",
  messagingSenderId: "505683433856",
  appId: "1:505683433856:web:1643b7aa946818ffb8c965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);