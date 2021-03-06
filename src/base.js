import Rebase from 're-base';
import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCwgT-cUhLlTOlR_mDvDTatnu9KmzRuku4",
  authDomain: "catch-of-the-day-jag-5c296.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jag-5c296-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;