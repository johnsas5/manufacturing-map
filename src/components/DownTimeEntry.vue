<template>
  <div class="Down Time">
        <div id="chatDiv">
            <h1>Down Time</h1>
            <section >
                <div id="my_scroll_div">
                  
                    <table id="center">
                        <tr v-for="message in messages" v-bind:key="message">
                          <td>{{message}}</td>
                        </tr>
                   </table>
                  <!-- </vue-scrolling-table> -->
                </div>
            </section>
            <footer>
                <form @submit.prevent="SendMessage, GetMessages">
                    <label>Type a msg:</label>
                    <input v-model="tb_note" type="text" >
                    <button @click="NewDownTime">Submit</button>
                </form>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { doc, setDoc,DocumentReference, getDocs,CollectionReference, collection, addDoc, QuerySnapshot, QueryDocumentSnapshot, DocumentData, Firestore } from "firebase/firestore";
import {getDatabase} from "firebase/database"
import { getAuth } from "firebase/auth";
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
  @Prop() private msg!: string;
  @Prop() private tb_note!: string;
  @Prop() public line = "";
  public entries:any = [];
  public user:any = "";

  mounted(): void {
    console.log("LINE: " + this.line)
    this.GetDownTimes(this.line);
    
    this.user = getAuth();
  }

  NewDownTime(line:string): void { 
    setDoc(doc(db, "DownTime", line.toString()), {
        // Down Time Data
        DateDown: new Date().toString(),
        DateResolved:"",
        Notes: this.tb_note,
        personEdit:this.user,
    //   user: this.tb_user,
    //   message: this.tb_message
    });
    this.entries = [];
    this.tb_note = "";
    this.GetDownTimes(line);
  }

   GetDownTimes(line:string): void {
    const coll = collection(db, "DownTime/" + line);
    const msgs = getDocs(coll).then( (qs: QuerySnapshot) =>{
      qs.forEach((qd: QueryDocumentSnapshot) => {
        var tmp = qd.data();
        this.entries.push(tmp.DateDown.toString() + ": " + tmp.DateResolved.toString() + ": " + tmp.personEdit.toString() );
        console.log(this.entries);
    });
      
    });
    
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
    max-height: 100px;
}
  
</style>