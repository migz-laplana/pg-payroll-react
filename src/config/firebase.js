import firebase from "firebase";
import { Fuego } from "@nandorojo/swr-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCFuBNl_-dvrOxI7yQPAWegWGaih6l7io",
    authDomain: "pg-payroll.firebaseapp.com",
    databaseURL: "https://pg-payroll.firebaseio.com",
    projectId: "pg-payroll",
    storageBucket: "pg-payroll.appspot.com",
    messagingSenderId: "209497032755",
    appId: "1:209497032755:web:fc7f2c05404073adb67b46",
    measurementId: "G-D9RWKE0F2D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

//firestore swr
const fuego = new Fuego(firebaseConfig);

export { db, auth, fuego };
