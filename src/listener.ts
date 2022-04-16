import { 
  getFirestore,
  Firestore,
  doc,
  onSnapshot,
  DocumentSnapshot,
  FirestoreError,
  CollectionReference,
  collection,
  query,
  where,
  QuerySnapshot,
  DocumentChange,
  addDoc,
} from "firebase/firestore";

export function listenToCollection(coll: CollectionReference, callback: (qs: QuerySnapshot) => void | undefined) {
  onSnapshot(coll, callback);
}