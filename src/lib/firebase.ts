import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOFF6BRhai5ABw0rGuFLnQa7SVXGYueak",
  authDomain: "studio-563094161-6c93f.firebaseapp.com",
  databaseURL: "https://studio-563094161-6c93f-default-rtdb.firebaseio.com",
  projectId: "studio-563094161-6c93f",
  storageBucket: "studio-563094161-6c93f.firebasestorage.app",
  messagingSenderId: "1036938703442",
  appId: "1:1036938703442:web:cf514b722f194e55fc658b"
};

// Initialize Firebase (preventing re-initialization during hot reloads)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
