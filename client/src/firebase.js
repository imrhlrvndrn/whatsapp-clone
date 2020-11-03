import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDbQhmTi6mvt_d-jSH9kLU-pJfrVgKq8SQ',
    authDomain: 'whatsapp-clone-33481.firebaseapp.com',
    databaseURL: 'https://whatsapp-clone-33481.firebaseio.com',
    projectId: 'whatsapp-clone-33481',
    storageBucket: 'whatsapp-clone-33481.appspot.com',
    messagingSenderId: '1055818039763',
    appId: '1:1055818039763:web:8c59a13751bb58b9346f26',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
