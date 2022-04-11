
import { FirebaseApp, initializeApp } from "firebase/app";

import { Firestore, getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD_k--tLCWh-lLAPN-L0k94x467rfiGisA",
    authDomain: "webappfinalchat.firebaseapp.com",
    databaseURL: "https://webappfinalchat-default-rtdb.firebaseio.com",
    projectId: "webappfinalchat",
    storageBucket: "webappfinalchat.appspot.com",
    messagingSenderId: "18919090332",
    appId: "1:18919090332:web:27c87ef78a7745ec6a2559"
  };
const myapp: FirebaseApp = initializeApp(firebaseConfig);
const db:Firestore = getFirestore(myapp);



export default db