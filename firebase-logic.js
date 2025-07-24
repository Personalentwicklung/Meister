// firebase-logic.js
// Dies ist eine JavaScript-Datei, die Firebase initialisiert und Module exportiert.

// Importe der Firebase SDKs.
// Wir verwenden hier die 'compat'-Versionen für einfachere Integration.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";


// Deine Firebase-Konfiguration hier einfügen
// DIESE WERTE MUSST DU MIT DEINEN EIGENEN AUS DER FIREBASE-KONSOLE ERSETZEN!
// Du findest sie in deiner Firebase-Konsole unter "Projekteinstellungen" -> "Deine Apps" -> "Web-App".
const firebaseConfig = {
  apiKey: "DEIN_API_KEY", // <--- ERSETZE DIES!
  authDomain: "DEIN_AUTH_DOMAIN", // <--- ERSETZE DIES!
  projectId: "DEIN_PROJECT_ID", // <--- ERSETZE DIES!
  storageBucket: "DEIN_STORAGE_BUCKET", // <--- ERSETZE DIES!
  messagingSenderId: "DEIN_MESSAGING_SENDER_ID", // <--- ERSETZE DIES!
  appId: "DEIN_APP_ID", // <--- ERSETZE DIES!
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