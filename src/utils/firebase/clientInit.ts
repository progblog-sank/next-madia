// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIpXt9GDpENHU_dlB7LdqZjGBfPHMJT08",
  authDomain: "relay-koreyomi.firebaseapp.com",
  projectId: "relay-koreyomi",
  storageBucket: "relay-koreyomi.appspot.com",
  messagingSenderId: "293517218270",
  appId: "1:293517218270:web:d5f015412b3a375f0acd4f",
  measurementId: "G-8YENHNKXR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);