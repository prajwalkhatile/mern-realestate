// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-79cdc.firebaseapp.com",
  projectId: "mern-estate-79cdc",
  storageBucket: "mern-estate-79cdc.appspot.com",
  messagingSenderId: "1020836045921",
  appId: "1:1020836045921:web:531afc85bc8529535db620",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
