import firebase from "firebase";
var config = {
  apiKey: "AIzaSyC8joxNtFcJMl37tovTPCAddbCoDhBoxr8",
  authDomain: "learning-5e27e.firebaseapp.com",
  databaseURL: "https://learning-5e27e.firebaseio.com",
  projectId: "learning-5e27e",
  storageBucket: "learning-5e27e.appspot.com",
  messagingSenderId: "952354135029"
};
var fire = firebase.initializeApp(config);
export default fire;
