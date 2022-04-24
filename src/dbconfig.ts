import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBMSUjPYjwnI-6_nMQq-1AK5siAPGW4VOU",
  authDomain: "firestore-gvsu-ead04.firebaseapp.com",
  projectId: "firestore-gvsu-ead04",
  storageBucket: "firestore-gvsu-ead04.appspot.com",
  messagingSenderId: "985689441144",
  appId: "1:985689441144:web:41ae0b898b90d97456be8d"
};



export const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);