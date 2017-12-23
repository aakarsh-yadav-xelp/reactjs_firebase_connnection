import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBMaqG6hN2gKmthKIEjTPq2DVGiCGDBR9A",
  authDomain: "asda-c340d.firebaseapp.com",
  databaseURL: "https://asda-c340d.firebaseio.com",
  projectId: "asda-c340d",
  storageBucket: "asda-c340d.appspot.com",
  messagingSenderId: "248687791336"
};
var fire = firebase.initializeApp(config);
export default fire;
