// services/auth.js
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import {
  login as reduxLogin,
  logout as reduxLogout,
} from "../features/userSlice";
import { auth } from "./firebase";
import { collection, doc, setDoc,getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { uploadDefaultUserImage } from "./storage";


const provider = new GoogleAuthProvider();

async function login(dispatch, email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(reduxLogin(user));
  } catch (error) {
    throw error;
  }
}



async function register(dispatch, email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const profileURL = await uploadDefaultUserImage();
    await updateProfile(user, { displayName: username , photoURL: profileURL });



    const userDoc = doc(collection(db, "users"), user.uid);
    await setDoc(userDoc, {
      displayName: username,
      photoURL: profileURL,
      uid: user.uid,
    });

    dispatch(reduxLogin(user));
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function logout(dispatch) {
  try {
    await signOut(auth);
    dispatch(reduxLogout());
  } catch (error) {
    throw error;
  }
}

async function loginWithGoogle(dispatch) {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Vérifier si l'utilisateur existe déjà dans Firestore
    const userDoc = doc(collection(db, "users"), user.uid);
    const docSnap = await getDoc(userDoc);

    if (!docSnap.exists()) {
      // Si l'utilisateur n'existe pas, créer un document pour lui
      await setDoc(userDoc, {
        displayName: user.displayName,
        // Ajoutez ici toutes les autres informations que vous voulez stocker
      });
    }

    dispatch(reduxLogin(user));
  } catch (error) {
    throw error;
  }
}

export function initializeAuth(dispatch) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, dispatch action to Redux
      dispatch(reduxLogin(user));
    } else {
      // User is signed out, dispatch action to Redux
      dispatch(reduxLogout());
    }
  });
}

export { login, register, logout, loginWithGoogle };
