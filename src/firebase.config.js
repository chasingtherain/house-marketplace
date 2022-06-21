import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsG50S-dmdTZQmKBMwGIetDgvDmHO_E-Q",
  authDomain: "house-marketplace-app-92209.firebaseapp.com",
  projectId: "house-marketplace-app-92209",
  storageBucket: "house-marketplace-app-92209.appspot.com",
  messagingSenderId: "72939355092",
  appId: "1:72939355092:web:e24cac1efe19dff682f441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()