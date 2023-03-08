import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjm6B3CrZ0Mb-q22i9cV2HBGv_p0qsafo",
  authDomain: "projeto-ff73b.firebaseapp.com",
  projectId: "projeto-ff73b",
  storageBucket: "projeto-ff73b.appspot.com",
  messagingSenderId: "103618255042",
  appId: "1:103618255042:web:4ef6be3337876575ff835b",
  measurementId: "G-ELLEBCLCHW",
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };
