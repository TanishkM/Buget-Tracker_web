import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCP37xXp2zL25cdzv4ZNoktWOSBptZnNo0",
  authDomain: "login-97d25.firebaseapp.com",
  projectId: "login-97d25",
  storageBucket: "login-97d25.appspot.com",
  messagingSenderId: "899847717708",
  appId: "1:899847717708:web:8e88660469a510e465c5e9"
  };
  export const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)
  export const db= getFirestore(app)