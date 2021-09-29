import firebase from 'firebase/compat/app'
import  'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "firebase api key",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()
  const storage=firebase.storage()
  const timestamp=firebase.firestore.FieldValue.serverTimestamp()

  export {db,auth,provider,storage,timestamp}