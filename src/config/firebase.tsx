
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
const firebaseConfig = {
  apiKey: "AIzaSyANlbWfdkMGnZ2MxvSREi9vqczvij4pRs0",
  authDomain: "mingo-425906.firebaseapp.com",
  projectId: "mingo-425906",
  storageBucket: "mingo-425906.appspot.com",
  messagingSenderId: "910757496081",
  appId: "1:910757496081:web:9d0ee73d604bc29bbb78b0",
  measurementId: "G-6MTT19DT8E"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);