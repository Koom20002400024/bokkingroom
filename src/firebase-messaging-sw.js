// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyAkehytNrQnEdT0fr4SW_iRQ7v78HcTKn0",
  authDomain: "environmentmenager.firebaseapp.com",
  databaseURL: "https://environmentmenager.firebaseio.com/",
  projectId: "environmentmenager",
  storageBucket: "environmentmenager.appspot.com",
  messagingSenderId: "1079166000567",
  appId: "1:1079166000567:web:9c16473234f3f1b6cd9c32",
  measurementId: "G-096R1SBD2T"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
