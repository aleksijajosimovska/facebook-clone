import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCAOnmrdd5VwOqo2WkCnRj1Zizhg6hderw",
    authDomain: "facebook-clone-1ad9f.firebaseapp.com",
    databaseURL: "https://facebook-clone-1ad9f.firebaseio.com",
    projectId: "facebook-clone-1ad9f",
    storageBucket: "facebook-clone-1ad9f.appspot.com",
    messagingSenderId: "122004912659",
    appId: "1:122004912659:web:c0b6bb0931c1c681f4dde6",
    measurementId: "G-SKLWRFTGWS"
  };

export const firebaseApp = firebase.initializeApp(config);

export const userRef = firebaseApp.database().ref("users");
