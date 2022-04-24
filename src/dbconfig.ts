import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";


// import { FirebaseApp, initializeApp } from "firebase/app";

// import { Firestore, getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBMSUjPYjwnI-6_nMQq-1AK5siAPGW4VOU",
  authDomain: "firestore-gvsu-ead04.firebaseapp.com",
  projectId: "firestore-gvsu-ead04",
  storageBucket: "firestore-gvsu-ead04.appspot.com",
  messagingSenderId: "985689441144",
  appId: "1:985689441144:web:41ae0b898b90d97456be8d"
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);

// import { FirebaseApp, initializeApp } from "firebase/app";

// import { Firestore, getFirestore } from "firebase/firestore";
const firebaseConfig2= {
    apiKey: "AIzaSyD_k--tLCWh-lLAPN-L0k94x467rfiGisA",
    authDomain: "webappfinalchat.firebaseapp.com",
    databaseURL: "https://webappfinalchat-default-rtdb.firebaseio.com",
    projectId: "webappfinalchat",
    storageBucket: "webappfinalchat.appspot.com",
    messagingSenderId: "18919090332",
    appId: "1:18919090332:web:27c87ef78a7745ec6a2559"
  };
const myapp: FirebaseApp = initializeApp(firebaseConfig2);
const db2:Firestore = getFirestore(myapp);



export default db