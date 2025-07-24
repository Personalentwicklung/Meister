// firebase-logic.js
// Dieses Modul lädt die Firebase Compat-Bibliotheken und exportiert die auth- und db-Dienste.

// Wichtige Änderung: Wir verwenden KEINEN "import firebase from ..." mehr.
// Die compat-Bibliotheken werden einfach geladen (import "...") und machen das globale 'firebase'-Objekt verfügbar.
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";


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

// Firebase App initialisieren
// Das 'firebase'-Objekt ist nun global verfügbar, nachdem firebase-app-compat.js geladen wurde.
const app = firebase.initializeApp(firebaseConfig);

// Auth- und Firestore-Dienste von der initialisierten App abrufen
const auth = app.auth();
const db = app.firestore();

// Die 'auth' und 'db' Objekte exportieren
export {
  auth,
  db
};
