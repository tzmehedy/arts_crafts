// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.Vite_apiKey,
  authDomain: import.meta.env.Vite_authDomain,
  projectId: import.meta.env.Vite_projectId,
  storageBucket: import.meta.env.Vite_storageBucket,
  messagingSenderId: import.meta.env.Vite_messagingSenderId,
  appId: import.meta.env.Vite_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth


