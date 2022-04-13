import {
  Firestore,
  doc,
  query,
  Query,
  collection,
  QuerySnapshot,
  CollectionReference,
  getDocs,
  DocumentReference,
  QueryDocumentSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./dbconfig";

export const onlineUsersCollName = "onlineUsers";
export const onlineUsersColl = collection(db, onlineUsersCollName);

export const downtimeEntriesCollName = "downtimeEntries";
export const downtimeEntriesColl = collection(db, downtimeEntriesCollName);
