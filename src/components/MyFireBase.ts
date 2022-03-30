import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  DocumentReference,
  setDoc,
  doc,
  collection,
  CollectionReference,
  updateDoc,
} from "firebase/firestore";

export function getFireBase(firebaseConfig: any): Firestore {
  const app: FirebaseApp = initializeApp(firebaseConfig);
  const db: Firestore = getFirestore(app);
  return db;
}
