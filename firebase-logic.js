// firebase-logic.js

// Firebase SDK von CDN (funktioniert direkt im Browser)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";


// Deine Firebase-Konfiguration
// Die Werte sind korrekt aus deinem vorherigen Beitrag übernommen.
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

// Firebase-Dienste initialisieren
const auth = getAuth(app);
const db = getFirestore(app);

// Optional: Auth-Funktionen direkt exportieren (falls du willst)
export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  doc,
  getDoc,
  setDoc
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);

// Firebase-Dienste initialisieren
const auth = getAuth(app);
const db = getFirestore(app);

// Optional: Auth-Funktionen direkt exportieren (falls du willst)
export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  doc,
  getDoc,
  setDoc
};
