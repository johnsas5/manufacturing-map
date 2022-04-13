import { onlineUsersColl } from "./dbCollections";
import {
  Firestore,
  doc,
  onSnapshot,
  DocumentSnapshot,
  getDocs,
  FirestoreError,
  collection,
  QuerySnapshot,
  DocumentChange,
} from "firebase/firestore";

export function getOnlineUsers(db: Firestore) {
  getDocs(onlineUsersColl)
}


// export function onlineUsersListener(db: Firestore) {
//   const users = doc(db, "onlineUsers");
//   onSnapshot(users, (ds: DocumentSnapshot) => {
    
//   })
// }