// firebase-logic.js
// Dies ist eine JavaScript-Datei, die Firebase initialisiert und Dienste exportiert.

// Wichtige Änderung: Wir importieren jetzt das Haupt-Firebase-Objekt als "firebase"
// und laden die anderen Bibliotheken nur, damit sie verfügbar sind.
import firebase from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"; // Lädt die Auth-Funktionalität
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"; // Lädt die Firestore-Funktionalität


// Deine Firebase-Konfiguration hier einfügen
// WICHTIG: Deine API-Keys etc. sind in diesem Codeausschnitt korrekt.
// Stelle sicher, dass du diese Werte in die NEUE Version des Codes kopierst.
const firebaseConfig = {
  apiKey: "AIzaSyDMaR8xOtpRLPIvLg45OWWD9daFzaw6drY", // Dein korrekter Key
  authDomain: "meister-cb996.firebaseapp.com",     // Deine korrekte Domain
  projectId: "meister-cb996",                     // Deine korrekte Project ID
  storageBucket: "meister-cb996.firebasestorage.app",
  messagingSenderId: "439507090690",
  appId: "1:439507090690:web:e8c504aab17d8096d5561b",
  measurementId: "G-FPYSE0QV7H"
};

// Firebase initialisieren
const app = firebase.initializeApp(firebaseConfig);

// Dienste von der initialisierten App abrufen
// Wichtige Änderung: Zugriff auf .auth() und .firestore() über das 'app'-Objekt
const auth = app.auth(); 
const db = app.firestore(); 


// Diese Dienste exportieren, damit sie in anderen Dateien verwendet werden können
// Wichtige Änderung: Wir exportieren NUR noch die 'auth' und 'db' Objekte
export {
  auth,
  db
};
