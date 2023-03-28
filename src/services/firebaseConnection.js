import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyCeSz6VG2nHkvSoVlJBcWgM2qIJVpM1pUg',
  authDomain: 'apptarefas-5730c.firebaseapp.com',
  projectId: 'apptarefas-5730c',
  storageBucket: 'apptarefas-5730c.appspot.com',
  messagingSenderId: '308382187371',
  appId: '1:308382187371:web:54e2ff79e2a87e6440562e',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
