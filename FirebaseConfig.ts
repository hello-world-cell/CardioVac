import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth"
import { getDatabase } from "@firebase/database"





const firebaseConfig = {
    apiKey: "AIzaSyBhHyCulqK7dVQlG6wiX2YCQnv3UJBulcc",
    authDomain: "cardiovac-5ca79.firebaseapp.com",
    projectId: "cardiovac-5ca79",
    storageBucket: "cardiovac-5ca79.appspot.com",
    messagingSenderId: "377776578189",
    appId: "1:377776578189:web:135a568f537407eaaf8cc4",
    measurementId: "G-Y89CWGP35H"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getDatabase();


