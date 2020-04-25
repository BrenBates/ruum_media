import firebase from 'firebase/app'
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyA3P2pbYPOTdlCQH6yE788qKV4cOJ4f_zU",
    authDomain: "ruum-media.firebaseapp.com",
    databaseURL: "https://ruum-media.firebaseio.com",
    projectId: "ruum-media",
    storageBucket: "ruum-media.appspot.com",
    messagingSenderId: "7542758363",
    appId: "1:7542758363:web:7c64f4bd285d09fc83e5fe",
    measurementId: "G-2TMTVKWN2Y"
  };
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}

