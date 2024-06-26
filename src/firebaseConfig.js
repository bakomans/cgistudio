// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAsnzZGn4_LgwT4v3QzS0nLytHqFd7wSUs",
  authDomain: "cgis-31f51.firebaseapp.com",
  projectId: "cgis-31f51",
  storageBucket: "cgis-31f51.appspot.com",
  messagingSenderId: "384793963223",
  appId: "1:384793963223:web:babeea558044e6724d5e92",
  measurementId: "G-DJ43XB7MTJ",
  databaseURL: "https://cgis-31f51-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
