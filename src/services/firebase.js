// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsRGjumhVzsfK-sEzbME-MgtXqImZsGOQ",
  authDomain: "fundspark-a4545.firebaseapp.com",
  projectId: "fundspark-a4545",
  storageBucket: "fundspark-a4545.appspot.com",
  messagingSenderId: "633699034315",
  appId: "1:633699034315:web:a97354c38ee87695cce74e",
  measurementId: "G-81LL90ELND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };