<template>
  <div>
    <section>
      <div id="loginpanel">
        <input type="text" v-model="u_email" placeholder="Enter your email" />
        <input
          type="password"
          v-model="u_pass"
          placeholder="Enter your password"
        />
        <div id="loginByEmail">
          <button :disabled="!isValidInput" @click="createAccount">
            Signup
          </button>
          <button :disabled="u_email.length === 0" @click="resetPass">
            Reset Password
          </button>
          <button :disabled="!isValidInput" @click="withEmail">Login</button>
        </div>
        <div>
          <input id="verif" type="checkbox" v-model="emailVerification" />
          <label for="verif">Send verification email</label>
        </div>
      </div>
    </section>
    <button @click="returnClicked">Return</button>
    <span id="msgbox" v-show="message.length > 0">{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  getAuth,
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { onlineUsersCollName } from "../dbCollections";
import { onlineUser } from "../Types";
import { db } from "../dbconfig";
import { DocumentReference, doc, setDoc } from "@firebase/firestore";

export type AccountType = {
  auth: Auth | null;
  u_email: string;
  u_pass: string;
};

@Component
export default class LoginView extends Vue {
  u_email = "";
  u_pass = "";
  message = "";
  auth: Auth | null = null;
  emailVerification = false;
  $router: any;

  get isValidInput(): boolean {
    return this.u_email.length > 0 && this.u_pass.length > 0;
  }

  returnClicked() {
    this.$router.back();
  }

  mounted(): void {
    this.auth = getAuth();
  }

  showMessage(txt: string) {
    this.message = txt;

    // The message will automatically disappear after 5 seconds
    setTimeout(() => {
      this.message = "";
    }, 5000);
  }

  async createAccount() {
    try {
      const cr: UserCredential = await createUserWithEmailAndPassword(
        this.auth!,
        this.u_email + "@gmail.com",
        this.u_pass
      );
    } catch (err) {
      this.showMessage(`Unable to create account ${err}`);
    }
  }

  async resetPass() {
    try {
      await sendPasswordResetEmail(this.auth!, this.u_email);

      this.showMessage(
        `A password reset link has been sent to ${this.u_email}`
      );
    } catch (err) {
      this.showMessage(`Unable to reset password ${err}`);
    }
  }

  async withEmail() {
    try {
      await signInWithEmailAndPassword(
        this.auth!,
        this.u_email + "@gmail.com",
        this.u_pass
      ).then((uc: UserCredential) => {
        const ou: onlineUser = {
          uid: uc.user.uid,
          displayName: uc.user.displayName,
          online: true,
          workingOnLine: null,
        }
        const userDoc: DocumentReference = doc(db, onlineUsersCollName, uc.user.uid);
        setDoc(userDoc, ou);
      });

      this.showMessage("Logged in");

      const auth = getAuth();

      this.$router.push({path: "/"});
    } catch (err) {
      this.showMessage(`Unable to login ${err}`);
    }
  }
}
</script>
-->
<style scoped>
#loginpanel {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  padding: 0.5em;
  border-radius: 0.5em;
  margin: 25px;
}

section {
  margin-bottom: 1em;
}
#msgbox {
  font-size: 80%;
  font-style: italic;
  border-radius: 0.5em;
  background-color: hsl(0, 0%, 75%);
  padding: 0.5em;
}
#loginByEmail {
  margin-top: 0.5em;
}
#withProvider {
  margin-top: 1em;
  align-self: center;
}

button {
  margin-right: 0.25em;
}
label {
  font-size: 80%;
}
</style>
