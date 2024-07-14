import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
    projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID ,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ,
    appId:import.meta.env.VITE_FIREBASE_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence).then(
    data => console.log("Setteado en localstorage", data)
).catch (err => console.log("Error al setear la persitencia en local", err))

export {
    db,
    auth
}
