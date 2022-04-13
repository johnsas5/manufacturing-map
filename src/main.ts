import Vue from 'vue';
import App from './App.vue';
import { DowntimeEntry, LinesArr, LinesDown } from "./Types";
import { deleteCollection, deleteCollectionWithQuery } from './deleteCollection';
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "./dbconfig";
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
import { onlineUsersColl, downtimeEntriesColl } from "./dbCollections";

Vue.config.productionTip = false;
// Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// set up variables
let currentlyOnline: number = 0;
let currentlyDown = LinesDown;
const app: FirebaseApp = initializeApp(firebaseConfig, "hans");
const db: Firestore = getFirestore(app);

// delete all online users (should not be any if server is starting up)
await deleteCollection(db, onlineUsersColl)

// delete any open downtime entries (endtime is null)
const dteColl: CollectionReference = collection(db, downtimeEntriesColl);
const q = query(dteColl, where("endTime", "==", "null"));
deleteCollectionWithQuery(dteColl, q);

function allDown(): boolean {
  for(let l of currentlyDown){
    if (!l) { return false };
  }
  return true;
}

// get random line that isn't already down
function getRandomLine(): number {
  let lineIndex: number = -1;
  if (!allDown) {
    let lineIsAlreadyDown = false;
    while (!lineIsAlreadyDown) {
      lineIndex = Math.floor(Math.random() * 9);
      lineIsAlreadyDown = currentlyDown[lineIndex];
    }
  }
  return lineIndex;
}

// Add downtime start entries (addition of base entry lets client know line is down) randomly if users are logged on
function addRandomDowntime() {
  if (currentlyOnline > 0) {
    
    let line = getRandomLine();
    if (line > -1) {
      let dte: DowntimeEntry = {
        startTime: Date.now(),
        endTime: null,
        line: LinesArr[line],
        notes: null,
        editedBy: null,
      };
      addDoc(dteColl, dte);
    }
  }
}

// listen for downtime entries to have an endtime to clear the line down status
onSnapshot(dteColl, (qs: QuerySnapshot) => {
  qs.docChanges().forEach((chg: DocumentChange) => {
    const d = chg.doc.data();
    for(let i = 0; i < LinesArr.length; ++i) {
      if (d.line == LinesArr[i] && d.endTime != null) {currentlyDown[i] = false}
    }
  })
})

// listen for online users and change local variable
const onlineColl = collection(db, onlineUsersColl);
onSnapshot(onlineColl, (qs: QuerySnapshot) => {
  qs.docChanges().forEach((chg: DocumentChange) => {
    if (chg.type == 'added') { currentlyOnline += 1 }
    if (chg.type == 'removed') { currentlyOnline -= 1 }
  })
});

setTimeout(addRandomDowntime, 120000);