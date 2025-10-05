// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDyO9sUf-k-ml0RfotBVR1etOx0pLVrVM",
    authDomain: "coffee-store-app-1b2b2.firebaseapp.com",
    projectId: "coffee-store-app-1b2b2",
    storageBucket: "coffee-store-app-1b2b2.firebasestorage.app",
    messagingSenderId: "63409933289",
    appId: "1:63409933289:web:ec32f4d9813cd8811bd978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);