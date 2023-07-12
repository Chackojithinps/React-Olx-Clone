import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrwjPHY3LcPNPVD-Y4Kbkm0x7n0eYxmxQ",
    authDomain: "practice-3948e.firebaseapp.com",
    projectId: "practice-3948e",
    storageBucket: "practice-3948e.appspot.com",
    messagingSenderId: "234485426842",
    appId: "1:234485426842:web:585c2c24e0c603e2a0cd23",
    measurementId: "G-VTZ6BYN23Y"
  };


 export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  