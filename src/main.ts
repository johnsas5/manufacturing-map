import Vue from 'vue';
import App from './App.vue';
import { DowntimeEntry, LinesArr, LinesDown } from "./Types";
import { deleteCollection, deleteCollectionWithQuery } from './deleteCollectionDb';
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "./dbconfig";
import { db } from './dbconfig';
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
import { onlineUsersColl, onlineUsersCollName, downtimeEntriesColl, downtimeEntriesCollName } from "./dbCollections";

Vue.config.productionTip = false;
// Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// set up variables
let currentlyOnline = 0;
const currentlyDown = LinesDown;

// delete all online users (should not be any if server is starting up)
deleteCollection(db, onlineUsersCollName)

// delete any open downtime entries (endtime is null)
const q = query(downtimeEntriesColl, where("endTime", "==", "null"));
deleteCollectionWithQuery(downtimeEntriesColl, q);

function allDown(): boolean {
  for(const l of currentlyDown){
    if (!l) { return false }
  }
  return true;
}

// get random line that isn't already down
function getRandomLine(): number {
  let lineIndex = -1;
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
    const line = getRandomLine();
    if (line > -1) {
      const dte: DowntimeEntry = {
        startTime: Date.now(),
        endTime: null,
        line: LinesArr[line],
        notes: null,
        editedBy: null,
      };
      addDoc(downtimeEntriesColl, dte);
    }
  }
}

// listen for downtime entries to have an endtime to clear the line down status
onSnapshot(downtimeEntriesColl, (qs: QuerySnapshot) => {
  qs.docChanges().forEach((chg: DocumentChange) => {
    const d = chg.doc.data();
    for(let i = 0; i < LinesArr.length; ++i) {
      if (d.line == LinesArr[i] && d.endTime != null) {currentlyDown[i] = false}
    }
  })
})

// listen for online users and change local variable
onSnapshot(onlineUsersColl, (qs: QuerySnapshot) => {
  qs.docChanges().forEach((chg: DocumentChange) => {
    if (chg.type == 'added') { currentlyOnline += 1 }
    if (chg.type == 'removed') { currentlyOnline -= 1 }
  })
});

//Uncomment to test downtime entry communication code in main.ts (also mapview needs to be updated)
//setTimeout(addRandomDowntime, 120000);