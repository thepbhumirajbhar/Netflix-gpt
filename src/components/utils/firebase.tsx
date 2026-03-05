// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh1v2C3sPGHDGZc2poakj03LeNzBWqp1Y",
  authDomain: "netflix-gpt-e29ad.firebaseapp.com",
  projectId: "netflix-gpt-e29ad",
  storageBucket: "netflix-gpt-e29ad.firebasestorage.app",
  messagingSenderId: "339295374639",
  appId: "1:339295374639:web:bbaa6ce7144b64cfcbe5da",
  measurementId: "G-YXWFK105XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth and export it
export const auth = getAuth();