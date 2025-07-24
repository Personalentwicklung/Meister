// firebase-logic.js
// Dies ist eine JavaScript-Datei, die Firebase initialisiert und Module exportiert.

// Importe der Firebase SDKs.
// Wir verwenden hier die 'compat'-Versionen für einfachere Integration.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";


const firebaseConfig = {
    apiKey: "AIzaSyDMaR8xOtpRLPIvLg45OWWD9daFzaw6drY",
    authDomain: "meister-cb996.firebaseapp.com",
    projectId: "meister-cb996",
    storageBucket: "meister-cb996.firebasestorage.app",
    messagingSenderId: "439507090690",
    appId: "1:439507090690:web:e8c504aab17d8096d5561b",
    measurementId: "G-FPYSE0QV7H"
  };

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Diese Firebase-Module und Funktionen exportieren, damit sie in anderen Dateien (wie index.html oder main.html) verwendet werden können
export { 
  auth, 
  db, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail,
  doc, 
  setDoc, 
  getDoc 
};
