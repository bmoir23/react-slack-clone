import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDO12S9pfWcTKR8XiDLGq9u6Z3iu52CQOg",
    authDomain: "react-slack-clone-dc151.firebaseapp.com",
    databaseURL: "https://react-slack-clone-dc151.firebaseio.com",
    projectId: "react-slack-clone-dc151",
    storageBucket: "react-slack-clone-dc151.appspot.com",
    messagingSenderId: "100355945139",
    appId: "1:100355945139:web:08b50c8a44ad51c0e976c6",
    measurementId: "G-SYQFH08LYQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase; 