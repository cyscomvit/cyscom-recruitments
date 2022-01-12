import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

const db = getFirestore();

