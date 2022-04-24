<template>
  <div id="downtimeEntryModal" class="modal">
    <h1>Enter downtime explanation for {{line}}:</h1>
    <textarea id="downtimeEntryNotes" v-model="message" rows="6" cols="50" placeholder="Add Downtime info here" />
    <button @click="clickSubmitUpdate">{{buttonText}}</button>
    <button @click="$emit('close-modal')">Cancel</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { downtimeEntriesColl, downtimeEntriesCollName } from "../dbCollections";
import { DowntimeEntry } from "../Types";
import { 
  query,
  where,
  doc,
  getDocs,
  getDoc,
  QuerySnapshot,
  updateDoc,
  DocumentReference,
  DocumentSnapshot,
  DocumentData,
  deleteDoc,
} from "firebase/firestore";
import { User } from '@firebase/auth';
import { db } from "../dbconfig";


@Component
export default class DowntimeEntryModal extends Vue {
  @Prop() private line!: string
  @Prop() private employee!: User | null;
  @Prop() private docId!: string | null;
  dte: DocumentSnapshot<DocumentData> | null = null;
  dteRef: DocumentReference | null = null;
  message = "";
  buttonText = "Submit";

  mounted() {
    if (this.docId != null) {
      this.dteRef = doc(db, downtimeEntriesCollName, this.docId);
      getDoc(this.dteRef).then((myDoc: DocumentSnapshot) => {
        if (myDoc.exists()) {
          this.dte = myDoc;
          this.message = myDoc.data().notes;
          this.buttonText = "Update";
        }
      })
    }
  }

  async clickSubmitUpdate() {
    this.docId != null ? this.clickSubmit() : this.clickUpdate();
  }

  async clickSubmit() {
    console.log("submit");
    const l: string = this.line;
    const qry = query(downtimeEntriesColl, where("endTime", "==", null), where("line", "==", l));
    await getDocs(qry).then((qs: QuerySnapshot) => {
      if (!qs.empty) {
        qs.docs.forEach((d) => {
          updateDoc(d.ref, {endTime: Date.now(), notes: this.message, editedBy:  this.employee?.displayName})
        });
      } else { console.log("query returned no docs") }
    })
    .catch((e) => console.log("Error updating doc: " + e));
    this.$emit("close-modal");
  }

  async clickUpdate() {
    console.log("update");
    if (this.dteRef != null) {
      await updateDoc(this.dteRef, {notes: this.message, editedBy:  this.employee?.displayName})
      .catch((e) => console.log("Error updating doc: " + e));
    }
    this.$emit("close-modal");
  }
}
</script>

<style>

</style>