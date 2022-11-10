import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBNny9fyNlCyhpXoeFO8qyHwF7gvWmWGL8",
    authDomain: "vue-blog-system-c85a0.firebaseapp.com",
    projectId: "vue-blog-system-c85a0",
    storageBucket: "vue-blog-system-c85a0.appspot.com",
    messagingSenderId: "1059979810789",
    appId: "1:1059979810789:web:fb904ce914efb4d237010c"
  };

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()
// let auth = getAuth();
const auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    db,
    timestamp,
    auth
}