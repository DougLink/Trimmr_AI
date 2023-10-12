// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const FirebaseKey = import.meta.env.VITE_FIREBASE_KEY;
const AuthDomain = import.meta.env.VITE_FIREBASE_DOMAIN;
const ProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const StorageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const MessagingSenderId = import.meta.env.VITE_FIREBASE_SENDER_ID;
const AppId = import.meta.env.VITE_FIREBASE_MESSAGING_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FirebaseKey,
    authDomain: AuthDomain,
    projectId: ProjectId,
    storageBucket: StorageBucket,
    messagingSenderId: MessagingSenderId,
    appId: AppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);