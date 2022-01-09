// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"





const firebaseApp  =initializeApp ({
  apiKey: "AIzaSyAcFunwwS0kNU7gwyfyvARVEUM8Z38YJR4",
  authDomain: "sakthi-968e3.firebaseapp.com",
  projectId: "sakthi-968e3",
  storageBucket: "sakthi-968e3.appspot.com",
  messagingSenderId: "802211855903",
  appId: "1:802211855903:web:e65e306e1c013c5c79df2a",
  measurementId: "G-W62XDZYH9R"
}); 
const db = getFirestore();
export default db