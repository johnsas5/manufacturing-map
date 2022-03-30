<template>
  <div class="hello">
    <div v-if="showLoginScreen === true">
      <label>User Name:</label>
      <input type="text" v-model="username" />
      <p />
      <label>Password:</label>
      <input type="text" v-model="password" />
      <p />
      <button @click="fetchNextPage">Login</button>
      <button @click="showNewUserScreen">Create New User</button>
    </div>

    <div v-if="showCreateUserScreen === true">
      <label>User Name:</label>
      <input type="text" v-model="username" />
      <p />
      <label>Password:</label>
      <input type="text" v-model="password" />
      <p />
      <label>Retype Password:</label>
      <input type="text" v-model="retypepassword" />
      <p />
      <button @click="createNewUser">Create New User</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  DocumentReference,
  setDoc,
  doc,
  collection,
  query,
  QuerySnapshot,
  getDocs,
  where,
  QueryDocumentSnapshot,
  CollectionReference,
  updateDoc,
  addDoc,
} from "firebase/firestore";

@Component
export default class LoginPage extends Vue {
  @Prop() private msg!: string;
  username = "Type user name";
  password = "Password";
  retypepassword = "ReType Password";
  showLoginScreen = true;
  showCreateUserScreen = false;
  showNewUserScreen(): void {
    this.showLoginScreen = false;
    this.showCreateUserScreen = true;
    this.$forceUpdate();
  }
  fetchNextPage(): void {
    this.showLoginScreen = false;

    this.$forceUpdate();
  }

  createNewUser(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyBGYQPHNq0ulQM2R3s79hVwVYrkJHwQ_28",
      authDomain: "loginpage-5fc9c.firebaseapp.com",
      projectId: "loginpage-5fc9c",
      storageBucket: "loginpage-5fc9c.appspot.com",
      messagingSenderId: "270007601399",
      appId: "1:270007601399:web:756f97197f89650cd86bf2",
    };

    const app: FirebaseApp = initializeApp(firebaseConfig);
    const db: Firestore = getFirestore(app);

    const usersCollection: CollectionReference = collection(db, "users");

    let userNameAlreadyExists = false;

    getDocs(usersCollection)
      .then((myQueryRes: QuerySnapshot) => {
        myQueryRes.forEach((myDoc: QueryDocumentSnapshot) => {
          const stData = myDoc.data();

          if (stData.username == this.username) console.log("made it here");

          userNameAlreadyExists =
            stData.username === this.username || userNameAlreadyExists;
        });
      })
      .then(() => {
        if (!userNameAlreadyExists) {
          addDoc(usersCollection, {
            username: this.username,
            password: this.password,
          })
            .then(() => {
              console.log("New doc added");
            })
            .catch((err: any) => {
              console.log("Error");
            });
        }

        if (userNameAlreadyExists)
          console.log(`Username: '${this.username}' already exists`);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
