import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBx7ETymOmjvyZ-VcOGizriPcU6G0MpJJ8",
  authDomain: "redux-login-b7c48.firebaseapp.com",
  projectId: "redux-login-b7c48",
  storageBucket: "redux-login-b7c48.appspot.com",
  messagingSenderId: "170656976103",
  appId: "1:170656976103:web:b33ef37ef45c4aee6da642",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, firebase, db, storage, provider}