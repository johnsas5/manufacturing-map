import { DowntimeEntry } from "./Types";
import { getFirestore, Firestore } from "firebase/firestore";
import { firebaseConfig } from "./dbconfig";
import { FirebaseApp, initializeApp } from "firebase/app";
import { 
  collection,
  onSnapshot,
  query,
  where,
  QuerySnapshot,
  DocumentChange,
  addDoc,
} from "firebase/firestore";

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const downtimeEntriesCollName = "downtimeEntries";
const downtimeEntriesColl = collection(db, downtimeEntriesCollName);

const dte: DowntimeEntry = {
  startTime: Date.now(),
  endTime: null,
  line: "Line01",
  notes: null,
  editedBy: null,
};
addDoc(downtimeEntriesColl, dte)
.then(() => console.log("Downtime added: " + dte))
.catch((e) => console.log("Error adding downtime: " + e));