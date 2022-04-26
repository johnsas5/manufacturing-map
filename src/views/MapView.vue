<template>
  <div @click="clickedLine = ''">
    <svg
      width="14in"
      height="8.5in"
      version="1.1"
      viewBox="0 0 355.6 215.9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="Line01"
        v-bind:class="lines[0]"
        @click="setModalVars(linesArr[0])"
        x="61.427"
        y="22.065"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(6.6776 9.4431)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line01</tspan>
      </text>
      <rect
        id="Line04"
        v-bind:class="lines[3]"
        @click="setModalVars(linesArr[3])"
        x="61.427"
        y="88.17"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(6.6776 75.548)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line04</tspan>
      </text>
      <rect
        id="Line07"
        v-bind:class="lines[6]"
        @click="setModalVars(linesArr[6])"
        x="61.427"
        y="154.28"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(6.6776 141.65)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line07</tspan>
      </text>
      <rect
        id="Line02"
        v-bind:class="lines[1]"
        @click="setModalVars(linesArr[1])"
        x="158.27"
        y="22.065"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(103.52 9.4431)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line02</tspan>
      </text>
      <rect
        id="Line05"
        v-bind:class="lines[4]"
        @click="setModalVars(linesArr[4])"
        x="158.27"
        y="88.17"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(103.52 75.548)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line05</tspan>
      </text>
      <rect
        id="Line08"
        v-bind:class="lines[7]"
        @click="setModalVars(linesArr[7])"
        x="158.27"
        y="154.28"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(103.52 141.65)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line08</tspan>
      </text>
      <rect
        id="Line03"
        v-bind:class="lines[2]"
        @click="setModalVars(linesArr[2])"
        x="255.11"
        y="22.065"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(200.36 9.4431)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line03</tspan>
      </text>
      <rect
        id="Line06"
        v-bind:class="lines[5]"
        @click="setModalVars(linesArr[5])"
        x="255.11"
        y="88.17"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(200.36 75.548)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line06</tspan>
      </text>
      <rect
        id="Line09"
        v-bind:class="lines[8]"
        @click="setModalVars(linesArr[8])"
        x="255.11"
        y="154.28"
        width="47.892"
        height="32.523"
        fill-opacity="100"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".52917"
      />
      <text
        transform="translate(200.36 141.65)"
        x="74.465233"
        y="64.145317"
        fill="#000000"
        font-family="sans-serif"
        font-size="10.583px"
        stroke-width=".26458"
        style="line-height: 1.25; shape-inside: url(#rect31); white-space: pre"
        xml:space="preserve"
      >
        <tspan x="61.427734" y="31.719918">Line09</tspan>
      </text>
    </svg>
    <div>
      <line-options-modal
        v-show="showModal"
        v-bind:line="modalLine"
        v-bind:lineDown="modalLineIsDown"
        v-bind:employee="modalEmployee"
        @close-modal="closeLineOptionsModal"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LineOptionsModal from "../components/LineOptionsModal.vue";
import { downtimeEntriesColl } from "../dbCollections";
import { getDocsWithQuery } from "../getDocsFromCollDb";
import { DowntimeEntry, LinesArr, LinesDown } from "../Types";
import { logAuthData } from "../log";
import {
  onSnapshot,
  query,
  where,
  QuerySnapshot,
  DocumentChange,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { getAuth, Auth, User, signOut } from "@firebase/auth";
import LoginView from "./LoginView.vue";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../dbconfig";

@Component({
  components: {
    LineOptionsModal,
    LoginView
  },
})
export default class MapView extends Vue {
  linesDown = LinesDown;
  linesArr = LinesArr;
  lines = new Array<string>(LinesArr.length).fill("isup");
  auth: Auth | null = null;
  modalLine = "";
  modalLineIsDown = false;
  modalEmployee: User | null = null;
  showModal = false;
  showLogin = false;

  showLogin = false;

  mounted() {
    this.auth = getAuth(app);
    logAuthData(this.auth);
    this.setInitialDownLinesState();
    this.dteListener();
    console.log(`element 4: ${this.linesDown[3]}`);
  }

  loggedInClicked() {
    this.showLogin = true;

    this.$forceUpdate();
  }

   loggedOutClicked() {
    this.showLogin = false;

    signOut(getAuth(app));

    this.$forceUpdate();
  }

  // get lines currenlty down and sets the ui binded variables to false
  setInitialDownLinesState() {
    const q = query(downtimeEntriesColl, where("endTime", "==", "null"));
    getDocsWithQuery(q, (qs: QuerySnapshot<DocumentData>) => {
      qs.docs.forEach((d) => {
        for (let i = 0; i < this.linesArr.length; ++i) {
          this.lines[i] = "isdown";
        }
      });
    });
  }

  get isUserLoggedIn() {
    this.auth = getAuth(app);

    if (!this.auth) return false;

    if (this.auth.currentUser) return true;
    return false;
  }

  get currentUserName(): string {
    const auth = this.auth;

    if (!auth) return "";

    const user = auth.currentUser;

    if (!user) return "";

    const displayName = user.displayName;

    if (!displayName) return "";

    return displayName;

    // return this.auth?.currentUser?.email;
  }

  // listen for new downtime entries
  dteListener() {
    onSnapshot(downtimeEntriesColl, (qs: QuerySnapshot) => {
      qs.docChanges().forEach((chg: DocumentChange) => {
        const d = chg.doc.data();
        for (let i = 0; i < this.linesArr.length; ++i) {
          if (d.line == this.linesArr[i]) {
            if (d.endTime == null) {
              this.lines[i] = "isdown";
            } else {
              this.lines[i] = "isup";
            }
          }
        }
      });
    });
  }

  setModalVars(l: string) {
    if (!this.showModal) {
      if (l != "") {
        this.modalLine = l;
        let index = -1;
        for (let i = 0; i < this.linesArr.length; ++i) {
          if (this.linesArr[i] == l) {
            index = i;
          }
        }
        this.modalLineIsDown = this.lines[index] == "isdown";
      }
      this.modalEmployee =
        this.auth?.currentUser != null ? this.auth.currentUser : null;
      this.showModal = true;
    }
  }

  closeLineOptionsModal() {
    console.log("closing modal");
    this.modalLine = "";
    this.modalLineIsDown = false;
    this.modalEmployee = null;
    this.showModal = false;
  }
}
</script>

<style>
.isdown {
  fill: hsl(0, 100%, 77%);
  fill-opacity: 100%;
}
.isup {
  fill: hsl(0, 0%, 100%);
  fill-opacity: 0%;
}
</style>
