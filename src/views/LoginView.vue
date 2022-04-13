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
} from "firebase/auth";

export type AccountType = {
  auth: Auth | null;
  u_email: string;
  u_pass: string;
};

@Component
export default class LoginView extends Vue {
  u_email = "mcbailey@toolingsystemsgroup.com";
  u_pass = "!freebeerRocks96?";
  message = "";
  auth: Auth | null = null;
  emailVerification = false;
  $router: any;

  get isValidInput(): boolean {
    return this.u_email.length > 0 && this.u_pass.length > 0;
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
        this.u_email,
        this.u_pass
      );

      if (!this.emailVerification) {
        this.showMessage(`New account created with UID ${cr.user.uid}`);

        return;
      }

      await sendEmailVerification(cr.user);

      await signOut(this.auth!);

      this.showMessage(
        "An email verification has been sent to " + cr.user.email
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
      const cr: UserCredential = await signInWithEmailAndPassword(
        this.auth!,
        this.u_email,
        this.u_pass
      );

      if (cr.user.emailVerified) {
        // this.$router.push({ name: "home", params: { byWayOf: "Email" } });
        this.showMessage(`You are logged in`);
        return;
      }

      this.showMessage("You must first verify your email");

      await signOut(this.auth!);
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

input {
  margin: 0.25em;
  align-self: stretch;
}

button {
  margin-right: 0.25em;
}
label {
  font-size: 80%;
}
</style>
