// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "elcrealty-52b88.firebaseapp.com",
  projectId: "elcrealty-52b88",
  storageBucket: "elcrealty-52b88.appspot.com",
  messagingSenderId: "207659656665",
  appId: "1:207659656665:web:07f7751ecdda3d1f8625c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);