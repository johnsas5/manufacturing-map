import {
  Firestore,
  Query,
  collection,
  QuerySnapshot,
  CollectionReference,
  getDocs,
  DocumentData,
} from "firebase/firestore";

export async function getAllDocsFromColl(db: Firestore, collectionPath: string, callback: (qs: QuerySnapshot) => void | undefined) {
  const coll: CollectionReference = collection(db, collectionPath);
  await getDocs(coll).then((qs: QuerySnapshot<DocumentData>) => { 
    if (!qs.empty) {
      callback(qs);
    }
  })
  .catch((e) => { 
    console.log(e); 
  });
}

export async function getDocsWithQuery(q: Query<DocumentData>, callback: (qs: QuerySnapshot<DocumentData>) => void | undefined) {
  await getDocs(q).then((qs: QuerySnapshot<DocumentData>) => { 
    if (!qs.empty) {
      callback(qs);
    }
  })
  .catch((e) => { 
    console.log(e); 
  });
  return null;
}
