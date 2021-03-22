import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCMg7MlkBnyP-Kma1L2l4xNr92LfMP-MzE",
    authDomain: "storyhub-p71.firebaseapp.com",
    projectId: "storyhub-p71",
    storageBucket: "storyhub-p71.appspot.com",
    messagingSenderId: "935486393555",
    appId: "1:935486393555:web:d68c51607a993f1e5ad826"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
