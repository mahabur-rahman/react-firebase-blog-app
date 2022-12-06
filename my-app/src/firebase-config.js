import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBho76G7nawU5dqxIyF7xOwAFim9tsAhIo",
  authDomain: "blogapp-ba5e5.firebaseapp.com",
  projectId: "blogapp-ba5e5",
  storageBucket: "blogapp-ba5e5.appspot.com",
  messagingSenderId: "557671180905",
  appId: "1:557671180905:web:ea34375e150745783090f8",
  measurementId: "G-Q9GRVJVT8B",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
