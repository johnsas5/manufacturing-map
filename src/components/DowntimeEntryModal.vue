<template>
  <div id="downtimeEntryModal">
    <h5>Enter downtime explanation for {{line}}:</h5>
    <textarea id="downtimeEntryNotes" v-model="message" rows="6" cols="50" placeholder="Add Downtime info here" />
    <button @click="clickSubmit">Submit</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { downtimeEntriesColl } from "../dbCollections";
import { DowntimeEntry } from "../Types";
import { 
  query,
  where,
  getDocs,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { User } from '@firebase/auth';

@Component
export default class DowntimeEntryModal extends Vue {
  @Prop() private line!: string
  @Prop() private employee!: User | null;
  message = "";

  mounted() {
    this.message = "";
  }

  async clickSubmit() {
    const l: string = this.line;
    const qry = query(downtimeEntriesColl, where("endTime", "==", null), where("line", "==", l));
    await getDocs(qry).then((qs: QuerySnapshot) => {
      if (!qs.empty) {
        qs.docs.forEach((d) => {
          updateDoc(d.ref, {endTime: Date.now(), notes: this.message, editedBy: this.employee?.displayName})
        });
      } else { console.log("query returned no docs") }
    })
    .catch((e) => console.log("Error updating doc: " + e))
    this.$emit("close-modal");
  }
}
</script>

<style>
/*MODAL STUFF!!!!!!!!!!!!!! */
</style>