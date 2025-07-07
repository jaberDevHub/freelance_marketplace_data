// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "freelance-marketplace-data.firebaseapp.com",
  projectId: "freelance-marketplace-data",
  storageBucket: "freelance-marketplace-data.firebasestorage.app",
  messagingSenderId: "182968292485",
  appId: "1:182968292485:web:4b74391980700bb957c5ec",
  measurementId: "G-39N8S0HJN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;