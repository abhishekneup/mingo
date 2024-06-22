import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANlbWfdkMGnZ2MxvSREi9vqczvij4pRs0",
  authDomain: "mingo-425906.firebaseapp.com",
  projectId: "mingo-425906",
  storageBucket: "mingo-425906.appspot.com",
  messagingSenderId: "910757496081",
  appId: "1:910757496081:web:9d0ee73d604bc29bbb78b0",
  measurementId: "G-6MTT19DT8E"
};


export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth= getAuth(app);
// const provider= new GoogleAuthProvider(); 

