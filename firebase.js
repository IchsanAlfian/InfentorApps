const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDNyheczkQ5Eknc6BUgFfiu0xzf-25PxW4",
    authDomain: "infentor.firebaseapp.com",
    projectId: "infentor",
    storageBucket: "infentor.appspot.com",
    messagingSenderId: "914329737495",
    appId: "1:914329737495:web:c2c262742a2fc690d97f52",
    measurementId: "G-DQXW5KX0Y3"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
module.exports = auth;