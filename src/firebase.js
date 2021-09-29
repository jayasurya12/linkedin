import firebase from 'firebase/compat/app'
import  'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDbQ5W6VT8yTS7lOcvNerYMKy5pSIlBbBM",
    authDomain: "linkedin-30547.firebaseapp.com",
    projectId: "linkedin-30547",
    storageBucket: "linkedin-30547.appspot.com",
    messagingSenderId: "896372000036",
    appId: "1:896372000036:web:869aee3b3f99e1456a1fb1"
  }

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()
  const storage=firebase.storage()
  const timestamp=firebase.firestore.FieldValue.serverTimestamp()

  export {db,auth,provider,storage,timestamp}