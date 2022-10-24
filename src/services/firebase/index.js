import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA-y9-E4_L9_IcXVJWtIDYorvRE4RJ1Q3E",
  authDomain: "backend-ecommerce-44cfa.firebaseapp.com",
  projectId: "backend-ecommerce-44cfa",
  storageBucket: "backend-ecommerce-44cfa.appspot.com",
  messagingSenderId: "301119266754",
  appId: "1:301119266754:web:6b1bd28d8ea82635b6005b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)