import {
  Firestore,
  doc,
  onSnapshot,
  DocumentSnapshot,
  FirestoreError,
  collection,
  QuerySnapshot,
  DocumentChange,
} from "firebase/firestore";

export function onlineUsers(db: Firestore) {
  const users = doc(db, "onlineUsers");
  onSnapshot(users, (ds: DocumentSnapshot) => {
    
  })
}