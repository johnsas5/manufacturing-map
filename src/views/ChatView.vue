<template>
  <div class="chat">
        <div>
            <label>Enter your username</label>
            <input v-model="tb_user" type=text>
            <button >Enter</button>

        </div>
        <div id="chatDiv">
            <h1>CHAT</h1>
            <section >
                <div id="my_scroll_div">
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
                    <label>Type a msg:</label>
                    <input v-model="tb_message" type="text" >
                    <button @click="SendMessage">Send</button>
                </form>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { doc, onSnapshot, setDoc,DocumentChange, getDocs,CollectionReference, collection, addDoc, QuerySnapshot, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import {getDatabase} from "firebase/database"
import db from '../dbconfig'
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
export default class HelloWorld extends Vue {
  private msg!: string;
  public tb_message= "";
  private tb_user = "";

  public messages:any = [];

  mounted(): void {
    this.GetMessages();
  }

  SendMessage(): void { 
    setDoc(doc(db, "messages", (new Date()).toString()), {
      user: this.tb_user,
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
        console.log(this.messages);
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
      console.log(chg.doc.data());
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

#my_scroll_div{
    overflow-y: auto;
    max-height: 500px;
    display: flex;
    flex-direction: column-reverse;
}
  
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

