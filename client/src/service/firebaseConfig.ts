import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore/bundle";

const firebaseConfig = {
  apiKey: "AIzaSyD5Uk0yDBeYN-IVcp8uK42Bm7WEn7qytCQ",
  authDomain: "ino-task.firebaseapp.com",
  projectId: "ino-task",
  storageBucket: "ino-task.appspot.com",
  messagingSenderId: "585182385485",
  appId: "1:585182385485:web:a8efcbb2184d5175165304",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase
    .firestore()
    .enablePersistence()
    .catch((e) => {
      console.log(e.message);
    });
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();
export const FieldValue = firebase.firestore.FieldValue;
export const timestamp = firebase.firestore.Timestamp.now();
export const serverTimestamp = firebase.firestore.Timestamp;
export type Timestamp = typeof timestamp;
