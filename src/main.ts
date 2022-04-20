import Vue from 'vue';
import App from './App.vue';
import { DowntimeEntry, LinesArr, LinesDown } from "./Types";
import { deleteCollection, deleteCollectionWithQuery } from './deleteCollectionDb';
import { db } from './dbconfig';
import { 
  onSnapshot,
  query,
  where,
  QuerySnapshot,
  DocumentChange,
  addDoc,
} from "firebase/firestore";
import { onlineUsersColl, onlineUsersCollName, downtimeEntriesColl, downtimeEntriesCollName } from "./dbCollections";
import appRouter from "./router";
console.log("Enter main");
Vue.config.productionTip = false;

new Vue({
  router: appRouter,
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
  for (let i = 0; i < currentlyDown.length; ++i){
    if (!currentlyDown[i]) { return false; }
  }
  for (const l of currentlyDown) {
    if (!l) { return false; }
  }
  return true;
}

// get random line that isn't already down
function getRandomLine(): number {
  let lineIndex = -1;
  const d = allDown();
  if (!allDown()) {
    let lineIsAlreadyDown = false;
    while (!lineIsAlreadyDown) {
      lineIndex = Math.floor(Math.random() * 9);
      lineIsAlreadyDown = currentlyDown[lineIndex];
      break;
    }
  }
  return lineIndex;
}

// Add downtime start entries (addition of base entry lets client know line is down) randomly if users are logged on
function addRandomDowntime() {
  //if (currentlyOnline > 0) {
    const line = getRandomLine();
    if (line > -1) {
      const dte: DowntimeEntry = {
        startTime: Date.now(),
        endTime: null,
        line: LinesArr[line],
        notes: null,
        editedBy: null,
      };
      addDoc(downtimeEntriesColl, dte)
      .then(() => console.log("Downtime added: " + dte))
      .catch((e) => console.log("Error adding downtime: " + e));
    }
  //}
}

// listen for downtime entries to have an endtime to clear the line down status
onSnapshot(downtimeEntriesColl, (qs: QuerySnapshot) => {
  qs.docChanges().forEach((chg: DocumentChange) => {
    const d = chg.doc.data();
    for(let i = 0; i < LinesArr.length; ++i) {
      if (d.line == LinesArr[i] && d.endTime != null) 
        {currentlyDown[i] = false;}
    }
  })
})

// listen for online users and change local variable
onSnapshot(onlineUsersColl, (qs: QuerySnapshot) => {
  qs.docChanges().forEach((chg: DocumentChange) => {
    if (chg.type == 'added') { currentlyOnline += 1 }
    if (chg.type == 'removed') { currentlyOnline -= 1 }
    //Delete
    console.log("Currently Online: " + currentlyOnline);
  })
});

//Uncomment to test downtime entry communication code in main.ts (also mapview needs to be updated)
//setTimeout(addRandomDowntime, 120000);

//addRandomDowntime();