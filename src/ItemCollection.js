import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB_0yCKPbOPOaCdOuv_Q0DyMQfZCS7qsfo",
    authDomain: "daniel-gamesapp.firebaseapp.com",
    projectId: "daniel-gamesapp",
    storageBucket: "daniel-gamesapp.appspot.com",
    messagingSenderId: "498135505875",
    appId: "1:498135505875:web:a9c00ef4eb87d0a43e6d26"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);