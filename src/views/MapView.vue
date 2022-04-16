<template>
  <div @click="clickedLine = ''">
    <svg width="14in" height="8.5in" version="1.1" viewBox="0 0 355.6 215.9" xmlns="http://www.w3.org/2000/svg">
      <rect id="Line01" v-bind:class="linesDown[0]" @click="setModalVars(linesArr[0])" x="61.427" y="22.065" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(6.6776 9.4431)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line01</tspan></text>
      <rect id="Line04" v-bind:class="linesDown[3]" @click="setModalVars(linesArr[3])" x="61.427" y="88.17" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(6.6776 75.548)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line04</tspan></text>
      <rect id="Line07" v-bind:class="linesDown[6]" @click="setModalVars(linesArr[6])" x="61.427" y="154.28" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(6.6776 141.65)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line07</tspan></text>
      <rect id="Line02" v-bind:class="linesDown[1]" @click="setModalVars(linesArr[1])" x="158.27" y="22.065" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(103.52 9.4431)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line02</tspan></text>
      <rect id="Line05" v-bind:class="linesDown[4]" @click="setModalVars(linesArr[4])" x="158.27" y="88.17" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(103.52 75.548)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line05</tspan></text>
      <rect id="Line08" v-bind:class="linesDown[7]" @click="setModalVars(linesArr[7])" x="158.27" y="154.28" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(103.52 141.65)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line08</tspan></text>
      <rect id="Line03" v-bind:class="linesDown[2]" @click="setModalVars(linesArr[2])" x="255.11" y="22.065" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(200.36 9.4431)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line03</tspan></text>
      <rect id="Line06" v-bind:class="linesDown[5]" @click="setModalVars(linesArr[5])" x="255.11" y="88.17" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(200.36 75.548)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line06</tspan></text>
      <rect id="Line09" v-bind:class="linesDown[8]" @click="setModalVars(linesArr[8])" x="255.11" y="154.28" width="47.892" height="32.523" fill-opacity="0" stroke="#000" stroke-linejoin="round" stroke-width=".52917"/>
      <text transform="translate(200.36 141.65)" x="74.465233" y="64.145317" fill="#000000" font-family="sans-serif" font-size="10.583px" stroke-width=".26458" style="line-height:1.25;shape-inside:url(#rect31);white-space:pre" xml:space="preserve"><tspan x="61.427734" y="31.719918">Line09
      </tspan></text>
    </svg>
    <div>
      <line-options-modal v-if="showModal" vbind:line="modalLine" v-bind:lineIsDown="modalLineIsDown" v-bind:employee="modalEmployee" @close-modal="closeLineOptionsModal" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LineOptionsModal from "../components/LineOptionsModal.vue"
import { downtimeEntriesColl } from "../dbCollections";
import { LinesArr, LinesDown } from "../Types";
import { 
  onSnapshot,
  QuerySnapshot,
  DocumentChange
} from "firebase/firestore";
import { getAuth, Auth, User } from '@firebase/auth';

@Component({
  components: {
    LineOptionsModal
  }
})
export default class MapView extends Vue {
  linesDown = LinesDown;
  linesArr = LinesArr;
  auth: Auth | null = null;
  modalLine = "";
  modalLineIsDown = false;
  modalEmployee: User | null = null;
  showModal = false;

  mounted() {
    this.auth = getAuth();
    this.dteListener();
  }
  // listen for downtime entries
  dteListener() {
    onSnapshot(downtimeEntriesColl, (qs: QuerySnapshot) => {
      qs.docChanges().forEach((chg: DocumentChange) => {
        const d = chg.doc.data();
        
        for(let i = 0; i < this.linesArr.length; ++i) {
          if (d.line == this.linesArr[i]) {
            if (d.endTime != null) {
              this.linesDown[i] = true;
            } 
            else {
              this.linesDown[i] = false;
            } 
          }
        }
      })
    })
  }

  setModalVars(l: string) {
    if (l != "") {
      this.modalLine = l;
      let index = -1;
      for(let i = 0; i < this.linesArr.length; ++i) {
        if (this.linesArr[i] == l) {
          index = i;
        }
      }
      this.modalLineIsDown = this.linesDown[index];
    }
    this.modalEmployee = this.auth?.currentUser != null ? this.auth.currentUser : null
    this.showModal = true;
  }

  closeLineOptionsModal() {
    console.log("closing modal")
    this.modalLine = "";
    this.modalLineIsDown = false;
    this.modalEmployee = null;
    this.showModal = false;
  }
}
</script>

<style>
.true {
  background-color: hsl(0, 100%, 77%);
}
.false {
  background-color: hsl(0, 0%, 100%);
}
</style>