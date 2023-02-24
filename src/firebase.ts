
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
    apiKey: "AIzaSyAZFLOTciFfRhxdoVUkTmqbaInQtXMLZ28",
    authDomain: "cetsmertip.firebaseapp.com",
    projectId: "cetsmertip",
    storageBucket: "cetsmertip.appspot.com",
    messagingSenderId: "226841120416",
    appId: "1:226841120416:web:cdea93e4a77dbb1f9b83c5",
    measurementId: "G-TKQ0G71JS2"
};
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)