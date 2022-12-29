// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDR7zdSeP_d7-Yvr4LmPUfoKjuWVgWzu8",
  authDomain: "hibridiniu-projektas.firebaseapp.com",
  databaseURL: "https://hibridiniu-projektas-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hibridiniu-projektas",
  storageBucket: "hibridiniu-projektas.appspot.com",
  messagingSenderId: "808104601288",
  appId: "1:808104601288:web:a434df323b1736e11467fd",
  measurementId: "G-GCBD3X1Z7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getDatabase(app);