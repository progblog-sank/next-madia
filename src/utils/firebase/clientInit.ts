import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAIpXt9GDpENHU_dlB7LdqZjGBfPHMJT08",
  authDomain: "relay-koreyomi.firebaseapp.com",
  projectId: "relay-koreyomi",
  storageBucket: "relay-koreyomi.appspot.com",
  messagingSenderId: "293517218270",
  appId: "1:293517218270:web:d5f015412b3a375f0acd4f",
  measurementId: "G-8YENHNKXR8"
};
const app = initializeApp(firebaseConfig);

export default app;