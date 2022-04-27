<template>
  <div class="chat">
        
        <div id="chatDiv">
            <section >
              <h1>Downtime Entries</h1>
                <div id="my_scroll_div">
                    <table id="center">
                      <th>Date Down</th>
                      <th>Date Resolved</th>
                      <th>Line</th>
                      <th>Notes</th>
                      <th>Edited By</th>
                        <tr v-for="(m,pos) in downTimes" v-bind:key=pos>
                          <td>{{getDateString(m.startTime)}}</td>
                          <td>{{getDateString(m.endTime)}}</td>
                          <td>{{m.line}}</td>
                          <td>{{m.notes}}</td>
                          <td>{{m.editedBy}}</td>
                        </tr>
                   </table>
                  <!-- </vue-scrolling-table> -->
                </div>
            </section>
            <footer/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { doc, onSnapshot, setDoc,DocumentChange, getDocs,CollectionReference, collection, addDoc, QuerySnapshot, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import {getDatabase} from "firebase/database"
import db from '../dbconfig'
import { downtimeEntriesCollName, downtimeEntriesColl } from '../dbCollections'
import {DowntimeEntry} from '../Types'
// import {
//   addDoc,
//   collection,
//   CollectionReference,
//   doc,
//   DocumentReference,
//   Firestore,
//   setDoc,
// } from "firebase/firestore";

@Component
export default class DowntimeEntriesView extends Vue {
  
  public downTimes:Array<DowntimeEntry> = [];

  mounted(): void {
    this.GetDownTime();
    this.downTimes.sort((a, b) => {
      if (a.endTime == null ) { return -1; }
      if (b.endTime == null ) { return 1; }
      return a.endTime - b.endTime;
    });
  }

  getDateString(n: number | null): string {
    if (n != null) {
    const d = new Date(n);
    return d.toString();
    }
    else {
      return "null";
    }
  }

  GetDownTime(): void {
  const coll = collection(db, downtimeEntriesCollName);
  const msgs = getDocs(coll).then( (qs: QuerySnapshot) =>{
    var id = 0;
    qs.forEach((qd: QueryDocumentSnapshot) => {
        //  console.log(qd.data());
    var d = qd.data();
    var entry : DowntimeEntry = {
      startTime: d.startTime,
      endTime: d.endTime,
      line: d.line,
      notes: d.notes,        
      editedBy: d.editedBy 
    };
    this.downTimes.push(entry);
  });
  });
    
    onSnapshot(collection(db,downtimeEntriesCollName), (qs: QuerySnapshot) => {
      try{
        qs.docChanges().forEach((chg: DocumentChange) => {
        const d = chg.doc.data();
        var entryDoc : DowntimeEntry = {
              startTime: d.startTime,
              endTime: d.endTime,
              line: d.line,
              notes: d.notes,
              editedBy: d.editedBy 
        };

      this.downTimes.push(entryDoc);
      // for(let i = 0; i < this.messages.length; ++i) {
      //   console.log("MESSAGE " + this.messages[i])
      //     if (d.user.toString() + ": " + d.message.toString() == this.messages[i] && d.user.toString() != null) {
      //       console.log("FOUND ONE");
      //       // this.messages = [];
      //       // this.tb_message = "";
      //       // this.GetMessages();
      //       // 
      //     }
      // }
        })
      }catch(e){
        console.log(e);
      }
  })
  }



  // onSnapshot( collection(db, "DownTime"), (qs: QuerySnapshot) => {
  // try{
  //      qs.docChanges().forEach((chg: DocumentChange) => {
  // //     const d = chg.doc.data();
  // //     console.log(chg.doc.data());

  // //     var entry =  <DowntimeEntry>({
  // //           startTime: d.startTime,
  // //           endTime: d.endTime,
  // //           line: d.line,
  // //           notes: d.message,
  // //           editedBy: d.editedBy 
  // //       });

  // //     this.downTimes.set(this.downTimes.size,entry);
  //    });
  // }catch(e){
  //      console.log(e);
  // }
  // // })
  // }
  //   // console.log("before");
  //   // console.log(msgs);
  //   // console.log("after");
  //   // const docSnap = await getDoc(docRef);

  //   // if (docSnap.exists()) {
  //   //   console.log("Document data:", docSnap.data());
  //   // } else {
  //   //   // doc.data() will be undefined in this case
  //   //   console.log("No such document!");
  //   // }
  //   // return docSnap
  //   // this.messages = getDocs(doc(db,"messages"));
  //   // getDoc(doc(db,"messages")).then((caliSnapshot: DocumentSnapshot) => {
  //   // if (caliSnapshot.exists()) console.log("Info on CA", caliSnapshot.data().toString());
  //   // else console.error("Document not found");
  //   // });
  //   // this.messages = doc(db,"messages");
  //   // for (let [key, value] of this.messages) {
  //   // console.log(key, value)
  //   // }
    
  // }
}
</script>
<style scoped>
  #center{
    margin-left: 20px;
    margin-right: 20px;
    max-height: 25px;
    border-collapse: collapse;
  }
  #center td, #center th {
    border: 1px solid black;
  }
  #center td {
    padding: 10px;
  }
  #my_scroll_div{
    overflow-y: auto;
    max-height: 500px;
    display: flex;
    flex-direction: column-reverse;
  }
  #center tr:hover {
    background-color: hsl(0,0%,95%);
  }
  
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

