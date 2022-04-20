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

export async function deleteCollection(db: Firestore, collectionPath: string) {
  const coll: CollectionReference = collection(db, collectionPath);
  const q = query(coll);
  await deleteCollectionWithQuery(coll, q);
}

export async function deleteCollectionWithQuery(coll: CollectionReference, q: Query) {
  await getDocs(q).then((qs: QuerySnapshot) => {
    if (!qs.empty) {
      qs.forEach(async (qd: QueryDocumentSnapshot) => {
        const dr: DocumentReference = doc(coll, qd.id);
        await deleteDoc(dr);
      })
    }
  })
  .catch((e) => {
    console.log(`Error deleting documents. Collection: ${coll.path} Error: ${e}`);
  })
}
