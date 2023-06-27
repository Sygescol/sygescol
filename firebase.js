//Importacion
import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5c64e-iLO6JBl-0_vY6_0amreHyNSs5E",
  authDomain: "sygescol-f2c48.firebaseapp.com",
  projectId: "sygescol-f2c48",
  storageBucket: "sygescol-f2c48.appspot.com",
  messagingSenderId: "382478922347",
  appId: "1:382478922347:web:213331c269afbd2087772e",
  measurementId: "G-QZ87QVEE1D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
