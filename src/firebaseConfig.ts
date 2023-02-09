 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import * as firebase from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyA-b5tQ6JJUCG4ULEI7WYf1Bfx7-EIoLyA",
    authDomain: "e-writer-s-47f2d.firebaseapp.com",
    projectId: "e-writer-s-47f2d",
    storageBucket: "e-writer-s-47f2d.appspot.com",
    messagingSenderId: "676078118249",
    appId: "1:676078118249:web:63b808e1fe10daca3889f8",
    measurementId: "G-1GXG9FSPNG"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAdp1n4SvCou62FXEBVDu9a-Y8EKHXc-O0",
//   authDomain: "kosha-c5a7b.firebaseapp.com",
//   projectId: "kosha-c5a7b",
//   storageBucket: "kosha-c5a7b.appspot.com",
//   messagingSenderId: "112725392809",
//   appId: "1:112725392809:web:c6fd68fd1b00a3102f58b8",
//   measurementId: "G-3FX4ZQH6SH"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCPXr7ay0SgZpItRoJIBCTIGP-XkWHhiks",
//   authDomain: "ambient-shelter-332522.firebaseapp.com",
//   projectId: "ambient-shelter-332522",
//   storageBucket: "ambient-shelter-332522.appspot.com",
//   messagingSenderId: "681850660159",
//   appId: "1:681850660159:web:90580b2c33f669c9eb1f8a",
//   measurementId: "G-JHF0HDPP0P"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const st = getStorage(app);