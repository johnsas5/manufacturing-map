<template>
  <div class="chat">
        <div id="chatDiv">
            <h2>Chat</h2>
            <section >
                <div class="scroll_div">
                  <!-- <vue-scrolling-table id="center">
                    <template #thead>
                      <tr>
                        <th>Messages</th>
                      </tr>
                    </template>
                    <template #tbody>
                      <tr v-for="message in messages" v-bind:key="message">
                        <td>{{message}}</td>
                      </tr>
                    </template> -->
                    <table id="center">
                        <tr v-for="(m,pos) in messages" v-bind:key=pos>
                          <td>{{m}}</td>
                        </tr>
                   </table>
                  <!-- </vue-scrolling-table> -->
                </div>
            </section>
            <footer>
              <!-- <form> -->
                <form @submit.prevent="SendMessage, GetMessages">
                    <label>{{currentUser.displayName}}:</label>
                    <input v-model="tb_message" type="text" >
                    <button id="send_chat" @click="SendMessage">Send</button>
                </form>
            </footer>
            <div class="scroll_div">
              <table>
                <th class="left_align_header">Online Users</th>
                <tr v-for="u in users" v-bind:key=u.uid>
                  <td>
                    <user-display v-bind:dName="u.displayName" />
                  </td>
                </tr>
              </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { doc, onSnapshot, setDoc,DocumentChange, getDocs,CollectionReference, collection, addDoc, QuerySnapshot, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { getAuth, Auth, User, signOut } from "@firebase/auth";
import UserDisplay from "../components/UserDisplay.vue";
import {getDatabase} from "firebase/database"
import db from '../dbconfig'
import { onlineUser } from '@/Types';
import { onlineUsersColl } from '@/dbCollections';
// import {
//   addDoc,
//   collection,
//   CollectionReference,
//   doc,
//   DocumentReference,
//   Firestore,
//   setDoc,
// } from "firebase/firestore";

@Component({
  components: {
    UserDisplay,
  }
})
export default class ChatView extends Vue {
  @Prop() readonly currentUser!: User;
  msg = "";
  tb_message = "";
  messages: Array<string> = [];
  users: Array<onlineUser> = [];

  mounted(): void {
    this.GetMessages();
    getDocs(onlineUsersColl)
    .then((qs: QuerySnapshot) => {
      qs.forEach((d: QueryDocumentSnapshot) => {
        const u = d.data();
        const ou: onlineUser = {
          uid: d.id,
          displayName: u.displayName,
          online: u.online,
          workingOnLine: u.workingOnLine
        }
        this.users.push(ou);
      })
    })
    onSnapshot(onlineUsersColl, (qs: QuerySnapshot) => {
      qs.docChanges().forEach((chg: DocumentChange) => {
        const d = chg.doc.data();
        const ou: onlineUser = {
          uid: chg.doc.id,
          displayName: d.displayName,
          online: d.online,
          workingOnLine: d.workingOnLine
        }
        if (chg.type == 'added') { 
          this.users.forEach((x: onlineUser) => console.log(x.displayName));
          if (!this.users.find((v) => v.uid == ou.uid)) {
            this.users.push(ou); 
          }
        }
        else if (chg.type == 'removed') { 
          const i = this.users.findIndex((v) => v.uid == ou.uid);
          this.removeUser(i);
        }
      })
    });
  }

  removeUser(i: number) {
    try {
    this.users.splice(i, 1);
    }catch(e){console.log(e);}
  }

  SendMessage(): void { 
    let u = "";
    this.currentUser.displayName != null ? u = this.currentUser.displayName : u = this.currentUser.uid;
    setDoc(doc(db, "messages", (new Date()).toString()), {
      user: this.currentUser.displayName,
      message: this.tb_message
    });
    
    this.tb_message = "";
  }

   GetMessages(): void {
    const coll = collection(db, "messages");
    const msgs = getDocs(coll).then( (qs: QuerySnapshot) =>{
      qs.forEach((qd: QueryDocumentSnapshot) => {
        // this.messages.set(qd.id,qd.data());
        // console.log(qd.data());
        var tmp = qd.data();
        this.messages.push(tmp.user.toString() + ": " + tmp.message.toString())
        // this.messages.set(tmp.user.toString(),tmp.message.toString());
        // console.log("From: ", tmp.user, " MSG: ", tmp.message);
        // console.log("From Firestore: ", qd.id, qd.data());
    });
    // console.log("Before");
    //   for (let key of this.messages.keys()) {
        
    //     console.log(this.messages.get(key).user);
    //   }
    //   console.log("after");
      
    });


  onSnapshot(collection(db,"messages"), (qs: QuerySnapshot) => {
    try{
      qs.docChanges().forEach((chg: DocumentChange) => {
      const d = chg.doc.data();
      this.messages.push(d.user.toString() + ": " + d.message.toString());
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
    
    // console.log("before");
    // console.log(msgs);
    // console.log("after");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    // return docSnap
    // this.messages = getDocs(doc(db,"messages"));
    // getDoc(doc(db,"messages")).then((caliSnapshot: DocumentSnapshot) => {
    // if (caliSnapshot.exists()) console.log("Info on CA", caliSnapshot.data().toString());
    // else console.error("Document not found");
    // });
    // this.messages = doc(db,"messages");
    // for (let [key, value] of this.messages) {
    // console.log(key, value)
    // }
    
  }
}
</script>
<style scoped>
  #center{
    margin-left: auto;
    margin-right: auto;
    max-height: 25px;
  }
  #center td {
    padding: 20px;
    border: black;
    border-style: solid;
    border-width: 1px;
  }
  .scroll_div {
    overflow-y: auto;
    max-height: 400px;
    display: flex;
    flex-direction: column-reverse;
  }
  #send_chat {
    vertical-align: middle;
    align-content: center;
    font-size: 16px;
    padding: 3px;
    width: 100px;
  }
  .left_align_header {
    text-align: left;
  }
  
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

