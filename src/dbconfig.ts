import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyC41fHnNt9Z3mUNEjR2GkiZ-fi9Y3pSTAM",
  authDomain: "manufacturing-map-a962f.firebaseapp.com",
  projectId: "manufacturing-map-a962f",
  storageBucket: "manufacturing-map-a962f.appspot.com",
  messagingSenderId: "497326427135",
  appId: "1:497326427135:web:ae765aac2232694aa8f5ca"
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);


export default db