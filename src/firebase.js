// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMdQdMZNuXKs5dMKpy-vEG1ieZCsn-Xdg",
  authDomain: "aplicacion-2d6d3.firebaseapp.com",
  databaseURL: "https://aplicacion-2d6d3-default-rtdb.firebaseio.com",
  projectId: "aplicacion-2d6d3",
  storageBucket: "aplicacion-2d6d3.appspot.com",
  messagingSenderId: "873430431034",
  appId: "1:873430431034:web:6df7e85311fee210fd4c03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};


