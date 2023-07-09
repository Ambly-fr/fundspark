import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsRGjumhVzsfK-sEzbME-MgtXqImZsGOQ",
  authDomain: "fundspark-a4545.firebaseapp.com",
  projectId: "fundspark-a4545",
  storageBucket: "fundspark-a4545.appspot.com",
  messagingSenderId: "633699034315",
  appId: "1:633699034315:web:a97354c38ee87695cce74e",
  measurementId: "G-81LL90ELND"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };