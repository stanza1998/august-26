// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-b5tQ6JJUCG4ULEI7WYf1Bfx7-EIoLyA",
    authDomain: "e-writer-s-47f2d.firebaseapp.com",
    projectId: "e-writer-s-47f2d",
    storageBucket: "e-writer-s-47f2d.appspot.com",
    messagingSenderId: "676078118249",
    appId: "1:676078118249:web:63b808e1fe10daca3889f8",
    measurementId: "G-1GXG9FSPNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);