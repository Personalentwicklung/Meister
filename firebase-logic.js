// firebase-logic.js

// Firebase-Module direkt vom CDN laden (funktioniert ohne Build-Tool!)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Deine Firebase-Konfiguration (aus deinem Screenshot übernommen)
const firebaseConfig = {
  apiKey: "AIzaSyDMaR8xOtpRLPIvLg45OWWD9daFzaw6drY",
  authDomain: "meister-cb996.firebaseapp.com",
  projectId: "meister-cb996",
  storageBucket: "meister-cb996.appspot.com", // ✅ korrigiert: ".app" → ".appspot.com"
  messagingSenderId: "439507090690",
  appId: "1:439507090690:web:e8c504aab17d8096d5561b",
  measurementId: "G-FPYSE0QV7H"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Optional: Diese Funktionen exportieren für direkten Zugriff
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
