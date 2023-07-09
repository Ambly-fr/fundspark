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

    const userDoc = doc(collection(db, "users"), user.uid);
    const docSnap = await getDoc(userDoc);

    if (!docSnap.exists()) {
      await setDoc(userDoc, {
        displayName: user.displayName,
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
      dispatch(reduxLogin(user));
    } else {
      dispatch(reduxLogout());
    }
  });
}

export { login, register, logout, loginWithGoogle };
