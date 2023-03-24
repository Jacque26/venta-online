// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,  } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhFb4K59coMpAFb3SjTyyssECAO6Nf6O8",
  authDomain: "venta-online-5273d.firebaseapp.com",
  projectId: "venta-online-5273d",
  storageBucket: "venta-online-5273d.appspot.com",
  messagingSenderId: "503325098138",
  appId: "1:503325098138:web:1ad9eee99d6e2b933e5f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
//Guardar un usuario en la base de datos

const dB = getFirestore();
const create_at = new Date()
export const createUserDocFromAuth = async (uId, name, email) => {
  const userDoc = doc(dB, "user", uId);
  const getUserDoc = await getDoc(userDoc);
  if (!getUserDoc.exists()) {
    try {
      await setDoc(userDoc, {
        name,
        email,
        create_at,
      })
    } catch (err) {
      console.log(err)
    }
  }

};

export const createAuthUser = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)
  console.log(response);
  return response;
};

export const signInUser = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
  return response;
};

export const signOutUser = async()=>{
  await signOut(auth)
}
