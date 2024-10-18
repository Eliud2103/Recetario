// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByJ0R9zUwvdLJ8fntgCmkqRxdFacRXKWo",
  authDomain: "recetario-5fcf5.firebaseapp.com",
  projectId: "recetario-5fcf5",
  storageBucket: "recetario-5fcf5.appspot.com",
  messagingSenderId: "193879313469",
  appId: "1:193879313469:web:ebe9a6338798e185f2ee54",
  measurementId: "G-C8HW1MQM89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);